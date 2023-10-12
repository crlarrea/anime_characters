import React from "react";

export const Card = ({props:{attributes:{names:{en,ja_jp}}}}) => {
    console.log(en)
  return (
    <article>
      <p>{en}</p>
      <span>{ja_jp}</span>
    </article>
  );
};

