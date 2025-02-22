import fs from 'fs';

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

const data = JSON.parse(fs.readFileSync('example_files/nodes.json', 'utf-8'));

console.log(analyzeTree(data));