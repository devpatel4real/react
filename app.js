// const heading = React.createElement(
//   "h1",
//   { id: "xyz" },
//   "Hello Word from React"
// );
// console.log(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hey I am H1 tag"),
    React.createElement("h2", {}, "Hey I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hey I am H1 tag"),
    React.createElement("h2", {}, "Hey I am h2 tag"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// root.render(heading);
