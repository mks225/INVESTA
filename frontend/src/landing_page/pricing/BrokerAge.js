import React from "react";

function BrokerAge() {
  return (
    <div className="container my-5 py-4 border-top">
      <div className="row mb-5 mt-5 ">
        <div className="col-8">
          <a className="  ms-4 fs-4" href="" style={{ textDecoration: "none" }}>
            Brokerage calculator
          </a>
          <ul style={{textAlign : "left" , lineHeight : "2.5" }} className="text-muted fs-6">
            <li style={{fontSize : "13px"}}>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li style={{fontSize : "13px"}} >Digital contract notes will be sent via e-mail.</li>
            <li style={{fontSize : "13px"}} >
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li style={{fontSize : "13px"}} >
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li style={{fontSize : "13px"}} >
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li style={{fontSize : "13px"}} >
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-4">
          <a className=" fs-4" href="" style={{ textDecoration: "none" }}>
            List of Charges
          </a>
        </div>
      </div>
    </div>
  );
}

export default BrokerAge;
