import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;

  h3 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  width: 100%;
  max-width: 70rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .cart-items {
      grid-row: 1;
    }
  }
`;

export const LeftContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
`;

export const RightContent = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
`;
