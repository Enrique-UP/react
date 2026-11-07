import {createReadStream, createWriteStream} from 'fs';
import path from 'path';

const inputFilePath = path.join(import.meta.dirname, 'input.txt');
const outputFilePath = path.join(import.meta.dirname, 'output.txt');

const readableStream = createReadStream(inputFilePath, {
    encoding:'utf-8',
    highWaterMark:16,
});

const writeStream = createWriteStream(outputFilePath);

readableStream.on('data', (chunk) => {
    console.log('Buffer (chunk):', Buffer.from(chunk)); // convert chunk to a buffer
    console.log('Received Chunk:', chunk); // logs each 16-byte chunk
    writeStream.write(chunk); // write each chunk to output file
});

readableStream.on('end', () => {
    console.log('File read completed.');
    writeStream.end();
});

// D:\ENRIQUE-GIT\react\tutorials\NodeJs\Thapa\projects\project6_urlShortner\part4-Live-by-express-js\streams>node --watch app.js

readableStream.on('error', (err) => console.error('Error', err));
writeStream.on('error', (err) => console.error('Error', err));