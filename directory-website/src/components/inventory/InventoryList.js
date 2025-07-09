// components/InventoryTable.jsx

"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Avatar,
  Box,
  Chip,
  Stack,
  Button,
  AppBar,
  Toolbar,
  CircularProgress,
} from "@mui/material";
import { dashboardTypographyStyles } from "@/styles/typography";
import Image from "next/image";
import ListingModal from "./ListingModal";
import { useAuth } from "../../contexts/AuthContext";
import { getListings } from "../../lib/listings";


const ListingTypeChip = ({ type }) => {
  const color = type === "Rent" ? "#4379EE" : "#FCBE2D";
  return (
    <Chip
      label={type}
      sx={{
        bgcolor: color,
        color: "white",
        fontWeight: 600,
        fontSize: 14,
        borderRadius: 2,
        px: 2,
      }}
    />
  );
};

export default function InventoryTable() {
const [inventoryListings, setInventoryListings] = useState([])
const [loading, setLoading] = useState(false)

  const auth = useAuth();
  const user = auth.user;


console.log("User", user)

  useEffect(() => {
    setLoading(true);
    if (user) {
      const fetchAllListings = async () => {
       
        const { listings: allListings, error } = await getListings(user.uid); // No userId = get all listings
    
        console.log(" Listings", allListings)
        if (error) {
          console.error("Error fetching listings:", error);
        } else {
          setInventoryListings(allListings);
        }
    
        setLoading(false);
      };

      fetchAllListings()
    }
  }, [user, ]);


  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(255,255,255,0.7)",
          zIndex: 9999,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }



  return (
    <Paper
      sx={{
        borderRadius: 3,
        overflow: "hidden", // Paper should not scroll
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative", // Keep relative positioning for fixed button
      }}
    >
      {/* Scrollable content area */}
      <Box
        sx={{
          p: 3,
          pb: 10, // Add padding bottom to prevent content from going under the fixed button
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 2, color: "#202224" }}
        >
          Inventory Details
        </Typography>

        <TableContainer
          sx={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow sx={{ bgcolor: "#F5F7FA" }}>
                <TableCell sx={{ ...dashboardTypographyStyles.smallBoldTight }}>
                  Building Name
                </TableCell>
                <TableCell sx={{ ...dashboardTypographyStyles.smallBold }}>
                  Location
                </TableCell>
                <TableCell sx={{ ...dashboardTypographyStyles.smallBold }}>
                  Beds
                </TableCell>
                <TableCell sx={{ ...dashboardTypographyStyles.smallBold }}>
                  Bath
                </TableCell>
                <TableCell sx={{ ...dashboardTypographyStyles.smallBold }}>
                  Price
                </TableCell>
                <TableCell sx={{ ...dashboardTypographyStyles.smallBold }}>
                  Listing Type
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventoryListings.map((listing, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        src={listing.image}
                        alt={listing.sellerName}
                        variant="rounded"
                        sx={{ width: 48, height: 48 }}
                      />
                      <Typography
                        sx={{ ...dashboardTypographyStyles.smallBold }}
                      >
                        {listing.sellerName}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{ ...dashboardTypographyStyles.smallSemiBold }}
                    >
                      {listing.location}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{ ...dashboardTypographyStyles.smallSemiBold }}
                    >
                      {listing.beds}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{ ...dashboardTypographyStyles.smallSemiBold }}
                    >
                      {listing.bath}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{ ...dashboardTypographyStyles.smallSemiBold }}
                    >
                      {listing.price}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ListingTypeChip type={listing.listingType} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <ListingModal />
    </Paper>
  );
}
