import React from "react";
import "./Candies.css";

const Candies = () => {
  const ages = [8, 23, 12, 50, 3, 62];
  console.log(ages);

  //map steps through the array and maps the content for each list item
  //this return returns each result into the variable 'displayAges'

  //this returns prints stuff out to the page
  //prints display ages, which holds all the re-mapped paragraphs

  return (
    <div>
      {ages.map((age) => (
        <p>My age is: {age}</p>
      ))}
    </div>
  );
};

export default Candies;
