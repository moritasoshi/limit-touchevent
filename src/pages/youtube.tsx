import React from "react";
import axios from "axios";
import css from "./youtube.module.scss";

const Youtube: React.FC = () => {
  React.useEffect(() => {
    const fetchData = async () => {
      const url = "https://www.googleapis.com/youtube/v3/search";
      const data = await axios
        .get(url, {
          params: {
            key: "AIzaSyDULpugpWTIUCIhHNjTTDqEgQPTyYMJr8A",
          },
        })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.error(err));
      return data;
    };
    console.log(fetchData());
  }, []);

  return (
    <div className={css.container}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/n3iClAOj76k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
