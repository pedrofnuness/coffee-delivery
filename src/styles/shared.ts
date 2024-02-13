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

export const CardContainer = styled.div`
  max-width: fit-content;
  max-height: fit-content;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
`;
