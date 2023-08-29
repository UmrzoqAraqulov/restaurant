import PropTypes from "prop-types";

import "./moduleCard.scss";
import { moduleRus, moduleUzb } from "../../const";
import { Collapse } from "antd";

const ModuleCard = ({ lang }) => {
  const items = [];
  if (lang) {
    for (let el of moduleUzb) {
      let obj = {};
      obj.key = el[0];
      obj.label = <Title title={el[0]} />;
      obj.children = <Text list={el[2]} text={el[1]} conclusion={el[3]}/>;
      items.push(obj);
    }
  } else {
    for (let el of moduleRus) {
      let obj = {};
      obj.key = el[0];
      obj.label = <Title title={el[0]} />;
      obj.children = <Text list={el[2]} text={el[1]} conclusion={el[3]} />;
      items.push(obj);
    }
  }
  return <Collapse accordion items={items} />;
};

ModuleCard.propTypes = {
  lang: PropTypes.bool,
};

function Title({ title }) {
  return (
    <h2 className="title-module flex justify-between items-center text-xl font-semibold pr-[20px]">
      {title}
    </h2>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};

function Text({ list, text, conclusion }) {
  return (
    <div className="text">
      <p>{text}</p>
      <ol className="pl-[10px] py-[5px]">
        {list?.map((el, id) => (
          <li key={id}>
            <span>{id + 1}</span>.<h4>{el}</h4>
          </li>
        ))}
      </ol>
      <p>{conclusion}</p>
    </div>
  );
}

Text.propTypes = {
  list: PropTypes.array,
  text: PropTypes.string,
  conclusion: PropTypes.string,
};

export default ModuleCard;
