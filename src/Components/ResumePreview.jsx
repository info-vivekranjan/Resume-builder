import React from "react";
import "./ResumeBuilder.css";
import ResumeTemplate0 from "./Templates/ResumeTemplate0";
import ResumeTemplate1 from "./Templates/ResumeTemplate1";

const ResumePreview = (props) => {
  const {
    query,
    titleColor,
    addEducation,
    addWorkExperience,
    addProjectData,
    addSkill,
    selectedTemplate
  } = props;

  let templateComponent;
  switch (selectedTemplate) {
    case "Template1":
      templateComponent = (
        <ResumeTemplate0
          query={query}
          titleColor={titleColor}
          addEducation={addEducation}
          addWorkExperience={addWorkExperience}
          addProjectData={addProjectData}
          addSkill={addSkill}
        />
      );
      break;
      case "Template2":
        templateComponent = (
          <ResumeTemplate1
            query={query}
            titleColor={titleColor}
            addEducation={addEducation}
            addWorkExperience={addWorkExperience}
            addProjectData={addProjectData}
            addSkill={addSkill}
          />
        );
        break;
  
    default:
      templateComponent = (
        <ResumeTemplate0
          query={query}
          titleColor={titleColor}
          addEducation={addEducation}
          addWorkExperience={addWorkExperience}
          addProjectData={addProjectData}
          addSkill={addSkill}
        />
      );
  }

  return <>{templateComponent}</>;
};

export default ResumePreview;
