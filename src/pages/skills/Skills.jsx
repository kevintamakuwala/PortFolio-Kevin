import React from "react";
import "./skills.css";
import { skills } from "../../data";
import { GiCutDiamond } from "react-icons/gi";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";

export const Skills = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2500);
  });
  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <section className="skills skills__container" id="skills">
          <h2 className="heading">
            <GiCutDiamond /> Skills &amp; <span>Abilities</span>
          </h2>
          <div className="skills_container">
            <div className="row">
              {skills.map((skills, index) => {
                return (
                  <div className="bar" key={index}>
                    <div className="info">
                      <img src={skills.icon} alt={skills.name} />
                      <span>{skills.name}</span>
                    </div>
                  </div>
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
