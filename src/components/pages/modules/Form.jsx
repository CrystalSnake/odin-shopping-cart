import PropTypes from 'prop-types';

function Form({ submitOrder }) {
  const submitForm = (e) => {
    e.preventDefault();
    submitOrder();
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" required />
        </div>
        <p>All fields are required.</p>
        <button type="submit">Submit and Pay</button>
      </form>
    </>
  );
}

Form.propTypes = {
  submitOrder: PropTypes.func,
};

export default Form;
