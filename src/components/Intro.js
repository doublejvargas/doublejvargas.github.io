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
          <div className="intro-subtitle">I like 3D graphics and video games.</div>
          <div className="intro-desc">
            I'm a software engineer based in Dayton, Ohio who is interested in
            graphics programming, game engines and game development. I also like C++.
          </div>
          <a
            href="mailto:doublejvargas@gmail.com"
            className="intro-contact"
          >
            <SendIcon></SendIcon>
            {"  " + " Let's talk!"}
          </a>
          <a
            href="https://drive.google.com/file/d/1ZZlEU-IbbHqe8IUiM0EIIxv92NkllBdo/view?usp=drive_link"
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
