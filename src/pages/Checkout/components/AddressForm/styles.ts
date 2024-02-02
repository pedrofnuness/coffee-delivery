import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  max-width: 640px;
`;

export const TitleContent = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  .title {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .subtitle {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
  }
`;

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
