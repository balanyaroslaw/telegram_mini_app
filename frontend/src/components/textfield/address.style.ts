import { css } from "@emotion/react";

export const addressContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 15px;
  }
`;

export const addressTextStyle = css`
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const addressDisplayStyle = css`
  font-size: 1.1rem;
  color: #C947E3;
  word-wrap: break-word;
  max-width: 90%;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
