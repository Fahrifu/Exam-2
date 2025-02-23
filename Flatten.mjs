import fs from 'fs';
import test from './test.mjs'
import { json } from 'stream/consumers';

function flattenArray(arr) {
    let result = [];

    function recursiveFlatten(subArray) {
        for (let i = 0; i < subArray.length; i++) {
            if (Array.isArray(subArray[i])) {
                recursiveFlatten(subArray[i]);
            } else {
                result.push(subArray[i]);
            }
        }
    }

    recursiveFlatten(arr)
    return result;
}

const data = JSON.parse(fs.readFileSync('example_files/arrays.json', 'utf-8'));

console.log(flattenArray(data));

const tests = test("Flatten the numbers");

tests.isEqual(JSON.stringify(flattenArray([1, [2, [3, 4]], 5])), JSON.stringify([1, 2, 3, 4, 5]), "Flattening nested array");
