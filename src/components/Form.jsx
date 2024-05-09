import PropTypes from 'prop-types';
function Form({ name, handleSetName }) {
  const handleChangeSetName = (event) => {
    const valueName = event.target.value;
    handleSetName(valueName);
  };

  return (
    <form action="">
      <label htmlFor="name">Introduce tu nombre</label>
      <input type="text" id="name" value={name} onChange={handleChangeSetName} />
    </form>
  );
}
Form.propTypes = {
  name: PropTypes.string,
  handleSetName: PropTypes.func.isRequired,
};
export default Form;
