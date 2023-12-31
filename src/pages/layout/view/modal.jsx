import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { AUTH } from "fb/myfirebase";
import Login from "../login";
import Signup from "../signup";

export default function Modal({ modalType, setModalOpen, setModalType }) {
  const modalBackground = useRef();

  const modalBackgroundOnclickHandler = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <StModalContainer>
        {modalType === "login" && (
          <Login
            setModalType={setModalType}
            setModalOpen={setModalOpen}
            modalBackground={modalBackground}
            modalBackgroundOnclickHandler={modalBackgroundOnclickHandler}
          />
        )}
        {modalType === "signup" && (
          <Signup
            setModalType={setModalType}
            setModalOpen={setModalOpen}
            modalBackground={modalBackground}
            modalBackgroundOnclickHandler={modalBackgroundOnclickHandler}
          />
        )}
      </StModalContainer>
    </div>
  );
}

const StModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  z-index: 100;
`;
