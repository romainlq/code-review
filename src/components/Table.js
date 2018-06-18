import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import styled from 'styled-components';

const TableContainer = styled.div`
    background: #e5f3e5;
    flex: 1;
    flex-flow: row wrap;
`



class Table extends Component {
    render() {
        return (
            <TableContainer>
                <Row />

            </TableContainer>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array.isRequired
};

export default Table;