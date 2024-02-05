import { ChangeEvent, useState } from 'react';
import { MapPinLine } from 'phosphor-react';
import * as Styled from './styles';

export function AddressForm() {
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [countryState, setCountryState] = useState('');
  const [country, setCountry] = useState('');

  const handleChangeZipCode = (event: ChangeEvent<HTMLInputElement>) => {
    const numbersAndHyphenRegex = /[^0-9]|(?<=-).*(-)|-(?=.*-)/g;

    const numbersOnlyValue = event.target.value.replace(
      numbersAndHyphenRegex,
      ''
    );

    setZipCode(numbersOnlyValue);
  };

  return (
    <Styled.Container>
      <Styled.TitleContent>
        <MapPinLine size={22} />
        <div>
          <p className="title">Delivery address</p>
          <p className="subtitle">
            Enter the address where you would like to receive your order
          </p>
        </div>
      </Styled.TitleContent>
      <Styled.InputsContainer>
        <Styled.Input
          width="200px"
          placeholder="ZIP Code"
          value={zipCode}
          onChange={handleChangeZipCode}
          maxLength={10}
          required
        />
        <Styled.Input
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />
        <Styled.SideToSideContainer>
          <Styled.Input
            placeholder="Number"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
            required
          />
          <Styled.Input
            placeholder="Complement"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
        </Styled.SideToSideContainer>
        <Styled.SideToSideContainer>
          <Styled.Input
            placeholder="State"
            value={countryState}
            onChange={(e) => setCountryState(e.target.value)}
            required
          />
          <Styled.Input
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Styled.SideToSideContainer>
      </Styled.InputsContainer>
    </Styled.Container>
  );
}
