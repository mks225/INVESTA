import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5 text-center text-muted">
          <img
            src="/assets/nithinKamath.jpg"
            alt="nithinKamath.jpg"
            className="mb-5 mt-5"
            style={{ borderRadius: "50%", width: "60%" }}
          />
          <h3 className="fs-4">Nithin Kamath</h3>
          <p>Founder, CEO</p>
        </div>
        <div className="col-5 text-muted fs-5" >
          <p className="mt-5 ">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on 
            <a href="" style={{textDecoration : "none"}}> Homepage </a>  
            /<a href="" style={{textDecoration : "none"}}> TradingQnA </a> 
            / <a href="" style={{textDecoration : "none"}}> Twitter </a>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Team;
