import styled from 'styled-components';

export const CartInsideContainer = styled.div`
  padding: 2.5rem;
  width: 28rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartItemRow = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
`;

export const ItemContent = styled.div`
  display: flex;

  img {
    margin-right: 1.25rem;
  }

  margin-bottom: 1.5rem;
`;

export const NameAndAmount = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const CoffeeName = styled.span`
  color: ${({ theme }) => theme['base-subtitle']};
  font-size: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};

  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme['purple']};
  }
`;

export const Price = styled.span`
  display: flex;
  margin-left: auto;

  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme['base-text']};
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme['base-text']};
  font-size: 0.875rem;

  &:not(:last-child) {
    span {
      font-size: 1rem;
    }
  }

  &:last-child {
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: bold;
    font-size: 1.25rem;
  }
`;

export const ConfirmButton = styled.button`
  border: none;
  border-radius: 6px;

  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: bold;

  padding: 0.75rem;
  cursor: pointer;
`;
