import styled, { keyframes } from 'styled-components';

// Define a keyframe animation for fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 78%);
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

export const Modal = styled.div`
  padding: 0;
  position: absolute;
  width: 800px;
  height: 500px;
  top: 50%;
  left: 50%;
  padding: 40px;
  transform: translate(-50%, -50%) scale(1);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.2),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

export const ImageComp = styled.img`
  display: block;
  width: 100%;
`;

export const CloseBtn = styled.button`
  border-radius: 50%;
  padding: 10px 15px;
  font-size: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
  background: none;
  color: white;
  border: 1px solid white;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
