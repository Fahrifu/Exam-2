function flattenArray(arr) {
    let result = [];

    function recursiveFlatten(subArray) {
        for (let item of subArray) {
            if (Array.isArray(item)) {
                flattenArray(item);
            } else {
                result.push(item);
            }
        }
    }

    recursiveFlatten(arr)
    return result;
}