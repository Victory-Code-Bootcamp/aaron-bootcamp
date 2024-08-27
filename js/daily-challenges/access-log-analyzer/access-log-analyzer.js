// Helper function to check if a user is authenticated
function isAuthenticated(userId) {
  const authenticatedUsers = ["user123", "user456"]; // Example authenticated users
  return authenticatedUsers.includes(userId);
}

// Main function to get user access timestamps
function getUserAccessTimestamps(userId, logs) {
  if (!isAuthenticated(userId)) {
    throw new Error("User is not authenticated");
  }

  return logs
    .filter((log) => log.userId === userId && log.status === "success")
    .map((log) => log.timestamp);
}

module.exports = { getUserAccessTimestamps, isAuthenticated };
