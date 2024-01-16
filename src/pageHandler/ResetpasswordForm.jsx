import React, { useState } from "react";
import "../styles/App.css";

function ResetpasswordForm({ iswrongpassword, setIswrongpassword }) {
  const [loading, setLoading] = useState(false);

  const [passResetFormData, setPassResetFormData] = useState({
    email:"",
    Newpassword: "",
    confirmpassword: "",
  });
  let initialstateerrors = {
    email:{required:false},
    newpassword: { required: false },
    confirmpassword: { required: false },
  };
  const [errors, setErrors] = useState(initialstateerrors);
  const PassResetFormHandler = async (e) => {
    e.preventDefault();
    let errors = initialstateerrors;
    let haserror = false;

    const passResetbody = {
      username:passResetFormData.email,
      newpass: passResetFormData.Newpassword,
      confirmpass: passResetFormData.confirmpassword,
    };
    if (passResetFormData.email == "") {
      errors.email.required = true;
      haserror = true;
    }
    if (passResetFormData.Newpassword == "") {
      errors.newpassword.required = true;
      haserror = true;
    }
    if (passResetFormData.confirmpassword == "") {
      errors.confirmpassword.required = true;
      haserror = true;
    }
    if (passResetFormData.confirmpassword !== passResetFormData.Newpassword) {
      // errors.confirmpassword.required = true;
      haserror = true;
    }

    setErrors(errors);
    if (!haserror) {
      setLoading(true);
      const response = await fetch(
        "http://127.0.0.1:3004/api/Resetpass/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passResetbody),
        }
      );
      if (response.status == 200) {
        const msgtxt = document.getElementById("msg");
        msgtxt.innerText = "Password Reset sucessfully...";
        setLoading(false);
      }
    } else {
      const commonerr = document.getElementById("commonerror");
      commonerr.innerText = "Please Fill the required filed";
    }
  };
  return (
    <div>
      <div id="passResetContainer">
        <form onSubmit={PassResetFormHandler}>
          <div id='username'>

            <label>Email  </label>
            <input
              type="email"
              id="username1"
              placeholder="Enter the email..."
              value={passResetFormData.email}
              onChange={(e) => {
                setPassResetFormData({
                  ...passResetFormData,
                  email: e.target.value,
                });
              }}
            />
          </div>
          {errors.email.required ? (
            <span className="text-danger">email is required </span>
          ) : null}
          <div id="newpass">
            <label>New Password </label>
            <input
              type="password"
              id="newpass"
              placeholder="Enter the Password..."
              value={passResetFormData.Newpassword}
              onChange={(e) => {
                setPassResetFormData({
                  ...passResetFormData,
                  Newpassword: e.target.value,
                });
              }}
            />
          </div>
          {errors.newpassword.required ? (
            <span className="text-danger">Password is required </span>
          ) : null}
          <div id="confirmpass">
            <label>Confirm Password </label>
            <input
              type="password"
              id="confirmpass"
              placeholder="Enter the Password..."
              value={passResetFormData.confirmpassword}
              onChange={(e) => {
                setPassResetFormData({
                  ...passResetFormData,
                  confirmpassword: e.target.value,
                });
              }}
            />
          </div>
          {errors.confirmpassword.required ? (
            <span className="text-danger">ConfirmPassword is required </span>
          ) : null}
          {loading ? (
            <div className="spinner-border" id="load" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : null}
          <button type="submit" id="resetpass">
            save
          </button>
          <div className="text-danger" id="commonerror"></div>
      <p id="msg"></p>
        </form>
      </div>
    </div>
  );
}

export default ResetpasswordForm;
