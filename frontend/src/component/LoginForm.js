import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createToken } from "../store/slice/userSlice";

function LoginForm() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const dispatch = useDispatch();

  function handleLogin(event) {
    event.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(createToken(credentials));
  }

  return (
    <form className="d-flex input-group" onSubmit={handleLogin}>
      <input
        className="form-control"
        placeholder="user@email.com"
        type="email"
        ref={emailRef}
      />
      <input
        className="form-control"
        placeholder="password"
        type="password"
        ref={passwordRef}
      />
      <button className="btn btn-outline-primary" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
