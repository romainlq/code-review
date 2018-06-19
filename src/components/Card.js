import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const CardContainer = styled.div`
  border: 1px black solid;
  max-height: 200px;
  max-width: 250px;
  padding: 10px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto;
  margin-top: 10px;
`

const Name = styled.div`
  font-size: 25px;
`

export class CardDev extends Component {
  static propTypes = {
    name: PropTypes.string,
    imgUrl: PropTypes.string,
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { name, imgUrl } = this.props;
    return (
      // <CardContainer>
      //   <Image src={imgUrl} />
      //   <Name>{name}</Name>
      // </CardContainer>
      <Card>
        <CardMedia
          component={Image}
          image="https://img.bfmtv.com/c/1256/708/a44/e094a9dd8db94624188dc0bc3883d.jpeg"
        />
        {/* <Image src={imgUrl} /> */}
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
