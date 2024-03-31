import PropTypes from 'prop-types';
const Button = (props) => {
   return (
      <>
         <button type={props.type} className={`btn btn-${props.btnVariant}`}>
            {props.label}
         </button>
      </>
   );
};

Button.propTypes = {
   label: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   btnVariant: PropTypes.string.isRequired,
};

Button.defaultProps = {
   label: 'Submit',
   type: 'button',
   btnVariant: 'success',
};
export default Button;
