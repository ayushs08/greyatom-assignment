import React from "react";

import Card from "./Card";

import "./app.scss";

class App extends React.Component {
  state = {
    courses: [
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel sequi reiciendis possimus officiis aliquid ab? Dignissimos, quidem laboriosam saepe quasi totam repellendus ducimus harum eum, voluptas eius non eos?",
        progress: 40
      },
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        progress: 40
      },
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel sequi reiciendis possimus officiis aliquid ab? Dignissimos, quidem laboriosam saepe quasi totam repellendus ducimus harum eum, voluptas eius non eos?",
        progress: 40
      },
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel sequi reiciendis possimus officiis aliquid ab? Dignissimos, quidem laboriosam saepe quasi totam repellendus ducimus harum eum, voluptas eius non eos?",
        progress: 40
      },
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel sequi reiciendis possimus officiis aliquid ab? Dignissimos, quidem laboriosam saepe quasi totam repellendus ducimus harum eum, voluptas eius non eos?",
        progress: 40
      },
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel sequi reiciendis possimus officiis aliquid ab? Dignissimos, quidem laboriosam saepe quasi totam repellendus ducimus harum eum, voluptas eius non eos?",
        progress: 40
      }
    ]
  };

  render() {
    return (
      <div className="app">
        <div className="grid">
          {this.state.courses.map(({ img, title, description, progress }) => (
            <Card className="course-card">
              <Card.Header>
                <img src={img} alt="" />
              </Card.Header>
              <Card.Body>
                <div className="content">
                  <div className="content__title">{title}</div>
                  <div className="content__description">{description}</div>
                  <div className="content__progress"></div>
                </div>
              </Card.Body>
              <Card.Footer>
                <button className="btn">
                  {progress === 0
                    ? "start"
                    : progress < 100
                    ? "continue"
                    : "review"}
                </button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
