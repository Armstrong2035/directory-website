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
    const displayValue = formData[name] || "N/A";

    if (isEditing) {
      if (type === "dropdown") {
        return (
          <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
              name={name}
              value={formData[name]}
              onChange={handleChange}
              label={label}
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
          name={name}
          label={label}
          value={formData[name]}
          onChange={handleChange}
          fullWidth
          helperText={isOptional ? "Optional" : ""}
        />
      );
    }

    return (
      <div>
        <Typography variant="caption" color="textSecondary">
          {label}
        </Typography>
        <Typography variant="body1">{displayValue}</Typography>
      </div>
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
    <Paper elevation={3} sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={verificationScore}
            size={60}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`Verification ${verificationScore}% complete`}
            </Typography>
          </Box>
        </Box>
        <Button variant="contained" onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid item size={{ xs: 12 }}>
          {renderField("Name", "name")}
        </Grid>
        <Grid item size={{ xs: 12 }}>
          {renderField("Title Deed Number", "titleDeedNumber", "number")}
        </Grid>
        <Grid item size={{ xs: 12 }}>
          {renderField("Title Deed Issue Date", "titleDeedIssueDate", "date")}
        </Grid>

        <Grid item size={{ xs: 12 }}>
          {renderField(
            "Property Type",
            "propertyType",
            "dropdown",
            propertyTypeOptions
          )}
        </Grid>
        <Grid item size={{ xs: 12 }}>
          {renderField("Community", "community")}
        </Grid>
        <Grid item size={{ xs: 12 }}>
          {renderField(
            "Mortgage Status",
            "mortgageStatus",
            "dropdown",
            mortgageStatusOptions
          )}
        </Grid>
        <Grid item size={{ xs: 12 }}>
          {renderField("Municipality Number", "municipalityNumber", "number")}
        </Grid>
        <Grid item size={{ xs: 12 }}>
          {renderField("Area (sqm)", "areaSqm", "number", [], true)}
        </Grid>
        <Grid item size={{ xs: 12 }}>
          {renderField("Area (sqft)", "areaSqft", "number", [], true)}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Verification;
