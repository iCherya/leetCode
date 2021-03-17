/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 */
class Solution {
    constructor(radius, xCenter, yCenter) {
        this.radius = radius;
        this.xCenter = xCenter;
        this.yCenter = yCenter;
    }

    /**
     * @return {number[]}
     */
    randPoint() {
        const angle = 2 * Math.PI * Math.random();
        const r = this.radius * Math.sqrt(Math.random());

        const x = r * Math.cos(angle) + this.xCenter;
        const y = r * Math.sin(angle) + this.yCenter;

        return [x, y];
    }
}
