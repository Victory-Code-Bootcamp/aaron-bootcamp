function filterLanguages(results) {
    return Object.keys(results) // Get all languages (keys)
      .filter(language => results[language] >= 60) // Filter languages with score >= 60
      .sort((a, b) => results[b] - results[a]); // Sort languages by scores in descending order
  }
  
  // Example usage:
  const testResults = {
    "JavaScript": 70,
    "Python": 55,
    "C++": 68,
    "Ruby": 45,
    "Go": 60
  };
  
  console.log(filterLanguages(testResults));