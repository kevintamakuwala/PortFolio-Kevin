import React from "react";
import { ReactComponent as WorkIcon } from "./../../images/work.svg";
import { ReactComponent as SchoolIcon } from "./../../images/school.svg";
import { BsGraphUpArrow } from "react-icons/bs";
import { timelineElements } from "./../../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className="experience__container"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <h2 className="experience-title">
          <BsGraphUpArrow />
          <div>Experience</div>
        </h2>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <div id="description">
                  {element.description.map((ele, index) => {
                    return (
                      <ol key={index}>
                        <li
                          style={{
                            margin: "1em 0 0 0",
                            padding: "0 0",
                            listStyleType: "disc",
                          }}
                        >
                          {ele}
                        </li>
                      </ol>
                    );
                  })}
                </div>
                <p id="description2">
                  <i>{element.description2}</i>
                </p>
                {showButton && (
                  <a
                    className={`experience-button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    id="link1"
                    href={element.link}
                    target="_blank"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
