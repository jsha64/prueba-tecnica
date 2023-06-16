import Logo from "./344250271_228457146474121_2374946928423260908_n.jpg";
function Login() {
  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <div
        className="d-flex flex-column border border-black border-1 rounded p-5 justify-content-center"
        style={{ width: "30rem", height: "35rem" }}
      >
        <div
          className="row flex-nowrap align-items-center"
          style={{ marginBottom: "4rem", width: "70%" }}
        >
          <img
            className="rounded-circle"
            style={{ width: "4rem", height: "4rem", padding: "0" }}
            src={Logo}
            alt="Logo"
          />
          <h3>Jorge Incorporate</h3>
        </div>
        <div className="flex-column">
          <label className="form-label">Correo:</label>
          <input type="email" className="form-control" />
          <label className="form-label">Contraseña:</label>
          <input type="password" className="form-control" />
          <div className="h-25 mt-3 justify-content-center">
            <input type="submit" value="Entrar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
