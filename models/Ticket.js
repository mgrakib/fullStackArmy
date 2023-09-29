const shortid = require("shortid");

class Ticket {
    /**
     * 
     * @param {string} userName 
     * @param {number} price 
     */
    constructor(userName, price) {
        this.id = shortid.generate();
        this.userName = userName;
        this.price = price;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

module.exports = Ticket