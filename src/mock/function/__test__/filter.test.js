import filter from "../filter";

describe("mock callback", () => {
  test("toHaveBeenCalledWith", () => {
    // Arrange
    const array = [1, 2, 3, 4, 5];
    let callback = jest.fn();
    callback
      .mockReturnValueOnce(true)
      .mockReturnValue(false)
      .mockReturnValueOnce(true);
    // Act
    const result = filter(callback, array);
    // Assert
    expect(result).toEqual([1, 2]);
  });

  test("toHaveReturned", () => {
    // Arrange
    // Act
    // Assert
  });
});
