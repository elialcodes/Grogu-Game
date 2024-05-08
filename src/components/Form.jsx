import PropTypes from 'prop-types';
function Form({ name, onChangeSetName }) {
  const handleChangeName = (event) => {
    const valueName = event.target.value;
    onChangeSetName(valueName);
  };

  return (
    <form action="">
      <label htmlFor="name">Introduce tu nombre para jugar</label>
      <input type="text" id="name" value={name} onChange={handleChangeName} />
    </form>
  );
}
Form.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeSetName: PropTypes.func.isRequired,
};
export default Form;
