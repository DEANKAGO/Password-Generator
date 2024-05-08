import './checkbox.css';

const Checkbox = ({ id, label, checked, name, onChange }) => {
  return (
    <div className='checkbox-wrapper'>
      <input
        id={id}
        type='checkbox'
        checked={checked}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={id} style={{ fontFamily: 'Poppins' }}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
