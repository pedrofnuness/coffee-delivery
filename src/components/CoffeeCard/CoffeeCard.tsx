import { ShoppingCartSimple } from 'phosphor-react';
import { formatMoney } from '@/utils/formatMoney';
import { Coffee } from '@/@types';
import CardContainer from '../CardContainer/CardContainer';
import QuantityInput from '../QuantityInput/QuantityInput';

import * as Styled from './styles';

type CoffeeCardProps = {
	coffee: Coffee;
};

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
	return (
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
						<QuantityInput />

						<Styled.AddToCartButton>
							<ShoppingCartSimple size={22} weight="fill" color="white" />
						</Styled.AddToCartButton>
					</div>
				</Styled.PriceContainer>
			</Styled.CofeeContent>
		</CardContainer>
	);
}
