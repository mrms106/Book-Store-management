import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function FloatingActionButtons() {
    const navigate=useNavigate()
  return (
    <Box sx={{
        position: 'fixed',
        bottom: 20, 
        right: 50, 
        zIndex: 1000, 
        '& > :not(style)': { m: 1 },
      }} onClick={()=>navigate("/buybasket")} >
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }}  />
        Go-to-basket&nbsp;  <AddShoppingCartIcon />
      </Fab>

    </Box>
  );
}
