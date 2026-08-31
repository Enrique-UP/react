const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);


const writeFile = async () => {
    try{
        await fs.writeFile(filePath, "This is asyncAwait file.", "utf-8");
        console.log("File created succesfully.");
    } catch (error) {
        console.log(error);
    }
}
writeFile();