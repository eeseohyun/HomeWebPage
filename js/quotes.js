const quotes = [
	{
		quote: "천천히 가더라도 끝까지 가자.",
		author: "김수지",
	},
	{
		quote: "일이 안 풀릴 땐 '내가 너무 귀여운 탓인가' 생각하자.",
		author: "박대호",
	},
	{
		quote: "sic parvis magna(시작은 미약했으나 끝은 창대하리라.)",
		author: "김종호",
	},
	{
		quote: "새로운 마음으로 아침을 맞이해라.",
		author: "이서현",
	},
	{
		quote: "지금 자면 꿈을 꾸지만, 지금 노력하면 꿈을 이룬다.",
		author: "유도헌",
	},
	{
		quote: "별은 바라보는 자에게 빛을 준다.",
		author: "조관우",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
