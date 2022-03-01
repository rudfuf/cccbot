const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const characters = [
		"로라스","휴톤","루이스","타라","트리비아","카인","레나","드렉슬러","도일","토마스","나이오비","시바","웨슬리","스텔라","앨리셔","클레어","다이무스","이글","마를렌","샬럿",
		"윌라드","레이튼","미쉘","린","빅터","카를로스","호타루","트릭시","히카르도","까미유","자네트","피터","아이작","레베카","엘리","마틴","브루스","미아","드니스","제레온","루시",
		"티엔","하랑","J","벨져","리첼","리사","릭","제키엘","탄야","캐럴","라이샌더","루드빅","멜빈","디아나","클리브","헬레나","에바","론","레오노르",
		"시드니","테이","티모시","엘프리데","티샤","카로슈","라이언","파수꾼A","에밀리","플로리안","케니스","이사벨","헤나투"
	];

	const positions = [
		"딜","탱","별"
	];

	function randomValueFromArray(array) {
		let random = Math.floor(Math.random() * array.length);
		return array[random];
	}

	let character = randomValueFromArray(characters);
	let position = randomValueFromArray(positions);

	let chooseCha = position +" "+ character

	console.log(chooseCha)

	interaction.reply(chooseCha)
});

client.login(token);