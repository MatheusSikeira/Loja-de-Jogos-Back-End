import React, { useState } from "react";
import style from "./CreateUser.module.css";
import Input from "../form/Input.jsx";
import Button from "../form/Button.jsx";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados do usuário:", user);
  };

  return (
    <section className={style.create_user_container}>
      <h1>Cadastro de Usuário:</h1>
      <form onSubmit={handleSubmit}>
        {}
        <Input
          type="text"
          name="name"
          id="txt_name"
          placeholder="Digite seu nome: "
          text="Nome: "
          handlerChange={handleChange}
        />

        {}
        <Input
          type="email"
          name="email"
          id="txt_email"
          placeholder="Digite seu email: "
          text="Email: "
          handlerChange={handleChange}
        />

        {}
        <Input
          type="password"
          name="password"
          id="txt_password"
          placeholder="Digite sua senha: "
          text="Senha: "
          handlerChange={handleChange}
        />

        {}
        <Button title="Salvar" />
      </form>
    </section>
  );
};

export default CreateUser;