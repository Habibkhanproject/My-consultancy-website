import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const faqData = [
  {
    question: "What are the requirements for a full scholarship?",
    answer:
      "Full scholarships typically require a strong academic record (high CGPA), competitive standardized test scores (IELTS/GRE), a compelling statement of purpose, and relevant extracurricular or research experience.",
  },
  {
    question: "Do you help with visa interviews?",
    answer:
      "Yes, we conduct multiple mock interview sessions to prepare you for the specific questions and protocols of the embassy you are applying to.",
  },
  {
    question: "Can I apply without IELTS?",
    answer:
      "Some universities accept Duolingo or English Proficiency Certificates from your previous institution. However, for most top-tier scholarships and visa requirements, IELTS/TOEFL is mandatory.",
  },
];

export default function AccordionExpandDefault() {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        textAlign: "center",
        backgroundColor: "white",
      }}
    >
      {/* SMALL HEADER */}
      <Typography
        sx={{
          color: "#1976d2",
          fontWeight: 600,
          mb: 2, // 🔥 more space
        }}
      >
       COMMON QUESTIONS
      </Typography>

      {/* LARGE HEADER */}
      <Typography
        variant="h3"
        fontWeight={700}
        mb={10} // 🔥 increased margin top/bottom spacing
      >
        Frequently Asked Questions
      </Typography>

      {/* ACCORDION WRAPPER */}
      <Box
        sx={{
          maxWidth: 900, // 🔥 wider box
          mx: "auto",
          mt: 6, // 🔥 margin top added
          display: "flex",
          flexDirection: "column",
          gap: 2, // 🔥 more spacing between items

        }}
      >
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            defaultExpanded={index === 0}
            sx={{
              p: 1,
              bgcolor: "#f8fafc",
              borderRadius: 3,
              minHeight: 70, // 🔥 slightly taller accordion
              "&:before": { display: "none" }, // remove default line
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography fontWeight={600} fontSize="1.55rem">
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 2,
                  fontSize: "0.95rem",
                  textAlign: "left",
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}