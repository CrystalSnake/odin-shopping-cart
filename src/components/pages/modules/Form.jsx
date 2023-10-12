import PropTypes from 'prop-types';

function Form({ submitOrder }) {
  const submitForm = (e) => {
    e.preventDefault();
    submitOrder();
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <input type="text" name="name" id="name" />
        <label htmlFor="name"></label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

Form.propTypes = {
  submitOrder: PropTypes.func,
};

export default Form;
