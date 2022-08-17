import styled from 'styled-components';

export const Ripple = styled.span`
`;

export const Label = styled.span`
  top: calc(50% - 0.5rem);
  left: 16px;
  position: absolute;
  transition: all 500ms;
`;

export const Input = styled.input`
  width: calc(100% - 36px);
  height: 100%;
  padding: 16px 2px 0 16px;
  font-size: 12px;
  background: transparent;
`;

export const Line = styled.span`
  left: 0;
  width: 100%;
  height: 1px;
  bottom: 0;
  position: absolute;
  background: black;

  &:before {
    left: 50%;
    right: 50%;
    width: 0%;
    height: 1px;
    bottom: 0;
    content: '';
    position: absolute;
    transition: all 500ms;
    background: seagreen;
  }
`;

export const Container = styled.label`
  width: 100%;
  height: 48px;
  margin: 5px;
  cursor: pointer;
  position: relative;
  max-width: 280px;
  border-radius: 0.3rem 0.3rem 0 0;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:focus-within > ${Label} {
    top: 8px;
    font-size: 12px;
  }

  &:focus-within > ${Line}:before {
    left: 0;
    right: 0;
    width: 100%;
  }
`;
