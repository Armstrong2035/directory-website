"use client";


import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  Avatar, 
  Menu, 
  MenuItem, 
  ListItemText, 
  Divider,
  IconButton,
  Box,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function AuthButtons() {
  const router = useRouter();
  const auth = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await auth.logout();
    router.refresh();
    handleClose();
  };

  console.log("Auth", auth)

  return (
    <div>
      {!!auth?.user && (
        <>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar>
              {!!auth.currentUser.photoURL && (
                <Image
                  src={auth.currentUser.photoURL}
                  alt={`${auth.currentUser.displayName} avatar`}
                  width={70}
                  height={70}
                />
              )}
              <Typography variant="body2" sx={{ color: 'primary.dark' }}>
                {(auth.currentUser.displayName || auth.currentUser.email)?.[0]}
              </Typography>
            </Avatar>
          </IconButton>
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  {auth.currentUser.displayName}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {auth.currentUser.email}
                </Typography>
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem component={Link} href="/account">
              <ListItemText primary="My Account" />
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </MenuItem>
          </Menu>
        </>
      )}
      {!auth?.currentUser && (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Link
            href="/signin"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Login
          </Link>
          <Box sx={{ height: 32, width: 1, bgcolor: 'rgba(255, 255, 255, 0.5)' }} />
          <Link
            href="/signup"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Signup
          </Link>
        </Box>
      )}
    </div>
  );
}
