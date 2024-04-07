import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMoreHandle }) => {
  return (
    <div className={css.btn_wrapper}>
      <button className={css.btn} type="button" onClick={loadMoreHandle}>
        Load more...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
