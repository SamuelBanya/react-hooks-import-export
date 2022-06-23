import React from "react";
import HowManyParks from "./parks/HowManyParks";
import MesaVerde from "./parks/MesaVerde";
// This is one way to use the idea of 'destructuring' to obtain individual variables from the 'props' object we exported from
// './parks/RockyMountain'
// import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

// We can also rename the variables upon importing them:
// import {
  // trees as parkTrees,
  // wildlife as parkWildLife,
// } from "./parks/RockyMountain";

// console.log(trees);
// wildlife();

// We can also use them with their new variable names:
// console.log(parkTrees);
// parkWildlife();

console.log(RMFunctions.trees);

RMFunctions.wildlife();

RMFunctions.elevation();

// Same line but written a different way with the 'export default' statement included in the function itself:
// export default function ColoradoStateParks() {
function ColoradoStateParks() {
  // HowManyParks(); // => "42 parks!"

  // return <h1>Colorado State Parks!</h1>;
  return (
      <div>
      <MesaVerde />
      </div>
  );
}

export default ColoradoStateParks;

// Alternate method of writing this:
// export default function ColoradoStateParks() {
// }
