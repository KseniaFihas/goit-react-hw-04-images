import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ label, handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={css.Button} type="button">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  handleLoadMore: PropTypes.func.isRequired,
};

export default Button;
