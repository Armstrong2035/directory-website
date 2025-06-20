// components/ListingForm.js
import React from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import {
  LISTING_TYPES,
  BEDROOM_OPTIONS,
  BATHROOM_OPTIONS,
  getPropertyTypeOptions,
} from "./inventory/constants/propertyTypes";

const ListingForm = ({ formData, setFormData }) => {
  const { listingType, propertyType, bedrooms, bathrooms, squareFeet } =
    formData;
  const propertyOptions = getPropertyTypeOptions(listingType);
  const isResidential =
    listingType?.toLowerCase() === "rent" ||
    listingType?.toLowerCase() === "buy";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item size={{ sm: 12 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Listing Type
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {LISTING_TYPES.map((type) => (
              <Button
                key={type}
                variant={listingType === type ? "contained" : "outlined"}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, listingType: type }))
                }
                sx={{ textTransform: "none", whiteSpace: "nowrap" }}
              >
                {type}
              </Button>
            ))}
          </Box>
        </Grid>

        {listingType && (
          <Grid item size={{ sm: 12 }}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              mt={2}
              gutterBottom
            >
              Property Type
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {propertyOptions.map((type) => (
                <Button
                  key={type}
                  variant={propertyType === type ? "contained" : "outlined"}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, propertyType: type }))
                  }
                  sx={{ textTransform: "none", whiteSpace: "nowrap" }}
                >
                  {type}
                </Button>
              ))}
            </Box>
          </Grid>
        )}

        {isResidential && (
          <>
            <Grid item size={{ sm: 6, lg: 4 }}>
              <FormControl fullWidth>
                <InputLabel>Bedrooms</InputLabel>
                <Select
                  name="bedrooms"
                  value={bedrooms}
                  label="Bedrooms"
                  onChange={handleChange}
                >
                  {BEDROOM_OPTIONS.map((b) => (
                    <MenuItem key={b} value={b}>
                      {b}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item size={{ sm: 6, lg: 4 }}>
              <FormControl fullWidth>
                <InputLabel>Bathrooms</InputLabel>
                <Select
                  name="bathrooms"
                  value={bathrooms}
                  label="Bathrooms"
                  onChange={handleChange}
                >
                  {BATHROOM_OPTIONS.map((b) => (
                    <MenuItem key={b} value={b}>
                      {b}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </>
        )}

        {!isResidential && (
          <Grid item size={{ sm: 12, lg: 6 }}>
            <TextField
              fullWidth
              label="Square Feet"
              name="squareFeet"
              value={squareFeet}
              onChange={handleChange}
              type="number"
              inputProps={{ min: 0 }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ListingForm;
