import styled from 'styled-components';

export const Title = styled.h3`
  opacity: 0;
  position: absolute;
  transition: 500ms;
  margin: 0;
  left: 10px;
  top: 20px;
  z-index: 10;
  font-weight: bold;

  &:after{
    content: '';
    display: block;
    height: 3px;
    width: 40%;
    margin-top: 9px;
    background-color: ${props => props.cor};
    border-radius: 4px;
  }
`

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  
  &:after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
    opacity: 0;
    transition: .3s;
  }

  &:hover:after, &:hover .titulo {
    opacity: 1;
  }

  
  &:not(:first-child) {
    margin-left: 20px;
  }
`



