import { dashboardTypographyStyles } from "@/styles/typography";
import { Stack, Typography, Box, Icon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocationPinIcon from "@mui/icons-material/LocationPin";
export default function ListingHeroText({ listing }) {
  console.log(listing);
  return (
    <Stack spacing={3} sx={{ mt: 2, height: "50%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
        }}
      >
        <HomeIcon />
        <Typography sx={{ ...dashboardTypographyStyles.largeSemiBold }}>
          {listing.name}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
        }}
      >
        <LocationPinIcon />
        <Typography sx={{ ...dashboardTypographyStyles.smallSemiBold }}>
          {listing.location}
        </Typography>
      </Box>
      <Typography
        sx={{
          ...dashboardTypographyStyles.largeSemiBold,
          color: "#202224",
          fontSize: "30px",
        }}
      >
        {listing.price}
      </Typography>
      {/* <Typography>{listing.type}</Typography> */}
    </Stack>
  );
}
