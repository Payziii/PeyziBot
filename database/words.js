const { Schema, model } = require('mongoose');

const words = new Schema({
    guildID: String,
    users: { type: Map, default: [] }
})

module.exports = model("Words", words)