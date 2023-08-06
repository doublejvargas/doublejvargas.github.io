import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
//import FractalTree from "./FractalTree";
//import FractalSpirograph from "./FractalSpirograph";
import FractalSpirograph2 from "./FractalSpirograph2";

class Intro extends React.Component {
  
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    return (
      <div id="intro">
        <FractalSpirograph2></FractalSpirograph2>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"jose"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I like video games and graphics.</div>
          <div className="intro-desc">
            I'm a software engineer based in New Jersey who is interested in
            graphics programming, game engines and game development. I also like C++.
          </div>
          <a
            href="mailto:doublejvargas@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Let's talk!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
