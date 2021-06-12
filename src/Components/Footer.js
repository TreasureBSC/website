import React, { Component } from "react";
import Fade from "react-reveal";
import { FaTelegram, FaTwitter, FaGithub } from "react-icons/fa";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">
                <li >
                  <a href='https://twitter.com/TreasureBSC' target='_blank'>
                    <FaTwitter/>
                  </a>
                </li>
                <li >
                  <a href='https://github.com/TreasureBSC' target='_blank'>
                    <FaGithub/>
                  </a>
                </li>
                <li >
                  <a href='https://t.me/TreasureBSC' target='_blank'>
                    <FaTelegram/>
                  </a>
                </li>

              </ul>

              <ul className="copyright">
                <li>&copy; Copyright 2021 TreasureBSC</li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
