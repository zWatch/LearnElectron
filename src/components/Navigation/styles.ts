import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const container  = styled.nav`
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
`;


export const Nav = styled.nav`
    display: inline-block;
    float: right;
    ul {
        padding: 0;
    }

    li {
        display: inline-block;
        list-style: none;

        button {
            background: transparent;
            border: none;
            font-size: 14px;
            color: #484848;
            margin: 0 16px;
            cursor: pointer;
            padding: 0 0 5px 0;
            -webkit-font-smoothing: antialiased;

            &:hover {
                border-bottom: 2px solid #484848;
            }
        }
    }
`