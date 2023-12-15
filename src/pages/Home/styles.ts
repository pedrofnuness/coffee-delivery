import styled from 'styled-components';

export const TopSection = styled.section`
  background: url('src/assets/background.png') no-repeat center;
  background-size: cover;
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleAndDescription = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  color: ${props => props.theme['base-title']};
  font-size: 3rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
`;

export const Content = styled.div`
  padding: 0 10rem;
`;