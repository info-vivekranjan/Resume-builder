import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ResumeBuilder.css";

const ResumeForm = (props) => {
  const {
    errors,
    activeStep,
    handleQueryChange,
    handleAddEducation,
    handleAddProjectData,
    handleAddWorkExperience,
    handleAddSkills,
  } = props;

  return (
    <>
      {activeStep == 0 && (
        <Box sx={{ mt: 2, mb: 1 }}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Name"
              name="name"
              onChange={handleQueryChange}
              label="Name"
              id="name"
              error={Boolean(errors.name)}
            />
            {errors?.name?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.name}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>

          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Job title"
              name="jobtitle"
              onChange={handleQueryChange}
              label="Job title"
              id="jobtitle"
              error={Boolean(errors.jobtitle)}
            />
          </Box>
          {errors?.jobtitle?.length > 0 ? (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                lineHeight: "0px",
                marginBottom: "25px",
              }}
            >
              {errors?.jobtitle}
            </p>
          ) : (
            <p
              style={{
                fontSize: "12px",
                lineHeight: "0px",
                visibility: "hidden",
                marginBottom: "25px",
              }}
            >
              .
            </p>
          )}
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Description"
              name="description"
              onChange={handleQueryChange}
              label="Description"
              id="description"
              error={Boolean(errors.description)}
            />
            {errors?.description?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.description}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Phone"
              name="phone"
              onChange={handleQueryChange}
              label="Phone"
              id="phone"
              error={Boolean(errors.phone)}
            />
            {errors?.phone?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.phone}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Email"
              name="email"
              onChange={handleQueryChange}
              label="Email"
              id="email"
              error={Boolean(errors.email)}
            />
            {errors?.email?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.email}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Github"
              name="github"
              onChange={handleQueryChange}
              label="Github"
              id="github"
            />
            <p
              style={{
                fontSize: "12px",
                lineHeight: "0px",
                visibility: "hidden",
                marginBottom: "25px",
              }}
            >
              .
            </p>
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="LinkedIn"
              name="linkedIn"
              onChange={handleQueryChange}
              label="LinkedIn"
              id="linkedIn"
            />
            <p
              style={{
                fontSize: "12px",
                lineHeight: "0px",
                visibility: "hidden",
                marginBottom: "25px",
              }}
            >
              .
            </p>
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Location"
              name="location"
              onChange={handleQueryChange}
              label="Location"
              id="location"
              error={Boolean(errors.location)}
            />
            {errors?.location?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                }}
              >
                {errors?.location}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                }}
              >
                .
              </p>
            )}
          </Box>
        </Box>
      )}
      {activeStep == 1 && (
        <Box sx={{ mt: 2, mb: 1 }}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Work Designation/Company"
              name="workDesignationAndCompany"
              onChange={handleQueryChange}
              label="Work Designation/Company"
              id="workDesignationAndCompany"
              error={Boolean(errors.workDesignationAndCompany)}
            />
            {errors?.workDesignationAndCompany?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.workDesignationAndCompany}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Work profile"
              name="workProfile"
              onChange={handleQueryChange}
              label="Work profile"
              id="workProfile"
              error={Boolean(errors.workProfile)}
            />
            {errors?.workProfile?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.workProfile}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Work Period"
              name="workPeriod"
              onChange={handleQueryChange}
              label="Work Period"
              id="workPeriod"
              error={Boolean(errors.workPeriod)}
            />
            {errors?.workPeriod?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.workPeriod}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Work Description List1"
              name="workDescriptionList1"
              onChange={handleQueryChange}
              label="Work Description List1"
              id="workDescriptionList1"
              error={Boolean(errors.workDescriptionList1)}
            />
            {errors?.workDescriptionList1?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.workDescriptionList1}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Work Description List2"
              name="workDescriptionList2"
              onChange={handleQueryChange}
              label="Work Description List2"
              id="workDescriptionList2"
            />
            <p
              style={{
                fontSize: "12px",
                lineHeight: "0px",
                visibility: "hidden",
                marginBottom: "25px",
              }}
            >
              .
            </p>
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Work Description List3"
              name="workDescriptionList3"
              onChange={handleQueryChange}
              label="Work Description List3"
              id="workDescriptionList3"
            />
            <p
              style={{
                fontSize: "12px",
                lineHeight: "0px",
                visibility: "hidden",
              }}
            >
              .
            </p>
          </Box>
          <Box>
            <Button variant="contained" onClick={handleAddWorkExperience}>
              Add
            </Button>
          </Box>
        </Box>
      )}
      {activeStep == 2 && (
        <Box sx={{ mt: 2, mb: 1 }}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Course"
              name="course"
              onChange={handleQueryChange}
              label="Course"
              id="course"
              error={Boolean(errors.course)}
            />
            {errors?.course?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.course}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Institute"
              name="institute"
              onChange={handleQueryChange}
              label="Institute"
              id="institute"
              error={Boolean(errors.institute)}
            />
            {errors?.institute?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.institute}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Course Period"
              name="coursePeriod"
              onChange={handleQueryChange}
              label="Course Period"
              id="coursePeriod"
              error={Boolean(errors.coursePeriod)}
            />
            {errors?.coursePeriod?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.coursePeriod}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box>
            <Button variant="contained" onClick={handleAddEducation}>
              Add
            </Button>
          </Box>
        </Box>
      )}
      {activeStep == 3 && (
        <Box sx={{ mt: 2, mb: 1 }}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Project Title"
              name="projectTitle"
              onChange={handleQueryChange}
              label="Project Title"
              id="projectTitle"
              error={Boolean(errors.projectTitle)}
            />
            {errors?.projectTitle?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.projectTitle}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Project Body"
              name="projectBody"
              onChange={handleQueryChange}
              label="Project Body"
              id="projectBody"
              error={Boolean(errors.projectBody)}
            />
            {errors?.projectBody?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.projectBody}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Project Description List1"
              name="projectDescriptionList1"
              onChange={handleQueryChange}
              label="Project Description List1"
              id="projectDescriptionList1"
              error={Boolean(errors.projectDescriptionList1)}
            />
            {errors?.projectDescriptionList1?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                  marginBottom: "25px",
                }}
              >
                {errors?.projectDescriptionList1}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                  marginBottom: "25px",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Project Description List2"
              name="projectDescriptionList2"
              onChange={handleQueryChange}
              label="Project Description List2"
              id="projectDescriptionList2"
            />
            <p
              style={{
                fontSize: "12px",
                lineHeight: "0px",
                visibility: "hidden",
                marginBottom: "25px",
              }}
            >
              .
            </p>
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Project Description List3"
              name="projectDescriptionList3"
              onChange={handleQueryChange}
              label="Project Description List3"
              id="projectDescriptionList3"
            />
            <p
              style={{
                fontSize: "12px",
                lineHeight: "0px",
                visibility: "hidden",
              }}
            >
              .
            </p>
          </Box>
          <Box>
            <Button variant="contained" onClick={handleAddProjectData}>
              Add
            </Button>
          </Box>
        </Box>
      )}
      {activeStep == 4 && (
        <Box sx={{ mt: 2, mb: 1 }}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Skills"
              name="skills"
              onChange={handleQueryChange}
              label="Skills"
              id="skills"
              error={Boolean(errors.skills)}
            />
            {errors?.skills?.length > 0 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  lineHeight: "0px",
                }}
              >
                {errors?.skills}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "0px",
                  visibility: "hidden",
                }}
              >
                .
              </p>
            )}
          </Box>
          <Box>
            <Button variant="contained" onClick={handleAddSkills}>
              Add
            </Button>
          </Box>
        </Box>
      )}
      {activeStep == 5 && (
        <Box sx={{ mt: 2, mb: 1 }}>
          <b>Final step: You can't go back after this step.</b>
        </Box>
      )}
    </>
  );
};

export default ResumeForm;
