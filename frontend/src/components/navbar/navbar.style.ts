import { css } from "@emotion/react";

export const home__image = css`
  width: 50px;
  height: auto;
  display: block;
  margin-right: 10px; 
  text-align: center;
`;

export const item__container = css`
    width: 150px;
  display: flex;
  align-items: center; 
  justify-content: center;
  text-align: center;
  text-decoration: none; 
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
  transition: background-color 0.3s ease; 
  margin-left: 20px;
  
  &:hover {
    background-color: #ddd; 
  }
`;

export const spanText = css`
  font-size: 16px; 
  color: #333; 
  font-weight: 600; 
  text-transform: capitalize; 
  letter-spacing: 1px;
  text-align: center;
`;

export const navigation = css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;