import { useEffect, useCallback } from 'react';
import { Backdrop, Modal, ImageComp, CloseBtn } from './Modal.styled';

export const ModalWindow = ({ onImageClick, largeImgUrl }) => {
  const onCloseModalEsc = useCallback(
    e => {
      if (e.code === 'Escape') {
        onImageClick('');
      }
    },
    [onImageClick]
  );

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      onImageClick('');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onCloseModalEsc);
    return () => {
      window.removeEventListener('keydown', onCloseModalEsc);
    };
  }, [onCloseModalEsc]);

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
