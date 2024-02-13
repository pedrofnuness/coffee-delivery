import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 4.5rem;
  padding: 0.5rem;
  height: 2.375rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};

  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    border: none;
    background: none;
    color: ${(props) => props.theme['purple']};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`;
