import * as Styled from './styles';
import { HeroSection } from './components/HeroSection/HeroSection';
import { CoffeeList } from './components/CoffeeList/CoffeeList';

export default function Home() {
  return (
    <Styled.HomeContainer>
      <HeroSection />
      <CoffeeList />
    </Styled.HomeContainer>
  );
}
