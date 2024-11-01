import s from "./Options.module.css";

const Options = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
  onReset,
  totalFeedback,
}) => {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onGoodClick}>
        Good
      </button>
      <button className={s.button} onClick={onNeutralClick}>
        Neutral
      </button>
      <button className={s.button} onClick={onBadClick}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
