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
    <Stack direction={"row"} spacing={5} sx={{}}>
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

              <Typography sx={{ ...dashboardTypographyStyles.extraLargeBold }}>
                {card.value}
              </Typography>
            </Box>

            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: card.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <Image src={card.icon} height={35} width={35} alt="card-img" />
            </Box>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
}
