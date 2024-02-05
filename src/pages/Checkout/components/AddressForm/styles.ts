import styled from 'styled-components';

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SideToSideContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;

  padding: 0.75rem;
  width: ${({ width }) => width || '100%'};

  &:focus {
    outline: 1px solid ${({ theme }) => theme['yellow-dark']};
  }
`;
