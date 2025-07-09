// import React from "react";
// import { Add as AddIcon } from "@mui/icons-material";
// import Listing from "./Listing";
// import {
//   Box,
//   Grid,
//   Stack,
//   Container,
//   Fab,
//   Typography,
//   Button,
// } from "@mui/material";

// const ListingGrid = ({
//   listings = [],
//   onAddClick,
//   title = "Listings",
//   showAddButton = true,
//   showActions = false,
//   onViewClick,
//   onEditClick,
//   onDeleteClick,
//   emptyMessage = "No listings found",
// }) => {
//   // const mockListings = [
//   //   {
//   //     id: 1,
//   //     title: "Luxurious 3BR Penthouse with Burj Khalifa View",
//   //     address: "Sheikh Mohammed bin Rashid Boulevard, Downtown Dubai",
//   //     description:
//   //       "Stunning penthouse apartment featuring floor-to-ceiling windows, premium finishes, and breathtaking views of Burj Khalifa.",
//   //     projectName: "Downtown Dubai Residences",
//   //     price: "AED 4,500,000",
//   //     propertyType: "Apartment",
//   //     listingType: "Sale",
//   //     sellerName: "Ahmed Al-Mansouri",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Modern 4BR Villa in Gated Community",
//   //     address: "Al Qudra Road, Arabian Ranches",
//   //     description:
//   //       "Beautiful contemporary villa with private garden and swimming pool. Features include marble flooring, fitted wardrobes.",
//   //     projectName: "Arabian Ranches Phase 3",
//   //     price: "AED 180,000/year",
//   //     propertyType: "Villa",
//   //     listingType: "Rent",
//   //     sellerName: "Sarah Johnson",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Prime Commercial Office Space - Business Bay",
//   //     address: "Business Bay, Sheikh Zayed Road",
//   //     description:
//   //       "Grade A office space with stunning canal views. Fully fitted with modern amenities, central AC, high-speed elevators.",
//   //     projectName: "Bay Square Tower",
//   //     price: "AED 85 per sq ft/year",
//   //     propertyType: "Office",
//   //     listingType: "Rent",
//   //     sellerName: "Mohammad Hassan",
//   //   },
//   // ];

//   const displayListings = listings;

//   const handleViewClick = (listing) => {
//     if (onViewClick) {
//       onViewClick(listing);
//     } else {
//       console.log("View listing:", listing.id);
//     }
//   };

//   const handleEditClick = (listing) => {
//     if (onEditClick) {
//       onEditClick(listing);
//     } else {
//       console.log("Edit listing:", listing.id);
//     }
//   };

//   const handleDeleteClick = (listing) => {
//     if (onDeleteClick) {
//       onDeleteClick(listing);
//     } else {
//       console.log("Delete listing:", listing.id);
//     }
//   };

//   return (
//     <Box>
//       <Stack spacing={3} justifyContent={"center"} alignItems={"center"}>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Typography variant="h4" fontWeight="bold" color="primary">
//             {title}
//           </Typography>
//         </Box>

//         <Container>
//           {displayListings.length === 0 ? (
//             <Box
//               sx={{
//                 textAlign: "center",
//                 py: 8,
//                 color: "text.secondary",
//               }}
//             >
//               <Typography variant="h6" gutterBottom>
//                 {emptyMessage}
//               </Typography>
//               {showAddButton && onAddClick && (
//                 <Button
//                   variant="contained"
//                   startIcon={<AddIcon />}
//                   onClick={onAddClick}
//                   sx={{ mt: 2 }}
//                 >
//                   Add New Listing
//                 </Button>
//               )}
//             </Box>
//           ) : (
//             <Grid container spacing={2} justifyContent={"flex-start"}>
//               {displayListings.map((listing) => (
//                 <Grid
//                   item
//                   size={{ xs: 12, sm: 6, md: 4, lg: 6 }}
//                   key={listing.id}
//                 >
//                   <Listing
//                     listing={listing}
//                     onViewClick={handleViewClick}
//                     onEditClick={handleEditClick}
//                     onDeleteClick={handleDeleteClick}
//                     showActions={showActions}
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           )}
//         </Container>
//       </Stack>

//       {/* Floating Action Button */}
//       {showAddButton && onAddClick && (
//         <Fab
//           color="primary"
//           aria-label="add"
//           onClick={onAddClick}
//           sx={{
//             position: "fixed",
//             bottom: 32,
//             right: 32,
//             zIndex: 1000,
//           }}
//         >
//           <AddIcon />
//         </Fab>
//       )}
//     </Box>
//   );
// };

// export default ListingGrid;
