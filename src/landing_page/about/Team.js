import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 border-top">
        <h1 className="fs-2 mt-5 text-center ">
          People
        </h1>
      </div>
      <div
        className="row"
        style={{ lineHeight: "1.5", fontSize: "1.2em" }}
      >
        <div className="col-6 text-center">
          <img src="media\images\nithinKamath.jpg" style={{borderRadius:"100%", width:"50%"}}/>
          <h4 className="mt-5">nithin Kamath</h4>
          <h6 className="mb-5">Founder, CEO</h6>
        </div>
        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            <br />
            <br />
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            <br />
            <br />
            Playing basketball is his zen.
            <br />
            <br />
            Connect on <a href="" style={{ textDecoration: "none" }}>Homepage</a> / <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> / <a href="" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
