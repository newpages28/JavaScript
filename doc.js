

var message="Hi, world";
console.log(message);

var name="An";
if (name.length>3) {
	console.log(name + ", hi");
} else {
	console.log("we are the world");
}
var Name="Peter"; 


if (Name==="Max") {console.log("Hi, Max");

} else if (Name==="Anna"){ console.log("hi, Anna");
}else {console.log ("who are you?");}

var money=0;

while (money<10) {
	console.log ("it is good " + money);
	money ++;
}
console.log("no money is left");

var Fruits=["Banana", "Orange", "apple", "tangerine"];
for ( x=0;   x<Fruits.length; x++) {
	console.log (Fruits[x]=Fruits[x] + " - plum and juicy");
}

var lines=["abcdefghijklmnopqrstuvwxwz"];
var random="";
while(random.lenght<8){var liter=lines[Math.floor(Math.random()*lines.length)]; random+=liter

}




var lines = "абвгдеёжзиклмнопрстуфхцчшщъьэюя";
   var line = lines[Math.floor(Math.random() * lines.length)];
   
   for (lines = 0; lines < 8; lines++) {
      console.log(line + " < Случайный символ");
   }

var Start = "Cool Javascript";

for (i=0; i < Start.length; i++) {
	if (Start[i]=="o") {
		Start[i]=0} 
	if (Start[i]=="a") {
		Start[i]=4} 
	 		 
} 

console.log (Start);


var Start = "Cool Javascript";

	for (i=0; i < Start.length; i++) {
	  if (Start[i]=="o", Start[i]=0) {}
      if (Start[i]=="a", Start[i]=4) {} 
}
console.log (Start);


var Start = "Cool Javascript";
var final=Start.replace("Cool Javascript", "C00l J4v4script");
console.log(final);


/*pop outs
alert("it is very dangerous");
var me=prompt("what is ur name?");
console.log ("my name is " + me);
var you=confirm('do u want to go on?');
if (you) {
	console.log ("yes");
}
else {
	console.log ("no");
}

*/
/*
//game//
 
var Fruits=["apple", "banana", "peach", "pie"];
var Fruit=Fruits[Math.floor(Math.random() * Fruits.length)];
var finalans=[];
for (var i=0; i<Fruit.length; i++) {
	finalans[i]="-";
}
var remainingLetter=Fruit.length;
while(remainingLetter>0) {
	alert(finalans.join(" "));

var guess=prompt("Guess a single word or press cancle to finish the game");
if (guess===null) {
	break;}
	
else if(guess.length !==1) {
	alert("please enter only one figure");
}
else {
	for (var i = 0; i < Fruit.length; i++) {
		if (Fruit[i]===guess) {
			finalans[i]=guess;
			remainingLetter--;
		}
	}
}
}
alert(finalans.join(' '));
alert('the word was guessed - '+ Fruit);

*/
var Kittens=function(HowManySmiles){
for (var i = 0; i<HowManySmiles; i++) {
	console.log(i + " =^.^=");
}
}
var many=function(howmany, iconi) {
	for (var i = 0; i <howmany; i++) {
		console.log(i +  iconi);
	}
}
var me = function(number) {
	return number /2;
}

var final=function(prize) {
	if (prize<5) {
		return "it is bronze";
	}
	if (prize<9) {
		return "it is silver"
	}
	return "gold";
}

$("h1").fadeOut(2000);
$("h1").fadeIn(2000);
$("#An").hide(2000).show(1000);













