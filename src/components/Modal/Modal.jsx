import { useEffect } from 'react';
import { Backdrop, Modal, ImageComp, CloseBtn } from './Modal.styled';

export const ModalWindow = ({ onImageClick, largeImgUrl }) => {
  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      onImageClick('');
    }
  };

  useEffect(() => {
    const onCloseModalEsc = e => {
      if (e.code === 'Escape') {
        onImageClick('');
      }
    }

    window.addEventListener('keydown', onCloseModalEsc);
    return () => {
      window.removeEventListener('keydown', onCloseModalEsc);
    };
  }, [onImageClick]);

  return (
    <Backdrop onClick={handleBackdrop}>
      <Modal>
        <ImageComp src={largeImgUrl} alt="image" />
        <CloseBtn type="button" onClick={() => onImageClick('')}>
          X
        </CloseBtn>
      </Modal>
    </Backdrop>
  );
};
