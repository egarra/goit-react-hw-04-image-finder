import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { useState, useEffect } from 'react';
import { FetchImages } from './services/FetchImages';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ModalWindow } from './Modal/Modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [errorValue, setErrorValue] = useState(null);
  const [loader, setLoader] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchData = async () => {
      try {
        const imagesFetch = await FetchImages(query, page);
        setImages(state => [...state, ...imagesFetch.hits]);
        setShowMore(page < Math.ceil(imagesFetch.totalHits / 12));
      } catch (error) {
        setErrorValue(error);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, [query, page]);

  const onLoadMore = () => {
    setPage(state => state + 1);
  };

  const handleSubmit = e => {
    Notify.success(`Hoooray! We have found your pictures!`);
    setImages([]);
    setQuery(e.target.elements.query.value);
    setPage(1);
  };

  const onImageClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} query={query} />
      {errorValue && <p>Server doesn't respond</p>}
      <ImageGallery images={images} onImageClick={onImageClick} />
      {showMore && <Button onLoadMore={onLoadMore} />}
      {loader && <Loader />}
      {largeImageURL && (
        <ModalWindow largeImgUrl={largeImageURL} onImageClick={onImageClick} />
      )}
    </>
  );
};
