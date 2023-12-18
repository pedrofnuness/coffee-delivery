import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: sticky;
`;

export const InsideContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 70rem;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};
  font-size: 0.875rem;
  padding: 8px;

  svg {
    fill: ${props => props.theme.purple}
  }
`;

export const CartButton = styled.button`
  border: none;
  cursor: pointer;
  
  background: ${props => props.theme['yellow-light']};
  padding: 8px;
  border-radius: 6px;

  display: flex;
  align-items: center;

  svg {
    fill: ${props => props.theme['yellow-dark']}
  }
`;