import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import './ResumeBuilder.css';
import { Divider } from "@mui/material";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmailIcon from '@mui/icons-material/Email';
import ExtensionIcon from '@mui/icons-material/Extension';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Stack } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

const steps = [
    "HEADING",
    "WORK HISTORY",
    "EDUCATION",
    "SKILLS",
    "FINALIZE"
];

const initState = {
    name: "",
    jobtitle: "",
    description: "",
    phone: "",
    email: "",
    location: "",
    skills: "",
    course: "",
    institute: "",
    coursePeriod: "",
    workDesignationAndCompany: "",
    workPeriod: "",
    workDescriptionList1: "",
    workDescriptionList2: "",
    workDescriptionList3: ""
}
export default function ResumeBuilder() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [query, setQuery] = React.useState(initState);
    const inputRef = React.useRef(null);
    const [addSkill, setAddSkill] = React.useState([]);
    const [addEducation, setAddEducation] = React.useState([]);
    const [addWorkExperience, setAddWorkExperience] = React.useState([]);

    const handleQueryChange = (e) => {
        const { name, value } = e.target;
        setQuery({ ...query, [name]: value })
    }

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
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
    const printDocument = () => {
        html2canvas(inputRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("resume.pdf");
        });
    };

    const handleAddSkills = () => {
        let payload = {
            skill: query.skills
        }
        setAddSkill([...addSkill, payload]);
    }
    const handleAddEducation = () => {
        let payload = {
            course: query.course,
            institute: query.institute,
            coursePeriod: query.coursePeriod
        }
        setAddEducation([...addEducation, payload])
    }
    const handleAddWorkExperience = () => {
        let payload = {
            workDesignationAndCompany: query.workDesignationAndCompany,
            workPeriod: query.workPeriod,
            workDescriptionList1: query.workDescriptionList1,
            workDescriptionList2: query.workDescriptionList2,
            workDescriptionList3: query.workDescriptionList3
        };

        setAddWorkExperience([...addWorkExperience, payload]);
    }
    console.log(query);
    return (
        <>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Resume Builder
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ width: "100%", mt: '100px' }}>

                <Stepper activeStep={activeStep}>
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
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {
                    activeStep === steps.length ? (
                        <React.Fragment>
                            <Box style={{ width: '40%', margin: 'auto' }}>
                                <Button variant="outlined" endIcon={<FileDownloadIcon />} onClick={printDocument}>Download</Button>
                                <Box sx={{ p: '40px' }} ref={inputRef}>
                                    <Grid container>
                                        <Grid item xs={12} sx={{ p: '10px' }}>
                                            <h1 className="nameHead">{query.name || "Name"}</h1>
                                            <h4 className="jobTitleClass">{query.jobtitle || "Job Title"}</h4>
                                        </Grid>
                                        <Grid item xs={9} sx={{ p: '10px' }}>
                                            <Stack direction="row" alignItems="center" gap={1} className="subHeadingStack" sx={{ color: '#1B6392' }} >
                                                <TrackChangesIcon />
                                                <Typography className="subHeadingsTitle" variant="body1"><b>CAREER OBJECTIVE</b></Typography>
                                            </Stack>
                                            <Divider />
                                            <Typography>{query.description || "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."}</Typography>

                                            <Stack direction="row" alignItems="center" gap={1} className="subHeadingStack" sx={{ color: '#1B6392' }} >
                                                <SchoolIcon />
                                                <Typography className="subHeadingsTitle" variant="body1"><b>EDUCATION</b></Typography>
                                            </Stack>
                                            <Divider />
                                            <>
                                                {
                                                    addEducation.map((item) => {
                                                        return <Box className="educationBox">
                                                            <h4>{item.course}</h4>
                                                            <p>{item.institute}</p>
                                                            <small>{item.coursePeriod}</small>
                                                        </Box>
                                                    })
                                                }
                                            </>
                                            <Stack direction="row" alignItems="center" gap={1} className="subHeadingStack" sx={{ color: '#1B6392' }} >
                                                <WorkHistoryIcon />
                                                <Typography className="subHeadingsTitle" variant="body1" ><b>WORK EXPERIENCE</b></Typography>
                                            </Stack>

                                            <Divider />
                                            <>
                                                {
                                                    addWorkExperience.map((item) => {
                                                        return <Box className="workexBox">
                                                            <h4>{item.workDesignationAndCompany}</h4>
                                                            <small>{item.workPeriod}</small>
                                                            <ul>
                                                                <li>{item.workDescriptionList1}</li>
                                                                <li>{item.workDescriptionList2}</li>
                                                                <li>{item.workDescriptionList3}</li>
                                                            </ul>
                                                        </Box>
                                                    })
                                                }
                                            </>
                                        </Grid>
                                        <Grid item xs={3} sx={{ p: '10px' }}>
                                            <Stack direction="row" alignItems="center" gap={1} className="subHeadingStack" sx={{ color: '#1B6392' }} >
                                                <EmailIcon />
                                                <Typography className="subHeadingsTitle" variant="body1"><b>CONTACT</b></Typography>
                                            </Stack>
                                            <Divider />
                                            <Typography>{query.location || "Location"}</Typography>
                                            <Typography>{query.phone || "Phone"}</Typography>
                                            <Typography>{query.email || "Email"}</Typography>
                                            <Stack direction="row" alignItems="center" gap={1} className="subHeadingStack" sx={{ color: '#1B6392' }} >
                                                <ExtensionIcon />
                                                <Typography className="subHeadingsTitle" variant="body1"><b>SKILLS</b></Typography>
                                            </Stack>
                                            <Divider />
                                            <ul>
                                                {addSkill.map((item) => {
                                                    return <li>{item.skill}</li>
                                                })}
                                            </ul>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                <Box sx={{ flex: "1 1 auto" }} />
                                <Button variant="outlined" onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Grid container>
                                <Grid item xs={6}>
                                    {
                                        activeStep == 0 &&
                                        <Box sx={{ mt: 2, mb: 1 }}>
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Name' name='name' onChange={handleQueryChange} label="Name" id="name" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Job title' name='jobtitle' onChange={handleQueryChange} label="Job title" id="jobtitle" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Description' name='description' onChange={handleQueryChange} label="Description" id="description" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Phone' name='phone' onChange={handleQueryChange} label="Phone" id="phone" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Email' name='email' onChange={handleQueryChange} label="Email" id="email" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Location' name='location' onChange={handleQueryChange} label="Location" id="location" />
                                            </Box>
                                            <br />
                                            <br />
                                        </Box>
                                    }
                                    {
                                        activeStep == 1 &&
                                        <Box sx={{ mt: 2, mb: 1 }}>
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Work Designation/Company' name='workDesignationAndCompany' onChange={handleQueryChange} label="Work Designation/Company" id="workDesignationAndCompany" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Work Period' name='workPeriod' onChange={handleQueryChange} label="Work Period" id="workPeriod" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Work Description List1' name='workDescriptionList1' onChange={handleQueryChange} label="Work Description List1" id="workDescriptionList1" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Work Description List2' name='workDescriptionList2' onChange={handleQueryChange} label="Work Description List2" id="workDescriptionList2" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Work Description List3' name='workDescriptionList3' onChange={handleQueryChange} label="Work Description List3" id="workDescriptionList3" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box>
                                                <Button variant="outlined" onClick={handleAddWorkExperience}>Add</Button>
                                            </Box>
                                        </Box>
                                    }
                                    {
                                        activeStep == 2 &&
                                        <Box sx={{ mt: 2, mb: 1 }}>
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Course' name='course' onChange={handleQueryChange} label="Course" id="course" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Institute' name='institute' onChange={handleQueryChange} label="Institute" id="institute" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Course Period' name='coursePeriod' onChange={handleQueryChange} label="Course Period" id="coursePeriod" />
                                            </Box>
                                            <br />
                                            <br />
                                            <Box>
                                                <Button variant="outlined" onClick={handleAddEducation}>
                                                    Add
                                                </Button>
                                            </Box>
                                        </Box>
                                    }
                                    {
                                        activeStep == 3 &&
                                        <Box sx={{ mt: 2, mb: 1 }}>
                                            <Box
                                                sx={{
                                                    width: 500,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Skills' name='skills' onChange={handleQueryChange} label="Skills" id="skills" />
                                            </Box>
                                            <Box>
                                                <Button variant="outlined" onClick={handleAddSkills}>
                                                    Add
                                                </Button>
                                            </Box>
                                        </Box>
                                    }
                                    {
                                        activeStep == 4 &&
                                        <Box sx={{ mt: 2, mb: 1 }}>
                                            <b>Final step: You can't edit your changes after this step.</b>
                                        </Box>
                                    }
                                </Grid>
                                <Grid item xs={6}>
                                    <Box>
                                        <Box sx={{ p: '40px' }} ref={inputRef}>
                                            <Grid container>
                                                <Grid item xs={12} sx={{ p: '10px' }}>
                                                    <h1 className="nameHead">{query.name || "Name"}</h1>
                                                    <h4 className="jobTitleClass">{query.jobtitle || "Job Title"}</h4>
                                                </Grid>
                                                <Grid item xs={9} sx={{ p: '10px' }}>
                                                    <Stack direction="row" alignItems="center" gap={1} className="subHeadingStack" sx={{ color: '#1B6392' }} >
                                                        <TrackChangesIcon />
                                                        <Typography className="subHeadingsTitle" variant="body1"><b>CAREER OBJECTIVE</b></Typography>
                                                    </Stack>
                                                    <Divider />
                                                    <Typography>{query.description || "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."}</Typography>

                                                    <Stack direction="row" alignItems="center" gap={1} className="subHeadingStack" sx={{ color: '#1B6392' }} >
                                                        <SchoolIcon />
                                                        <Typography className="subHeadingsTitle" variant="body1"><b>EDUCATION</b></Typography>
                                                    </Stack>
                                                    <Divider />
                                                    <>
                                                        {
                                                            addEducation.map((item) => {
                                                                return <Box className="educationBox">
                                                                    <h4>{item.course}</h4>
                                                                    <p>{item.institute}</p>
                                                                    <small>{item.coursePeriod}</small>
                                                                </Box>
                                                            })
                                                        }
                                                    </>
                                                    <Stack direction="row" alignItems="center" gap={1} className="subHeadingStack" sx={{ color: '#1B6392' }} >
                                                        <WorkHistoryIcon />
                                                        <Typography className="subHeadingsTitle" variant="body1" ><b>WORK EXPERIENCE</b></Typography>
                                                    </Stack>

                                                    <Divider />
                                                    <>
                                                        {
                                                            addWorkExperience.map((item) => {
                                                                return <Box className="workexBox">
                                                                    <h4>{item.workDesignationAndCompany}</h4>
                                                                    <small>{item.workPeriod}</small>
                                                                    <ul>
                                                                        <li>{item.workDescriptionList1}</li>
                                                                        <li>{item.workDescriptionList2}</li>
                                                                        <li>{item.workDescriptionList3}</li>
                                                                    </ul>
                                                                </Box>
                                                            })
                                                        }
                                                    </>
                                                </Grid>
                                                <Grid item xs={3} sx={{ p: '10px' }}>
                                                    <Stack direction="row" alignItems="center" gap={1} className="subHeadingStack" sx={{ color: '#1B6392' }} >
                                                        <EmailIcon />
                                                        <Typography className="subHeadingsTitle" variant="body1"><b>CONTACT</b></Typography>
                                                    </Stack>
                                                    <Divider />
                                                    <Typography>{query.location || "Location"}</Typography>
                                                    <Typography>{query.phone || "Phone"}</Typography>
                                                    <Typography>{query.email || "Email"}</Typography>
                                                    <Stack direction="row" alignItems="center" gap={1} className="subHeadingStack" sx={{ color: '#1B6392' }} >
                                                        <ExtensionIcon />
                                                        <Typography className="subHeadingsTitle" variant="body1"><b>SKILLS</b></Typography>
                                                    </Stack>
                                                    <Divider />
                                                    <ul>
                                                        {addSkill.map((item) => {
                                                            return <li>{item.skill}</li>
                                                        })}
                                                    </ul>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: "1 1 auto" }} />
                                {isStepOptional(activeStep) && (
                                    <Button variant="outlined" color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        Skip
                                    </Button>
                                )}

                                <Button variant="outlined" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )
                }
            </Box >
        </>
    );
}
