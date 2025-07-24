// components/layout/DashboardLayout.tsx
"use client";

import { useTheme, useMediaQuery } from "@mui/material";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export default function DashboardLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? (
    <MobileLayout>{children}</MobileLayout>
  ) : (
    <DesktopLayout>{children}</DesktopLayout>
  );
}
