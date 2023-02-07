import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data/data";

const StudyCase = () => {
  const { path } = useParams();
  const currentCase = data.find((page) => page.path === path);

  return (
    <div>
      <h1>{currentCase.name}</h1>
      <br />
      <p>{currentCase.title}</p>
      <br />
      <p>{currentCase.content}</p>
    </div>
  );
};

export default StudyCase;
