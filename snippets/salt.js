// saltjs - Copyright (c) 2013 James Doyle - MIT
var $ = function(s) {
    return document[{
    '#': 'getElementById',
    '.': 'getElementsByClassName',
    '@': 'getElementsByName',
    '=': 'getElementsByTagName'}[s[0]]
    || 'querySelectorAll'](s.slice(1));
};
// https://bugzilla.mozilla.org/show_bug.cgi?id=162927
HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;