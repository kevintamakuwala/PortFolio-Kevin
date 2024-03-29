import React from "react";
import "./projects.css";
import { projects } from "./../../data";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div
        className="projects__container"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <h2>
          <AiOutlineFundProjectionScreen />
          Projects
        </h2>

        <div className="projects_container">
          <div className="news_hor__container">
            {projects.map(
              ({ name, title, desc, tech, github, demo }, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    key={index}
                  >
                    <figure className="news_hor">
                      <img src={require(`./../../images/${name}.png`)} alt="" />
                      <div className="figcaption__container">
                        <figcaption>
                          <div className="title-projects">
                            <h1>{title}</h1>
                            <div className="tech-stack">
                              {tech.map((tech, ind) => {
                                return (
                                  <button key={ind} id="button">
                                    {tech}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                          <p>{desc}</p>

                          <div className="project-links__container">
                            <div className="projects_links" id="link1">
                              <a
                                href={github}
                                style={{
                                  height: "100%",
                                  width: "100%",
                                }}
                                target="__blank"
                              >
                                Github
                              </a>
                            </div>
                            <div className="projects_links" id="link2">
                              <a
                                href={demo}
                                style={{
                                  height: "100%",
                                  width: "100%",
                                }}
                                target="__blank"
                              >
                                Demo
                              </a>
                            </div>
                          </div>
                          <footer></footer>
                        </figcaption>
                      </div>
                    </figure>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
