import React from "react";

export const Card = ({
  props: {
    attributes: {
      names: { en, ja_jp },
      description,
      image: { original },
    },
  },
}) => {
  return (
    <article className="card">
      <img src={original} />
      <span>{en}</span>
      <span>{ja_jp}</span>
      {/* <p>{description}</p> */}
    </article>
  );
};
