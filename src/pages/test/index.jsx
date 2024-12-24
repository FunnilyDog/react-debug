import * as React from "react";

const Index = () => {
  const [name, setName] = React.useState("");

  return (
    <div>
      <div>{name}</div>
      <button onClick={() => setName("Hello")}>Click me</button>
    </div>
  );
};

export default Index;
