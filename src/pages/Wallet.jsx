import React from 'react';
import WalletHeader from '../components/WalletPage/Header';
import WalletMain from '../components/WalletPage/Main';
import {
  MainDiv,
} from '../style/walletStyle.Style';

function Wallet() {
  return (
    <MainDiv>
      <WalletHeader />
      <WalletMain />
    </MainDiv>
  );
}

export default Wallet;
