import * as React from "react";

const Index = () => {
  const [name, setName] = React.useState(0);

  React.useEffect(() => {
    console.log({ name });
  }, [name]);

  return (
    <div>
      <div>cur count{name}</div>
      <button
        onClick={() =>
          setName((state) => {
            return ++state;
          })
        }
      >
        Click me
      </button>
    </div>
  );
};

export default Index;
