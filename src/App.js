import React from "react";

import Card from "./Card";

import "./app.scss";

class App extends React.Component {
  state = {
    courses: [],
    loading: true
  };

  componentDidMount() {
    fetch("http://api.myjson.com/bins/nxp6l")
      .then(res => res.json())
      .then(res => this.setState({ courses: res, loading: false }));
  }

  render() {
    return (
      <div className="app">
        {this.state.loading ? (
          <div className="loader"></div>
        ) : (
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
                      <div className="content__description">{description}</div>
                    </div>
                    <div className="course-progress">
                      <div className="d-flex">
                        <div className="status">
                          {progress === 0
                            ? "not started"
                            : progress + "% completed"}
                        </div>
                        <div className="actions"></div>
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
                    <button className="btn" onClick={() => alert(`${title}`)}>
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
        )}
      </div>
    );
  }
}

export default App;
