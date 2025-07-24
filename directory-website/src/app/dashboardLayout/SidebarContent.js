// components/layout/SidebarContent.tsx
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  HistoryToggleOff as HistoryToggleOffIcon,
  Checklist as ChecklistIcon,
  ForumOutlined as ForumOutlinedIcon,
  CalendarMonthOutlined as CalendarMonthOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  PowerSettingsNewOutlined as PowerSettingsNewOutlinedIcon,
} from "@mui/icons-material";
import { dashboardTypographyStyles } from "@/styles/typography";

const navItems = [
  { text: "Dashboard", icon: <HistoryToggleOffIcon />, href: "/dashboard" },
  { text: "My Inventory", icon: <ChecklistIcon />, href: "/inventory" },
  { text: "Inbox", icon: <ForumOutlinedIcon />, href: "/inbox" },
  { text: "Calendar", icon: <CalendarMonthOutlinedIcon />, href: "/calendar" },
];

const secondaryNavItems = [
  { text: "Settings", icon: <SettingsOutlinedIcon />, href: "/settings" },
  { text: "Logout", icon: <PowerSettingsNewOutlinedIcon />, href: "/logout" },
];

export default function SidebarContent() {
  const pathname = usePathname();

  const renderItems = (items) =>
    items.map((item) => (
      <ListItem key={item.text} sx={{ pr: 2, pl: 2 }}>
        <ListItemButton
          component={Link}
          href={item.href}
          selected={pathname === item.href}
          sx={{
            "&.Mui-selected": {
              bgcolor: "#3FB65B",
              "&:hover": { bgcolor: "#3FB65B" },
            },
            "&:hover": { bgcolor: "transparent" },
          }}
        >
          <ListItemIcon
            sx={{ color: pathname === item.href ? "white" : "inherit" }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{
              ...dashboardTypographyStyles.smallSemiBold,
              color: pathname === item.href ? "white" : "inherit",
            }}
          />
        </ListItemButton>
      </ListItem>
    ));

  return (
    <>
      <List>{renderItems(navItems)}</List>
      <Divider />
      <List>{renderItems(secondaryNavItems)}</List>
    </>
  );
}
