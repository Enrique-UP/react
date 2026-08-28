const fs = require("fs/promises");
const path = require("path");

const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);


const unlinkFile = async () => {
    try{
        await fs.unlink(filePath);
        console.log("File deleted succesfully.");
    } catch (error) {
        console.log(error);
    }
}
unlinkFile();