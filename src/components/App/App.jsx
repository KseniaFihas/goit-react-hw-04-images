import { useState, useEffect } from 'react';
import getSearch from 'components/Api/getSearch';
import Searchbar from '../Searchbar/Searchbar';
import Section from '../Section/Section';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import css from './App.module.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(0);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({
    showModal: false,
    largeImageURL: '',
  });
  const [noResults, setNoResults] = useState(false);

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const onClickClear = () => {
    setInputValue('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue === '') {
      alert('Please enter your query');
      return;
    }

    if (query === inputValue) return;
    setImages([]);
    setQuery(inputValue);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const toggleModal = () => {
    setModal(prevState => ({ ...prevState, showModal: !prevState.showModal }));
  };

  const handleImageClick = largeImageURL => {
    setModal(prevState => ({ ...prevState, largeImageURL }));
    toggleModal();
  };

  useEffect(() => {
    if (page === 0) return;

    const fetchImagesByQuery = async searchQuery => {
      setIsLoading(true);
      setError(null);
      setNoResults(false);

      try {
        const response = await getSearch(searchQuery, page);
        setImages(prevState => [...prevState, ...response.hits]);
        setLastPage(Math.ceil(response.totalHits / 12));
        response.totalHits === 0 && setNoResults(true);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImagesByQuery(query);
  }, [page, query]);

  return (
    <div>
      <Searchbar
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClickClear={onClickClear}
        inputValue={inputValue}
      />
      <Section>
        {error && (
          <p className={css.alertStyle}>
            Something went wrong: {error.message}
          </p>
        )}

        {noResults && <p className={css.alertStyle}>No results found</p>}

        {isLoading && <Loader />}
        <ImageGallery images={images} onImageClick={handleImageClick} />
      </Section>

      {page < lastPage && !isLoading ? (
        <Button label="Load more" handleLoadMore={handleLoadMore} />
      ) : (
        <div style={{ height: 40 }}></div>
      )}

      {modal.showModal && (
        <Modal onClose={toggleModal} largeImageURL={modal.largeImageURL} />
      )}
    </div>
  );
};

export default App;
