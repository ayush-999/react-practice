import PropTypes from 'prop-types';
import './style.css';
const Input = (props) => {
   return (
      <div className='inputField mb-2'>
         <label htmlFor={props.id} className='form-label'>
            {props.label}
         </label>
         <input
            type={props.type}
            id={props.id}
            name={props.name}
            className='form-control'
         />
      </div>
   );
};

Input.propTypes = {
   label: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
};

export default Input;
