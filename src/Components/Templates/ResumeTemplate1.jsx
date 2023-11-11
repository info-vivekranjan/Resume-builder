import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../ResumeBuilder.css";
import { Divider } from "@mui/material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import ExtensionIcon from "@mui/icons-material/Extension";
import { Stack } from "@mui/system";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
const ResumeTemplate1 = (props) => {
  const {
    query,
    titleColor,
    addEducation,
    addWorkExperience,
    addProjectData,
    addSkill,
    getStringAfterDotCom,
  } = props;
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ p: "10px" }}>
          <h1 className="nameHead" style={{ color: titleColor }}>
            {query?.name || "Name"}
          </h1>
          <h4 className="jobTitleClass" style={{ color: titleColor }}>
            {query?.jobtitle || "Job Title"}
          </h4>
        </Grid>
        <Grid item xs={8} sx={{ p: "10px" }}>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            className="subHeadingStack"
            sx={{ color: titleColor }}
          >
            <TrackChangesIcon />
            <Typography className="subHeadingsTitle" variant="body1">
              <b>CAREER OBJECTIVE</b>
            </Typography>
          </Stack>
          <Divider />
          <Typography style={{ fontSize: "14px" }}>
            {query?.description ||
              "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            className="subHeadingStack"
            sx={{ color: titleColor }}
          >
            <EngineeringIcon />
            <Typography className="subHeadingsTitle" variant="body1">
              <b>PROJECTS</b>
            </Typography>
          </Stack>

          <Divider />
          <>
            {addProjectData.map((item) => {
              return (
                <Box className="workexBox">
                  {item.projectTitle && <h4>{item.projectTitle}</h4>}
                  {item.projectBody && <small>{item.projectBody}</small>}
                  <ul style={{ fontSize: "14px" }}>
                    {item.projectDescriptionList1 && (
                      <li>{item.projectDescriptionList1}</li>
                    )}
                    {item.projectDescriptionList2 && (
                      <li>{item.projectDescriptionList2}</li>
                    )}
                    {item.projectDescriptionList3 && (
                      <li>{item.projectDescriptionList3}</li>
                    )}
                  </ul>
                </Box>
              );
            })}
          </>

          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            className="subHeadingStack"
            sx={{ color: titleColor }}
          >
            <WorkHistoryIcon />
            <Typography className="subHeadingsTitle" variant="body1">
              <b>WORK EXPERIENCE</b>
            </Typography>
          </Stack>

          <Divider />
          <>
            {addWorkExperience.map((item) => {
              return (
                <Box className="workexBox">
                  {item.workDesignationAndCompany && (
                    <h4 style={{ lineHeight: "0px" }}>
                      {item.workDesignationAndCompany}
                    </h4>
                  )}
                  {item.workProfile && (
                    <h5 style={{ lineHeight: "0px" }}>{item.workProfile}</h5>
                  )}
                  {item.workPeriod && (
                    <small style={{ lineHeight: "0px" }}>
                      {item.workPeriod}
                    </small>
                  )}
                  <ul style={{ fontSize: "14px" }}>
                    {item.workDescriptionList1 && (
                      <li>{item.workDescriptionList1}</li>
                    )}
                    {item.workDescriptionList2 && (
                      <li>{item.workDescriptionList2}</li>
                    )}
                    {item.workDescriptionList3 && (
                      <li>{item.workDescriptionList3}</li>
                    )}
                  </ul>
                </Box>
              );
            })}
          </>
        </Grid>
        <Grid item xs={4} sx={{ p: "10px" }}>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            className="subHeadingStack"
            sx={{ color: titleColor }}
          >
            <EmailIcon />
            <Typography className="subHeadingsTitle" variant="body1">
              <b>CONTACT</b>
            </Typography>
          </Stack>
          <Divider />
          <Typography style={{ fontSize: "14px" }}>
            {query?.location || "Location"}
          </Typography>
          <Typography style={{ fontSize: "14px" }}>
            {query?.phone || "Phone"}
          </Typography>
          <Typography style={{ fontSize: "14px" }}>
            {(query?.email && (
              <>
                <a
                  href={`mailto:${query?.email}`}
                  target="_blank"
                  style={{ color: titleColor }}
                >
                  {query?.email}
                </a>
              </>
            )) ||
              "Email"}
          </Typography>
          <Typography style={{ fontSize: "14px" }}>
            {(query?.github && (
              <>
                Github :{" "}
                <a
                  href={query?.github}
                  target="_blank"
                  style={{ color: titleColor }}
                >
                  {getStringAfterDotCom(query?.github)}
                </a>
              </>
            )) ||
              "Github"}
          </Typography>
          <Typography style={{ fontSize: "14px" }}>
            {(query?.linkedIn && (
              <>
                LinkedIn :{" "}
                <a
                  href={query?.linkedIn}
                  target="_blank"
                  style={{ color: titleColor }}
                >
                  {getStringAfterDotCom(query?.linkedIn)}
                </a>
              </>
            )) ||
              "LinkedIn"}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            className="subHeadingStack"
            sx={{ color: titleColor }}
          >
            <SchoolIcon />
            <Typography className="subHeadingsTitle" variant="body1">
              <b>EDUCATION</b>
            </Typography>
          </Stack>
          <Divider />
          <>
            {addEducation.map((item) => {
              return (
                <Box className="educationBox">
                  {item.course && <h4>{item.course}</h4>}
                  {item.institute && <p>{item.institute}</p>}
                  {item.coursePeriod && <small>{item.coursePeriod}</small>}
                </Box>
              );
            })}
          </>

          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            className="subHeadingStack"
            sx={{ color: titleColor }}
          >
            <ExtensionIcon />
            <Typography className="subHeadingsTitle" variant="body1">
              <b>SKILLS</b>
            </Typography>
          </Stack>
          <Divider />
          <ul style={{ fontSize: "14px" }}>
            {addSkill.map((item) => {
              return <>{item.skill && <li>{item.skill}</li>}</>;
            })}
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default ResumeTemplate1;
