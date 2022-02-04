import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { UsersInfo } from "../../interfaces";
import { Container, ModalContent } from "./style";

// Usando as props da interface do usuários
export interface UserProps {
  user: UsersInfo;
}

const UserItem: React.FC<UserProps> = ({ user }) => {
  const [open, setOpen] = useState(false);

  const OpenModal = () => setOpen(true);
  const CloseModal = () => setOpen(false);

  return (
    <>
      <Container>
        <strong>{user.name}</strong>
        <span>Unidade: {user.unitId === 1 ? "Jaguar" : "Tobias"}</span>
        <button type="button" onClick={OpenModal}>
          Informações
        </button>

        <Modal
          open={open}
          onClose={CloseModal}
          center
          styles={{ modal: { borderRadius: "10px" } }}
        >

            <ModalContent>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Unidade: {user.unitId === 1 ? 'Jaguar' : 'Tobias'}</p>
                <p>Empresa: {user.companyId === 1 && 'Teste'}</p>
            </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default UserItem;
