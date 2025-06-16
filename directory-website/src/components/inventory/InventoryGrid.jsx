import React from "react";
import { Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const InventoryGrid = ({ listings, onAddClick }) => {
  return (
    <Grid container spacing={2}>
      {/* Add New Listing Card */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          onClick={onAddClick}
          sx={{
            height: "100%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 150,
          }}
        >
          <IconButton>
            <AddIcon fontSize="large" />
          </IconButton>
        </Card>
      </Grid>

      {/* Render Listings */}
      {listings.map((listing, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{listing.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default InventoryGrid;
