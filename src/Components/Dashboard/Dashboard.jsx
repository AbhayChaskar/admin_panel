import React from "react";
import "./Dashboard.css";
import Info from "../../../Api/info.json";
import Card from "../Card/Card";

const Dashboard = () => {
  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
          {/* {Info.cards?.map((card) => (
              <div className="col-lg-6" key={card.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">Amount: {card.amount}</p>
                    <p className="card-text">
                      Change: {card.percentage * 100}%
                    </p>
                    <i className={card.icon}></i>
                  </div>
                </div>
              </div>
            ))} */}
            {
              Info.cards?.map(card => <Card key={card.id} card={card} />)
            }
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </section>
  );
};

export default Dashboard;
