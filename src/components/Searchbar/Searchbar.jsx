import { Component } from 'react';
import toast from 'react-hot-toast';
import { BiSearch } from 'react-icons/bi';
import css from './Searchbar.module.css';

const API_KEY = '34366428-c8312deaec1e385c65e1239b7';
const BASE_URL = 'https://pixabay.com/api/';
const PAGE = 12;

export const getSearch = (searchText, page) => {
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PAGE,
  });
  return fetch(`${BASE_URL}?${params}`);
};




export class Searchbar extends Component {
  state = {
    search: '',
  };

  onChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form
          onSubmit={evt => {
            evt.preventDefault();

            if (!this.state.search) {
              return toast.error('Enter text for search.');
            }

            this.props.handleSubmit(this.state.search);
            this.resetForm();
          }}
          className={css.SearchForm}
        >
          <button type="submit" className={css.Button}>
            <BiSearch size="20" />
          </button>

          <input
            value={this.state.search}
            onChange={this.onChangeInput}
            className={css.Input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
