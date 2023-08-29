import PropTypes from "prop-types";
import "./digitCard.scss";

const DigitCard = ({ text, count }) => {
  return (
    <div data-aos="fade-right" className="cardDigit">
      <div className="circle"></div>
      <h2>{count}</h2>
      <p>{text}</p>
    </div>
  );
};

DigitCard.propTypes = {
  text: PropTypes.string,
  count: PropTypes.string,
};

export default DigitCard;
