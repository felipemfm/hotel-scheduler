import { useRef } from "react";

export default function LoginForm() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  function handleLogin(event) {
    event.preventDefault();
    console.log(emailRef.current.value);
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
