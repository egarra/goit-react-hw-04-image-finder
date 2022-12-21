import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { FetchImages } from './services/FetchImages';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ModalWindow } from './Modal/Modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    images: [],
    query: null,
    page: 1,
    per_page: 12,
    error: null,
    loader: false,
    largeImageURL: '',
    showMore: false,
  };

  componentDidUpdate(prevProps, previousState) {
    if (
      this.state.query !== previousState.query ||
      this.state.page !== previousState.page
    ) {
      this.onFetchData();
    }
  }

  

  onFetchData = async () => {
    this.setState({
      loader: true,
    });

    try {
      const { query, page, per_page } = this.state;
      const images = await FetchImages(query, page, per_page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        showMore: this.state.page < Math.ceil(images.totalHits / this.state.per_page)
      }));

      
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        loader: false,
      });
    }
  };

  onLoadMore = () => {
    this.setState(previousState => ({
      page: previousState.page + 1,
    }));
  };

  handleSubmit = e => {
    Notify.success(`Hoooray! We have found your pictures!`);
    this.setState({
      images: [],
      query: e.target.elements.query.value,
      page: 1,
      per_page: 12,
    });
  };

  onImageClick = largeImageURL => {
    this.setState({ largeImageURL });
  };

  render() {
    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} query={this.state.query} />
        <ImageGallery
          images={this.state.images}
          onImageClick={this.onImageClick}
        />
        {this.state.showMore && <Button onLoadMore={this.onLoadMore} />}
        {this.state.loader && <Loader />}
        {this.state.largeImageURL && (
          <ModalWindow
            largeImgUrl={this.state.largeImageURL}
            onImageClick={this.onImageClick}
          />
        )}
      </>
    );
  }
}
