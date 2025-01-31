const coding = ["python", "ruby", "java", "js", "cpp"];

// coding.forEach((language) => {
//   console.log(language);
// });

coding.forEach(printLan); //We will pass refrence not the execution of function.
// coding.forEach(printLan());
function printLan(language) {
  console.log(language);
}

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((language) => {
  console.log(language.languageName);
});
