var app = angular.module('pokeBattle', ['battle-directives']);
var pokemon1;
var pokemon2;

app.controller('BattleAppController', function($scope) {
	$scope.battle = pokemonsters;
});

app.controller('SelectController', function($scope) {
	$scope.getIndex = function(pokemonster) {
		index = $scope.battle.indexOf(pokemonster);
		return index;
	}; 

	$scope.setPokemon = function(pokemonster) {
		index = $scope.getIndex(pokemonster);
		if (pokemon1 == null) {
			pokemon1 = $scope.battle[index];
		} else if (pokemon2 == null) {
			pokemon2 = $scope.battle[index];
		} else {
		alert ("Both Pokemon have allready been chosen!")
		}
	};

	$scope.removeSetPokemon = function(toRemove) {
		if (toRemove != 1 || toRemove != 2) {
			alert("The selected Pokemon does not exist.")
		} else if (toRemove == 1) {
			pokemon1 = null;
		} else if (toRemove == 2) {
			pokemon2 = null;
		}
	};
});

app.controller('MoveController', function($scope) {
	$scope.battleMoves = {};

	$scope.getIndex = function(pokemonster) {
		index = $scope.battle.indexOf(pokemonster);
		return index;
	}; 

	$scope.addMove = function(moveToAdd, pokemonster) {
		index = $scope.getIndex(pokemonster);
		if ($scope.addMoveValidation() == true) {
			$scope.battle[index].battleMoves.push(moveToAdd);
			alert("Move is succesvol toegevoegd!");	
			$scope.battleMoves = {};		
		}
	};

	$scope.addMoveValidation = function() {
		console.log(1);
	    var mName = document.forms["addMoveForm"]["Name"].value;
	    var mType = document.forms["addMoveForm"]["Type"].value;
	    var mPower = document.forms["addMoveForm"]["Power"].value;
	    var mAccuracy = document.forms["addMoveForm"]["Accuracy"].value;
	    var mPP = document.forms["addMoveForm"]["PP"].value;
	    var mDescription = document.forms["addMoveForm"]["Description"].value;
	    
	    if (mName == null || mName == ""){
	    	console.log(2);
	    	alert("Move name must be filled out!");
	    	return false;
	    } else if (mType == null || mType == "" ){
	    	console.log(3);
	    	alert("Please choose Attack or Heal!");
	    	return false;
	    } else if (mType == "Heal" && mPower > 100 ){
	    	console.log(4);
	    	alert("Power cannot be greater than 100 if Type is Heal!");
	    	return false;
	    } else if (mType == "Heal" && mAccuracy != 100){
	    	console.log(5);
	    	alert("Accuracy can only be 100 if Type is Heal!")
	    	return false;
	    } else if (mDescription == null || mDescription == ""){
	    	console.log(6);
	    	alert("Description must be filled out!")
	    	return false;
	    } else {
	    	console.log(7);
	    	return true;
	    }
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