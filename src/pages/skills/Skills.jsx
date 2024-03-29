import React from "react";
import "./skills.css";
import { skills } from "../../data";
import { GiCutDiamond } from "react-icons/gi";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
export const Skills = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <section
        className="skills skills__container"
        id="skills"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <h2 className="heading">
          <GiCutDiamond /> Tech Stack
        </h2>
        <div
          className="skills_container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="row">
            {skills.map((skills, index) => {
              return (
                <>
                  <div
                    className="bar"
                    key={index}
                    // data-aos="fade-up"
                    // data-aos-easing="linear"
                    // data-aos-duration="100"
                  >
                    <div className="info">
                      <img src={skills.icon} alt={skills.name} />
                      <span>{skills.name}</span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
