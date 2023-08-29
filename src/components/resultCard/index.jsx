import PropTypes from "prop-types";

import "./resultCard.scss";

const ResultCard = ({ text, img }) => {
  return (
    <div className="resultCard flex w-[240px] justify-center items-center relative rounded-[6px] bg-white p-[10px]">
      <div data-aos="zoom-in" className="absolute -top-[50px]">
        <img src={img} alt="" className="w-[100px]" />
      </div>
      <p className=" flex items-center p-[20px] border-x-[2px] border-b-[1px] border-black text-black h-[250px] rounded-[6px]">
        {text}
      </p>
    </div>
  );
};

ResultCard.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
};

export default ResultCard;
