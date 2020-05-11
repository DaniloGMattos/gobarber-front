import styled from 'styled-components';

export const Container = styled.div`
  background-color: #232129 !important;
  border-radius: 10px;
  color: #666360;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  & + div {
    margin-top: 8px;
  }
  input {
    background: transparent;
    display: flex;
    color: #f4ede8;
    align-items: center;
    flex: 1;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
