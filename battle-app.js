var app = angular.module('pokeBattle', ['battle-directives', 'ngAudio']);

app.controller('BattleAppController', function($scope) {
	$scope.battle = pokemonsters;
	console.log($scope.battle);
	$scope.options = {
  	playlist: ['/battleSound/pokeIntro.mp3', '/battleSound/pokeBattle.mp3', '/battleSound/pokeEro.mp3'],
  	loop: true
};
});

var pokemonsters = [
	{
		name : 'Articuno',
		level : 100,
		maxHitpoints: 384,
		currentHitpoints : 384,
		speed : 295, 
		status : 'Normal',
		description: "A legendary bird Pokemon. It can create blizzards by freezing moisture in the air.",
		battleImage : "battleImages/articuno1.png",
		battleImageFront: "battleImages/articunoFront.png",	
		battleImageBack: "battleImages/articunoBack",	
		battleMoves : [ 
			{
				moveName : 'Roost',
				moveType : 'Heal',
				power : 0.5,
				accuracy : 100,
				pp: 10,
				moveDescription : "The user lands and rests its body. It restores the user's HP by up to half of its maxHP."
			},
			{
				moveName : 'Ice Beam',
				moveType : 'Attack',
				power : 90,
				accuracy : 100,
				pp: 10,
				moveDescription : "The target is struck with an icy-cold beam of energy."
			},
			{
				moveName : 'Blizzard',
				moveType : 'Attack',
				power : 110,
				accuracy : 70,
				pp: 5,
				moveDescription : "A howling blizzard is summoned to strike the opposing team."
			}
		]
	}, {
		name : 'Zapdos',
		level : 100,
		maxHitpoints: 384,
		currentHitpoints : 384,
		speed : 328, 
		status : 'Normal',
		description: "A legendary bird Pokemon that is said to appear from clouds while dropping enormous lightning bolts.",
		battleImage : "battleImages/zapdos1.png",
		battleImageFront: "battleImages/zapdosFront.png",	
		battleImageBack: "battleImages/zapdosBack",	
		battleMoves : [ 
			{
				moveName : 'Peck',
				moveType : 'Attack',
				power : 35,
				accuracy : 100,
				pp: 35,
				moveDescription : "The target is jabbed with a sharply pointed beak or horn."
			},
			{
				moveName : 'Thunder',
				moveType : 'Attack',
				power : 110,
				accuracy : 70,
				pp: 10,
				moveDescription : "A wicked thunderbolt is dropped on the target to inflict damage."
			},
			{
				moveName : 'Zap Cannon',
				moveType : 'Attack',
				power : 120,
				accuracy : 50,
				pp: 5,
				moveDescription : "The user fires and electric blast like a cannon to inflict damage."
			}
		]
	}, {
		name : 'Moltres',
		level : 100,
		maxHitpoints: 384,
		currentHitpoints : 384,
		speed : 306, 
		status : 'Normal',
		description: "It is said to be the legendary bird of fire. Every flap of its wings creates a dazzling flare of flames.",
		battleImage : "battleImages/moltres1.png",
		battleImageFront: "battleImages/moltresFront.png",	
		battleImageBack: "battleImages/moltresBack",			
		battleMoves : [ 
			{
				moveName : 'Ember',
				moveType : 'Attack',
				power : 40,
				accuracy : 100,
				pp: 25,
				moveDescription : "The target is attacked with small flames."
			},
			{
				moveName : 'Flame Charge',
				moveType : 'Attack',
				power : 50,
				accuracy : 100,
				pp: 20,
				moveDescription : "The user cloaks itself with flame and attacks."
			},
			{
				moveName : 'Rest',
				moveType : 'Heal',
				power : 1,
				accuracy : 100,
				pp: 2,
				moveDescription : "The user fully restores it's HP."
			}
		]
	}
];