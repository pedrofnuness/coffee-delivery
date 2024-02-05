import styled from 'styled-components';
import { TitleContent } from '@/styles/shared';

export const CustomTitleContent = styled(TitleContent)`
  svg {
    color: ${({ theme }) => theme.purple};
  }
`;

export const PaymentMethodsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
`;

export const PaymentMethodButton = styled.button`
  border: none;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme['base-button']};

  color: ${({ theme }) => theme['base-text']};
  text-align: start;
  font-size: 0.75rem;

  padding: 1rem;
  width: 100%;
  max-width: 11.125rem;
  height: 3.125rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.purple};
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  &.selected {
    background-color: ${({ theme }) => theme['purple-light']};
    border: 1px solid ${({ theme }) => theme['purple']};
  }
`;
