import styled from "styled-components";

export const Select = styled.div`
  #category-select {
    width: 24rem;
  }
  #category-select label {
    font-size: 1.6rem;
    font-weight: 400;
  }

  #select-button {
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    padding: 0.75rem;
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;
    border-radius: 0.375rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  #selected-value {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  #chevrons svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  #chevrons {
    display: flex;
    align-items: center;
    color: #afabb6;
  }

  #chevron-up {
    display: none;
  }

  #options-view-button:focus + #select-button,
  #options-view-button:checked + #selected-button {
    outline: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
  }

  #category-select:has(#options-view-button:checked) label,
  #options-view-button:checked + #select-button #chevron-down {
    display: none;
  }

  #category-select:has(#options-view-button:checked) label,
  #options-view-button:checked + #select-button #chevron-up {
    display: block;
  }

  #category-select {
    position: relative;
  }

  #options-view-button {
    all: unset;

    position: absolute;
    inset: 0;

    cursor: pointer;
    z-index: 3;
  }

  #options {
    display: none;
    margin-top: 0.4rem;
    border-radius: 0.6rem;
    border: 1px solid #252529;
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .option {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem;
    border-bottom: 1px solid #252529;

    position: relative;
  }

  .option label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .option svg {
    margin-left: auto;
  }

  .option:has(input:checked),
  .option:hover {
    background: ${({ theme }) => theme.COLORS.DARK_700};
  }

  .option:has(input:focus) {
    outline: 1px solid ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  #check {
    display: none;
  }

  .option:has(input:checked) #check {
    display: block;
  }

  .option input[type="radio"] {
    all: unset;

    position: absolute;
    inset: 0;

    cursor: pointer;
  }

  #category-select:has(#options-view-button:checked) + #options {
    display: block;
  }

  .select:has(.option input:checked) #category-select label {
    color: #a881e6;
  }

  .select:has(.option input:checked) #category-select {
    color: #a881e6;
  }
`;
