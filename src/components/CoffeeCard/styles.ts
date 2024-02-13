import styled from 'styled-components';

export const CofeeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.4rem;
  padding: 1.25rem 1.5rem;

  text-align: center;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  img {
    margin-top: -2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};

  flex-grow: 1;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .pickQuantity {
    display: flex;
    gap: 0.5rem;
  }
`;

export const AddToCartButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme['purple-dark']};

  &:hover {
    background-color: ${(props) => props.theme['purple']};
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 0 1rem;
`;

export const TypeSpan = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;

  color: ${(props) => props.theme['yellow-dark']};
  font-weight: bold;
  font-size: 0.625rem;
`;

export const PriceValue = styled.p`
  font-size: 0.875rem;

  span {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
  }
`;
