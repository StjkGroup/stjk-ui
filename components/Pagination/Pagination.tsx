import React from 'react';
import MuiPagination, { PaginationProps as MuiPaginationProps } from '@material-ui/core/Pagination';
// import TablePagination, { TablePaginationProps as MuiTablePaginationProps } from '@material-ui/core/TablePagination';
// import clsx from 'clsx';
// import {
//   createStyles,
//   makeStyles,
// } from '@material-ui/core/styles';

// const useStyles = makeStyles(() =>
//   createStyles({
//   }),
// );

const Pagination = React.forwardRef(({
  ...props
}: MuiPaginationProps, ref: any) => {
  // const classes = useStyles();

  // const [page, setPage] = React.useState(2);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (
  //   event: React.MouseEvent<HTMLButtonElement> | null,
  //   newPage: number,
  // ) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <MuiPagination
      {...props}
      ref={ref}
    />
  );
})

export default Pagination;

export type PaginationProps=MuiPaginationProps;