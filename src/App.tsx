import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewtransactionModal';
import { useState } from 'react';

Modal.setAppElement('#root');

export function App() {
  const [ isNewTransactionModalOpen, setNewTransactionModalOpen ] = useState(false);

  function handleOpenTransactionModal() {
    setNewTransactionModalOpen(true);
  };

  function handleCloseTransactionModal() {
    setNewTransactionModalOpen(false);
  };
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseTransactionModal}/>
      
      <GlobalStyle />
    </>
  );
};
