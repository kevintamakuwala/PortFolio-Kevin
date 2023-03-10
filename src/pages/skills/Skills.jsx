import React from "react";
import "./skills.css";
import { skills } from "../../data";
import { GiCutDiamond } from "react-icons/gi";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
export const Skills = () => {
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
        <section
          className="skills skills__container"
          id="skills"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2 className="heading">
            <GiCutDiamond /> Skills &amp; <span>Abilities</span>
          </h2>
          <div
            className="skills_container"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="2500"
          >
            <div className="row">
              {skills.map((skills, index) => {
                return (
                  <>
                    <div
                      className="bar"
                      key={index}
                      data-aos="zoom-in"
                      data-aos-easing="linear"
                      data-aos-duration="15500"
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
      )}
    </>
  );
};
export default Skills;
