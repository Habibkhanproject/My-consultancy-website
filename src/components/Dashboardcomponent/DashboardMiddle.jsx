import { Box, Typography, Button } from "@mui/material";

export default function DashboardMiddle({ data = [] }) {
  // ================= FLOW DATA =================
  const flowData = [
    { number: 1, title: "Apply", subtitle: "Submit form" },
    { number: 2, title: "Review", subtitle: "Check documents" },
    { number: 3, title: "Interview", subtitle: "Attend session" },
    { number: 4, title: "Approval", subtitle: "Final result" },
  ];

  const cardData = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    smallTitle: "Featured Program",
    bigTitle: "Study Abroad Opportunities 2026",
    features: [
      { icon: "📘", title: "United Kingdom" },
      { icon: "🎓", title: "Scholarship Info" },
      { icon: "🌍", title: "Visa Assistance" },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    smallTitle: "Top Universities",
    bigTitle: "Best Universities Worldwide",
    features: [
      { icon: "🏫", title: "University Ranking" },
      { icon: "📚", title: "Course Details" },
      { icon: "✈️", title: "Travel Support" },
    ],
  },
 
];

  return (
    <Box
      sx={{
        p: 1.5,
        minHeight: "400px",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      {/* ================= TOP HEADER BOX ================= */}
      <Box sx={{ mb: 3 }}>
<Box>
  <Typography variant="h3" fontWeight={700}>
    Welcome back, Alex
  </Typography>
</Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Track your global academic journey and upcoming deadlines.
        </Typography>
      </Box>

      {/* ================= TOP HEADER ROW (2 BOXES) ================= */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          mt: 10,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Dashboard Overview
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" fontWeight={600} sx={{ color: "#64748b" }}>
            Progress Flow Section
          </Typography>
        </Box>
      </Box>

      {/* =========================================================
          ✅ NEW FLOW SECTION (ONE ROW SMALL VERSION)
      ========================================================= */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          gap: 2,
          mt: 2,
          overflowX: "auto",
          pb: 2,
        }}
      >
        {/* LINE */}
        <Box
          sx={{
            position: "absolute",
            top: "32px",
            left: "5%",
            right: "5%",
            height: "2px",
            backgroundColor: "#cbd5e1",
            zIndex: 0,
          }}
        />

        {flowData.map((item, index) => (
          <Box
            key={index}
            sx={{
              minWidth: 140,
              textAlign: "center",
              zIndex: 2,
            }}
          >
            {/* CIRCLE */}
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                fontSize: 18,
                fontWeight: 700,
                border: "2px solid #cbd5e1",
                backgroundColor: "#fff",
                transition: "0.3s",

                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  transform: "translateY(-4px)",
                },
              }}
            >
              {item.number}
            </Box>

            <Typography variant="subtitle2" fontWeight={700} sx={{ mt: 1 }}>
              {item.title}
            </Typography>

            <Typography variant="caption" color="text.secondary">
              {item.subtitle}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ================= HEADER + BUTTON ================= */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Latest Updates
        </Typography>

        <Button variant="contained" size="small">
          View All
        </Button>
      </Box>

{/* ================= IMAGE CARDS ================= */}
<Box
  sx={{
    mt: 3,
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    justifyContent: "center",
  }}
>
  {cardData.map((card, index) => (
    <Box
      key={index}
      sx={{
        width: {
          xs: "100%",
          sm: "90%",
          md: "47%",
        },
        // maxWidth: 600,
        p: 1.5, // 👈 reduced padding
        borderRadius: 3,
        backgroundColor: "#fff",
        border: "1px solid #e5e7eb",
        boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* IMAGE (SMALLER HEIGHT) */}
      <Box
        component="img"
        src={card.image}
        sx={{
          width: "100%",
          height: 100, // 👈 reduced height
          objectFit: "cover",
          borderRadius: 2,
        }}
      />

      {/* SMALL HEADING */}
      <Typography sx={{ mt: 1.5, fontWeight: 600, fontSize: 14 }}>
        {card.smallTitle}
      </Typography>

      {/* BIG HEADING */}
      <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>
        {card.bigTitle}
      </Typography>

      {/* ================= FEATURE BOXES ================= */}
      <Box
        sx={{
          mt: 2,
          display: "flex",
          gap: 1.5,
          flexWrap: "wrap",
        }}
      >
        {card.features.slice(0, 2).map((item, i) => (
          <Box
            key={i}
            sx={{
              width: "45%",
              display: "flex",
              alignItems: "center",
              gap: 1,
              p: 1.2, // 👈 smaller padding
              borderRadius: 2,
              boxSizing: "border-box",
            }}
          >
            {/* ICON (SMALLER) */}
            <Box sx={{ fontSize: 15 }}>{item.icon}</Box>

            {/* TEXT (SMALLER) */}
            <Typography fontWeight={600} fontSize={3}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ))}
</Box>

      
    </Box>
  );
}