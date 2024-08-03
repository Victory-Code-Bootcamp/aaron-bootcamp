/* Write a function named generateSlug that takes a blog post title as input and returns a URL-friendly version.
Replace spaces with hyphens and convert the entire title to lowercase
Bonus: Handle tricky cases like empty titles, titles with only spaces, or titles with special characters. */
const generateSlug = (title) => {
  // Trim the title
  const cleanedTitle = title.trim();
  // replace spaces with hyphens, convert to lowercase, and remove special characters
  const slug = cleanedTitle
    .replace(/[^/a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  //Return the slug or a default message if the title is empty after cleaning
  return slug.length > 0 ? slug : "untitled";
};

// Test cases
console.log(generateSlug("   Hello World   "));
console.log(generateSlug("   "));
console.log(generateSlug("Hello World! How's it going?"));
console.log(generateSlug("  Leading and trailing spaces  "));
console.log(generateSlug(""));
