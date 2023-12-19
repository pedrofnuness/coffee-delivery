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

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${props => props.theme['base-title']};
  font-size: 3rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
`;

export const Content = styled.div`
  width: 100%;
  padding: 2rem;
  max-width: 74rem;
  gap: 3.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  @media (max-width: 1025px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 1rem;
    max-width: 40rem;

    .coffee-image {
      width: 320px;
    }
  }
`;

export const AboutService = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 4.12rem;

  @media (max-width: 1025px) {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
`;
interface ColorIconProps {
  bgColor: string;
}

export const ColorIcon = styled.div<ColorIconProps>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background-color: ${props => props.theme[props.bgColor]};
`;

export const AboutItem = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
`;