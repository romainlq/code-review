import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px black solid;
`

export class Card extends Component {
  static propTypes = {
    name: PropTypes.string,
    imgUrl: PropTypes.string
  }

  render() {
    const { name, imgUrl} = this.props;
    return (
      <CardContainer>
        <p>{name}</p>
      </CardContainer>
    )
  }
};

export default Card;
