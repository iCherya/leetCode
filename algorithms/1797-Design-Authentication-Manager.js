/**
 * @param {number} timeToLive
 */
class AuthenticationManager {
    constructor(timeToLive) {
        this.timeToLive = timeToLive;
        this.tokens = {};
    }

    /**
     * @param {string} tokenId
     * @param {number} currentTime
     * @return {void}
     */
    generate(tokenId, currentTime) {
        this.tokens[tokenId] = { start: currentTime, end: currentTime + this.timeToLive };
    }

    /**
     * @param {string} tokenId
     * @param {number} currentTime
     * @return {void}
     */
    renew(tokenId, currentTime) {
        const token = this.tokens[tokenId];

        if (token && token.end > currentTime) {
            token.start = currentTime;
            token.end = currentTime + this.timeToLive;
        }
    }

    /**
     * @param {number} currentTime
     * @return {number}
     */
    countUnexpiredTokens(currentTime) {
        return Object.values(this.tokens).filter((token) => token.end > currentTime).length;
    }
}
