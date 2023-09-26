import React from 'react';
import { Typography, Grid, Container, Button, Box } from '@mui/material';
import Posts from './Posts';

function Home() {

    const gridSx = { p: 2, display: 'flex', justifyContent: 'center'}
    const boxStyles = { 
      pt: 4, 
      display: 'flex', 
      flexDirection: { xs: "column", md: "row"},
      flexWrap: {md: "wrap", xs: "nowrap"},
      justifyContent: "space-between", 
      gap: 4, }
      
    return (<main>
        <div >
            <Container>
                <Typography variant="h1" sx={{ my: 4, textAlign: "center", color: "primary.main" }}>
                    For sale locally or shipped
                </Typography>
                <Typography variant="h2" sx={{ my: 2, textAlign: "center", color: "secondary.main" }}>
                    If you want to find out more, click the details button.
                </Typography>
                <Box sx={boxStyles}>
                    <Posts />
                </Box>

                <div>
                    <Grid sx={gridSx} container spacing={2}>
                        <Grid item>
                            <Button variant="contained" color="primary" sx={{
                                ":hover":
                                    { bgcolor: "darkblue" }
                            }}>
                                See my photos
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Secondary action
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    </main>
    )
}

export default Home