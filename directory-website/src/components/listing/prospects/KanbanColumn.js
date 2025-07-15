import { dashboardTypographyStyles } from "@/styles/typography";
import { Paper, Typography, Box, Chip, Icon, Avatar } from "@mui/material";
import { motion, statsBuffer } from "framer-motion";

export const KanbanColumn = ({ status, prospects, onDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const prospectId = e.dataTransfer.getData("prospectId");
    onDrop(prospectId, status.title);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        minHeight: "100%",
        p: 2,
        backgroundColor: "#f4f5f7",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        backgroundColor: status.primaryColor,
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Typography
        variant="h6"
        sx={{
          ...dashboardTypographyStyles.smallBoldTight,
          mb: 2,
          fontWeight: "bold",
        }}
      >
        {status.title} ({prospects.length})
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        {prospects.map((prospect) => (
          <motion.div
            key={prospect.id}
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("prospectId", prospect.id)
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ cursor: "grab" }}
          >
            <Paper
              sx={{
                p: 1.5,
                mb: 1.5,
                borderRadius: 1,
                boxShadow: 1,
                backgroundColor: status.secondaryColor,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Avatar />
              <Typography sx={{ ...dashboardTypographyStyles.mediumSemiBold }}>
                {prospect.name}
              </Typography>
              <Typography sx={{ ...dashboardTypographyStyles.smallSemiBold }}>
                {prospect.email}
              </Typography>
              <Typography sx={{ ...dashboardTypographyStyles.smallSemiBold }}>
                {prospect.phone}
              </Typography>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Paper>
  );
};
