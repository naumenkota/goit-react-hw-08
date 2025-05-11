import s from "./HomePage.module.css";

export default function HomePage()  {
  return (
    <div className={s.homepage}>
      <p>Welcome to the Contact Book application!</p>
      <p>
        Please log in or
        register.
      </p>
   </div>
  );
};

