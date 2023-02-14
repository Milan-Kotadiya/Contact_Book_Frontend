import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function Edit() {
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate()

    

    let data = [{ _id:'1',
                  fullName: "Milan Kotadiya",
                  phones:[{phone: "8469321204",type: "Home"},{phone: "8980863060",type: "Office"}]
              }]
            
              const finaldata = data.map((item,index)=>(<div key={index}>
     
                <TextField
                    // id="outlined-required"
                    id="outlined-read-only-input"
                    label='Full Name'
                    defaultValue={item.fullName}
                  //   helperText="Incorrect entry."
                  />
                  {item.phones.map((item,index)=>(
      
      <div key={index}>
   
      <TextField
          // id="outlined-required"
          id="outlined-read-only-input"
          label={item.type}
          defaultValue={item.phone}
        //   helperText="Incorrect entry."
        />
      </div>
))}
                </div>));




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
            {data.fullName}
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
    <div>
    </div>

<div className='d-flex flex-row justify-content-center mt-4'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
        {finaldata}
        <div>

        <TextField
            id="outlined-read-only-input"
            label="type"
            defaultValue=""
          //   helperText="Incorrect entry."
          />
                    </div>

              <div>
        <TextField
            id="outlined-read-only-input"
            label="number"
            defaultValue=""
          //   helperText="Incorrect entry."
          />
          </div>
            <div className='d-flex flex-row justify-content-center'>
                <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" onClick={()=>{console.log("Save",id);navigate(`/contact/${id}`)}} component="label">Save</Button>
                <Button variant="contained" onClick={()=>{console.log("Delete",id);navigate('/')}} component="label">
                Delete
                </Button>
                </Stack>
            </div>
    </Box>
</div>
    </div>
  );
}
