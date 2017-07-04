$(document).ready(function(){
var myHealth=0;
var enemyHealth=0;
var attackPower=0;
var counterAttack=0;
var addpower = 0;
var myWins =0;
//dispaly fighters properties, values are reytrieved from the div
$("#fighter1Health").html("Health Point: "+$("#fighter1").attr("value")+"<br> Attack Power: "+$("#fighter1").attr("data-power"));
$("#fighter2Health").html("Health Point: "+$("#fighter2").attr("value")+"<br> Attack Power: "+$("#fighter2").attr("data-power"));
$("#fighter3Health").html("Health Point: "+$("#fighter3").attr("value")+"<br> Attack Power: "+$("#fighter3").attr("data-power"));
$("#fighter4Health").html("Health Point: "+$("#fighter4").attr("value")+"<br> Attack Power: "+$("#fighter4").attr("data-power"));
$("#winId").html("Number of Wins: "+myWins);
//hide the attack button at page start
$("#attackBtn").hide();
$(".activeEnemy").empty();

$(".fighters").on("click", function(){
$(this).removeClass("fighters");
$(this).removeClass("col-md-3");
$(this).addClass("me");
$(this).clone().appendTo(".myPos");
$(".fighters").clone().appendTo(".enemiesPos");
$(".fighters").addClass("enemies");
$(".enemies").removeClass("fighters");
$("#fightersId").empty();

});


//this was used because the class was dynamically generated
$(document).on('click', '.enemies', function(){




//if an active enemy as been won
	// if ($('.activeEnemy').(':empty')){
  //do something


$(".activeEnemyPos").empty();

$("#gameText").empty();
$(this).addClass("activeEnemy");


// $(".activeEnemyPos").html(this);
$("#attackBtn").show();
$(this).removeClass("enemies");
$(this).removeClass("col-md-3");
$(this).clone().appendTo(".activeEnemyPos");
enemyHealth  = $(this).attr("value");
counterAttack =parseInt($(this).attr("data-power"));
$(".activeEnemy").find(".caption").html("Health Point: "+$(".activeEnemy").attr("value")+"<br> Counter Attack Power: "+counterAttack);
$(this).hide();

//$(".enemies").unbind("click");
$('.enemies').prop('disabled', true);
// $(".enemies").attr('disabled','disabled');
//.off('click');
// }
// else
// {
// 	alert("You have not defeated the active enemy");
// }



});
$("#attackBtn").on("click",function(){
//$("#winTune")[2].play();
// $("#winTune")[1].play();

	$(".me").animate({width:"200px"});
	// $("#winTune")[1].play();
myHealth  = $(".me").attr("value");
enemyHealth= $(".activeEnemy").attr("value");
attackPower = parseInt($(".me").attr("data-power"));
counterAttack =parseInt($(".activeEnemy").attr("data-power"));
addpower = $(".me").attr("data-ipower");
//alert(myHealth);
 myHealth = myHealth - counterAttack;
enemyHealth = enemyHealth - attackPower;
attackPower =  parseInt(attackPower) +  parseInt(addpower);
$()


$(".me").attr("value", myHealth);
$(".activeEnemy").attr("value", enemyHealth);
$(".me").attr("data-power", attackPower);

$(".me").find(".caption").html("Health Point: "+$(".me").attr("value")+"<br> Attack Power: "+attackPower);
$(".activeEnemy").find(".caption").html("Health Point: "+$(".activeEnemy").attr("value")+"<br> Counter Attack Power: "+counterAttack);



if (myHealth<= 0) {
	//checking if both health value is less than zero
	if (enemyHealth<=0 && myHealth<= 0)
{
	//$("#winTune")[1].play();
	$(".me").empty();
	var tryBtn = $("<button>");
	tryBtn.html("Restart");
	tryBtn.addClass("btnTryAgain btn btn-md btn-default");
}
 else
{	//$("#winTune")[1].play();
	$("#gameText").empty();
	$(".me").empty();
	
	var youLose =$("<div>");
	youLose.html("You lose, Try again! <br> Number of Wins = " +myWins);
	$("#gameText").append(youLose);
	var tryBtn = $("<button>");
	tryBtn.html("Restart");
	tryBtn.addClass("btnTryAgain btn btn-md btn-default");
	attackPower=0;
	$(".me").attr("data-ipower","0");
	$(".me").attr("data-power","0");
	// $("#attackBtn").on("click",function(){
	// 	alert("You need to Restart");

			}
	// });
	
	$("#gameText").append(tryBtn);
}
if (enemyHealth<=0){
	if (enemyHealth<=0 && myHealth<= 0)
{
	var youWin =$("<div>");
		youWin.html("Although you killed the Enemy, You also lost your life! <br> GAME OVER <br> Number of Wins = " +myWins);
	$("#gameText").append(youWin);
	$(".activeEnemy").empty();
}
else {
	//$("#winTune")[0].play();

	// $('#sound')[0].play()
	$("#attackBtn").hide();

	$(".activeEnemy").html(" ");
	//$('.activeEnemy div').empty();
	$(".activeEnemy").removeClass("activeEnemy");
	var youWin =$("<div>");
	myWins++;

	$("#winId").html("Number of Wins: "+myWins);

	$('.enemies').prop('disabled', false);
	youWin.html("Great you Won! Select Another Enemy <br> Number of Wins = " +myWins);
	$("#gameText").append(youWin);
	// $(".activeEnemy").attr("data-ipower","0");
	$(".activeEnemy").attr("data-power","0");
	

	}
}
//you won all fights
if (Wins == 3)
	{
		var youWin =$("<div>");
		youWin.html("Great you Won! <br> GAME OVER <br> Number of Wins = " +myWins);
	$("#gameText").append(youWin);
	}




// console.log("my health "+myHealth);
// console.log("Enemy Health "+enemyHealth);
// console.log("my Power " +attackPower);
// console.log("counter Attack "+counterAttack);
// console.log("power Incrase by "+addpower);

});
//restart after losing
$(document).on("click", ".btnTryAgain", function(){
	location.reload(true);

});



});

