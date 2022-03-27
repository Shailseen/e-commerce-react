import "./loginpage.css"
export const LoginPage = () => {
  return (
    <section class="main">
      <div class="card-container box-shadow">
        <h2>Login</h2>
        <div class="login-container">
          <div class="form-input">
            <label for="input-email" class="input-label">
              Email address
            </label>
            <input
              type="email"
              class="input-email input-text m-b-1r"
              placeholder="abc@gmail.com"
            />
            <label for="input-pass" class="input-label">
              Password
            </label>
            <input
              type="password"
              class="input-pass input-text m-b-1r"
              placeholder="************"
            />
          </div>
          <div class="form-utils m-b-1r">
            <input type="checkbox" name="remember-me" id="remember" />
            <label for="remember">Remember me</label>
            <a href="" class="forgot-pass">
              Forgot Password?
            </a>
          </div>
          <button class="button-style-none solid-button m-b-1r">Login</button>
          <div class="create-accnt-container">
            <a href="/pages/homepage/signup.html" class="create-accnt">
              Create New Account
            </a>
            <i class="far fa-angle-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
