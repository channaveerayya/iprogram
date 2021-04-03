import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from '@material-ui/core'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

export default function ComparisonTable({ compareData }) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Photo</StyledTableCell>
            <StyledTableCell align='right'>ID</StyledTableCell>
            <StyledTableCell align='right'>URL</StyledTableCell>
            <StyledTableCell align='right'>Title</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {compareData.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell>
                <Avatar alt={row.thumbnailUrl} src={row.thumbnailUrl} />
              </StyledTableCell>
              <StyledTableCell align='right'>{row.id}</StyledTableCell>
              <StyledTableCell align='right'>{row.url}</StyledTableCell>
              <StyledTableCell align='right'>{row.title}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
