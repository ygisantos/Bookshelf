import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Switch, Box } from "@mui/material";
import { useColorScheme } from '@mui/material/styles';
import { Bedtime, Sunny } from "@mui/icons-material";
import { appBar, appBarChild } from "../styling/global-style";

export default function AppBarLayout({ children }) {
  const { mode, setMode } = useColorScheme();
  const isLight = mode === 'light';

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
              SANTOS
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
              SANTOS
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Bedtime />
                <Switch checked={isLight} onChange={() => setMode(isLight ? "dark" : "light")}></Switch>
              <Sunny />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={appBarChild}>
        {children}
      </Box>
    </Box>
  );
}
