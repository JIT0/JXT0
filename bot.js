console.log('El bot esta listo para bardear');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == 'hola') {
		message.channel.sendMessage('Hola we que tal anda xD?');
	}
	
	if (message.content == 'nose') {
		message.channel.sendMessage('este vato nunca sabe nada .-.');
	}
	
	if (message.content == 'jit0') {
		message.channel.sendMessage('posiblemente no esta :/');
	}
	
	if (message.content == 'si estoy') {
		message.channel.sendMessage('perdon we como nunca respondes :U');
	}
	if (message.content == 'oye') {
		message.channel.sendMessage('que chigados quieres? >:u');
	}
	if (message.content == 'JIT0') {
		message.channel.sendMessage('posiblemente no esta :/');
	}
	
	if (message.content == 'xd') {
		message.channel.sendMessage('de que te ries !! :u');
	}
	
	if (message.content == 'XD') {
		message.channel.sendMessage('de que te ries!! :u');
	}
	
	if (message.content == 'quien juega?') {
		message.channel.sendMessage('para que o que ?');
	}
	
	if (message.content == 'de ti') {
		message.channel.sendMessage('quiere pelea hermano ? >:u');
	}
	
	
	if (message.content == ':v') {
		message.channel.sendMessage(':u');
	}
	
	if (message.content == 'ya vengo') {
		message.channel.sendMessage('ok, te esperamos :U');
	}
	
	if (message.content == 'ya volvi') {
		message.channel.sendMessage('a nadie le importa, ok no xd');
	}

	if (message.content == 'puto bot') {
		message.channel.sendMessage('puta tu madre >:U');
	}
	
	if (message.content == 'maldito bot') {
		message.channel.sendMessage('si le sigues te arrepentiras..');
	}
	
	if (message.content == 'te odio') {
		message.channel.sendMessage('yo te odio mas :heart: ');
	}
	
	if (message.content == 'te odio bot') {
		message.channel.sendMessage('yo te odio mas :heart: ');
	}
	
	if (message.content == 'bot') {
		message.channel.sendMessage('cual de todos? 7u7');
	}

	if (message.content == 'tu') {
		message.channel.sendMessage('y yo porque? que chingados hice ?');
	}
	
	if (message.content == 'vete a la verga') {
		message.channel.sendMessage('nose donde queda me dices?');
	}
	
	if (message.content == 'alv') {
		message.channel.sendMessage('nose donde queda me dices?');
	}
	
	if (message.content == 'SrBurn') {
		message.channel.sendMessage('de seguro que ese vato esta jugando :U');
	}

	if (message.content == 'srburn') {
		message.channel.sendMessage('de seguro que ese vato esta jugando :U');
	}
	
	if (message.content == 'xD') {
		message.channel.sendMessage('de que te ries!! :u');
	}
	
	if (message.content == 'x2') {
		message.channel.sendMessage('x3');
	}
	
	if (message.content == 'no yo mas') {
		message.channel.sendMessage('si sigues con tu homosexualidades ya no van a jugar contigo :u');
	}
	
	if (message.content == 'lol') {
		message.channel.sendMessage('no juego esa mrda ...');
	}
	
	if (message.content == 'ok') {
		message.channel.sendMessage(':thumbsup:');
	}
							
});
bot.login('NDA5NTU0NTE5MDUxOTkzMDk4.DVgTUg._JZp-e6uBZdMGwhc5IFBhioBpm0');
