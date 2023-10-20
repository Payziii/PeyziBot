const { Schema, model } = require('mongoose');

const mafia = new Schema({
    guildID: String,
    users: { type: Map, default: [] }
})

module.exports = model("Mafia", mafia)