module.exports = {
  main: (bot, msg, settings) => {
	//your code goes here
  const server = message.guild

  if(command === `${prefix}serverinfo`) {
    
    let embed = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * 16777214) + 1,)
      .setDescription(`**Serverinfo:**`)
      .addField("***Server ID:***", server.id)
      .addField("Owner👑:", server.owner)
      .addField("***Region:***", server.region)
      .addField("***Full Name:***", server.name)
      .addField("***Server Created At:***", server.createdAt)
      .setFooter(`Serverinfo from an awesome Server!`);
      

      message.channel.sendEmbed(embed);

      return;
    
    console.log(`[Command Log] ${message.author.username} has used the serverinfo Command!`)
  }


  },
  args: '<string>',
  help: 'sample help text',
  hide: false
}
