import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const RowContainer = styled.div`
    border: 1px black solid;
`

class Row extends Component {
    render() {
        const { reviewer, reviewed } = this.props;
        return (
            <RowContainer>
                Test
                
            </RowContainer>
        );
    }
}

Row.propTypes = {
    reviewer: PropTypes.object.isRequired,
    reviewed: PropTypes.object.isRequired
};

export default Row;