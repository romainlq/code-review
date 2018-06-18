import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostitContainer = styled.div`
    line-height: 1;    
    text-align:center;     
    width: 275px;    
    margin: 5px;    
    min-height:50px;
    max-height:250px;
    padding-top:5px;
    position:relative;   
    border:1px solid #E8E8E8;  
    border-top:60px solid #fdfd86;
    font-family:'Reenie Beanie';    
    font-size:22px;      
    border-bottom-right-radius: 60px 5px;
    display:inline-block;    
    background: #ffff88; /* Old browsers */
    background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right bottom, color-stop(81%,#ffff88), color-stop(82%,#ffff88), color-stop(82%,#ffff88), color-stop(100%,#ffffc6)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* IE10+ */
    background: linear-gradient(135deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    
`

class Postit extends Component {
    render() {
        const {title} = this.props;
        return (
            <PostitContainer>{title}</PostitContainer>
        );
    }
}

Postit.propTypes = {
    title: PropTypes.string.isRequired
};

export default Postit;