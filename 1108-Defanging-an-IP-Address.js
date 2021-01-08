/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => address.split('.').join('[.]');
