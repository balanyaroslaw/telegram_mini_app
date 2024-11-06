/** @jsxImportSource @emotion/react */
import React from 'react';
import WalletAddressDisplay from '../../components/textfield/address.field';
import { pageContainerStyle, titleStyle } from './second.style';
const SecondPage: React.FC = () => {
    return (
        <div css={pageContainerStyle}>
          <h1 css={titleStyle}>Wallet Address Second Page</h1>
          <WalletAddressDisplay/>
        </div>
      );
};

export default SecondPage;
