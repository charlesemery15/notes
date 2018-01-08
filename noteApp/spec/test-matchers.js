function toEqual(test, expected){
  if (test !== expected){
  throw new Error("'" + test + "'" + " should equal " + "'" + expected + "'" );
  } else {
    console.log("Test passed");
  };
};
