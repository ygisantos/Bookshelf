import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Tabs, Tab, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText,ListItemIcon,Divider } from "@mui/material";
import { Menu as MenuIcon, TrendingUp, Search, Shuffle, Person, MenuBook, Close} from '@mui/icons-material';
import { appBar, appBarChild, logoStyles, tabsStyles, drawerHeaderStyles, listItemStyles } from "../styling/global-style";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AppBarLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const tabRoutes = ["/trending", "/browse", "/random", "/about"];
  const tabData = [
    { label: "Trending", icon: <TrendingUp fontSize="small" /> },
    { label: "Browse", icon: <Search fontSize="small" /> },
    { label: "Random", icon: <Shuffle fontSize="small" /> },
    { label: "About", icon: <Person fontSize="small" /> }
  ];
  
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
          <Toolbar 
            disableGutters 
            sx={{ 
              width: "100%", 
              px: { xs: 2, sm: 3 },
              minHeight: { xs: 56, sm: 64 }
            }}
          >
            <Box
              sx={{
                mr: 4,
                display: { xs: "none", md: "flex" },
                alignItems: 'center',
                gap: 1
              }}
              onClick={() => navigate('/trending')}
            >
              <MenuBook sx={{ fontSize: 28 }} />
              <Typography variant="h6" noWrap component="div" sx={logoStyles}>
                BOOKSHELF
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1, alignItems: 'center', gap: 1}} onClick={() => navigate('/trending')}>
              <MenuBook sx={{ fontSize: 24 }} />
              <Typography variant="h6" noWrap component="div" sx={logoStyles}>
                BOOKSHELF
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
              <Tabs value={tab} onChange={handleTabChange} textColor="inherit" indicatorColor="secondary" sx={tabsStyles}>
                {tabData.map((item, index) => (
                  <Tab key={item.label} label={item.label} icon={item.icon} iconPosition="start" sx={{ gap: 1 }}/>
                ))}
              </Tabs>
            </Box>
            
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'rotate(90deg)'
                  }
                }}
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
              <Box sx={{ width: 280 }} role="presentation">
                <Box sx={drawerHeaderStyles}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MenuBook color="primary" />
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                      Navigation
                    </Typography>
                  </Box>
                  <IconButton onClick={handleDrawerToggle} size="small">
                    <Close />
                  </IconButton>
                </Box>
                
                <Divider />

                <List sx={{ pt: 2 }}>
                  {tabData.map((item, idx) => (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton 
                        selected={tab === idx} 
                        onClick={() => handleDrawerNav(idx)}
                        sx={listItemStyles}
                      >
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                          primary={item.label} 
                          primaryTypographyProps={{
                            fontWeight: tab === idx ? 600 : 400,
                            fontSize: '0.95rem'
                          }}
                        />
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