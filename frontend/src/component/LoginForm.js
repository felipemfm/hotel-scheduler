import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createToken } from "../store/slice/userSlice";
import { useCookies } from "react-cookie";

function LoginForm() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const token = useSelector((state) => state.user.token);
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);

  const dispatch = useDispatch();

  function handleLogin(event) {
    event.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(createToken(credentials));
  }

  useEffect(() => {
    let expires = new Date();
    expires.setTime(expires.getTime() + token.expires_in * 1000);
    setCookie("access_token", token.access, {
      path: "/",
      expires,
    });
    setCookie("refresh_token", token.refresh, {
      path: "/",
      expires,
    });
  }, [token]);

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
