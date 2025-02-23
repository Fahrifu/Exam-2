import fs from 'fs';
import test from './test.mjs';

function analyzeTree(node, depth = 1) {
    if (!node) {
        return {
            sum: 0,
            depth: depth - 1,
            count: 0
        };
    }

    let left = analyzeTree(node.left, depth + 1);
    let right = analyzeTree(node.right, depth + 1);

    let maxDepth = left.depth;
    if (right.depth > maxDepth) {
        maxDepth = right.depth;
    }

    return {
        sum: node.value + left.sum + right.sum,
        depth: maxDepth,
        count: 1 + left.count + right.count
    };
}

let tree = {
    value: 10,
    left: { value: 5, left: null, right: null},
    right: {
        value: 15,
        left: { value: 12, left: null, right: null},
        right: null
    }
};

const tests = test("Tree Structure Test");
let result = analyzeTree(tree);

tests.isEqual(result.sum, 42, "Sum of tree should be 42");
tests.isEqual(result.depth, 3, "Tree depth should be 3");

const data = JSON.parse(fs.readFileSync('example_files/nodes.json', 'utf-8'));

console.log(analyzeTree(data));