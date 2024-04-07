import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={css.error}>
      <h2>{message}</h2>
    </div>
  );
};

export default ErrorMessage;
