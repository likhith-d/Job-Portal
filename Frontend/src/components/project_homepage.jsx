import React, { Component } from 'react';
import '../css/project_homepage.css';
import { callApi } from '../api';

export class ProjectHomepage extends Component {
  constructor(){
    super();
    this.userRegistration = this.userRegistration.bind(this);
  }
  
  showSignIn() {
    let popup = document.getElementById("popup");
    let signin = document.getElementById("signin");
    let signup = document.getElementById("signup");
    let popupHeader = document.getElementById("popupHeader");

    popupHeader.innerHTML = "Login";
    signin.style.display = "block";
    signup.style.display = "none";
    popup.style.display = "block";
  }

  // Show the Sign Up popup
  showSignUp() {
    let popup = document.getElementById("popup");
    let signin = document.getElementById("signin");
    let signup = document.getElementById("signup");
    let popupHeader = document.getElementById("popupHeader");

    popupHeader.innerHTML = "Signup";
    signin.style.display = "none";
    signup.style.display = "block";
    popup.style.display = "block";
  }

  // Close the popup when clicking outside the window
  closePopup(event) {
    if (event.target.id === "popup") {
      let popup = document.getElementById("popup");
      popup.style.display = "none";
    }
  }

  userRegistration()
  {
        let fullname = document.getElementById("fullname");
        let email = document.getElementById("email");
        let role = document.getElementById("role");
        let  signuppassword = document.getElementById("signuppassword");
        let confirmpassword = document.getElementById("confirmpassword");
        fullname.style.border = "";
        email.style.border = "";
        role.style.border = "";
        signuppassword.style.border = "";
        confirmpassword.style.border = "";
        if(fullname.value=="")
        {
          fullname.style.border = "1px solid red";
          fullname.focus();
          return;
        }
        if(email.value=="")
          {
            email.style.border = "1px solid red";
            email.focus();
            return;
          }
          if(role.value=="")
            {
              role.style.border = "1px solid red";
              role.focus();
              return;
            }
            if(signuppassword.value=="")
              {
                signuppassword.style.border = "1px solid red";
                signuppassword.focus();
                return;
              }
              if(confirmpassword.value=="")
                {
                  confirmpassword.style.border = "1px solid red";
                  confirmpassword.focus();
                  return;
                }
                if(signuppassword.value !== confirmpassword.value)
                {
                  signuppassword.style.border = "1px solid red";
                  signuppassword.focus();
                  return;
                }

  


        var data = JSON.stringify({
              fullname : fullname.value,
              email : email.value,
              role : role.value,
              password : signuppassword.value
        })
        callApi("POST", "http://localhost:8080/users/signup", data, this.getResponse)
  }
  getResponse(res){
    let resp = res.split('::');
    alert(resp[1]);
    if (resp[0] === "200")
      {
          let signin = document.getElementById("signin");
          let signup = document.getElementById("signup");
          signin.style.display = "block";
          signup.style.display = "none";
      }
  }

  render() {
    return (
      <div id="base">
        {/* Popup Window */}
        <div id="popup" onClick={(e) => this.closePopup(e)}>
          <div className="popupWindow">
            <div id="popupHeader">Login</div>
            <div id="signin">
              <label className="usernameLabel">Username:</label>
              <input type="text" id="username" placeholder="Enter your username" />
              <label className="passwordLabel">Password:</label>
              <input type="password" id="password" placeholder="Enter your password" />
              <div className="forgotPassword">
                Forgot <label>Password?</label>
              </div>
              <button className="signInButton">Sign In</button>
              <div className="div1"></div>
              <div className="div2">
                Don't have an account?{" "}
                <label onClick={() => this.showSignUp()}>Sign Up Now</label>
              </div>
            </div>
            <div id="signup">
              <label className="FullName">Full Name : </label>
              <input type="text" id="fullname" placeholder="Full Name" />
              <label className="usernameLabel">Username:</label>
              <input type="text" id="newUsername" placeholder="Create your username" />
              <label className="Email">Email : </label>
              <input type="email" id="email" placeholder="EMAIL" />
              <label className="role">Select Role :</label>
            <select id='role'>
              <option value="0"></option>
              <option value='1'>Admin</option>
              <option value='2'>Employer</option>
              <option value='3'>Job Seeker</option>
            </select>
              <label className="passwordLabel">New Password:</label>
              <input type="password" id="signuppassword" placeholder="Create Your Password" />
              <label className="passwordLabel">Confirm Password:</label>
              <input type="password" id="confirmpassword" placeholder="Confirm Password" />
              <button onClick={this.userRegistration} className="signUpButton">REGISTER</button>
              <div className="div2">
                Already have an account?{" "}
                <label onClick={() => this.showSignIn()}>Sign In</label>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div id="header">
          <img className="logo" src="./images/logo.png" alt="Logo" />
          <img className="signinIcon" src="./images/user.png" alt="Sign In" onClick={() => this.showSignIn()} />
          <label className="signinText" onClick={() => this.showSignIn()}>Sign In</label>
        </div>

        {/* Content */}
        <div id="content">
          <div className="text1">
            INDIA'S #No 1 Job Portal: <label className="klu">KL Job Portal</label>
          </div>
          <div className="text2">Your job search ends here</div>
          <div className="text3">Discover career opportunities</div>
          
          <div className="searchBar1">
            <input type="text" className="searchText" placeholder="Search by skill" />
          </div>
            
          <div className="searchBar1">
            <input type="text" className="searchLocation" placeholder="Job location" />
          </div>
          
          <div className="searchBar1">
            <label className="searchButton">
              <img className="searchimg"src="/images/searchicon.webp" alt="Search Icon" />
            </label>
          </div>
        
        </div>

        {/* Footer */}
        <div id="footer">
          <label className="copyrightText">
            Copyright &copy; Likhith D [ 2300032720 ] - KL University
          </label>
          <img className="socialmediaIcon" src="./images/facebook.png" alt="Facebook" />
          <img className="socialmediaIcon" src="./images/linkedin.png" alt="LinkedIn" />
          <img className="socialmediaIcon" src="./images/twitter.png" alt="Twitter" />
        </div>
      </div>
    );
  }
}

export default ProjectHomepage;