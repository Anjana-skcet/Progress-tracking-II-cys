import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

import './Dashboard.css';
const pages = ['ABOUT US', 'ACADEMICS', 'ADMISSIONS','EXAMS','PLACEMENTS'];
const settings = ['Profile', 'Account',  'Logout','Help us'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SKCET
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SKCET
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://i.ytimg.com/vi/BirHQTLka5w/sddefault_live.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <table>
    <tbody>
    <tr className='txt'>
    <td><Avatar
    alt="Remy Sharp"
    src="https://i.ytimg.com/vi/BirHQTLka5w/sddefault_live.jpg"
    sx={{ width: 100, height: 100 }}
  /></td>
  <td><h1>&nbsp;&nbsp;&nbsp;</h1></td>
    <td><h1 className='txt'>&nbsp;&nbsp;SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>An Autonomous Institution, accredited with ‘A’ Grade by NAAC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1></td>
    <td><Avatar
    alt="Remy Sharp"
    src="https://www.skcet.ac.in/logo/naac.png"
    sx={{ width: 100, height: 100 }}
  /></td>
  <td>&nbsp;&nbsp;&nbsp;</td>
    <td><Avatar
    alt="Remy Sharp"
    src="https://www.skcet.ac.in/logo/nba.png"
    sx={{ width: 100, height: 100 }}
  /></td>
    </tr>
    <tr><img src=""></img></tr>
    </tbody>
    </table>
    <div><a href='https://www.skcet.ac.in/'><h3>MoreInfo</h3></a></div>
    <div><a href='https://www.skcet.ac.in/exams.html'><h3>Exams</h3></a></div>
    <div><a href='https://www.skcet.ac.in/placements.html'><h3>Placements</h3></a></div>
    <div><a href='https://www.skcet.ac.in/naac.html'><h3>NAAC</h3></a></div> 

    
    <h1 className='about'>ABOUT SKCET</h1>
    <h2 className='well'>Welcome to SKCET</h2>
    <h3 className='wel'>
    Sri Krishna College of Engineering and Technology is the most sought after Institution among the premier technical Institutions in South India. Since its establishment in the year 1998, the Institution has marched towards the pinnacle of glory through its remarkable achievements in the field of Engineering Education. It is an Autonomous Institution, accredited with ‘A’ Grade (3.42 out of 4 scale) by NAAC and 7 programmes being accredited by NBA and it offers 11 UG programmes, 8 PG programmes, 1 integrated programme and 4 research programmes. The Institution offers an exciting academic environment with well qualified 354 dedicated faculty members to inspire and nurture the student fraternity. With industry drafted Choice Based Credit System (CBCS) curriculum and syllabi, the Institution takes every effort to bring its students to the forefront of the society as skillful and responsible engineers.</h3>
    <h3>CAMPUS TOUR------></h3>
    <iframe width="1000" height="315" src="https://www.youtube.com/embed/JVK5rQ_gX6w?si=OMTOqhoMP1PR-ucb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
    </>
  );
}
export default ResponsiveAppBar;