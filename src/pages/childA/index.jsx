import * as React from "react";

const Index = () => {
  const [name, setName] = React.useState("childA");
  const [age, setAge] = React.useState(0);
  const ref = React.useRef("1111");

  React.useEffect(() => {
    console.log({ name }, "useEffect", ref.current);
  }, [name]);

  React.useLayoutEffect(() => {
    console.log({ name }, "useLayoutEffect");
  }, [name]);

  setTimeout(() => {
    ref.current += "a";
  }, 1000);

  return (
    <div>
      <div>cur page{name}</div>
      <div>sub age {age}</div>
      <button
        onClick={() => {
          setName((name) => {
            return name + "s";
          });
          setName((name) => {
            return name + "s";
          });
          setAge((age) => {
            return age + 10;
          });
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Index;
