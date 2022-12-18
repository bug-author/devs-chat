import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  return (
    <div className={styles.cardWrapper}>
      <Card cardHeading="Welcome" cardLogo="waving_hand">
        <p className={styles.description}>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis.
        </p>

        <div>
          <Button buttonTitle="Get your username" />
        </div>

        <div className={styles.hasInviteWrapper}>
          <span className={styles.hasInvite}>Have an invite?</span>
          <Link style={signInStyle} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
