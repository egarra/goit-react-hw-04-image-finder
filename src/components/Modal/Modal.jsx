import { Component } from 'react';
import { Backdrop, Modal, ImageComp, CloseBtn } from './Modal.styled';

export class ModalWindow extends Component {
  onCloseModalEsc = e => {
    const { onImageClick } = this.props;
    if (e.code === 'Escape') {
      onImageClick('');
    }
  };

  handleBackdrop = e => {
    const { onImageClick } = this.props;
    if (e.target === e.currentTarget) {
      onImageClick('');
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModalEsc);
  }

  render() {
    const { largeImgUrl, onImageClick } = this.props;
    return (
      <Backdrop onClick={this.handleBackdrop}>
        <Modal>
          <ImageComp src={largeImgUrl} alt="image" />
          <CloseBtn type="button" onClick={() => onImageClick('')}>
            X
          </CloseBtn>
        </Modal>
      </Backdrop>
    );
  }
}
