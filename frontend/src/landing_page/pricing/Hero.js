import React from "react";
import Navbar from "../Navbar";

function Hero() {
    return (
        <div className="container my-5 py-4">
        <div className="text-center mt-5">
            <h1 className="fs-1" style={{fontSize: "larger"}}>Charges</h1>
            <p className="text-muted fs-5">List of all charges and taxes</p>
        </div>     
        <div className="row g-4 mb-5 mt-5">
          <div className="col-4">
            <div className="card h-100 border-0 ">
              <div className="card-body text-center p-4">
                <img
                  src="/assets/pricing-eq-0.svg"
                  alt="Free equity delivery"
                  style={{ width: "70%" }}
                />
                <h3 className="mb-4 fw-bold fs-3">Free equity delivery</h3>
                <p className="text-muted">
                  All equity delivery investments (NSE, BSE), are absolutely free
                  — ₹ 0 brokerage.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div className="card h-100 border-0 ">
              <div className="card-body text-center p-4">
                <img
                  src="/assets/other-trades-20.svg"
                  alt="Intraday and F&O"
                  style={{ width: "70%" }}
                />
                <h3 className="mb-4 fw-bold fs-3"> Intraday and F&O trades </h3>
                <p className="text-muted">
                  Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                  intraday trades across equity, currency, and commodity trades.
                  Flat ₹20 on all option trade.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div className="card h-100 border-0 ">
              <div className="card-body text-center p-4">
                <img
                  src="/assets/pricing0.svg"
                  alt="Free mutual funds"
                  style={{ width: "70%" }}
                />
                <h3 className="mb-4 fw-bold fs-3">Free direct MF</h3>
                <p className="text-muted">
                  All direct mutual fund investments are absolutely free — ₹ 0
                  commissions & DP charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
