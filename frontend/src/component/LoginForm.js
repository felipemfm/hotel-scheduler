import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createToken, loginUser } from "../store/slice/userSlice";
import { useCookies } from "react-cookie";

function LoginForm() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const token = useSelector((state) => state.user.token);
  const userObj = useSelector((state) => state.user.userObj);
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
  const dispatch = useDispatch();

  function handleLogin(event) {
    event.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(createToken(credentials)).then(() => {
      setCookie("access_token", token.access, {
        path: "/",
      });
      setCookie("refresh_token", token.refresh, {
        path: "/",
      });
    });
  }

  useEffect(() => {
    if (cookies.access_token) dispatch(loginUser(cookies.access_token));
  }, [cookies.access_token]);

  return (
    <div className="d-flex ">
      {userObj ? (
        <p>Welcome {userObj.username}</p>
      ) : (
        <form className="input-group" onSubmit={handleLogin}>
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
      )}
    </div>
  );
}

export default LoginForm;
