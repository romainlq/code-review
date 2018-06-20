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
        const { data } = this.props;
        const list = data.map((row, index) => 
            <Row key={index} reviewer={row.reviewer} reviewed={row.reviewed} />
        )
        return (
            <TableContainer>
                {list}
                
            </TableContainer>
        );
    }
}


export default Table;