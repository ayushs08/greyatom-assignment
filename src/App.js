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
        progress: "40"
      },
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel sequi reiciendis possimus officiis aliquid ab? Dignissimos, quidem laboriosam saepe quasi totam repellendus ducimus harum eum, voluptas eius non eos?",
        progress: "40"
      },
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel sequi reiciendis possimus officiis aliquid ab? Dignissimos, quidem laboriosam saepe quasi totam repellendus ducimus harum eum, voluptas eius non eos?",
        progress: "40"
      },
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel sequi reiciendis possimus officiis aliquid ab? Dignissimos, quidem laboriosam saepe quasi totam repellendus ducimus harum eum, voluptas eius non eos?",
        progress: "40"
      },
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel sequi reiciendis possimus officiis aliquid ab? Dignissimos, quidem laboriosam saepe quasi totam repellendus ducimus harum eum, voluptas eius non eos?",
        progress: "40"
      },
      {
        img: "https://wallpaperaccess.com/full/99807.jpg",
        title: "lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel sequi reiciendis possimus officiis aliquid ab? Dignissimos, quidem laboriosam saepe quasi totam repellendus ducimus harum eum, voluptas eius non eos?",
        progress: "40"
      }
    ]
  };

  render() {
    return (
      <div className="app">
        <div className="grid">
          {this.state.courses.map(course => (
            <Card
              img={course.img}
              title={course.title}
              description={course.description}
              progress={course.progress}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
