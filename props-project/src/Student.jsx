// export default function Student(props) {
//   return (
//     <div className="student">
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//       <p>Student: {props.isStudent ? "Yes" : "No"}</p>
//     </div>
//   );
// }

export default function Student({ name, age, isStudent }) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
