import React from "react";
import styles from "./FaqSection.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const FaqSection = () => {
  return (
    <div className={styles.faqContainer}>
      <h1>FAQ</h1>
      <div className={styles.mainContainer}>
        <div className={styles.faqTag}>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{" "}
          </p>
        </div>
        <div className={styles.faqContent}>
          <Accordion
            defaultExpanded
            sx={{
              backgroundColor: "var(--color-primary)",
              borderBottom: "2px solid var(--color-greyText)",
            }}
          >
            <AccordionSummary

              expandIcon={<AddCircleIcon sx={{fontSize: "2rem", color: "var(--color-stamp)"}} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{
                  color: "var(--color-white)",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "24px",
                  padding: "0 0 39px 0"
                }}
              >
                Do I need a personal injury report?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "var(--color-greyText)",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "162.523%",
                  
                  
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            
            sx={{
              backgroundColor: "var(--color-primary)",
              borderBottom: "2px solid var(--color-greyText)",
            }}
          >
            <AccordionSummary
              expandIcon={<AddCircleIcon sx={{fontSize: "2rem", color: "var(--color-stamp)"}} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{
                  color: "var(--color-white)",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "24px",
                  padding: "39px 0 39px 0"
                }}
              >
                How much is my case worth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "var(--color-greyText)",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "162.523%",
                  
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            
            sx={{
              backgroundColor: "var(--color-primary)",
              borderBottom: "2px solid var(--color-greyText)",
            }}
          >
            <AccordionSummary
              expandIcon={<AddCircleIcon sx={{fontSize: "2rem", color: "var(--color-stamp)"}} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{
                  color: "var(--color-white)",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "24px",
                  padding: "39px 0 39px 0"
                }}
              >
                What should I do right after car accidect
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "var(--color-greyText)",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "162.523%",
                  
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            
            sx={{
              backgroundColor: "var(--color-primary)",
              
            }}
          >
            <AccordionSummary
              expandIcon={<AddCircleIcon sx={{fontSize: "2rem", color: "var(--color-stamp)"}} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{
                  color: "var(--color-white)",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "24px",
                  padding: "39px 0 0 0"
                }}
              >
                How much is my case worth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "var(--color-greyText)",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "162.523%",
                  
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
