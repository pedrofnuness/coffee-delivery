import { Coffee } from '@/@types';
import CoffeeCard from '@/components/CoffeeCard/CoffeeCard';
import { coffeeListMock } from '@/mocks/coffeeMocks';
import * as Styled from './styles';

export function CoffeeList() {
	return (
		<Styled.ListContainer>
			<h2>Our Coffees</h2>

			<Styled.CofeeList>
				{coffeeListMock.map((coffee: Coffee) => (
					<CoffeeCard coffee={coffee} />
				))}
			</Styled.CofeeList>
		</Styled.ListContainer>
	);
}
