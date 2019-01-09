import React, { Components } from "react";

const Card = () => {
  return (
    <section id="#CARD" className="cardt">
      <div className="cardt-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                id="carousel-card-top"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-card-top"
                    data-slide-to="0"
                    class="active"
                  />
                  <li data-target="#carousel-card-top" data-slide-to="1" />
                  <li data-target="#carousel-card-top" data-slide-to="2" />
                  <li data-target="#carousel-card-top" data-slide-to="3" />
                  <li data-target="#carousel-card-top" data-slide-to="4" />
                </ol>
              </div>
              <div class="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="./images/baby-dragon.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/baby-dragon.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/baby-dragon.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/baby-dragon.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/baby-dragon.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="##carousel-card-top"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span class="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel-card-top"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
