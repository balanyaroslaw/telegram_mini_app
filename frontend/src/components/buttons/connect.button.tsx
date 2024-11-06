/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { setWalletAddress, clearWalletAddress } from '../../shared/slices/wallte.slice'
import { useTonConnectUI } from '@tonconnect/ui-react';
import tonlogo from '../../assets/tonlogo.png'
import { buttonContainerStyle, contentContainerStyle, disconnectButtonStyle, imgStyle, spanStyle } from './connect.style';
const ConnectButton: React.FC = () => {
    const dispatch = useDispatch();
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [tonConnectUI] = useTonConnectUI();

  const connectWallet = () => {
    tonConnectUI.openModal();
  };

  const handleDisconnect = () => {
    tonConnectUI.disconnect();
    dispatch(clearWalletAddress());
  };

  useEffect(() => {
    tonConnectUI.onStatusChange((wallet) => {
        if (wallet && wallet.account) {
            dispatch(setWalletAddress(wallet.account.address));
            setIsConnected(true);
        } else {
            tonConnectUI.disconnect();
            dispatch(clearWalletAddress());
            setIsConnected(false);
        }
    });
}, [tonConnectUI, isConnected]);


  return (
    <div className="button__container" css={buttonContainerStyle}>
      <div className="content__container" css={isConnected?disconnectButtonStyle:contentContainerStyle} onClick={()=>isConnected?handleDisconnect():connectWallet()}>
        <span css={spanStyle}>{isConnected?"Disconnect wallet":"Connect wallet"}</span>
        <img src={tonlogo} alt="TON Logo" css={imgStyle} />
      </div>
    </div>
  );
};

export default ConnectButton;
