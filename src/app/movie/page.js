import styles from "@/app/styles/common.module.css";
import Moviecard from "../components/Moviecard";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const url = process.env.RAPID_API;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "39f10ed833msh9bf732a412f98e5p16de73jsn3ac225c4127f",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const mainData = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {mainData.map((curElem) => {
              return <Moviecard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
