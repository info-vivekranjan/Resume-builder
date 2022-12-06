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
import styles from './ResumeBuilder.module.css';

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
}
export default function ResumeBuilder() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [query, setQuery] = React.useState(initState);
    const inputRef = React.useRef(null);

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
            pdf.save("download.pdf");
        });
    };
    console.log(query);
    return (
        <Box sx={{ width: "100%" }}>
            <h1>Resume Builder</h1>
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
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Reset</Button>
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
                                        Steps 2
                                    </Box>
                                }
                                {
                                    activeStep == 2 &&
                                    <Box sx={{ mt: 2, mb: 1 }}>
                                        Steps 3
                                    </Box>
                                }
                                {
                                    activeStep == 3 &&
                                    <Box sx={{ mt: 2, mb: 1 }}>
                                        Steps 4
                                    </Box>
                                }
                                {
                                    activeStep == 4 &&
                                    <Box sx={{ mt: 2, mb: 1 }}>
                                        Final step
                                        <button onClick={printDocument}>Print</button>
                                    </Box>
                                }
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <Box sx={{ p: '40px' }} ref={inputRef}>
                                        <h1>{query.name || "Name"}</h1>
                                        <h3>{query.jobtitle || "Job Title"}</h3>
                                        <Typography>{query.location || "Location"}</Typography>
                                        <Typography>{query.phone || "Phone"}</Typography>
                                        <Typography>{query.email || "Email"}</Typography>
                                        <br />
                                        <Typography>{query.description || "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </Box>
                    </React.Fragment>
                )
            }
        </Box >
    );
}
