function it(assertion, testFunction){
  console.log(assertion);
  testFunction(); // THIS IS A VARIABLE NAME, NOT CALLING THE SPECIFIC FUNCTION
}

function toEqual(test, expected){
  return function(){
    if (test !== expected){
    throw new Error("'" + test + "'" + " should equal " + "'" + expected + "'" );
    } else {
      console.log("test passed " + ":  '" + test + "'" + " is equal to " + "'" + expected + "'" );
    };
    console.log("")
  }
};

function beEmpty(test){
  return function() {
    if (test.length !== 0){
      throw new Error("Not Empty");
    } else {
      console.log('test passed: is empty');
    };
    console.log("")
  }
};
