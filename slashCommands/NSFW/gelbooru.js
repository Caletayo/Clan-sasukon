const randomPuppy = require('random-puppy');
const request = require('node-fetch');
const fs = require("fs")
const config = require(`${process.cwd()}/botconfig/config.json`)
const Discord = require('discord.js');
const {
    MessageEmbed
} = require('discord.js')
const booru = require('booru');

module.exports = {
    name: "gelbooru",
      description: "Get an Gelbooru Theme hentai ",
      options: [ 
            //{"Integer": { name: "ping_amount", description: "How many times do you want to ping?", required: true }}, //to use in the code: interacton.getInteger("ping_amount")
            {"String": { name: "query", description: "Search Option", required: false }}, //to use in the code: interacton.getString("ping_amount")
            //{"User": { name: "which_user", description: "From Which User do you want to get the Avatar?", required: false }}, //to use in the code: interacton.getUser("ping_a_user")
            //{"Channel": { name: "what_channel", description: "To Ping a Channel lol", required: false }}, //to use in the code: interacton.getChannel("what_channel")
            //{"Role": { name: "what_role", description: "To Ping a Role lol", required: false }}, //to use in the code: interacton.getRole("what_role")
            //{"IntChoices": { name: "what_ping", description: "What Ping do you want to get?", required: true, choices: [["Bot", 1], ["Discord Api", 2]] }, //here the second array input MUST BE A NUMBER // TO USE IN THE CODE: interacton.getInteger("what_ping")
            //{"StringChoices": { name: "what_ping", description: "What Ping do you want to get?", required: true, choices: [["Bot", "botping"], ["Discord Api", "api"]] }}, //here the second array input MUST BE A STRING // TO USE IN THE CODE: interacton.getString("what_ping")
      ],
      run: async (client, interaction, cmduser, es, ls, prefix, player, message, GuildSettings) => {
        if(GuildSettings.NSFW === false) {
            const x = new MessageEmbed()
                .setColor(es.wrongcolor)
                .setFooter(client.getFooter(es))
                .setTitle(client.la[ls].common.disabled.title)
                .setDescription(require(`${process.cwd()}/handlers/functions`).handlemsg(client.la[ls].common.disabled.description, {
                    prefix: prefix
                }))
            return interaction?.reply({
                embeds: [x], empheral: true
            });
        }

        //Checks channel for nsfw

        ////////if (!message.channel.nsfw) return interaction?.reply({content:eval(client.la[ls]["cmds"]["nsfw"]["anal"]["variable2"]), empheral: true})
        var query = interaction?.options.getString("query");
        if(!query) query = null;
        booru.search('gb', !query ? [] : [query], {
            random: true
        })
        .then(booru.commonfy)
        .then(images => {
            for (let image of images) {
                return interaction?.reply({
                    content: `${image.common.file_url}`,
                    ephemeral: true
                });
            }
        }).catch(err => {
            if (err.name === 'booruError') {
                return interaction?.reply({content: eval(client.la[ls]["cmds"]["nsfw"]["gelbooru"]["variable5"]),
                ephemeral: true});
            } else {
                return interaction?.reply({content: eval(client.la[ls]["cmds"]["nsfw"]["gelbooru"]["variable6"]),
                ephemeral: true});
            }
        })
    }
};