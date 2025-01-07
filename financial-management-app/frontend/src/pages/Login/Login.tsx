// Login.tsx
import "./Login.css";
import Input from "../../components/Input.tsx";
import { useForm } from "react-hook-form";
import React from "react";

interface IloginFormData {
  password: string;
  username: string;
}

function Login() {
  const { handleSubmit, register, formState: { errors } } = useForm<IloginFormData>();

  const onSubmit = (data: IloginFormData) => {
    console.log(data);
  };

  return (
    <div className="main">
      <div className="boxLogin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          
          <Input 
            field="username" 
            placeholder="Usuário" 
            type="text" 
            register={register} 
          />
          {errors.username && <p>Username is required</p>}  

          <Input 
            field="password" 
            placeholder="Senha" 
            type="password" 
            register={register} 
          />
          {errors.password && <p>Password is required</p>} 

          <button className="login-button" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
