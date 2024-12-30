import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Index from "./pages/test";

const LazyIndex = React.lazy(() => import("./pages/test"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LazyIndex />);
