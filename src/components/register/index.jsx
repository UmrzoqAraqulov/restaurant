import PropTypes from "prop-types";

import { Button, Form, Input } from "antd";
import "./register.scss";
import Cookies from "js-cookie";

const Register = ({ lang, setShowRegister }) => {
  const finish = (values) => {
    const res = { ...values, isCheck: false };
    const customers = Cookies.get("customers") || [];
    customers.push(res);
    if (customers.length > 0) {
      console.log(customers);
      Cookies.set("customers", JSON.stringify(customers));
    }
    setShowRegister(false);
  };
  return (
    <Form onFinish={finish} autoComplete="off">
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: lang
              ? "Iltimos ismingizni kiriting!"
              : "Пожалуйста, введите Ваше имя!",
          },
        ]}
      >
        <Input placeholder={lang ? "Ismingiz" : "Ваше имя"} />
      </Form.Item>
      <Form.Item
        name="activity"
        rules={[
          {
            required: true,
            message: lang
              ? "Iltimos faoliyat turingizni kiriting!"
              : "Пожалуйста, введите mип активности!",
          },
        ]}
      >
        <Input placeholder={lang ? "Faoliyat turi" : "Тип активности"} />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: lang
              ? "Iltimos telefon nomerizni kiriting!"
              : "Пожалуйста, введите свой номер телефона",
          },
        ]}
      >
        <Input placeholder="+998 91 778 88 02" />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          className="w-full mt-3 h-[45px] bg-[#ffcd22] hover:border-black"
        >
          {lang ? "RO'YHATDAN O'TISH" : "ЗАРЕГИСТРИРОВАТЬСЯ"}
        </Button>
      </Form.Item>
    </Form>
  );
};

Register.propTypes = {
  lang: PropTypes.bool,
  setShowRegister: PropTypes.func,
};

export default Register;
