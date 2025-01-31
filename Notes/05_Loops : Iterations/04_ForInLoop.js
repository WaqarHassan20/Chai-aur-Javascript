const myObject = {
    js: "javascript",
    cpp: "C++",
    ry: "ruby",
    swift: "swift programming language by Apple",
  };
  
  for (const key in myObject) {
    console.log(myObject[key]);
  }
  
  const programming = ["js", "py", "ry", "cpp"];
  // for (const language in programming) {
  //     console.log(language);//Gives indexes
  // }
  
  for (const language in programming) {
    console.log(programming[language]); //Gives names
  }
  
  for (const language of programming) {
    console.log(language);
  }
  
  // The difference between forof and forin loop is that forof directly gives the vlaue of array but in forIN we have to arr[i] syntax.
  
  //Maps
  const map = new Map();
  map.set("a", "alpha");
  map.set("b", "beta");
  map.set("g", "gammma");
  
  for (const key in map) {
    console.log(key); //Forin loop doesn't work on map becz map is not iterateable.
  }
  //That's why it doesn't give any value.
  