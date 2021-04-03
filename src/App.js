import React, { Component } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import InfiniteList from './InfiniteList'
import ComparisonTable from './ComparisonTable'

export default class App extends Component {
  state = {
    imageData: [],
    compareData: [],
    query: {
      _start: 0,
      _limit: 5,
    },
  }

  componentDidMount() {
    this.getApiData()
  }

  getApiData = () => {
    const { query, imageData } = this.state
    axios
      .get(
        `http://jsonplaceholder.typicode.com/photos?_start=${query._start}&_limit=${query._limit}`
      )
      .then((res) => {
        this.setState({ imageData: [...imageData, ...res.data] })
      })
      .catch((e) => {
        this.setState({ imageData: [] })
        console.error(e)
      })
  }
  render() {
    const { compareData, imageData, query } = this.state

    return imageData.length ? (
      <Container>
        <Grid container direction='column'>
          <Grid item align='center'>
            <Typography gutterBottom variant='h2' component='h2'>
              I Program task
            </Typography>
          </Grid>
          <Grid item>
            <InfiniteList
              setQuery={(query) =>
                this.setState({ query }, () => {
                  this.getApiData()
                })
              }
              query={query}
              imageData={imageData}
              setCompareData={(compareData) => this.setState({ compareData })}
              compareData={compareData}
            />
          </Grid>
          {compareData.length ? (
            <Grid item style={{ marginTop: '6em' }}>
              <Typography gutterBottom variant='h5' component='h2'>
                ComparisonTable
              </Typography>
              <ComparisonTable compareData={compareData} />
            </Grid>
          ) : null}
        </Grid>
      </Container>
    ) : null
  }
}
