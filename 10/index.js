function nestedMap(array, mappingFunction) {
    return array.map(function (currentItem) {
        if (Array.isArray(currentItem)) {
            return nestedMap(currentItem, mappingFunction);
        } else {
            return mappingFunction(currentItem);
        }
    });
}

const array = [1, [2, 3], [4, [5, 6]]];
const mappedArray = nestedMap(array, function (element) {
    return element * 2;
});

console.log(mappedArray);