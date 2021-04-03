const CV = `
`;

const CookieValue = CV.match(/pt_pin=.+?;/) + CV.match(/pt_key=.+?;/);
console.log(CookieValue);
