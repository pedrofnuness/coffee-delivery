import styled from 'styled-components';

export const ListContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 0 4rem 0;
	gap: 3.38rem;

	h2 {
		font-size: 2rem;
		color: ${(props) => props.theme['base-subtitle']};
	}
`;

export const CofeeList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
	column-gap: 2rem;
	row-gap: 3.5rem;
	justify-items: center;
	padding: 0 2rem;

	max-width: 74rem;
	width: 100%;
`;
