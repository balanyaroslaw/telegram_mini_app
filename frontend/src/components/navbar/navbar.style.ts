import { css } from "@emotion/react";

export const home__image = css`
  width: 40px;
  height: auto;
  display: block;
  margin-right: 5px;
  text-align: center;

  @media (max-width: 480px) {
    width: 30px;
    margin-right: 8px;
  }
`;

export const item__container = css`
  width: 100%;
  max-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  padding: 8px;
  background-color: #f0f0f0;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  margin: 10px 0;

  &:hover {
    background-color: #ddd;
  }

  @media (max-width: 480px) {
    padding: 6px;
    max-width: 90px;
    margin: 8px 0;
  }
`;

export const spanText = css`
  font-size: 14px;
  color: #333;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 12px;
    letter-spacing: 0.5px;
  }
`;

export const navigation = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 481px) {
    flex-direction: row;
  }
`;
