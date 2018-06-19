import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import styled from 'styled-components';

const TableContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

class Table extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    render() {
        return (
            <TableContainer>
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
            </TableContainer>
        );
    }
}


export default Table;