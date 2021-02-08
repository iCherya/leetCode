/**
 * @param {string} command
 * @return {string}
 */
const interpret = (command) => command.replace(/\(al\)/g, 'al').replace(/\(\)/g, 'o');
