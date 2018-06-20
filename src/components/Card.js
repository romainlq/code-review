import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin: auto;
  margin-top: 10px;
`

export class CardDev extends Component {
  static propTypes = {
    name: PropTypes.string,
    imgUrl: PropTypes.string,
  }

  static defaultProps = {
    name: "Donald",
    imgUrl:"https://img.bfmtv.com/c/1256/708/a44/e094a9dd8db94624188dc0bc3883d.jpeg"
  }

  render() {
    const { name, imgUrl } = this.props;
    return (
      <Card>
        <CardMedia
          component={Image}
          image={imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
        </CardContent>
      </Card>
    )
  }
};

export default CardDev;
