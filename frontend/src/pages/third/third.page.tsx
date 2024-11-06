/** @jsxImportSource @emotion/react */
import React from 'react';
import WalletAddressDisplay from '../../components/textfield/address.field';
import { pageContainerStyle, titleStyle } from './third.style';
const ThirdPage: React.FC = () => {
    return (
        <div css={pageContainerStyle}>
          <h1 css={titleStyle}>Wallet Address Third Page</h1>
          <WalletAddressDisplay/>
        </div>
      );
};

export default ThirdPage;
