import React from "react";
import "./projects.css";
import { projects } from "./../../data";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";

const Projects = () => {

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2500);
  });

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="projects__container">
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
                      data-aos-duration="1250"
                    >
                      <figure key={index} className="news_hor">
                        <img
                          src={require(`./../../images/${name}.png`)}
                          alt=""
                        />
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
                                <a href={github}>Github</a>
                              </div>
                              <div className="projects_links" id="link2">
                                <a href={demo}>Demo</a>
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
      )}
    </>
  );
};
export default Projects;
