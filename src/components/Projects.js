import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      Survival: {
        title: "survival",
        desc:
          "A 2D game where you are stranded in the wild, and your only hope is to survive long enough to be rescued!",
        techStack: "C++, OpenGL",
        link: "https://github.com/doublejvargas/SurvivalC",
        open: "https://youtu.be/xuT7JldzAmY",
        image: "/assets/survival_resized.png"
      },
      Skins: {
        title: "skins",
        desc:
          "A replication of your typical FPS weapon customization menu.",
        techStack: "C++, OpenGL, Blender, ImGUI",
        link: "https://github.com/doublejvargas/Skins",
        open: "https://youtu.be/O1ruVOhpR78",
        image: "/assets/skins_resized.png"
      },
      "Kinnect": {
        title: "kinnect",
        desc:
          "A multi-player game meant to connect you with others and solve puzzles",
        techStack: "REACT Native, REACT.JS, Expo CLI, Firebase",
        link: "https://github.com/doublejvargas/Kinnect",
        open: "https://youtu.be/ftHfntNH59M",
        image: "/assets/kinnect_resized.png"
      }
    };
    const projects = {
      "olcNes": {
        desc:
          "Emulating the system architecture of a NES! (in progress).",
        techStack: "C++, olcPixelGameEngine",
        link: "https://github.com/doublejvargas/olcNES" //TODO add images demo
        //open: ""
      },
      "Active Teaming System": {
        desc:
          "Engineering school project, an online platform to form teams and work on projects.",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/doublejvargas/Active-Teaming-System" //TODO add images demo
        //open: ""
      },
      "3D Renderer": {
        desc:
          "A 3D rendering engine capable of rendering any .obj model and useful for game-making.",
        techStack: "Java, Lightweight Java Gaming Library (LWJGL)",
        link:
          "https://github.com/doublejvargas/3D-Renderer" //TODO add images demo
          //open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
