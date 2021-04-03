import React, { Component } from 'react'
import ImageGrid from './ImageGrid'
import { Grid } from '@material-ui/core'
const HEIGHT = 500
export default class InfiniteList extends Component {
  state = {
    compareData: [],
  }
  componentDidMount() {
    this.div.addEventListener('scroll', this.handleScroll)
  }

  handleCompareData = (id, isCompare) => {
    const { compareData, imageData, setCompareData } = this.props
    let updatedData = compareData
    isCompare
      ? updatedData.push(imageData.find((img) => img.id === id))
      : (updatedData = compareData.filter((img) => img.id !== id))

    this.setState({ compareData: updatedData }, () => {
      setCompareData(updatedData)
    })
  }

  handleScroll = (e) => {
    const { setQuery, imageData } = this.props
    if (Math.round(this.div.scrollTop + HEIGHT) >= this.div.scrollHeight)
      setQuery({
        _start: imageData.length,
        _limit: 5,
      })
  }

  render() {
    const style = {
      height: HEIGHT,
      overflow: 'auto',
    }
    return (
      <Grid
        container
        direction='row'
        ref={(div) => (this.div = div)}
        style={style}
        justify='space-evenly'
      >
        {this.props.imageData.map((img, i) => (
          <ImageGrid
            item
            key={i}
            data={img}
            isCompare={
              this.state.compareData.filter((data) => img.id === data.id)
                .length > 0
            }
            setCompareData={this.handleCompareData}
          />
        ))}
      </Grid>
    )
  }
}
