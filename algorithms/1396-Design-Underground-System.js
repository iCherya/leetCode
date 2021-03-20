class UndergroundSystem {
    constructor() {
        this.checkIns = {};
        this.trips = {};
    }

    /**
     * @param {number} id
     * @param {string} stationName
     * @param {number} t
     * @return {void}
     */
    checkIn(id, stationName, t) {
        this.checkIns[id] = { t, stationName };
    }

    /**
     * @param {number} id
     * @param {string} stationName
     * @param {number} t
     * @return {void}
     */
    checkOut(id, stationName, t) {
        const route = `${this.checkIns[id].stationName}, ${stationName}`;
        if (!(route in this.trips)) this.trips[route] = [];
        this.trips[route].push(t - this.checkIns[id].t);
    }

    /**
     * @param {string} startStation
     * @param {string} endStation
     * @return {number}
     */
    getAverageTime(startStation, endStation) {
        const route = `${startStation}, ${endStation}`;
        const amount = this.trips[route].length;

        return this.trips[route].reduce((acc, curr) => acc + curr, 0) / amount;
    }
}
