import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Stack,
  Chip,
  Button,
  Avatar,
  Container,
  Fab,
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
  // Fallback mock data
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
    <Box>
      <Stack spacing={3} justifyContent={"center"} alignItems={"center"}>
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
          {/* <Typography variant="body2" color="text.secondary">
            {displayListings.length} listing
            {displayListings.length !== 1 ? "s" : ""}
          </Typography> */}
        </Box>

        <Container>
          <Grid
            container
            spacing={2}
            justifyContent={"flex-start"}
            sx={{ width: "100%" }}
          >
            {displayListings.map((listing) => (
              <Grid item size={{ xs: 12, md: 6 }} key={listing.id}>
                <Card
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
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

                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{
                          mb: 1,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {listing.title}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          mb: 1,
                        }}
                      >
                        <LocationIcon fontSize="small" color="action" />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          noWrap
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                          title={listing.address}
                        >
                          {listing.address}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontStyle="italic"
                        sx={{ mb: 1 }}
                      >
                        {listing.projectName}
                      </Typography>

                      <Typography
                        variant="h6"
                        color="primary"
                        fontWeight="bold"
                      >
                        {listing.price}
                      </Typography>

                      <Typography variant="caption" color="text.secondary">
                        Listed by {listing.sellerName}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
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
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={onAddClick}
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1000,
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default InventoryGrid;
