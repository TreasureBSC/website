import React, {Component} from "react";
import Slide from "react-reveal";

class Resume extends Component {

    render() {
        const phase1 =
            <div>
                <p className="info">
                    Website Initial design
                    <br/>
                    <small className="small">Brand new website released and written in ReactJS.</small>
                </p>
                <p className="info">
                    Token Creation
                    <br/>
                    <small className="small">Treasure Token launched on the Binance Smart Chain. 100% community owned and fair launched.</small>
                </p>
                <p className="info">
                    Ownership Renounced & Liquidity Locked
                    <br/>
                    <small className="small">Contract renouncement and ownership transferred to the burn address.</small>
                </p>
                <p className="info">
                    Pancakeswap Listing
                    <br/>
                    <small className="small">List the Treasure token on Pancakeswap.</small>
                </p>
                <p className="info">
                    Contract Audit
                    <br/>
                    <small className="small">Submit a request for Solidity.Finance to audit the contract.</small>
                </p>

            </div>;
        const phase2 =
            <div>
                <p className="info">
                    Logo Redesign
                    <br/>
                    <small className="small">Hire a graphics designer to redesign the Treasure logo with $200 in community-funded donations. Send $BUSD, $BNB, or $TRSR to 0x33e8D9b873EDB0462cBF24f7597281F01Ee16eDB.</small>
                </p>
                <p className="info">
                    Update Top Level Domain
                    <br/>
                    <small className="small">The website will use the domain https://treasurebsc.com (already owned).</small>
                </p>
                <p className="info">
                    CoinGecko
                    <br/>
                    <small className="small">Submit an application for listing.</small>
                </p>
                <p className="info">
                    CoinMarketCap
                    <br/>
                    <small className="small">Submit an application for listing.</small>
                </p>
                <p className="info">
                    BSCScan
                    <br/>
                    <small className="small">Submit logo, website, and socials to BSCScan.</small>
                </p>
                <p className="info">
                    Pancakeswap Logo
                    <br/>
                    <small className="small">Submit logo to Pancakeswap.</small>
                </p>
                <p className="info">
                    TrustWallet Logo
                    <br/>
                    <small className="small">Update logo on TrustWallet.</small>
                </p>
            </div>;

        const phase3 =
            <div>
                <p className="info">
                    Team Scaling
                    <br/>
                    <small className="small">Hire a marketing manager, graphics designers, and software developers.</small>
                </p>
                <p className="info">
                    NFT Concept Design
                    <br/>
                    <small className="small">Create a blueprint and rough draft for a Treasure token NFT marketplace.</small>
                </p>
                <p className="info">
                    Mobile App
                    <br/>
                    <small className="small">Create an iOS and android app to send and receive Treasure tokens from your mobile device.</small>
                </p>
                <p className="info">
                    Partnerships
                    <br/>
                    <small className="small">Find partnerships to use Treasure as a reserve currency.</small>
                </p>
                <p className="info">
                    Treasure Token v2
                    <br/>
                    <small className="small">Develop a new contract with unique, one-of-a-kind tokenomics and airdrop tokens to all holders. The technical whitepaper is already in progress. The name of the project will be voted on by the community.</small>
                </p>
            </div>;


        return (
            <section id="resume">
                <div className="roadmapTitleContainer">
                    <p className="roadmapTitle">Roadmap</p>
                </div>

                <Slide left duration={1300}>
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1>
                                <span>Phase 1</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">{phase1}</div>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide left duration={1300}>
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1>
                                <span>Phase 2</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">{phase2}</div>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide left duration={1300}>
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1>
                                <span>Phase 3</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">{phase3}</div>
                            </div>
                        </div>
                    </div>
                </Slide>

            </section>
        );
    }
}

export default Resume;
