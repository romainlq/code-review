import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CardDev } from "./Card";

const RowContainer = styled.div`
  // border: 1px black solid;
  display: flex;
  align-items: center;
  padding: 25px;
  width: 500px;
  justify-content: space-around;
`;

const Separator = styled.div`
  margin: 0 25px;
`;

class Row extends Component {
  render() {
    const { reviewer, reviewed } = this.props;
    return (
      <RowContainer>
        <CardDev name={reviewer.name} imgUrl={reviewer.imgUrl} />
        <Separator>
            <i class="material-icons">arrow_back</i>
        </Separator>
        <CardDev name={reviewed.name} imgUrl={reviewed.imgUrl} />
      </RowContainer>
    );
  }
}

Row.propTypes = {
  reviewer: PropTypes.object,
  reviewed: PropTypes.object
};

export default Row;
