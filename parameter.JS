function arg(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(arg("javascript",));
  console.log(arg("Rest"));
  
  console.log(arg("parameters"));
});
  