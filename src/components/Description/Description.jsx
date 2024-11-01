import s from "./Description.module.css";

const Description = ({ title, description }) => {
  return (
    <div>
      <h1 className={s.title}>{title}</h1>
      <p className={s.text}>{description}</p>
    </div>
  );
};

export default Description;
