import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { BiSearch } from 'react-icons/bi';

const Searchbar = ({ onSubmit, onChange, inputValue }) => (
  <header className={css.Searchbar}>
    <form onSubmit={onSubmit} className={css.SearchForm}>
      <button type="submit" className={css.Button}>
        <BiSearch size="20" />
      </button>

      <input
        className={css.Input}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onChange}
        value={inputValue}
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onClickClear: PropTypes.func,
  query: PropTypes.string,
};

export default Searchbar;
