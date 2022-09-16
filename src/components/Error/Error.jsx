import { Link } from "react-router-dom";
import errorS from "./Error.module.css";

function Error() {
  return (
    <>
      <div className={errorS.mainWrapper}>
        <div className={errorS.content}> There is nothing yet </div>
      </div>
      <Link className={errorS.button} to="/stack">
        to main
      </Link>
    </>
  );
}

export default Error;
