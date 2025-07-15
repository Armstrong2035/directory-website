import React, { useState, useMemo } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  Chip,
  Container,
  LinearProgress,
} from "@mui/material";

const Verification = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    propertyType: "",
    community: "",
    mortgageStatus: "",
    municipalityNumber: "",
    areaSqm: "",
    areaSqft: "",
    titleDeedNumber: "",
    titleDeedIssueDate: "",
    name: "",
  });

  const requiredFields = useMemo(
    () => [
      "propertyType",
      "community",
      "mortgageStatus",
      "municipalityNumber",
      "titleDeedNumber",
      "titleDeedIssueDate",
      "name",
    ],
    []
  );

  const verificationScore = useMemo(() => {
    const filledRequiredFields = requiredFields.filter(
      (field) => formData[field]
    );
    return Math.round(
      (filledRequiredFields.length / requiredFields.length) * 100
    );
  }, [formData, requiredFields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const renderField = (
    label,
    name,
    type = "text",
    options = [],
    isOptional = false
  ) => {
    const displayValue = formData[name] || "";

    if (type === "dropdown") {
      return (
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            name={name}
            value={formData[name]}
            onChange={handleChange}
            label={label}
            disabled={!isEditing}
          >
            <MenuItem value="">
              <em>Select...</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }

    return (
      <TextField
        type={type}
        variant={"filled"}
        name={name}
        label={label}
        value={displayValue}
        onChange={handleChange}
        fullWidth
        disabled={!isEditing}
        helperText={isOptional ? "Optional" : ""}
        InputLabelProps={{ shrink: true }}
        placeholder={!isEditing && !displayValue ? "N/A" : ""}
      />
    );
  };

  const propertyTypeOptions = [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "townhouse", label: "Townhouse" },
  ];

  const mortgageStatusOptions = [
    { value: "freehold", label: "Freehold" },
    { value: "mortgaged", label: "Mortgaged" },
  ];

  return (
    <Box sx={{ height: "100%", p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <LinearProgress
            variant="determinate"
            value={verificationScore}
            sx={{ width: "100%", height: "8px", borderRadius: 2 }}
          />

          <Typography
            variant="caption"
            color="text.secondary"
            textAlign={"center"}
          >
            {` ${verificationScore}% complete`}
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, md: 6 }}>
          {renderField("Name", "name")}
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          {renderField("Title Deed Number", "titleDeedNumber", "number")}
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          {renderField("Title Deed Issue Date", "titleDeedIssueDate", "date")}
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }}>
          {renderField(
            "Property Type",
            "propertyType",
            "dropdown",
            propertyTypeOptions
          )}
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          {renderField("Community", "community")}
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          {renderField(
            "Mortgage Status",
            "mortgageStatus",
            "dropdown",
            mortgageStatusOptions
          )}
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          {renderField("Municipality Number", "municipalityNumber", "number")}
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          {renderField("Area (sqm)", "areaSqm", "number", [], true)}
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          {renderField("Area (sqft)", "areaSqft", "number", [], true)}
        </Grid>
      </Grid>

      <Button variant="contained" onClick={toggleEdit} sx={{ mt: 3 }}>
        {isEditing ? "Save" : "Edit"}
      </Button>
    </Box>
  );
};

export default Verification;
