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
}