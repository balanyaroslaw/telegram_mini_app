import { css } from "@emotion/react";

export const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const contentContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C947E3;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  @media (max-width: 480px) {
    width: 90%;  
    text-align: center;
  }

  &:hover {
    background-color: #9b29c6;
    transform: translateY(-3px);
  }

  &:focus {
    outline: none;
    background-color: #9b29c6;
    transform: translateY(-3px);
  }
`;

export const spanStyle = css`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  margin-right: 10px;
`;

export const imgStyle = css`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

export const disconnectButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF4C4C;  
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  @media (max-width: 480px) {
    width: 90%;
    text-align: center;
  }
  &:hover {
    background-color: #e03d3d;
    transform: translateY(-3px);
  }

  &:focus {
    outline: none;
    background-color: #e03d3d;
    transform: translateY(-3px);
  }
`;