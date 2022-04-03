import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
function NavBar() {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton aria-label="">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Pixaby Image Gallery</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
