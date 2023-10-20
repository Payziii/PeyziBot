const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const Words = require('../../../database/words.js');

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('words')
        .setDescription('Игра в слова'),
    async execute(interaction, guild) {
        await interaction.deferReply();
        
        let words = await Words.findOne({ guildID: interaction.guild.id });
        if(words != false) return interaction.editReply(`<:no:1107254682100957224> | Игра уже начата...`)
        await Words.create({ guildID: message.guild.id }).then(() => {
            client.channels.cache
                .get('1124261194325299271')
                .send(
                    `<:pickaxe:763356477884203049> | На сервере **${message.guild.name}(${
                        message.guild.id
                    })** начата игра **СЛОВА**`
                );
            })
            words = await Words.findOne({ guildID: interaction.guild.id });
            if(!words) return console.log('?a')

        const expiredTimestamp = Math.round(Date.now() / 1000)+60;
        const embed = new EmbedBuilder()
  .setTitle("Набор в игру: Слова")
  .setDescription(`Нажмите на **кнопку** ниже, чтобы участвовать в игре\n\nНабор окончится: <t:${expiredTimestamp}:R>`)
  .setColor(guild.colors.basic);
        const change_button = new ButtonBuilder()
            .setCustomId('change_button')
            .setLabel('Играть!')
            .setStyle(ButtonStyle.Secondary);
        
        const row = new ActionRowBuilder()
            .addComponents(change_button);
        
        await interaction.editReply({ embeds: [embed], components: [row] });
        
        const collectorFilter = i => i.customId === 'change_button' && i.user.id === interaction.user.id;
        
        const collector = interaction.channel.createMessageComponentCollector({ filter: collectorFilter, time: 60000 });
        
        collector.on('collect', async (button) => {
            await button.reply({ content: '1', ephemeral: true });
        });
        
        collector.on('end', async () => {
            await interaction.channel.send('15');
        });


    },
};
