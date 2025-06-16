import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Stack,
  Chip,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import {
  Add as AddIcon,
  LocationOn as LocationIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
  Apartment as ApartmentIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";

const InventoryGrid = ({ listings = [], onAddClick }) => {
  // Mock data for demonstration
  const mockListings = [
    {
      id: 1,
      title: "Luxurious 3BR Penthouse with Burj Khalifa View",
      address: "Sheikh Mohammed bin Rashid Boulevard, Downtown Dubai",
      description:
        "Stunning penthouse apartment featuring floor-to-ceiling windows, premium finishes, and breathtaking views of Burj Khalifa.",
      projectName: "Downtown Dubai Residences",
      price: "AED 4,500,000",
      propertyType: "Apartment",
      listingType: "Sale",
      sellerName: "Ahmed Al-Mansouri",
      phone: "+971 50 123 4567",
    },
    {
      id: 2,
      title: "Modern 4BR Villa in Gated Community",
      address: "Al Qudra Road, Arabian Ranches",
      description:
        "Beautiful contemporary villa with private garden and swimming pool. Features include marble flooring, fitted wardrobes.",
      projectName: "Arabian Ranches Phase 3",
      price: "AED 180,000/year",
      propertyType: "Villa",
      listingType: "Rent",
      sellerName: "Sarah Johnson",
      phone: "+971 55 987 6543",
    },
    {
      id: 3,
      title: "Prime Commercial Office Space - Business Bay",
      address: "Business Bay, Sheikh Zayed Road",
      description:
        "Grade A office space with stunning canal views. Fully fitted with modern amenities, central AC, high-speed elevators.",
      projectName: "Bay Square Tower",
      price: "AED 85 per sq ft/year",
      propertyType: "Office",
      listingType: "Rent",
      sellerName: "Mohammad Hassan",
      phone: "+971 52 456 7890",
    },
  ];

  const displayListings = listings.length > 0 ? listings : mockListings;

  const getPropertyIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "villa":
        return <HomeIcon />;
      case "apartment":
        return <ApartmentIcon />;
      case "office":
        return <BusinessIcon />;
      default:
        return <HomeIcon />;
    }
  };

  const getListingTypeColor = (type) => {
    return type?.toLowerCase() === "sale" ? "success" : "primary";
  };

  return (
    <Stack spacing={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="primary">
          My Inventory
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {displayListings.length} listing
          {displayListings.length !== 1 ? "s" : ""}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Add New Listing Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            onClick={onAddClick}
            sx={{
              height: 300,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "2px dashed #e0e0e0",
              backgroundColor: "#fafafa",
              transition: "all 0.3s ease",
              padding: 4,
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#1976d2",
                transform: "translateY(-4px)",
                boxShadow: "0 8px 25px rgba(25, 118, 210, 0.15)",
              },
            }}
          >
            <Avatar
              sx={{
                width: 60,
                height: 60,
                backgroundColor: "primary.main",
                mb: 2,
              }}
            >
              <AddIcon fontSize="large" />
            </Avatar>
            <Typography variant="h6" fontWeight="bold" color="primary">
              Add New Listing
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Click to create a new property listing
            </Typography>
          </Card>
        </Grid>

        {/* Existing Listings */}
        {displayListings.map((listing) => (
          <Grid item xs={12} sm={6} md={4} key={listing.id}>
            <Card
              sx={{
                height: 300,
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                {/* Header with Property Type and Listing Type */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {getPropertyIcon(listing.propertyType)}
                    <Typography variant="caption" color="text.secondary">
                      {listing.propertyType}
                    </Typography>
                  </Box>
                  <Chip
                    label={listing.listingType}
                    size="small"
                    color={getListingTypeColor(listing.listingType)}
                    variant="outlined"
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mb: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    lineHeight: 1.2,
                  }}
                >
                  {listing.title}
                </Typography>

                {/* Location */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 0.5,
                    mb: 1,
                  }}
                >
                  <LocationIcon
                    fontSize="small"
                    color="action"
                    sx={{ mt: 0.2 }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {listing.address}
                  </Typography>
                </Box>

                {/* Project Name */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1, fontStyle: "italic" }}
                >
                  {listing.projectName}
                </Typography>

                {/* Price */}
                <Typography variant="h6" color="primary" fontWeight="bold">
                  {listing.price}
                </Typography>

                {/* Seller Info */}
                <Typography variant="caption" color="text.secondary">
                  Listed by: {listing.sellerName}
                </Typography>
              </CardContent>

              <Divider />

              {/* Action Buttons */}
              <CardActions
                sx={{ justifyContent: "space-between", px: 2, py: 1 }}
              >
                <Button
                  size="small"
                  startIcon={<ViewIcon />}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("View listing:", listing.id);
                  }}
                >
                  View
                </Button>
                <Box>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Edit listing:", listing.id);
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Delete listing:", listing.id);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default InventoryGrid;
