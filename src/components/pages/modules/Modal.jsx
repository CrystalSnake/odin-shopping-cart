import PropTypes from 'prop-types';

function Modal({ children }) {
  return <>{children}</>;
}

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
