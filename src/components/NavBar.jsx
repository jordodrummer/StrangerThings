import { EmojiNature, PhotoCamera } from '@mui/icons-material';
import { Typography, AppBar, CssBaseline, Toolbar } from '@mui/material';



function NavBar() {
    return (
      <AppBar position="relative">
      <Toolbar>
        <EmojiNature />
        <Typography variant="h6">
          Cactus Arizona
        </Typography>
        
      </Toolbar>
    </AppBar>
    )
  }

  export default NavBar