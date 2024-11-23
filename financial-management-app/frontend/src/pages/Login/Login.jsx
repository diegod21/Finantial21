import "./Login.css";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="main">
      <div className="boxLogin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <Input
            field={"username"}
            placeholder={"Usuário"}
            type={"text"}
            register={register}
          />
          <Input field={"password"} placeholder={"Senha"} type={"password"} />
          <button className="login-button" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
