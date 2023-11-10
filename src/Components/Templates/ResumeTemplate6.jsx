import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styles from "./templateCSS/ResumeTemplate6.module.css";
import user from "../../Utils/logos/user.svg";
import EmailIcon from "@mui/icons-material/Email";
import { Stack } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ResumeTemplate4 = (props) => {
  const {
    query,
    titleColor,
    addEducation,
    addWorkExperience,
    addProjectData,
    addSkill,
    getStringAfterDotCom,
    selectedImage,
  } = props;
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ p: "15px", backgroundColor: titleColor }}
        ></Grid>
        <Grid item xs={4} sx={{ p: "10px" }}>
          <Box sx={{ pl: "30px" }}>
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="profile"
                style={{
                  width: "150px",
                  borderRadius: "50%",
                }}
                title="Profile Image"
              />
            ) : (
              <img
                src={user}
                alt="profile"
                style={{ width: "150px" }}
                title="Profile Image"
              />
            )}
          </Box>
          <Box sx={{ pl: "30px" }}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ color: titleColor, mb: "10px", mt: "25px" }}
            >
              <Typography
                sx={{ letterSpacing: "3px", fontWeight: "600" }}
                className="subHeadingsTitle"
                variant="body1"
              >
                CONTACT
              </Typography>
            </Stack>
            <Box sx={{ fontSize: "14px" }}>
              <Stack
                sx={{ fontSize: "14px", p: "5px" }}
                direction="row"
                alignItems="center"
              >
                <LocationOnIcon
                  sx={{
                    mr: "5px",
                    color: "white",
                    backgroundColor: titleColor,
                    width: "30px",
                    height: "30px",
                    padding: "4px",
                    borderRadius: "50%",
                  }}
                />{" "}
                {query?.location || "Location"}
              </Stack>
              <Stack
                sx={{ fontSize: "14px", p: "5px" }}
                direction="row"
                alignItems="center"
              >
                <PhoneAndroidIcon
                  sx={{
                    mr: "5px",
                    color: "white",
                    backgroundColor: titleColor,
                    width: "30px",
                    height: "30px",
                    padding: "4px",
                    borderRadius: "50%",
                  }}
                />{" "}
                {query?.phone || "Phone"}
              </Stack>
              <Stack
                sx={{ fontSize: "14px", p: "5px" }}
                direction="row"
                alignItems="center"
              >
                <EmailIcon
                  sx={{
                    mr: "5px",
                    color: "white",
                    backgroundColor: titleColor,
                    width: "30px",
                    height: "30px",
                    padding: "4px",
                    borderRadius: "50%",
                  }}
                />
                {(query?.email && (
                  <>
                    <a
                      href={`mailto:${query?.email}`}
                      target="_blank"
                      style={{ color: "#000000" }}
                    >
                      {query?.email}
                    </a>
                  </>
                )) ||
                  "Email"}
              </Stack>
              <Stack
                sx={{ fontSize: "14px", p: "5px" }}
                direction="row"
                alignItems="center"
              >
                <GitHubIcon
                  sx={{
                    mr: "5px",
                    color: "white",
                    backgroundColor: titleColor,
                    width: "30px",
                    height: "30px",
                    padding: "4px",
                    borderRadius: "50%",
                  }}
                />
                {(query?.github && (
                  <>
                    <a
                      href={query?.github}
                      target="_blank"
                      style={{ color: "#000000" }}
                    >
                      {getStringAfterDotCom(query?.github)}
                    </a>
                  </>
                )) ||
                  "Github"}
              </Stack>
              <Stack
                sx={{ fontSize: "14px", p: "5px" }}
                direction="row"
                alignItems="center"
              >
                <LinkedInIcon
                  sx={{
                    mr: "5px",
                    color: "white",
                    backgroundColor: titleColor,
                    width: "30px",
                    height: "30px",
                    padding: "4px",
                    borderRadius: "50%",
                  }}
                />
                {(query?.linkedIn && (
                  <>
                    <a
                      href={query?.linkedIn}
                      target="_blank"
                      style={{ color: "#000000" }}
                    >
                      {getStringAfterDotCom(query?.linkedIn)}
                    </a>
                  </>
                )) ||
                  "LinkedIn"}
              </Stack>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ color: titleColor, mb: "10px", mt: "25px" }}
            >
              <Typography
                className="subHeadingsTitle"
                variant="body1"
                sx={{ letterSpacing: "3px", fontWeight: "600" }}
              >
                EDUCATION
              </Typography>
            </Stack>
            <>
              {addEducation.map((item) => {
                return (
                  <Box>
                    {item.course && (
                      <Typography
                        style={{ fontWeight: "600", fontSize: "17px" }}
                      >
                        {item.course}
                      </Typography>
                    )}
                    {item.institute && (
                      <Typography
                        style={{ fontSize: "15px", fontWeight: "500" }}
                      >
                        {item.institute}
                      </Typography>
                    )}
                    {item.coursePeriod && (
                      <small style={{ lineHeight: "0px" }}>
                        {item.coursePeriod}
                      </small>
                    )}
                  </Box>
                );
              })}
            </>

            <Stack
              direction="row"
              alignItems="center"
              sx={{ color: titleColor, mb: "10px", mt: "25px" }}
            >
              <Typography
                className="subHeadingsTitle"
                variant="body1"
                sx={{ letterSpacing: "3px", fontWeight: "600" }}
              >
                SKILLS
              </Typography>
            </Stack>
            <>
              <ul style={{ fontSize: "14px" }}>
                {addSkill.map((item) => {
                  return <>{item.skill && <li>{item.skill}</li>}</>;
                })}
              </ul>
            </>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ p: "10px" }}>
          <Typography id={styles.nameHead} sx={{ color: titleColor }}>
            {query?.name || "Name"}
          </Typography>
          <Typography id={styles.jobTitleClass} sx={{ color: titleColor }}>
            {query?.jobtitle || "Job Title"}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ color: titleColor, mb: "10px" }}
          >
            <Typography
              className="subHeadingsTitle"
              variant="body1"
              sx={{ letterSpacing: "3px", fontWeight: "600" }}
            >
              PROFILE
            </Typography>
          </Stack>
          <Typography id={styles.description}>
            {query?.description ||
              "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Various versions have evolved over the years, sometimes by accident."}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ color: titleColor, mb: "10px" }}
          >
            <Typography
              className="subHeadingsTitle"
              variant="body1"
              sx={{ letterSpacing: "3px", fontWeight: "600" }}
            >
              WORK EXPERIENCE
            </Typography>
          </Stack>
          <>
            {addWorkExperience.map((item) => {
              return (
                <Box>
                  {item.workDesignationAndCompany && (
                    <Typography style={{ fontWeight: "600", fontSize: "17px" }}>
                      {item.workDesignationAndCompany}
                    </Typography>
                  )}
                  {item.workProfile && (
                    <Typography style={{ fontSize: "15px", fontWeight: "500" }}>
                      {item.workProfile}
                    </Typography>
                  )}
                  {item.workPeriod && (
                    <small style={{ lineHeight: "0px" }}>
                      {item.workPeriod}
                    </small>
                  )}
                  <ul style={{ fontSize: "13px" }}>
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

          <Stack
            direction="row"
            alignItems="center"
            sx={{ color: titleColor, mb: "10px", mt: "30px" }}
          >
            <Typography
              className="subHeadingsTitle"
              variant="body1"
              sx={{ letterSpacing: "3px", fontWeight: "600" }}
            >
              PROJECTS
            </Typography>
          </Stack>
          <>
            {addProjectData.map((item) => {
              return (
                <Box>
                  {item.projectTitle && (
                    <Typography style={{ fontWeight: "600", fontSize: "17px" }}>
                      {item.projectTitle}
                    </Typography>
                  )}
                  {item.projectBody && (
                    <Typography style={{ fontSize: "14px", fontWeight: "500" }}>
                      {item.projectBody}
                    </Typography>
                  )}

                  <ul style={{ fontSize: "13px" }}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default ResumeTemplate4;
