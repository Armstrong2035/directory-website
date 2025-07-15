import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  Grid,
  Stack,
  Icon,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { KanbanColumn } from "./KanbanColumn";
import SwipeIcon from "@mui/icons-material/Swipe";
import { dashboardTypographyStyles } from "@/styles/typography";

const initialProspects = {
  "Lead In": [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "555-123-4567",
      status: "Lead In",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "555-987-6543",
      status: "Lead In",
    },
  ],
  Contacted: [
    {
      id: "3",
      name: "Peter Jones",
      email: "peter.jones@example.com",
      phone: "555-555-1212",
      status: "Contacted",
    },
  ],
  "Viewing Scheduled": [],
  Interested: [
    {
      id: "4",
      name: "Alice Brown",
      email: "alice.brown@example.com",
      phone: "555-222-3333",
      status: "Interested",
    },
  ],
  "Offer Made": [],
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
    { title: "Contacted", primaryColor: "#F2FFE5", secondaryColor: "#ffffff" },
    {
      title: "Viewing Scheduled",
      primaryColor: "#D6ECF0",
      secondaryColor: "#E9FAFD",
    },
    { title: "Interested", primaryColor: "#D8EDFF", secondaryColor: "#EFF7FF" },
    { title: "Offer Made", primaryColor: "#B2EAB2", secondaryColor: "#CEF2D7" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        py: 3,
        flexDirection: "column",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          sx={{ ...dashboardTypographyStyles.mediumSemiBold, fontSize: "30px" }}
        >
          Manage your leads
        </Typography>

        <Button
          variant="text"
          startIcon={<AddCircleIcon sx={{ color: "#3FB65B" }} />}
          sx={{
            color: "black",
            textTransform: "none", // 👈 disables default uppercase
          }}
        >
          Add Contact
        </Button>
      </Stack>
      <Grid container spacing={2} justifyContent={"center"}>
        {statuses.map((status, index) => (
          <Grid item size={{ lg: 3 }} key={index}>
            <KanbanColumn
              key={status.title}
              status={status}
              prospects={prospectsByStatus[status.title]}
              onDrop={handleDrop}
            />
          </Grid>
        ))}
      </Grid>

      <Stack alignSelf={"center"} alignItems={"center"} sx={{}}>
        <SwipeIcon fontSize="large" sx={{ color: "#979797" }} />
        <Typography>Slide contact card to sort</Typography>
      </Stack>
    </Box>
  );
};

export default Prospects;
