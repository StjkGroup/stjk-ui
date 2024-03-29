/**
 * Create by fay on 2018-10-18 09:41
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme, useTheme } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const maxSize = 2*1024*1024;

const useStyles = (theme: Theme) => makeStyles(() =>
  createStyles({
    paper: {
      position: "absolute",
      zIndex: 2,
      height: 200,
      width: 200,
      overflow: 'auto',
      marginTop: '115px',
      padding: theme.spacing(2, 0),
      overflowX: 'hidden'
    },
    input: {
      display: 'none',
    },
  }),
);

export default ({onChange}: any) => {
  const theme = useTheme();
  const classes = useStyles(theme)();
  const inputRef = React.useRef<any>();

  const handleChange = (e: any) => {
    const size = e.target.files[0].size;
    if(size > maxSize){
      console.log('图片不得超过2M');
      return;
    }
    const formData = new FormData();
    formData.append('file', inputRef.current.files[0]);
    fetch('/oss', {
      method: 'POST',
      body: formData,
    }).then(response => response.json())
    .catch(error => {
      console.error('Error:', error)
      inputRef.current.value='';
    })
    .then(res => {
      inputRef.current.value='';
      if(res.success){
        onChange(res.result);
      }else{
        console.log('图片上传失败');
      }
    });
  }

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    inputRef.current.click();
  }

  return (
    <div>
      <input ref={inputRef} accept="image/*" className={classes.input} type="file" onChange={handleChange}/>
      <Button
        variant="contained"
        color="inherit"
        startIcon={<CloudUploadIcon />}
        onMouseDown={handleMouseDown}
      >
        上传图片
      </Button>
    </div>
  )
}
