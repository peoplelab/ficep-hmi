// escape code function
const cEscape = char => `[[=${char}]]`;
// regexp function to escape chars
const pEscape = char => new RegExp(`\\[\\[=${char}]]`, "g");


// remove dangerous tags from text string
const removeDangerousFromHTML = string =>
    string
        .replace(
        /(&lt;|&#60;|<|\[\[=m]])+script[^]*?(script(&gt;|&#62;|>|\[\[=M]])+|$)/g,
        ""
        ) // remove tag script
        .replace(
        /(&lt;|&#60;|<|\[\[=m]])+form[^]*?(form(&gt;|&#62;|>|\[\[=M]])+|$)/g,
        ""
        ) // remove tag form
        .replace(
        /(&lt;|&#60;|<|\[\[=m]])+a[^]*href=("|')mailto[^]*?(a(&gt;|&#62;|>|\[\[=M]])+|$)/g,
        ""
        ); // remove tag a with mailto

const removeDangerousTEXT = string =>
    removeDangerousFromHTML(string)
        .replace(/<.*?(\/.*?>|$)/, "")  // remove tags from string
        .replace(/\$/g           , "")  // remove $ from string
        .replace(/&/g            , "")  // remove & from string
        .replace(/\\/g           , ""); // remove \ from string


// escape special and dangerous chars to a code
const escapeChars = string =>
    string
        .replace(/]/g                      , cEscape("q"))  // escape ]
        .replace(/\[(?!\[?=[qQmMSE]\]{2})/g, cEscape("Q"))  // escape [
        .replace(/\\/g                     , cEscape("b"))  // escape \
        .replace(/</g                      , cEscape("m"))  // escape <
        .replace(/>/g                      , cEscape("M"))  // escape >
        .replace(/\$/g                     , cEscape("S"))  // escape $
        .replace(/&/g                      , cEscape("E")); // escape &

// parse code to relative char
const parseChars = string =>
    string
        .replace(pEscape("b"), "\\")  // parse \
        .replace(pEscape("m"), "<" )  // parse <
        .replace(pEscape("M"), ">" )  // parse >
        .replace(pEscape("S"), "$" )  // parse $
        .replace(pEscape("E"), "&" )  // parse &
        .replace(pEscape("q"), "]" )  // parse ]
        .replace(pEscape("Q"), "[" ); // parse [


// parse HTML string to text string
const HtmlToText = (string, enableDangerous = false) => {
    let newString = string;

    if (!enableDangerous) {
        newString = removeDangerousFromHTML(newString);
    }

    newString = escapeChars(newString);

    return newString;
};

// parse text string to HTML string
const TextToHTML = (string, enableDangerous = false) => {
    let newString = string;

    if (!enableDangerous) {
        newString = removeDangerousTEXT(newString);
    }

    newString = parseChars(newString);

    return newString;
};


// parse interface
const Parser = {
    HtmlToText: HtmlToText,
    TextToHTML: TextToHTML
};

export default Parser;
