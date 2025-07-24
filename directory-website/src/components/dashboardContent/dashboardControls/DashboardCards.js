import { Stack, Card, Typography, Box } from "@mui/material";
import cubes from "../../../../public/icons/cubes.png"; // Adjust the path as necessary
import icon from "../../../../public/icons/icon.png";
import Image from "next/image";
import { dashboardTypographyStyles } from "@/styles/typography";

export default function DashboardCards() {
  const cards = [
    {
      title: "Total Inventory",
      value: "5",
      color: "rgba(130, 128, 255, 0.08)",
      icon: cubes, // Replace with actual icon component
    },
    {
      title: "Total Prospects",
      value: "25",
      color: "rgba(254, 197, 61, 0.08)",
      icon: icon, // Replace with actual icon component
    },
  ];

  return (
    <Stack direction={"row"} spacing={1} sx={{}}>
      {cards.map((card, index) => (
        <Card sx={{ p: 2 }} key={index}>
          <Stack direction={"row"} spacing={5}>
            <Box>
              <Typography
                sx={{
                  ...dashboardTypographyStyles.mediumSemiBold,
                  color: "#202224",
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  ...dashboardTypographyStyles.extraLargeBold,
                  fontSize: {
                    xs: "30px", // Override for sma ll screens
                    md: "70px", // Override for medium screens
                  },
                }}
              >
                {card.value}
              </Typography>
            </Box>

            <Box
              sx={{
                width: { md: 60, xs: 20 },
                height: { md: 60, xs: 20 },
                bgcolor: card.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image src={card.icon} heighht={35} width={35} alt="card-img" />
            </Box>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
}
