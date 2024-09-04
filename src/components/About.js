import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        In my last role as a <b>Volunteer C++ Developer</b> at
        <a href="https://www.wwiionline.com/about-the-game-team#the-team"> Cornered Rat Software</a>, I worked on their title:
        World War II Online. I was part of the team of developers that focused on the client-side
        of the game, implementing new game features and improving already-existing ones.
      </p>
    );
    const two = (
      <p>
        Outside of work, I like to play Valorant, work out,
        and play the guitar.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:doublejvargas@gmail.com">
          vargaspool.j@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "C++",
      "Java",
      "OpenGL / SDL2",
      "Unreal Engine 4 & 5",
      "Visual Studio",
      "MySQL"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I worked with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me2.JPG"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
