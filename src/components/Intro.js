import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import SendIcon from '@mui/icons-material/Send';
import DescriptionIcon from '@mui/icons-material/Description';
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
          <div className="intro-subtitle">I like c++ and 3d graphics.</div>
          <div className="intro-desc">
            i'm a software engineer based in Ohio who is interested in c++ and
            graphics programming. i also like game development.
          </div>
          <a
            href="mailto:vargaspool.js@gmail.com"
            className="intro-contact"
          >
            <SendIcon></SendIcon>
            {"  " + " Let's talk!"}
          </a>
          <a
            href="https://drive.google.com/file/d/1eY9gUDqXs-vvL-HiC2nleGNc7ZI5_Nd7/view"
            className="intro-contact"
          >
            <DescriptionIcon></DescriptionIcon>
            {"  " + "Resume"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
