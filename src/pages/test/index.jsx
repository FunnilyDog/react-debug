import * as React from "react";
import ChildA from "../childA";

const Index = () => {
  const [name, setName] = React.useState("test");

  React.useEffect(() => {
    console.log({ name });
  }, [name]);

  return (
    <div>
      <div>cur page{name}</div>
      <ChildA />
    </div>
  );
};

export default Index;
