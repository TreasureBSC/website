import React, { Component } from "react";
import Fade from "react-reveal";
import treasureTlogo from '../Images/treasureTlogo.png';
import whitepaper from "../Assets/litepaper.pdf";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const bio = this.props.data.bio;
    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={treasureTlogo}
                alt="Treasure Logo"
              />
            </div>
            <div className="nine columns main-col">
              <h2>What is the Treasure token?</h2>

              <p>{bio}</p>
              <div className="row">

                <div className="columns contact-details">
                  <h2><i className="fa fa-check-square" /> Fair Launched</h2>
                  <h2><i className="fa fa-check-square" /> Liquidity Locked</h2>
                  <h2><i className="fa fa-check-square" /> Ownership Renounced</h2>
                  <h2><i className="fa fa-check-square" /> 100% Community Owned</h2>
                  <h2><i className="fa fa-check-square" /> No Team Tokens</h2>
                </div>
                <div className="columns download">
                  <p>
                    <a href={whitepaper} target="_blank" className="button btn whitepaper-btn">
                      <i className="fa fa-book"></i>View Litepaper
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
