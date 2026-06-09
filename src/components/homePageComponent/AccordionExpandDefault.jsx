import * as React from "react";
import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

import { db } from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const EMPTY_FAQS = [
  { id: "1", question: "", answer: "" },
  { id: "2", question: "", answer: "" },
  { id: "3", question: "", answer: "" },
];

export default function AccordionExpandDefault() {
  const [sectionLabel,   setSectionLabel]   = useState("");
  const [sectionHeading, setSectionHeading] = useState("");
  const [faqs,           setFaqs]           = useState(EMPTY_FAQS);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "homepage", "faq"), (snap) => {
      if (snap.exists()) {
        const d = snap.data()?.data ?? {};

        setSectionLabel(d?.headings?.sectionLabel     ?? "");
        setSectionHeading(d?.headings?.sectionHeading ?? "");
        setFaqs(Array.isArray(d?.items) ? d.items : EMPTY_FAQS);
      }
    });

    return () => unsub();
  }, []);

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
          mb: 2,
        }}
      >
        {sectionLabel}
      </Typography>

      {/* LARGE HEADER */}
      <Typography
        variant="h3"
        fontWeight={700}
        mb={10}
      >
        {sectionHeading}
      </Typography>

      {/* ACCORDION WRAPPER */}
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          mt: 6,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {faqs.map((item, index) => (
          <Accordion
            key={item.id}
            defaultExpanded={index === 0}
            sx={{
              p: 1,
              bgcolor: "#f8fafc",
              borderRadius: 3,
              minHeight: 70,
              "&:before": { display: "none" },
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
