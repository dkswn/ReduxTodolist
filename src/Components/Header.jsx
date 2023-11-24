import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <StyledHeader>
            <p>Header</p>
            <p>Sparta</p>
        </StyledHeader>
    );  
}

export default Header;

const StyledHeader = styled.div`
    background-color: red;
    padding: 20px;
    font-size:larger;
    display: flex;
    justify-content: space-between;
`