const {
  getUserAccessTimestamps,
  isAuthenticated,
} = require("./access-log-analyzer.js");

describe("getUserAccessTimestamps", () => {
  const logs = [
    { userId: "user123", timestamp: "2024-08-22T12:34:56Z", status: "success" },
    { userId: "user123", timestamp: "2024-08-22T12:45:12Z", status: "failed" },
    { userId: "user456", timestamp: "2024-08-22T08:22:30Z", status: "success" },
    { userId: "user123", timestamp: "2024-08-22T14:10:00Z", status: "success" },
  ];

  test("should return timestamps of successful access attempts for an authenticated user", () => {
    const result = getUserAccessTimestamps("user123", logs);
    expect(result).toEqual(["2024-08-22T12:34:56Z", "2024-08-22T14:10:00Z"]);
  });

  test("should return an empty array if there are no successful access attempts", () => {
    const result = getUserAccessTimestamps("user456", logs);
    expect(result).toEqual(["2024-08-22T08:22:30Z"]);
  });

  test("should throw an error if the user is not authenticated", () => {
    expect(() => getUserAccessTimestamps("user789", logs)).toThrow(
      "User is not authenticated"
    );
  });

  test("should return an empty array if the logs are empty", () => {
    const result = getUserAccessTimestamps("user123", []);
    expect(result).toEqual([]);
  });

  test("should return an empty array if no successful access attempts are found for the user", () => {
    const result = getUserAccessTimestamps("user123", [
      {
        userId: "user123",
        timestamp: "2024-08-22T12:45:12Z",
        status: "failed",
      },
    ]);
    expect(result).toEqual([]);
  });
});
