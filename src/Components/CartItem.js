import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CartItem(props) {
  const theme = useTheme();
  const img = props.innerDetails.image;
  return (
    <Card sx={{ display: 'flex' ,m:2}}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`${img}`}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {props.innerDetails.title}
          </Typography> 
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ml:3}}>
          <IconButton color="primary" aria-label="upload picture" component="label">
            <AddIcon /></IconButton>
            0
          <IconButton color="primary" aria-label="upload picture" component="label">
            <RemoveIcon /></IconButton>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
