import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import ListingForm from "../ListingForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  overflowY: "auto",
  maxHeight: "90vh",
};

const initialState = {
  sellerName: "",
  title: "",
  description: "",
  projectName: "",
  listingType: "",
  address: "",
  propertyType: "",
  price: "",
  email: "",
  phone: "",
  bedrooms: "",
  bathrooms: "",
  squareFeet: "",
};

const validate = (form) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+\d{10,15}$/;

  return (
    form.sellerName &&
    form.title &&
    form.description &&
    form.projectName &&
    form.listingType &&
    form.address &&
    form.propertyType &&
    form.price &&
    emailRegex.test(form.email) &&
    phoneRegex.test(form.phone)
  );
};

const ListingModal = ({
  open,
  onClose,
  onSubmit,
  isLoading,
  title = "Add New Listing",
  submitButtonText = "Submit",
  initialData = null,
  mode = "create", // "create" or "edit"
}) => {
  const [formData, setFormData] = useState(initialData || initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!validate(formData)) {
      alert("Please fill all fields correctly.");
      return;
    }

    onSubmit(formData);
    if (mode === "create") {
      setFormData(initialState);
    }
  };

  const handleClose = () => {
    if (mode === "create") {
      setFormData(initialState);
    }
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          name="sellerName"
          label="Seller Name"
          helperText="This name is for your reference only and won't be visible to others."
          value={formData.sellerName}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          name="title"
          label="Listing Title"
          value={formData.title}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          name="description"
          label="Description"
          placeholder="Enter property description"
          inputProps={{ maxLength: 500 }}
          multiline
          rows={3}
          value={formData.description}
          onChange={handleChange}
          helperText={`${formData.description.length}/500`}
        />

        <TextField
          fullWidth
          margin="normal"
          name="projectName"
          label="Project Name"
          placeholder="(Building, Villa, Community, etc.)"
          value={formData.projectName}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          name="address"
          label="Select your address"
          placeholder="Search for a location in UAE"
          value={formData.address}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          name="price"
          label="Price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          name="phone"
          label="Phone (include country code, e.g., +971...)"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Modular listing form segment */}
        <Box mt={3}>
          <ListingForm formData={formData} setFormData={setFormData} />
        </Box>

        <Box sx={{ mt: 2, textAlign: "right" }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              submitButtonText
            )}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ListingModal;
