import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {

  render() {
    const june2021 =
        <div>
          <p className="info">
            Apply for CoinGecko
          </p>
        </div>;
    const july2021 =
        <div>
          <p className="info">
            Apply for CMC
          </p>
          <p className="info">
            Apply for CMC
          </p>
        </div>;


    return (
      <section id="resume">

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>June 2021</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{june2021}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>July 2021</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{july2021}</div>
              </div>
            </div>
          </div>
        </Slide>

      </section>
    );
  }
}

export default Resume;
