const Pizza = (stuff) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, stuff.name),
    React.createElement("p", {}, stuff.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Dakota",
      description: "Mozzarella, Pepperoni, and M&Ms.",
    }),
    React.createElement(Pizza, {
      name: "The Lucas",
      description: "No toppings. Just the bread part.",
    }),
    React.createElement(Pizza, {
      name: "The Dad",
      description: "Supeme Pizza, room temperature.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
