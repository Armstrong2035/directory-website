"use client"

import { useState, useRef } from "react"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import { createListing } from "../../lib/listings"
import { CircularProgress } from "@mui/material"
import { useAuth } from "../../contexts/AuthContext"


const UploadArea = styled(Box)(({ theme }) => ({
  border: "2px dashed #ccc",
  height: "180px",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(4, 4),
  textAlign: "center",
  cursor: "pointer",
  transition: "border-color 0.3s ease",
  "&:hover": {
    borderColor: "#999",
  },
}))

const HiddenInput = styled("input")({
  display: "none",
})


export default function AddListingModal({ open, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    sellerName: "",
    area: "",
    projectName: "",
    price: "",
    email: "",
    phoneNumber: "",
    listingType: "",
    description: "",
  })


  const auth = useAuth();
  const user = auth.user;

  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    })
  }

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = async () => {

    setIsLoading(true);
  

    setSelectedFile(null)
    try {
      const { id, error: createError } = await createListing(
        { ...formData, image: selectedFile },
        user.uid,
        user
      );

      if (createError) {
        alert(`Error creating listing: ${createError}`);
        setIsLoading(false);
        return;
      }

      alert("Listing created successfully");
      
      handleInventoryClose();
      fetchAllListings(); // Refresh the listings
    } catch (error) {
      console.error("Error in handleAddInventoryListing:", error);
      alert(`Error creating listing: ${error.message}`);
      setIsLoading(false);
    } finally {
      setFormData({
        sellerName: "",
        area: "",
        projectName: "",
        price: "",
        email: "",
        phoneNumber: "",
        bath: "",
        beds: "",
        listingType: "",
        description: "",
      })
      setIsLoading(false);
    }
  }

  if (isLoading) {
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
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxHeight: "90vh",
          width: "600px",
        },
      }}
    >
      <DialogTitle sx={{ pb: 1, px: 3, pt: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "20px" }}>
            Add New Inventory Listing
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pb: 3 }}>
        <Box sx={{ mt: 2 }}>
          {/* Row 1: Seller Name and Area */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item size={6}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
                Seller Name
              </Typography>
              <TextField
                fullWidth
                placeholder="This name is for your reference only and won't be visible to others."
                value={formData.sellerName}
                onChange={handleInputChange("sellerName")}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f8f9fa",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item size={6}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
                Area(sqft)
              </Typography>
              <TextField
                fullWidth
                placeholder="Area Sqft"
                value={formData.area}
                onChange={handleInputChange("area")}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f8f9fa",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* Row 2: Project Name and Price */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item size={6}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
                Project Name
              </Typography>
              <TextField
                fullWidth
                value={formData.projectName}
                onChange={handleInputChange("projectName")}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f8f9fa",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item size={6}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
                Price
              </Typography>
              <TextField
                fullWidth
                placeholder="Selling price"
                value={formData.price}
                onChange={handleInputChange("price")}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f8f9fa",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* Row 3: Email and Phone Number */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item size={6}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
                Email
              </Typography>
              <TextField
                fullWidth
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleInputChange("email")}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f8f9fa",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item size={6}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
                Phone Number
              </Typography>
              <TextField
                fullWidth
                placeholder="Phone Number(include Country Code, e.g., +971)"
                value={formData.phoneNumber}
                onChange={handleInputChange("phoneNumber")}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f8f9fa",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

           {/* Row 3: Bath and Beds */}
           <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item size={6}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
                Bath
              </Typography>
              <TextField
                fullWidth
                placeholder="Number of Bathrooms"
                type="email"
                value={formData.bath}
                onChange={handleInputChange("email")}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f8f9fa",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item size={6}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
                Beds
              </Typography>
              <TextField
                fullWidth
                placeholder="Number of Beds"
                value={formData.beds}
                onChange={handleInputChange("beds")}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f8f9fa",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* Row 4: Listing Type */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
              Listing Type
            </Typography>
            <FormControl fullWidth size="small">
              <Select
                value={formData.listingType}
                onChange={handleInputChange("listingType")}
                displayEmpty
                sx={{
                  backgroundColor: "#f8f9fa",
                  "& fieldset": {
                    borderColor: "#e0e0e0",
                  },
                }}
              >
                <MenuItem value="" disabled>
                  <Typography color="text.secondary">Rent, Buy</Typography>
                </MenuItem>
                <MenuItem value="rent">Rent</MenuItem>
                <MenuItem value="buy">Buy</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Row 5: Description */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
              Description
            </Typography>
            <TextField
              fullWidth
              placeholder="Other details"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleInputChange("description")}
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#f8f9fa",
                  "& fieldset": {
                    borderColor: "#e0e0e0",
                  },
                },
              }}
            />
          </Box>

          {/* Row 6: Upload Section */}
          <Box sx={{ mb: 4, width: "200px", marginX: "auto" }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 500, color: "#333" }}>
              Upload Listing Image
            </Typography>
            <UploadArea onClick={handleUploadClick}>
              <CameraAltIcon sx={{ fontSize: 40, color: "#ccc", mb: 1 }} />
              <Typography variant="body2" sx={{ color: "#2196F3", fontWeight: 500, mb: 0.5 }}>
                Upload Photo
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {selectedFile ? selectedFile.name : "JPG, PNG File"}
              </Typography>
            </UploadArea>
            <HiddenInput
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              onChange={handleFileSelect}
            />
          </Box>

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{
              bgcolor: "#4CAF50",
              py: 1.5,
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#45a049",
              },
            }}
          >
            Create Listing
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
