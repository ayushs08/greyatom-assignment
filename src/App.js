import React from "react";

import Card from "./Card";

import "./app.scss";

class App extends React.Component {
  state = {
    courses: [],
    loading: true,
    sortBy: null,
    sortOrder: null
  };

  sort = this.sort.bind(this);
  sortAfterFilter = this.sortAfterFilter.bind(this);
  filterCourses = this.filterCourses.bind(this);
  sortCourses = this.sortCourses.bind(this);

  componentDidMount() {
    fetch("https://api.myjson.com/bins/nxp6l")
      .then(res => res.json())
      .then(res =>
        this.setState({ courses: res, originalResponse: res, loading: false })
      );
  }

  sort() {
    switch (this.state.sortOrder) {
      case "asc":
      default:
        this.setState({
          courses: this.state.courses.sort(
            (a, b) => a[this.state.sortBy] > b[this.state.sortBy]
          )
        });
        return;
      case "desc":
        this.setState({
          courses: this.state.courses.sort(
            (a, b) => a[this.state.sortBy] < b[this.state.sortBy]
          )
        });
        return;
    }
  }

  sortAfterFilter() {
    if (this.state.sortBy && this.state.sortOrder) this.sort();
  }

  filterCourses(event) {
    switch (event.target.value) {
      case "all":
      default:
        this.setState(
          { courses: this.state.originalResponse },
          this.sortAfterFilter
        );
        break;
      case "completed":
        this.setState(
          {
            courses: this.state.originalResponse.filter(
              item => item.progress === 100
            )
          },
          this.sortAfterFilter
        );
        break;
      case "not_completed":
        this.setState(
          {
            courses: this.state.originalResponse.filter(
              item => item.progress > 0 && item.progress < 100
            )
          },
          this.sortAfterFilter
        );
        break;
      case "not_started":
        this.setState(
          {
            courses: this.state.originalResponse.filter(
              item => item.progress === 0
            )
          },
          this.sortAfterFilter
        );
        break;
    }
  }

  sortCourses(event) {
    this.setState(
      { sortOrder: event.target.value },
      () => this.state.sortBy && this.sort()
    );
  }

  render() {
    return (
      <div className="app">
        {this.state.loading ? (
          <div className="loader"></div>
        ) : (
          <React.Fragment>
            <div className="filters">
              <select
                name="filter"
                id="filter"
                defaultValue=""
                onChange={this.filterCourses}
              >
                <option value="" disabled>
                  Filter
                </option>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not_completed">Not Completed</option>
                <option value="not_started">Not Started</option>
              </select>
              <select
                name="sortBy"
                id="sortBy"
                defaultValue=""
                onChange={event => {
                  this.setState({ sortBy: event.target.value }, this.sort);
                }}
              >
                <option value="" disabled>
                  Sort by
                </option>
                <option value="progress">Progress</option>
                <option value="title">Title</option>
              </select>
              {this.state.sortBy && (
                <select
                  name="order"
                  id="order"
                  defaultValue=""
                  onChange={this.sortCourses}
                >
                  <option value="" disabled>
                    Order
                  </option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              )}
            </div>
            {this.state.courses.length > 0 ? (
              <div className="grid">
                {this.state.courses.map(
                  ({ image, title, description, progress }, index) => (
                    <Card className="course-card" key={index}>
                      <Card.Header>
                        <div className="ratio-container a24by9">
                          <img src={image} alt="" />
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <div className="content">
                          <div className="content__title">{title}</div>
                          <div className="content__description">
                            {description}
                          </div>
                        </div>
                        <div className="course-progress">
                          <div className="d-flex">
                            <div className="status">
                              {progress === 0
                                ? "not started"
                                : progress + "% completed"}
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress__bar"
                              style={{ width: progress + "%" }}
                            ></div>
                          </div>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <button
                          className="btn"
                          onClick={() => alert(`${title}`)}
                        >
                          {progress === 0
                            ? "start"
                            : progress < 100
                            ? "continue"
                            : "review"}
                        </button>
                      </Card.Footer>
                    </Card>
                  )
                )}
              </div>
            ) : (
              <h1>No courses found</h1>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
