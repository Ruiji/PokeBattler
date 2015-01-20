var app = angular.module('battleSimulator', ['simulator-directives']);

app.controller('SimulatorController', function($scope) {
	$scope.pokemonFirst = pokemon1;
	$scope.pokemonSecond = pokemon2;
	$scope.turn = 1;

	$scope.getTurn = function() {
		return $scope.turn
	};
	
	$scope.pokemonToMove = function() {
		speed1 = $scope.pokemonFirst.speed;
		speed2 = $scope.pokemonSecond.speed;
		moved1 = $scope.pokemonFirst.hasMoved;
		moved2 = $scope.pokemonSecond.hasMoved;

		if (moved1 == false && moved2 == false) {
			if (speed1 > speed2) {
				$scope.pokemonFirst.hasTurn = true;
			} else {
				$scope.pokemonSecond.hasTurn = true;
			};
		} else if (moved1 == true && moved2 == false) {
			$scope.pokemonSecond.hasTurn = true;
		} else if (moved1 == false && moved2 == true) {
			$scope.pokemonFirst.hasTurn = true;
		}
	};

	$scope.getBattleMoves = function() {
		return $scope.pokemonFirst.battleMoves;
	}

	$scope.nextTurn = function() {
		turn = turn + 1;
	};

	$scope.executeMove = function(i, user, target) {

	};

	$scope.getIndex = function(usedMove) {
		index = $scope.battle.indexOf(usedMove);
		return index;
	}; 

	$scope.checkPP = function (index, pokemon) {
		pp = pokemon.battleMove[index].pp;
		if (pp > 0) {
			return true;
		} else {
			return false;
		}
	};

	$scope.checkAttack = function(index, pokemon) {
		usedMove = pokemon.battleMove[index].type;

		if (usedMove == "Attack") {
			return 1;
		} else if ( usedMove == "Heal") {
			return 2;
		} else {
			return 3;
		}
	};

	$scope.useAttack = function(index, user, target) {
		power = user.battleMove[index].power;
		accuracy = user.battleMove[index].accuracy;
		targetHP = target.currentHitpoints;
		message;

		targetHP = targetHP - power;

		if (targetHP > 0) {
			target.currentHitpoints = targetHP;
			user.hasMoved = true;
			message = target.name + " has lost " + power + " HP to " + user.name + "'s " + user.battleMove[index].name + "!";
			return message;
		} else {
			target.currentHitpoints = 0;
			user.hasMoved = true;
			message = target.name + " has fainted. " + user.name + " has won the battle!";
			return message;
		};
	};

	$scope.useHeal = function(index, user) {
		power = user.battleMove[index].power / 100;
		healthGained = user.maxHitpoints * power;
		hpfix = user.currentHitpoints + healthGained;
		message;

		if (hpfix > user.maxHitpoints) {
			user.currentHitpoints = user.maxHitpoints;
			user.hasMoved = true;
			message = user.name + "'s HP has been fully restored!";
			return message;
		} else {
			currentHitpoints = hpfix;
			user.hasMoved = true;
			message = user.name + "'s HP has been restored by " + healthGained + " HP!";
			return message;
		};
	};
});

var pokemon1 = 
	{
		name : 'Articuno',
		level : 100,
		maxHitpoints: 384,
		currentHitpoints : 384,
		speed : 295, 
		status : 'Normal',
		hasTurn: false,
		hasMoved: false,
		battleImage : "battleImages/articuno1.png",	
		battleMoves : [ 
			{
				moveName : 'Roost',
				moveType : 'Heal',
				power : 50,
				accuracy : 100,
				maxpp: 10,
				currentpp : 10,
				moveDescription : "The user lands and rests its body. It restores the user's HP by up to half of its maxHP."
			},
			{
				moveName : 'Ice Beam',
				moveType : 'Attack',
				power : 90,
				accuracy : 100,
				maxpp: 10,
				currentpp : 10,
				moveDescription : "The target is struck with an icy-cold beam of energy."
			},
			{
				moveName : 'Blizzard',
				moveType : 'Attack',
				power : 110,
				accuracy : 70,
				maxpp: 5,
				currentpp: 5,
				moveDescription : "A howling blizzard is summoned to strike the opposing team."
			}
		]
	};

var pokemon2 = 
	{
		name : 'Zapdos',
		level : 100,
		maxHitpoints: 384,
		currentHitpoints : 384,
		speed : 328, 
		status : 'Normal',
		battleImage : "battleImages/zapdos1.png",	
		battleMoves : [ 
			{
				moveName : 'Peck',
				moveType : 'Attack',
				power : 35,
				accuracy : 100,
				pp: 35,
				currentpp : 35,
				moveDescription : "The target is jabbed with a sharply pointed beak or horn."
			},
			{
				moveName : 'Thunder',
				moveType : 'Attack',
				power : 110,
				accuracy : 70,
				pp: 10,
				currentpp : 10,
				moveDescription : "A wicked thunderbolt is dropped on the target to inflict damage."
			},
			{
				moveName : 'Zap Cannon',
				moveType : 'Attack',
				power : 120,
				accuracy : 50,
				pp: 5,
				currentpp : 5,
				moveDescription : "The user fires and electric blast like a cannon to inflict damage."
			}
		]
	};