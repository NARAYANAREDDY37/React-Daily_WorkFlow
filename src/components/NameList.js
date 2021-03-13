import React from "react";
import Person from "./Person";

// function NameList() {
//   let names = ['James', 'John', 'William']
//   let nameList = names.map(name => <h2>{name}</h2>)
//   return (
//     <div>
//       {/* <h2>{names[0]}</h2>
//       <h2>{names[1]}</h2>
//       <h2>{names[2]}</h2> */}

//       {
//         //names.map(name => <h2>{name}</h2>)
//         <div>{nameList}</div>
//       }
//     </div>
//   )
// }

function NameList() {
  let names = ["Bruce", "John", "Clerk"];
  let persons = [
    {
      id: 1,
      name: "Narayana",
      age: 18,
      skill: "Angular",
    },
    {
      id: 2,
      name: "Venkat",
      age: 24,
      skill: "React",
    },
    {
      id: 3,
      name: "Anu",
      age: 21,
      skill: "Vue",
    },
  ];
  //let presonsList = persons.map((person) => (
    // <h2>
    //   I am {person.name}. I am {person.age} years old. I know {person.skill}
    // </h2>

    //adding key prop to avoid warinings
    //<Person key={person.id} person={person} />
  //));

  let nameList = names.map((name, index) => <h2 key= {index}> {index}.{name}</h2>)
  return <div>{nameList}</div>;
}

export default NameList;
