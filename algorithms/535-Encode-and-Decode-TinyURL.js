/* eslint-disable no-redeclare */
const map = {};
const origin = 'https://tinyurl.com/';

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = (longUrl) => {
    const key = Math.random().toString(36).slice(-5);
    map[key] = longUrl;

    return origin + key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = (shortUrl) => {
    const key = shortUrl.split('/').pop();

    return map[key];
};
