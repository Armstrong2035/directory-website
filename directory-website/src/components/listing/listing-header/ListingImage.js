import Image from "next/image";
import { Box } from "@mui/material";

export default function ListingImage({ listing }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 200, // or whatever height you want
        borderRadius: 2,
        overflow: "hidden",
        mt: 4,
      }}
    >
      <Image
        src={listing.image} // corrected key
        alt={listing.name}
        fill // fills parent Box
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
