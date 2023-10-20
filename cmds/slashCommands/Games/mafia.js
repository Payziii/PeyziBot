const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    cooldown: 50,
    data: new SlashCommandBuilder()
        .setName('mafia')
        .setDescription('Игра в мафию'),
    async execute(interaction, guild) {
        await interaction.deferReply();
    },
};
