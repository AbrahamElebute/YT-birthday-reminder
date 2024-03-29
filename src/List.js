import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map(({ id, name, age, image }) => (
        <article className="person" key={id}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
