function isValidProfileURl(inputUrl) {

    let regexProfileURL = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/gi;

    return regexProfileURL.test(inputUrl);
} 


const profileURL1 = "https://www.linkedin.com/in/abhishek-ranjan-791b6b22a/" ;
const profileURL2 = "https://www.linkedin.com/in/abhishek-791b6b22adsfsdfsdfsdfsdfsdaf/";

console.log(`Is "${profileURL1}" a valid URL? - ${isValidProfileURl(profileURL1) ? "Yes" : "No"}`);
console.log(`Is "${profileURL2}" a valid URL? - ${isValidProfileURl(profileURL2) ? "Yes" : "No"}`);