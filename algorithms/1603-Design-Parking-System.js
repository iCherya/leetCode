/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
    /**
     * @param {number} big
     * @param {number} medium
     * @param {number} small
     */
    constructor(big, medium, small) {
        this.parking = {
            1: big,
            2: medium,
            3: small
        };
    }

    /**
     * @param {number} carType
     * @return {boolean}
     */
    addCar(carType) {
        if (this.parking[carType] - 1 < 0) return false;

        this.parking[carType] -= 1;
        return true;
    }
}
