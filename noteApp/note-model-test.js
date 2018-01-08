// var exclaim = require("./exclaim").exclaim;

if (exclaim("hi") !== "hi!!!!!") {
  throw new Error("Exclaiming hi should equal hi!!!!!");
} else {
  console.log("This test passed!");
}

if (double('hi') !==  'hihi') {
  throw new Error("Double hi should equal hihi")
} else {
  console.log("Test passed")
};
