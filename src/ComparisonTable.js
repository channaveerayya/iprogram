import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
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
          {compareData.map((row) => (
            <StyledTableRow key={row.name}>
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
