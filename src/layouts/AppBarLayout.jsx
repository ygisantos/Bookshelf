import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Tabs, Tab, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useColorScheme } from '@mui/material/styles';
import { appBar, appBarChild } from "../styling/global-style";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function AppBarLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const tabRoutes = ["/trending", "/browse", "/random", "/about"];
  const [tab, setTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const idx = tabRoutes.findIndex(route => location.pathname.startsWith(route));
    setTab(idx === -1 ? 0 : idx);
  }, [location.pathname]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    navigate(tabRoutes[newValue]);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleDrawerNav = (idx) => {
    setTab(idx);
    navigate(tabRoutes[idx]);
    setDrawerOpen(false);
  };

  return (
    <Box sx={appBar}>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ px: 0 }}>
          <Toolbar disableGutters sx={{ width: "100%", px: 2 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BOOKSHELF
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BOOKSHELF
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
              <Tabs
                value={tab}
                onChange={handleTabChange}
                textColor="inherit"
                indicatorColor="secondary"
                sx={{ px: 2 }}
              >
                <Tab label="Trending" />
                <Tab label="Browse" />
                <Tab label="Random" />
                <Tab label="About" />
              </Tabs>
            </Box>
            
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
            >
              <Box sx={{ width: 200 }} role="presentation">
                <List>
                  {['Trending', 'Browse', 'Random', 'About'].map((text, idx) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton selected={tab === idx} onClick={() => handleDrawerNav(idx)}>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={appBarChild}>
        {children}
      </Box>
    </Box>
  );
}
