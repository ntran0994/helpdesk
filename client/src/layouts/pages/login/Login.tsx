import * as React from 'react';
import axios from 'axios';

const backgroundImageStyle = {
  backgroundImage: 'url(' + require('../../../assets/images/login/bg1.jpg') + ')'
};

class Login extends React.Component {
  handleLogin() {
    return axios.post('http://localhost:5000/api/Test')
      .then(res => {
        alert(res.data);
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="user-login-5">
        <div className="row bs-reset">
          <div className="col-md-6 bs-reset mt-login-5-bsfix">
            <div className="login-bg" style={backgroundImageStyle}>
              <img className="login-logo" src={require('../../../assets/images/login/logo.png')} />
            </div>
          </div>
          <div className="col-md-6 login-container bs-reset mt-login-5-bsfix">
            <div className="login-content">
              <h1>CSKH Login</h1>
              <p> Lorem ipsum dolor sit amet, coectetuer adipiscing elit 
                sed diam nonummy et nibh euismod aliquam erat volutpat.
                Lorem ipsum dolor sit amet, coectetuer adipiscing. </p>
              <form className="login-form">
                <div className="row">
                  <div className="col-xs-6">
                    <input
                      className="form-control form-control-solid placeholder-no-fix form-group"
                      type="text" 
                      placeholder="Username"
                      name="username"
                      required={true}
                    />
                  </div>
                  <div className="col-xs-6">
                    <input
                      className="form-control form-control-solid placeholder-no-fix form-group"
                      type="password"
                      placeholder="Password"
                      name="password"
                      required={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="rem-password">
                      <label className="rememberme mt-checkbox mt-checkbox-outline">
                        <input type="checkbox" name="remember" value="1" /> Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-8 text-right">
                    <div className="forgot-password">
                      <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
                    </div>
                    <button className="btn green" type="button" onClick={this.handleLogin}>Sign In</button>
                  </div>
                </div>
              </form>
              {/* BEGIN FORGOT PASSWORD FORM */}
              <form className="forget-form" action="javascript:;" method="post">
                <h3 className="font-green">Forgot Password ?</h3>
                <p> Enter your e-mail address below to reset your password. </p>
                <div className="form-group">
                  <input
                    className="form-control placeholder-no-fix form-group"
                    type="text"
                    placeholder="Email"
                    name="email"
                    required={true}
                  />
                </div>
                <div className="form-actions">
                  <button type="button" id="back-btn" className="btn green btn-outline">Back</button>
                  <button type="submit" className="btn btn-success uppercase pull-right">Submit</button>
                </div>
              </form>
              {/* END FORGOT PASSWORD FORM */}
            </div>
            <div className="login-footer">
              <div className="row bs-reset">
                <div className="col-xs-5 bs-reset">
                  <ul className="login-social">
                    <li>
                      <a href="javascript:;">
                        <i className="icon-social-facebook">&nbsp;</i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i className="icon-social-twitter">&nbsp;</i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i className="icon-social-dribbble">&nbsp;</i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-7 bs-reset">
                  <div className="login-copyright text-right">
                    <p>Copyright &copy; CSKH 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;