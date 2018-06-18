import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from './Card';


const RowContainer = styled.div`
    border: 1px black solid;
    flex-flow: row wrap;
`

class Row extends Component {
    render() {
        const { reviewer, reviewed } = this.props;
        return (
            <RowContainer>
                <Card name="John" />
                <Card name="Jane" />
            </RowContainer>
        );
    }
}

Row.propTypes = {
    reviewer: PropTypes.object,
    reviewed: PropTypes.object
};

export default Row;