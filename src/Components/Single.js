import * as React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';



export default function Single() {


  

    // document.getElementById('favicon').href='./applogo.png';
    const params = useParams();
    const id = params.id;

    

    let data = { _id:'1',
                  fullName: "Milan Kotadiya",
                  phones:[{phone: "8469321204",type: "Home"},{phone: "8980863060",type: "Office"}]
              }
            
    let details = data.phones.map((item,index)=>(
        <div key={index}>
        <TextField
            // id="outlined-required"
            id="outlined-read-only-input"
            InputProps={{
                readOnly: true,
              }}
            label={item.type}
            defaultValue={item.phone}
          //   helperText="Incorrect entry."
          />
        </div>
  ));


  return (
    <div>
    <div>
    </div>
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
            {data.fullName}
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
<div className='d-flex flex-row justify-content-center mt-4'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
        {details}

            <div className='d-flex flex-row justify-content-center'>
                <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                <a href={'/contact/edit/'+id}>Edit</a>
                </Button>
                </Stack>
            </div>
    </Box>
</div>
    </div>
  );
}
