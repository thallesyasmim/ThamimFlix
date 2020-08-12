import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--zero);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Ancora = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
margin-right: 20px;
width: 120px;
`
