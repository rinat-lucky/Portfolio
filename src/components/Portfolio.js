import React from "react";

const Portfolio = () => {
  return (  
    <section className="mt-4">
      <h2>Портфолио</h2>

      <div className="d-flex flex-row mt-3">
        <div className="card" style={{width: '20rem'}}>
          <img src="..." className="card-img-top" alt="вендинговый аппарат" />
          <div className="card-body">
            <h5 className="card-title">Вендинговый аппарат</h5>
            <p className="card-text">Some quick example text.</p>
            <a href="https://vending-machine-rinat.web.app/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{width: '20rem'}}>
          <img src="..." className="card-img-top" alt="rss-агрегатор" />
          <div className="card-body">
            <h5 className="card-title">RSS-агрегатор</h5>
            <p className="card-text">Some quick example text.</p>
            <a href="https://frontend-project-11-three-xi.vercel.app/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
