const findIntersection = require("./findIntersection");

describe("findIntersection", () => {
  test("should return an array with common elements", () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];
    expect(findIntersection(array1, array2)).toEqual([3, 4]);
  });

  test("should return an empty array if there are no common elements", () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    expect(findIntersection(array1, array2)).toEqual([]);
  });

  test("should return the entire array if all elements are common", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    expect(findIntersection(array1, array2)).toEqual([1, 2, 3]);
  });

  test("should handle arrays with different data types", () => {
    const array1 = [1, "two", 3, true];
    const array2 = [true, "two", 5, 6];
    expect(findIntersection(array1, array2)).toEqual(["two", true]);
  });

  test("should return an empty array if one of the arrays is empty", () => {
    const array1 = [];
    const array2 = [1, 2, 3];
    expect(findIntersection(array1, array2)).toEqual([]);
  });

  test("should return an empty array if both arrays are empty", () => {
    const array1 = [];
    const array2 = [];
    expect(findIntersection(array1, array2)).toEqual([]);
  });
});
