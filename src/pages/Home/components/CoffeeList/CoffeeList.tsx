import { ShoppingCartSimple } from 'phosphor-react';

import * as Styled from './styles';
import CardContainer from '../../../../components/CardContainer/CardContainer';
import { coffeeListMock } from '../../../../mocks/coffeeMocks';
import { formatMoney } from '../../../../utils/formatMoney';

export function CoffeeList() {
	return (
		<Styled.ListContainer>
			<h2>Our Coffees</h2>

			<Styled.CofeeList>
				{coffeeListMock.map((coffee) => (
					<CardContainer>
						<Styled.CofeeContent>
							<img src={coffee.image} alt="coffee image" />
							<Styled.TypeContainer>
								{coffee.type.map((type) => (
									<Styled.TypeSpan key={type}>{type}</Styled.TypeSpan>
								))}
							</Styled.TypeContainer>

							<h3>{coffee.title}</h3>
							<Styled.Description>{coffee.description}</Styled.Description>

							<Styled.PriceContainer>
								<Styled.PriceValue>
									<span>{formatMoney(coffee.price)}</span> €
								</Styled.PriceValue>
								<div className="pickQuantity">
									<Styled.NumberInput type="number" />
									<Styled.AddToCartButton>
										<ShoppingCartSimple size={22} weight="fill" color="white" />
									</Styled.AddToCartButton>
								</div>
							</Styled.PriceContainer>
						</Styled.CofeeContent>
					</CardContainer>
				))}
			</Styled.CofeeList>
		</Styled.ListContainer>
	);
}
