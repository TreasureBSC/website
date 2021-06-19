import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import treasureHeader from '../Images/treasureHeader.png';
import whitepaper from "../Assets/litepaper.pdf";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const contract = this.props.data.contract;


    return (
      <header id="home">
        <ParticlesBg
            className="particles-bg-canvas-self"
            type="polygon"
        />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Treasure
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Roadmap
              </a>
            </li>

            <li>
              <a href={whitepaper} target="_blank">
                Litepaper
              </a>
            </li>

          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>

              <h1 className="responsive-headline">
                <img src={treasureHeader} width="50%" alt="logo"/></h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <Fade bottom duration={1200}>
              <a className="contract-address">0x3f990f0340ac7f4fc6fe5676bbb938d88aa30965</a>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="https://poocoin.app/tokens/0x3f990f0340ac7f4fc6fe5676bbb938d88aa30965" target="_blank" className="button btn chart-btn">
                  <i className="fa fa-bar-chart-o"></i>Poocoin
                </a>
                <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x3f990F0340ac7f4FC6FE5676bBB938d88Aa30965" target="_blank" className="button btn buynow-btn">
                  <i className="fa fa-credit-card"></i>Pancakeswap
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
