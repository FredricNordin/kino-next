import styles from "../styles/SignUp.module.css";
import React, { useState, useEffect } from "react";

export default function SignUp() {
  const initialValues = { name: "", phone: "", email: "", password: "", verifyPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [passwordStrength, setpasswordStrength] = useState("Lösenordets styrka:");
  const [isSubmit, setIsSubmit] = useState(false);

  // Handles input changes on submit.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handles submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // Validate form. Displays error messages. If no errors on submit true, call postData().
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      postData(formValues);
    }
  }, [formErrors, formValues, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Du måste ange ett fullständigt namn!";
    }
    if (!values.phone) {
      errors.phone = "Du måste ange ett telefonnummer!";
    } else if (values.phone.length < 10) {
      errors.phone = "Ett telefonnummer måste vara minst 10 siffror!";
    }
    if (!values.email) {
      errors.email = "Du måste ange en e-postadress!";
    } else if (!regex.test(values.email)) {
      errors.email = "Det här är inte en giltig e-postadress!";
    }
    if (!values.password) {
      errors.password = "Du måste ange ett lösenord med minst 4 tecken!";
    } else if (values.password.length < 4) {
      errors.password = "Lösenordet måste vara minst 4 tecken långt!";
    } else if (values.password.length > 20) {
      errors.password = "Lösenordet får vara max 20 tecken långt!";
    }
    if (!values.verifyPassword) {
      errors.verifyPassword = "Du måste ange samma lösenord igen!";
    } else if (values.verifyPassword !== values.password) {
      errors.verifyPassword = "Lösenordet överensstämmer inte!";
    }
    return errors;
  };

  // Check password strength.
  function strengthCheck() {
    if (formValues.password < 4) {
      setpasswordStrength("Lösenordets styrka: Inte tillräcklig");
    }
    if (formValues.password.match(/^(?=.*[a-z]).{4,20}$/)) {
      setpasswordStrength("Lösenordets styrka: Svagt");
    }
    if (formValues.password.match(/^(?=.*[a-z])(?=.*[A-Z]).{4,20}$/)) {
      setpasswordStrength("Lösenordets styrka: Medelt");
    }
    if (formValues.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/)) {
      setpasswordStrength("Lösenordets styrka: Starkt");
    }
    if (formValues.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$/)) {
      setpasswordStrength("Lösenordets styrka: Mycket starkt");
    }
  }

  // Post formValues to the API /api/users/newuser.
  async function postData(formValues) {
    const response = await fetch("http://localhost:3000/api/users/newuser", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(formValues),
    });
    const data = await response.json();
    if (data.message === "User created!") {
      return window.location.href = "/login";
    } else {
      return alert(data.message);
    }
  }

  // Render the SignUp Registration form.
  return (
    <div className={styles["signup"]}>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Ditt namn</label>
          <input
            type="text"
            name="name"
            placeholder="Förnamn + Efternamn"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.name}</p>
        <div className="field">
          <label>Telefonnummer</label>
          <input
            type="number"
            name="phone"
            placeholder="+46"
            value={formValues.phone}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.phone}</p>
        <div className="field">
          <label>E-post adress</label>
          <input
            type="text"
            name="email"
            placeholder="namn@domän.se"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="field">
          <label>Lösenord</label>
          <input
            type="password"
            name="password"
            placeholder="(Minst 4 tecken.)"
            value={formValues.password}
            onChange={handleChange}
            onKeyUp={strengthCheck}
          />
          <p>{passwordStrength}</p>
        </div>
        <p>{formErrors.password}</p>
        <div className="field">
          <label>Verifiera lösenord</label>
          <input
            type="password"
            name="verifyPassword"
            placeholder="(Ange lösenordet igen.)"
            value={formValues.verifyPassword}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.verifyPassword}</p>
        <button>Submit</button>
      </form>
    </div>
  );
}