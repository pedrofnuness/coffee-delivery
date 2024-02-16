import * as Styled from './styles';

export function SuccessScreen() {
  return (
    <Styled.GridContent>
      <Styled.TitleContainer>
        <Styled.Title>Woohoo! Order confirmed</Styled.Title>
        <Styled.Subtitle>
          Now just wait and the coffee will soon reach you.
        </Styled.Subtitle>
      </Styled.TitleContainer>
    </Styled.GridContent>
  );
}
