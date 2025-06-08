import React from "react";
import "../components/flexContainer.css";
import "./mySkills.css";
import { useFloatInOnScroll } from "../components/useFloatInOnScroll";

const SKILLS = [
  { type: "HTML", level: 100 },
  { type: "CSS", level: 100 },
  { type: "JavaScript", level: 90 },
  { type: "React", level: 90 },
  { type: "Node.js", level: 80 },
  { type: "Java", level: 80 },
  { type: "MySQL", level: 100 },
  { type: "Python", level: 100 },
  { type: "SKLearn", level: 80 },
  { type: "C", level: 100 },
  // Add more skills as needed
];

const MySkills = () => {
    const [ref, visible] = useFloatInOnScroll();

    return (
        <div
            ref={ref}
            className={`flex-container float-in${visible ? " visible" : ""}`}
            id="mySkills"
        >
            <div className="flex-box">
                <div className="signpost">
                    <h1>My Skills</h1>
                </div>
            </div>
            <div className="flex-box skills-list">
                {SKILLS.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-label-row">
                            <span className="skill-name">{skill.type}</span>
                            <span className="skill-percent">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-level"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MySkills;