/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import { RootState } from '../../store/wallet.store';
import { addressContainerStyle, addressDisplayStyle, addressTextStyle } from "./address.style";
const WalletAddressDisplay: React.FC = () => {
    const walletAddress = useSelector((state: RootState) => state.wallet.address);
  
    return (
      <div css={addressContainerStyle}>
        <span css={addressTextStyle}>Connected Wallet Address</span>
        <div css={addressDisplayStyle}>
          {walletAddress ? walletAddress : 'No wallet connected'}
        </div>
      </div>
    );
  };

export default WalletAddressDisplay;