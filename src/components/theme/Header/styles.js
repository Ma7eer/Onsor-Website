import styled from 'styled-components';
import colors from '../../../../data/colors';

export const StyledHeader = styled.div`
  background: ${colors.base};
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 400;
    margin: 0 1rem;
    outline: none;
  }
`;

export const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  outline: none;
`;
