import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const data = [{ _id:'1',
                  fullName: "Milan Kotadiya",
                  phones:[{phone: "8469321204",type: "Home"},{phone: "8980863060",type: "Office"}]
              },
              { _id:'2',
                  fullName: "XYX",
                  phones:[{phone: "1234",type: "Home"},{phone: "1234",type: "Office"}]
              },
              { _id:'3',
                  fullName: "XYX",
                  phones:[{phone: "1234",type: "Home"},{phone: "1234",type: "Office"}]
              },
              { _id:'4',
                  fullName: "XYX",
                  phones:[{phone: "1234",type: "Home"},{phone: "1234",type: "Office"}]
              },
              { _id:'5',
                  fullName: "XYX",
                  phones:[{phone: "1234",type: "Home"},{phone: "1234",type: "Office"}]
              }
            ];

  const Allcotact = data.map((item,index)=>(
    <div className='px-5 py-2 contactdiv' key={index}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs='auto'>
          <Item className='name'>{item.fullName}</Item>
        </Grid>
        <Grid item xs='auto'>
          <Item>{item.phones[0].phone}</Item>
        </Grid>
        <Grid item xs='auto'>
        <Button variant="contained" color="success"><a href={'/contact/'+item._id}>View Details</a></Button>
        </Grid>
      </Grid>
    </Box>
    </div>
  ));

  return (
    <div>

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            All Contacts
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={(e)=>{
                console.log(e.target.value)
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    <div className='my-3'>    {Allcotact}
</div>
    {/* <div className='p-3'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Item>name</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>phone</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>button</Item>
        </Grid>
      </Grid>
    </Box>
    </div> */}





    </div>
  );
}
