import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styles from "./templateCSS/ResumeTemplate3.module.css";
import { Divider } from "@mui/material";
import { Stack } from "@mui/system";

const ResumeTemplate3 = (props) => {
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
          <h1 className={styles.nameHead} style={{ color: titleColor }}>
            {query?.name || "Name"}
          </h1>
          <h4 className={styles.jobTitleClass} style={{ color: titleColor }}>
            {query?.jobtitle || "Job Title"}
          </h4>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              //   border: (theme) => `1px solid ${theme.palette.divider}`,
              //   borderRadius: 1,
              "& svg": {
                m: 1,
              },
              "& hr": {
                mx: 0.5,
              },
              mb: 1.5,
            }}
          >
            <Typography style={{ fontSize: "14px" }}>
              {query?.location || "Location"}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography style={{ fontSize: "14px" }}>
              {query?.phone || "Phone"}
            </Typography>
            <Divider orientation="vertical" flexItem />
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
            <Divider orientation="vertical" flexItem />
            <Typography style={{ fontSize: "14px" }}>
              {(query?.github && (
                <>
                  <a
                    href={query?.github}
                    target="_blank"
                    style={{ color: titleColor }}
                  >
                    Github
                  </a>
                </>
              )) ||
                "Github"}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography style={{ fontSize: "14px" }}>
              {(query?.linkedIn && (
                <>
                  <a
                    href={query?.linkedIn}
                    target="_blank"
                    style={{ color: titleColor }}
                  >
                    LinkedIn
                  </a>
                </>
              )) ||
                "LinkedIn"}
            </Typography>
          </Box>
          <Typography style={{ fontSize: "14px" }}>
            {query?.description ||
              "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."}
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ p: "10px" }}>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            className={styles.subHeadingStack}
            sx={{ borderBottom: `3px solid ${titleColor}`, color: titleColor }}
          >
            <Typography className={styles.subHeadingsTitle} variant="body1">
              <b>EDUCATION</b>
            </Typography>
          </Stack>
          <Divider />
          <>
            {addEducation.map((item) => {
              return (
                <Box
                  className={styles.educationBox}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box>
                    {item.course && <h4>{item.course}</h4>}
                    {item.institute && <p>{item.institute}</p>}
                  </Box>
                  {item.coursePeriod && (
                    <small style={{ paddingTop: "10px" }}>
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
            gap={1}
            className={styles.subHeadingStack}
            sx={{ borderBottom: `3px solid ${titleColor}`, color: titleColor }}
          >
            <Typography className={styles.subHeadingsTitle} variant="body1">
              <b>WORK EXPERIENCE</b>
            </Typography>
          </Stack>

          <Divider />
          <>
            {addWorkExperience.map((item) => {
              return (
                <Box className={styles.workexBox}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      {item.workDesignationAndCompany && (
                        <h4 style={{ lineHeight: "0px" }}>
                          {item.workDesignationAndCompany}
                        </h4>
                      )}
                      {item.workProfile && (
                        <h5 style={{ lineHeight: "0px" }}>
                          {item.workProfile}
                        </h5>
                      )}
                    </Box>
                    {item.workPeriod && (
                      <small style={{ paddingTop: "10px" }}>
                        {item.workPeriod}
                      </small>
                    )}
                  </Box>
                  <ul style={{ marginTop: "-5px", fontSize: "14px" }}>
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
            gap={1}
            className={styles.subHeadingStack}
            sx={{ borderBottom: `3px solid ${titleColor}`, color: titleColor }}
          >
            <Typography className={styles.subHeadingsTitle} variant="body1">
              <b>PROJECTS</b>
            </Typography>
          </Stack>

          <Divider />
          <>
            {addProjectData.map((item) => {
              return (
                <Box className={styles.workexBox}>
                  {item.projectTitle && <h4>{item.projectTitle}</h4>}
                  {item.projectBody && <small>{item.projectBody}</small>}
                  <ul style={{ marginTop: "5px", fontSize: "14px" }}>
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
            className={styles.subHeadingStack}
            sx={{ borderBottom: `3px solid ${titleColor}`, color: titleColor }}
          >
            <Typography className={styles.subHeadingsTitle} variant="body1">
              <b>SKILLS</b>
            </Typography>
          </Stack>
          <Divider />
          <ul style={{ fontSize: "14px" }}>
            <Grid container>
              {addSkill.map((item) => {
                return (
                  <>
                    <Grid item xs={6}>
                      {item.skill && <li>{item.skill}</li>}
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default ResumeTemplate3;
