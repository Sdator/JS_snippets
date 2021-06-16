// 利用正则匹配 需要的字段
const getCV = (CV) => CV.match(/pt_pin=.+?;/) + CV.match(/pt_key=.+?;/);

// 网页复制的cookie
const CV = `




`;

const CookieValue = getCV(CV);

console.log(CookieValue);
