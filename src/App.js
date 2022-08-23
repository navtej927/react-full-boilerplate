import React from "react";
import Styles from "./app.module.css";
import { Footer } from "./Footer";

const App = () => {
  return (
    <React.StrictMode>
      <div className={Styles.container}>hello fresh</div>
      <Footer />
    </React.StrictMode>
  );
};

export default App;
