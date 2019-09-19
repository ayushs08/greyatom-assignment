import React from "react";

export default function Card({ img, title, description, progress }) {
  return (
    <div class="card">
      <div className="card-cover">
        <img src={img} alt="" />
      </div>
      <div className="card-body">
        <div className="content">
          <div className="content__title">{title}</div>
          <div className="content__description">{description}</div>
          <div className="content__progress"></div>
        </div>
      </div>
      <div className="card-footer">
        <button class="btn" onClick={() => alert("sdasdasd")}>
          continue
        </button>
      </div>
    </div>
  );
}
