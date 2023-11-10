import React from "react";
import ReactToPrint from "react-to-print";
import * as Yup from "yup";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./ResumeBuilder.css";
import { Divider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ExtensionIcon from "@mui/icons-material/Extension";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";

// Resume Templates
import Template1 from "../Utils/images/Template1.png";
import Template2 from "../Utils/images/Template2.png";
import Template3 from "../Utils/images/Template3.png";
import Template4 from "../Utils/images/Template4.png";
import Template5 from "../Utils/images/Template5.png";
import Template6 from "../Utils/images/Template6.png";
import Template7 from "../Utils/images/Template7.png";

const imageTemplates = {
  Template1,
  Template2,
  Template3,
  Template4,
  Template5,
  Template6,
  Template7
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(140deg,#002d52,#186948)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(140deg,#002d52,#186948)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage: "linear-gradient(140deg,#002d52,#186948)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage: "linear-gradient(140deg,#002d52,#186948)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AccountCircleIcon />,
    2: <WorkHistoryIcon />,
    3: <SchoolIcon />,
    4: <EngineeringIcon />,
    5: <ExtensionIcon />,
    6: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  "HEADING",
  "WORK HISTORY",
  "EDUCATION",
  "Project",
  "SKILLS",
  "FINALIZE",
];

const initState = {
  name: "",
  jobtitle: "",
  description: "",
  phone: "",
  email: "",
  github: "",
  linkedIn: "",
  location: "",
  skills: "",
  course: "",
  institute: "",
  coursePeriod: "",
  workDesignationAndCompany: "",
  workProfile: "",
  workPeriod: "",
  workDescriptionList1: "",
  workDescriptionList2: "",
  workDescriptionList3: "",
  projectTitle: "",
  projectBody: "",
  projectDescriptionList1: "",
  projectDescriptionList2: "",
  projectDescriptionList3: "",
};

const themeColor = createTheme({
  palette: {
    primary: {
      main: "#186948",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const templateModelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45vw",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ResumeBuilder() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [query, setQuery] = React.useState(initState);
  const inputRef = React.useRef(null);
  const [addSkill, setAddSkill] = React.useState([]);
  const [addEducation, setAddEducation] = React.useState([]);
  const [addWorkExperience, setAddWorkExperience] = React.useState([]);
  const [addProjectData, setAddProjectData] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [titleColor, setTitleColor] = React.useState("#1B6392");
  const [selectedTemplate, setSelectedTemplate] = React.useState("Template1");
  const [openTemplateModel, setOpenTemplateModel] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can handle the selected image here, for example, by displaying a preview.
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
  };

  const handleTitleColorChange = (event) => {
    const newColor = event.target.value;
    setTitleColor(newColor);
  };
  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleQueryChange = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validationSchema = [
    Yup.object().shape({
      name: Yup.string().required("Name is required"),
      jobtitle: Yup.string().required("Job title is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
    }),
    Yup.object().shape({
      workDesignationAndCompany: Yup.string().required("Company is required"),
      workProfile: Yup.string().required("Work profile is required"),
      workPeriod: Yup.string().required("Work Period is required"),
      workDescriptionList1: Yup.string().required(
        "Work Description-1 is required"
      ),
    }),
    Yup.object().shape({
      course: Yup.string().required("Course is required"),
      institute: Yup.string().required("Institute is required"),
      coursePeriod: Yup.string().required("Course Period is required"),
    }),
    Yup.object().shape({
      projectTitle: Yup.string().required("Project Title is required"),
      projectBody: Yup.string().required("Project Body is required"),
      projectDescriptionList1: Yup.string().required(
        "Project Description-1 is required"
      ),
    }),
    Yup.object().shape({
      skills: Yup.string().required("Skills are required"),
    }),
    Yup.object().shape({}),
  ];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep == 0) {
      validationSchema[0]
        .validate(query, { abortEarly: false })
        .then(() => {
          let newSkipped = skipped;
          if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
          }

          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setSkipped(newSkipped);
        })
        .catch((errors) => {
          const fieldErrors = {};
          errors.inner.forEach((error) => {
            fieldErrors[error.path] = error.message;
          });
          setErrors(fieldErrors);
        });
    }
    if (activeStep == 1) {
      if (addWorkExperience?.length <= 0) {
        // alert("Add work experience");
        setSnackbarMessage("Add work experience");
        handleOpenSnackbar();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
    if (activeStep == 2) {
      if (addEducation?.length <= 0) {
        // alert("Add Education");
        setSnackbarMessage("Add Education");
        handleOpenSnackbar();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
    if (activeStep == 3) {
      if (addProjectData?.length <= 0) {
        // alert("Add projects");
        setSnackbarMessage("Add projects");
        handleOpenSnackbar();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }

    if (activeStep == 4) {
      if (addSkill?.length <= 0) {
        // alert("Add Skills");
        setSnackbarMessage("Add skills");
        handleOpenSnackbar();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }

    if (activeStep == 5) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleAddSkills = () => {
    validationSchema[activeStep]
      .validate(query, { abortEarly: false })
      .then(() => {
        let payload = {
          skill: query.skills,
        };
        setAddSkill([...addSkill, payload]);
        setQuery({ ...query, skills: "" });
        setErrors({ ...errors, skills: "" });
      })
      .catch((errors) => {
        const fieldErrors = {};
        errors.inner.forEach((error) => {
          fieldErrors[error.path] = error.message;
        });
        setErrors({ ...errors, ...fieldErrors });
      });
  };

  const handleAddEducation = () => {
    validationSchema[activeStep]
      .validate(query, { abortEarly: false })
      .then(() => {
        let payload = {
          course: query.course,
          institute: query.institute,
          coursePeriod: query.coursePeriod,
        };
        setAddEducation([...addEducation, payload]);

        setQuery({
          ...query,
          course: "",
          institute: "",
          coursePeriod: "",
        });

        setErrors({
          ...errors,
          course: "",
          institute: "",
          coursePeriod: "",
        });
      })
      .catch((errors) => {
        const fieldErrors = {};
        errors.inner.forEach((error) => {
          fieldErrors[error.path] = error.message;
        });
        setErrors({ ...errors, ...fieldErrors });
      });
  };

  const handleAddWorkExperience = () => {
    validationSchema[activeStep]
      .validate(query, { abortEarly: false })
      .then(() => {
        let payload = {
          workDesignationAndCompany: query.workDesignationAndCompany,
          workProfile: query.workProfile,
          workPeriod: query.workPeriod,
          workDescriptionList1: query.workDescriptionList1,
          workDescriptionList2: query.workDescriptionList2,
          workDescriptionList3: query.workDescriptionList3,
        };
        setAddWorkExperience([...addWorkExperience, payload]);

        setQuery({
          ...query,
          workDesignationAndCompany: "",
          workProfile: "",
          workPeriod: "",
          workDescriptionList1: "",
          workDescriptionList2: "",
          workDescriptionList3: "",
        });

        setErrors({
          ...errors,
          workDesignationAndCompany: "",
          workProfile: "",
          workPeriod: "",
          workDescriptionList1: "",
          workDescriptionList2: "",
          workDescriptionList3: "",
        });
      })
      .catch((errors) => {
        const fieldErrors = {};
        errors.inner.forEach((error) => {
          fieldErrors[error.path] = error.message;
        });
        setErrors({ ...errors, ...fieldErrors });
      });
  };

  const handleAddProjectData = () => {
    validationSchema[activeStep]
      .validate(query, { abortEarly: false })
      .then(() => {
        let payload = {
          projectTitle: query.projectTitle,
          projectBody: query.projectBody,
          projectDescriptionList1: query.projectDescriptionList1,
          projectDescriptionList2: query.projectDescriptionList2,
          projectDescriptionList3: query.projectDescriptionList3,
        };
        setAddProjectData([...addProjectData, payload]);

        setQuery({
          ...query,
          projectTitle: "",
          projectBody: "",
          projectDescriptionList1: "",
          projectDescriptionList2: "",
          projectDescriptionList3: "",
        });

        setErrors({
          ...errors,
          projectTitle: "",
          projectBody: "",
          projectDescriptionList1: "",
          projectDescriptionList2: "",
          projectDescriptionList3: "",
        });
      })
      .catch((errors) => {
        const fieldErrors = {};
        errors.inner.forEach((error) => {
          fieldErrors[error.path] = error.message;
        });
        setErrors({ ...errors, ...fieldErrors });
      });
  };

  console.log(errors);
  return (
    <>
      <ThemeProvider theme={themeColor}>
        <CssBaseline />
        <AppBar
          style={{
            background: "linear-gradient(140deg,#002d52,#186948)",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div">
              Resume Builder
            </Typography>
          </Toolbar>
        </AppBar>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="warning"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
        <Box sx={{ width: "100%", mt: "50px", padding: "30px 50px" }}>
          <Stepper activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel
                    {...labelProps}
                    StepIconComponent={ColorlibStepIcon}
                  >
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <br />
          <Box style={{ textAlign: "right" }}>
            <label htmlFor="each-title-color">
              <input
                id="each-title-color"
                type="color"
                value={titleColor}
                onChange={handleTitleColorChange}
                style={{ display: "none" }}
              />
              <Button
                variant="outlined"
                component="span"
                size="small"
                endIcon={<FormatColorTextIcon />}
              >
                Title Color
              </Button>
            </label>
            <Button
              variant="outlined"
              component="span"
              size="small"
              endIcon={<PhotoLibraryIcon />}
              onClick={() => setOpenTemplateModel(true)}
              sx={{ marginLeft: "10px" }}
            >
              Template Options
            </Button>
            <Modal
              open={openTemplateModel}
              onClose={() => setOpenTemplateModel(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={templateModelStyle}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  Select template
                </Typography>
                <Divider />
                <Box
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "25px",
                  }}
                >
                  {Object.entries(imageTemplates).map(([key, image]) => (
                    <div
                      key={key}
                      onClick={() => handleTemplateChange(key)}
                      style={{
                        cursor: "pointer",
                        margin: "5px",
                      }}
                    >
                      <img
                        src={image}
                        alt={key}
                        style={{
                          border:
                            key === selectedTemplate
                              ? "2px solid #186948"
                              : "1px solid gray",
                          width: "350px",
                          height: "350px",
                        }}
                      />
                    </div>
                  ))}
                </Box>
              </Box>
            </Modal>
          </Box>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Box
                style={{ width: "800px", margin: "auto", marginTop: "30px" }}
              >
                <ReactToPrint
                  trigger={() => (
                    <Button
                      variant="contained"
                      endIcon={<FileDownloadIcon sx={{ color: "white" }} />}
                    >
                      Download Resume
                    </Button>
                  )}
                  content={() => inputRef.current}
                />
                <Paper
                  elevation={3}
                  style={{ minHeight: "100vh", marginTop: "15px" }}
                >
                  <Box ref={inputRef}>
                    <ResumePreview
                      query={query}
                      titleColor={titleColor}
                      addEducation={addEducation}
                      addWorkExperience={addWorkExperience}
                      addProjectData={addProjectData}
                      addSkill={addSkill}
                      selectedTemplate={selectedTemplate}
                      selectedImage={selectedImage}
                    />
                  </Box>
                </Paper>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button variant="outlined" onClick={handleReset}>
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid container>
                <Grid item xs={6}>
                  <ResumeForm
                    errors={errors}
                    activeStep={activeStep}
                    handleQueryChange={handleQueryChange}
                    handleAddEducation={handleAddEducation}
                    handleAddProjectData={handleAddProjectData}
                    handleAddWorkExperience={handleAddWorkExperience}
                    handleAddSkills={handleAddSkills}
                    query={query}
                    handleImageChange={handleImageChange}
                    selectedImage={selectedImage}
                  />
                  <Box
                    sx={{ display: "flex", flexDirection: "row", pt: 2, pr: 4 }}
                  >
                    <Button
                      variant="contained"
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1, color: "rgb(204, 71, 85)" }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {isStepOptional(activeStep) && (
                      <Button
                        variant="contained"
                        color="inherit"
                        onClick={handleSkip}
                        sx={{ mr: 1, color: "rgb(204, 71, 85)" }}
                      >
                        Skip
                      </Button>
                    )}

                    <Button variant="contained" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Paper
                      elevation={3}
                      style={{
                        maxHeight: "75vh",
                        marginTop: "15px",
                        overflowY: "scroll",
                      }}
                    >
                      <Box>
                        <ResumePreview
                          query={query}
                          titleColor={titleColor}
                          addEducation={addEducation}
                          addWorkExperience={addWorkExperience}
                          addProjectData={addProjectData}
                          addSkill={addSkill}
                          selectedTemplate={selectedTemplate}
                          selectedImage={selectedImage}
                        />
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        </Box>
      </ThemeProvider>
    </>
  );
}
