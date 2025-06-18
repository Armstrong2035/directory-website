"use client";

import { Button, Box } from "@mui/material";
import { Google } from "@mui/icons-material";

const GoogleSignInButton = ({ onClick, loading, children }) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      onClick={onClick}
      disabled={loading}
      sx={{
        py: 1.5,
        borderColor: "#dadce0",
        color: "#f7fafc",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        "&:hover": {
          borderColor: "#dadce0",
          backgroundColor: "#f8f9fa",
          color: "#3c4043",
        },
        "&:disabled": {
          borderColor: "#dadce0",
          color: "#3c4043",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Google sx={{ fontSize: 20 }} />
        {children}
      </Box>
    </Button>
  );
};

export default GoogleSignInButton;
