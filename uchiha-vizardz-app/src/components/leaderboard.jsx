import React, { Components } from "react";

const Card = () => {
  return (
    <section id="#LEADER">
      <div className="container">
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img
                src="./images/MiniPEKKACard.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Chayo</h5>
                <p class="card-text">
                  Liderando el clan con la cantidad de 4387 coronas
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Ultima actualizacion hace 3 minutos
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
