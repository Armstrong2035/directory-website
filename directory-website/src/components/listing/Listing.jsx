import Link from "next/link";
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Chip,
  Button,
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
  Apartment as ApartmentIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";

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

const Listing = ({
  listing,
  onViewClick,
  onEditClick,
  onDeleteClick,
  showActions,
}) => {
  const handleViewClick = (e) => {
    e.stopPropagation();
    if (onViewClick) {
      onViewClick(listing);
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (onEditClick) {
      onEditClick(listing);
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDeleteClick) {
      onDeleteClick(listing);
    }
  };

  return (
    <Link
      href={`/listings/${listing.id}`}
      passHref
      style={{ textDecoration: "none" }}
    >
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

            <Typography variant="h6" color="primary" fontWeight="bold">
              {listing.price}
            </Typography>

            <Typography variant="caption" color="text.secondary">
              Listed by {listing.sellerName}
            </Typography>
          </Box>

          {showActions && (
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
                onClick={handleViewClick}
              >
                View
              </Button>
              <Box>
                <IconButton size="small" onClick={handleEditClick}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  color="error"
                  onClick={handleDeleteClick}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default Listing;
