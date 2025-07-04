// components/InventoryFilters.jsx

"use client";

import React from "react";
import {
  Box,
  Stack,
  Typography,
  Select,
  MenuItem,
  IconButton,
  Button,
  Divider,
  useTheme,
  Grid,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { dashboardTypographyStyles } from "@/styles/typography";

const FilterSelect = ({ label, value, onChange, options = [] }) => {
  return (
    <Box px={2} py={1}>
      <Select
        variant="standard"
        disableUnderline
        value={value}
        onChange={onChange}
        displayEmpty
        sx={{ minWidth: 120, ...dashboardTypographyStyles.smallBoldTight }}
      >
        <MenuItem
          disabled
          value=""
          sx={{
            ...dashboardTypographyStyles.smallBoldTight,
            color: "#A0A0A0", // optional: make placeholder text lighter
          }}
        >
          {label}
        </MenuItem>
        {options.map((opt, i) => (
          <MenuItem
            value={opt}
            key={i}
            sx={{ ...dashboardTypographyStyles.smallBold }}
          >
            {opt}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default function DashboardFilters() {
  const [date, setDate] = React.useState("");
  const [listingType, setListingType] = React.useState("");
  const [propertyType, setPropertyType] = React.useState("");

  const resetFilters = () => {
    setDate("");
    setListingType("");
    setPropertyType("");
  };

  return (
    <Grid container alignItems={"center"}>
      <Grid item size={{ xs: 12, sm: 12, md: 4 }} mb={2}>
        <Typography
          sx={{ ...dashboardTypographyStyles.largeBold, color: "#202224" }}
        >
          My Inventory
        </Typography>
        <Typography sx={{ ...dashboardTypographyStyles.tinyLight }}>
          List of all your inventory
        </Typography>
      </Grid>

      <Grid item size={{ xs: 12, sm: 12, md: 8 }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={0}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: "white",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            bgcolor: "#F9F9FB",
            border: "1px solid #D5D5D5",
          }}
        >
          <Box px={2} py={1}>
            <FilterAltOutlinedIcon />
          </Box>

          <Divider orientation="vertical" flexItem />

          <Box px={2} py={1}>
            <Typography sx={dashboardTypographyStyles.smallBoldTight}>
              Filter By
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem />

          <FilterSelect
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            options={["Today", "Last 7 days", "Last 30 days"]}
          />

          <Divider orientation="vertical" flexItem />

          <FilterSelect
            label="Listing Type"
            value={listingType}
            onChange={(e) => setListingType(e.target.value)}
            options={["Rent", "Sale"]}
          />

          <Divider orientation="vertical" flexItem />

          <FilterSelect
            label="Property Type"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            options={["Apartment", "Villa", "Studio"]}
          />

          <Divider orientation="vertical" flexItem />

          <Box px={2} py={1} display="flex" alignItems="center" gap={1}>
            <RefreshOutlinedIcon fontSize="small" sx={{ color: "#EB001B" }} />
            <Typography
              fontSize={14}
              fontWeight={600}
              sx={{ color: "#EB001B", cursor: "pointer" }}
              onClick={resetFilters}
            >
              Reset Filter
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
