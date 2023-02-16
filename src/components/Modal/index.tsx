import React, { FC } from 'react'
import styled from 'styled-components'

import { ModalBackground } from './ModalBackground'
import { CloseIcon } from '../CloseIcon'

const ModalContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  z-index: 10;
  padding: 32px 32px 24px 32px;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  min-width: 500px;
  min-height: 600px;
  max-height: 600px;

  display: flex;
  flex-direction: column;
`

const ModalHeader = styled.div`
  position: relative;
  flex: 1;
`

const ModalClose = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
`

const Body = styled.div`
  overflow: scroll;
  flex: 5;
  ::-webkit-scrollbar {
    display: none;
  }
`

interface ModalProps {
  onClose: () => void
  visible: boolean
  headerContent: React.ReactNode
  children: React.ReactNode
}

export const Modal: FC<ModalProps> = ({ onClose, visible, headerContent, children }) => {
  if (!visible) return <></>

  return (
    <>
      <ModalBackground onClose={onClose} />
      <ModalContainer>
        <ModalHeader>
          <ModalClose onClick={() => onClose()}>
            <CloseIcon />
          </ModalClose>
          {headerContent}
        </ModalHeader>
        <Body>{children}</Body>
      </ModalContainer>
    </>
  )
}