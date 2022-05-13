
import Link from "next/link";

export default function MovieDetails() {
    return (
    <>
   
   <div className={["sasd"]}>
      <div className={["main-container-signinup-content"]}>
        <input id="name" type="text" placeholder="Your full name" />
        <input id="phone" type="text" placeholder="Phone no." />
        <input id="email" type="email" placeholder="Email address" />
        <input onKeyUp={passwordStrength} id="password" type="password" placeholder="Password" />
        <input id="verify-password" type="password" placeholder="Verify password" />
        <p id="strength-indicator">Make sure to use a strong password.</p>
        
      </div>
    </div>
      </>
    );
  }
