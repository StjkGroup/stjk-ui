import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { useTheme, Theme } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useRouter} from 'next/router';

const useStyles = (theme: Theme) => makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      height: '100%',
      padding: 0
    },
  })
);

const docBasePath = '/doc';

const nav = [{
  path: docBasePath+'/color',
  name: 'Color 色板'
},{
  path: docBasePath+'/button',
  name: 'Button 按钮'
},{
  path: docBasePath+'/text-field',
  name: 'TextField 输入框'
},{
  path: docBasePath+'/select',
  name: 'Select 选择器'
},{
  path: docBasePath+'/typography',
  name: 'Typography 文字'
},{
  path: docBasePath+'/paper',
  name: 'Paper 纸张'
},{
  path: docBasePath+'/icons',
  name: 'Icons 图标'
},{
  path: docBasePath+'/alert',
  name: 'Alert 警告提示'
},{
  path: docBasePath+'/theme',
  name: 'Theme 主题'
},{
  path: docBasePath+'/pagination',
  name: 'Pagination 分页组件'
}]

export default function NestedList() {
  const theme = useTheme();
  const classes = useStyles(theme)();
  const router = useRouter();

  const handleClick = (path: string) => () => {
    router.push(path);
  };

  return (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" disableSticky>
          Components 组件
        </ListSubheader>
      }
      className={classes.root}
    >
      {
        nav.map((item, index) => {
          return (
            <ListItem key={index} button selected={router.pathname === item.path} onClick={handleClick(item.path)}>
              <ListItemText primary={item.name} />
            </ListItem>
          )
        })
      }
    </List>
  );
}
