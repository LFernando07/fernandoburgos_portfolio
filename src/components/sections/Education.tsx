import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { schools } from "../../constants";
import { SectionWrapper } from "../../hooks";
import { Header } from "../atoms/Header";
import { TEducation } from "../../types";
import { config } from "../../constants/config";

const SchoolCard: React.FC<TEducation> = (school) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={school.dateRange}
      iconStyle={{ background: school.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={school.icon}
            alt={school.title}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{school.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {school.title}
        </p>
      </div>

      <div>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ marginTop: 20 }}
        >
          {school.subject}
        </p>
        <ul className="ml-5 mt-5 list-disc space-y-2">
          {school.achievements.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 pl-1 text-[14px] tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.education} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {schools.map((school, index) => (
            <SchoolCard key={index} {...school} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
