import PropTypes from "prop-types"

import './button.scss'

const Button = ({avtor,text}) => {
  return (
    <button className="btn">
      <p>{avtor}</p>
      <p>{text}</p>
    </button>
  );
}

Button.propTypes = {
  text:PropTypes.string,
  avtor:PropTypes.string,
}

export default Button