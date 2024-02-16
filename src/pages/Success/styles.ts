import styled from 'styled-components';

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  width: 100%;
  max-width: 70rem;

  @media (max-width: 930px) {
    grid-template-columns: 1fr;
  }
`;

export const TitleContainer = styled.div``;

export const Title = styled.h1``;

export const Subtitle = styled.p``;
