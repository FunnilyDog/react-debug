import * as React from "react";

const Index = () => {
  const [name, setName] = React.useState("s");
  const [age, setAge] = React.useState(0);

  React.useEffect(() => {
    console.log({ name });
  }, [name]);

  return (
    <div>
      <div>cur count{name}</div>
      <button
        onClick={() => {
          setName((state) => {
            return age + "s";
          });
          setName((state) => {
            return age + "s";
          });
          setAge((state) => {
            return state + 10;
          });
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Index;
