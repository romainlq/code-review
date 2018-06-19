import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardDev } from './Card';


const RowContainer = styled.div`
    // border: 1px black solid;
    display: flex;
    align-items: center;
    padding: 25px;
    width: 500px;
    justify-content: space-around;

`

const Separator = styled.div`
    margin:0 25px;
`

class Row extends Component {
    render() {
        const { reviewer, reviewed } = this.props;
        return (
            <RowContainer>
                <CardDev name="John" imgUrl="https://img.bfmtv.com/c/1256/708/a44/e094a9dd8db94624188dc0bc3883d.jpeg"/>
                <Separator>--></Separator>
                <CardDev name="Jane" imgUrl="https://img.bfmtv.com/c/1256/708/a44/e094a9dd8db94624188dc0bc3883d.jpeg"/>
            </RowContainer>
        );
    }
}

Row.propTypes = {
    reviewer: PropTypes.object,
    reviewed: PropTypes.object
};

export default Row;