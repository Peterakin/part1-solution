const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>Number of exercise {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  const totalExcercises =
    parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={totalExcercises} />
    </div>
  );
};

export default App;
