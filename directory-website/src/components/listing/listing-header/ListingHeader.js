import ListingHeroText from "./ListingHeroText";
import ListingImage from "./ListingImage";
import { Box } from "@mui/material";
export default function ListingHeader({ listing }) {
  return (
    <Box sx={{ height: "40%" }}>
      <ListingImage listing={listing} />
      <ListingHeroText listing={listing} />
    </Box>
  );
}
