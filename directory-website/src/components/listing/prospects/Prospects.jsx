import React, { useState } from "react";
import { Box, Typography, Paper, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";

const initialProspects = {
  "Lead In": [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      status: "Lead In",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Lead In",
    },
  ],
  Contacted: [
    {
      id: "3",
      name: "Peter Jones",
      email: "peter.jones@example.com",
      status: "Contacted",
    },
  ],
  "Viewing Scheduled": [],
  Interested: [
    {
      id: "4",
      name: "Alice Brown",
      email: "alice.brown@example.com",
      status: "Interested",
    },
  ],
  "Offer Made": [],
};

const KanbanColumn = ({ title, prospects, onDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const prospectId = e.dataTransfer.getData("prospectId");
    onDrop(prospectId, title);
  };

  return (
    <Paper
      sx={{
        minWidth: 280,
        width: "100%",
        p: 2,
        backgroundColor: "#f4f5f7",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        {title} ({prospects.length})
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
            <Paper sx={{ p: 1.5, mb: 1.5, borderRadius: 1, boxShadow: 1 }}>
              <Typography variant="subtitle1" fontWeight="medium">
                {prospect.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {prospect.email}
              </Typography>
              <Chip label={prospect.status} size="small" sx={{ mt: 1 }} />
            </Paper>
          </motion.div>
        ))}
      </Box>
      <Button variant="outlined" sx={{ mt: 2 }}>
        Add Prospect
      </Button>
    </Paper>
  );
};

const Prospects = () => {
  const [prospectsByStatus, setProspectsByStatus] = useState(initialProspects);

  const handleDrop = (prospectId, newStatus) => {
    let foundProspect = null;
    let oldStatus = null;

    // Find the prospect and its old status
    for (const status in prospectsByStatus) {
      const index = prospectsByStatus[status].findIndex(
        (p) => p.id === prospectId
      );
      if (index > -1) {
        foundProspect = prospectsByStatus[status][index];
        oldStatus = status;
        break;
      }
    }

    if (foundProspect && oldStatus !== newStatus) {
      setProspectsByStatus((prev) => {
        const newStates = { ...prev };

        // Remove from old status
        newStates[oldStatus] = newStates[oldStatus].filter(
          (p) => p.id !== prospectId
        );

        // Add to new status and update its status property
        const updatedProspect = { ...foundProspect, status: newStatus };
        newStates[newStatus] = [...newStates[newStatus], updatedProspect];

        return newStates;
      });
    }
  };

  const statuses = [
    "Contacted",
    "Viewing Scheduled",
    "Interested",
    "Offer Made",
  ];

  return (
    <Box sx={{ display: "flex", gap: 3, p: 3, overflowX: "auto" }}>
      {statuses.map((status) => (
        <KanbanColumn
          key={status}
          title={status}
          prospects={prospectsByStatus[status]}
          onDrop={handleDrop}
        />
      ))}
    </Box>
  );
};

export default Prospects;
