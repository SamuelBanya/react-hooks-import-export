// This is one way to declare 'trees':
// const trees = "Aspen and Pine";

// This is one way to write the 'wildlife' function and then to export it later:
// function wildlife() {
  // console.log("Elk, Bighorn Sheep, Moose");
// }


// We can export the 'props' object via this syntax
// export { trees, wildlife };

// We can also export the variables on an individual basis:
export const trees = "Aspen and Pine";

export function wildlife() {
  console.log("Elk, Bighorn Sheep, Moose");
}

export function elevation() {
  console.log("9583 ft");
}
