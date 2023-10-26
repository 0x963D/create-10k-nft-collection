const fs = require("fs");
const path = require("path");

const folderPath = "build/json"; // Path to the folder containing JSON files

// Function to replace a string in a file
function replaceStringInFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}: ${err}`);
      return;
    }

    const updatedData = data.replace(
      /QmRoV31Fn7xxHPXENHvvBki2ANRuhNDQ2JUR2pf9zqLXym/g,
      "bafybeielyaojgkrl3ag4rsrdzbps7xvbd4ymdtz7efym3rwp3cv54lyyam",
    );

    fs.writeFile(filePath, updatedData, "utf8", (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}: ${err}`);
      } else {
        console.log(`Updated file: ${filePath}`);
      }
    });
  });
}

// Loop through files from 1.json to 30000.json and replace the string
// for (let i = 1; i <= 8000; i++) {
//   const filePath = path.join(folderPath, `${i}.json`);
//   replaceStringInFile(filePath);
// }

// Loop through files from 1.json to 30000.json and replace the string
// for (let i = 8000; i <= 16000; i++) {
//   const filePath = path.join(folderPath, `${i}.json`);
//   replaceStringInFile(filePath);
// }

// Loop through files from 1.json to 30000.json and replace the string
// for (let i = 16000; i <= 24000; i++) {
//   const filePath = path.join(folderPath, `${i}.json`);
//   replaceStringInFile(filePath);
// }

// Loop through files from 1.json to 30000.json and replace the string
for (let i = 24000; i <= 30000; i++) {
  const filePath = path.join(folderPath, `${i}.json`);
  replaceStringInFile(filePath);
}
