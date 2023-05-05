import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { BiSearch } from 'react-icons/bi';






export const Searchbar = ({ onSubmit }) => (
  <header className={css.Searchbar}>
    <form
      onSubmit={onSubmit}
      className={css.SearchForm}
    >
      <button type="submit" className={css.Button}>
        <BiSearch size="20" />
      </button>

      <input
        className={css.Input}
        name="inputForSearch"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};