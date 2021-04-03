import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    width: 300,
    margin: 'auto',
    height: 400,
  },
  media: {
    height: 150,
  },
})

export default function ImageGrid({ data, isCompare, setCompareData }) {
  const classes = useStyles()

  return (
    <Grid item style={{ padding: '5px ' }}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={data.thumbnailUrl}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            style={{ height: '100px ' }}
          >
            {data.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            ID : {data.id}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.url}
          </Typography>
        </CardContent>

        <CardActions style={{ justifyContent: 'center' }}>
          {isCompare ? (
            <Button
              variant='contained'
              color='secondary'
              onClick={() => {
                setCompareData(data.id, false)
              }}
            >
              Remove
            </Button>
          ) : (
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                setCompareData(data.id, true)
              }}
            >
              Compare
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  )
}
