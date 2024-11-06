/** @jsxImportSource @emotion/react */
import React from 'react';
import { pageContainerStyle, titleStyle } from './first.style';
import WalletAddressDisplay from '../../components/textfield/address.field';
const FirstPage: React.FC = () => {
    return (
        <div css={pageContainerStyle}>
          <h1 css={titleStyle}>Wallet Address First Page</h1>
          <WalletAddressDisplay/>
        </div>
      );
};

export default FirstPage;
