//jshint esversion:6

exports.getDate = getDate;
exports.getDay = getDay;
// console.log(module);
//making more use of module 


var getDate = function () {
    const today = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

    return date;
}
var getDay = function () {
    const today = new Date();
    const options = {
        weekday: 'long',

    };
    const day = today.toLocaleDateString("en-US", options); // Saturday
    return day;
}
