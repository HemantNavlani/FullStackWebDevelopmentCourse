const urlRegex = /^https?:\/\/[\w\-+.!~*?|@[\]:$%&'()*+,;=]+.[\w]+$/;

 function validateUrl(url) {
  if (urlRegex.test(url)) {
     console.log(`${url} is a valid URL`);
   } else {
     console.log(`${url} is not a valid URL`);
   }
 }

// Test the function with different URLs
 validateUrl("http://www.google.com"); // Output: http://www.google.com is a valid URL
 validateUrl("https://github.com"); // Output: https://github.com is a valid URL
 validateUrl("ftp://example.com");
