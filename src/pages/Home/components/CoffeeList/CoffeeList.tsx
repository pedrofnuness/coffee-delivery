import * as Styled from './styles';
import CardContainer from '../../../../components/CardContainer/CardContainer';

export function CoffeeList() {
  return (
    <Styled.ListContainer>
      <h2>Our Coffees</h2>

      <Styled.CofeeList>
        <CardContainer>
          <Styled.CofeeContent>
            <h3>Cofee Name</h3>
          </Styled.CofeeContent>
        </CardContainer>
      </Styled.CofeeList>
    </Styled.ListContainer>
  )
}
