import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DelelteIcon from '@/../components/icons/Delelte';
import FavoriteIcon from '@/../components/icons/Favorite';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const ButtonApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Welcome to use keystore ui button.</h1>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import Button from '@keystore/ui/Button'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button variant={'contained'} color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'contained'} color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'contained'} color={'inherit'}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'contained'} disabled color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'contained'} disabled color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'contained'} disabled color={'inherit'}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button variant={'text'} color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} color={'inherit'}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'text'} color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'text'} color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'text'} color={'inherit'}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button variant={'outlined'} color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} color={'inherit'}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'outlined'} color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'outlined'} color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'outlined'} color={'inherit'}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button variant={'contained'} color={'primary'} startIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'contained'} color={'secondary'} startIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'contained'} color={'inherit'} startIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'contained'} disabled color={'primary'} startIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'contained'} disabled color={'secondary'} startIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'contained'} disabled color={'inherit'} startIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button color={'primary'} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button color={'secondary'} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button color={'inherit'} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'primary'} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'secondary'} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'inherit'} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button variant={'outlined'} color={'primary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} color={'secondary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} color={'inherit'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} disabled color={'primary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} disabled color={'secondary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} disabled color={'inherit'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button variant={'text'} color={'primary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} color={'secondary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} color={'inherit'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} disabled color={'primary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} disabled color={'secondary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} disabled color={'inherit'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <IconButton>
            <DelelteIcon/>
          </IconButton>
        </Box>
        <Box ml={2}>
          <IconButton color={'secondary'}>
            <DelelteIcon/>
          </IconButton>
        </Box>
        <Box ml={2}>
          <IconButton>
            <DelelteIcon/>
          </IconButton>
        </Box>
        <Box ml={2}>
          <IconButton disabled>
            <DelelteIcon/>
          </IconButton>
        </Box>
      </Box>
    </div>
  )
}

export default ButtonApp;