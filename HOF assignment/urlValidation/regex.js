function isValidURL(input) {

    let regexUrl = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig ;

    return regexUrl.test(input);

}

const url1 = "http://www.example.com";
const url2 = "https://subdomain.example.co.uk";


console.log(`Is "${url1}" a valid URL?  ${isValidURL(url1) ? "Yes" : "No"}`);
console.log(`Is "${url2}" a valid URL?  ${isValidURL(url2) ? "Yes" : "No"}`);