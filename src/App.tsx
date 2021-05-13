import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
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

      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseTransactionModal}
        >
          <h2>Cadastrar transação</h2>
      </Modal>


      <GlobalStyle />
    </>
  );
};
