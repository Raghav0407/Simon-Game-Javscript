
// var for the buttoncolors that we have
var buttonColours=["blue","red","green","yellow"];
//pattern that randomly is generating 
var game=[];
//pattern that we are clicking and checking
var userpattern=[];
//1. Now the button we are clicking getting id and class


//Now this is the main functioning of the simon game 

var started=false;
var level=0;
$(document).keypress(function()
{
    if(!started)
{
    $("#level-title").text("Level  "+ level);
    sequence();
    started=true;

}
})



$(".btn").click(function()
{
    //2. Now to get the choosen color from the colors
    var choosencolor=$(this).attr("id");
    //3.pushing the color we have clicked to the array
    userpattern.push(choosencolor);
    //Now in the same way we are playing sound when userc licks button
    playSound(choosencolor);
    animation(choosencolor);

    //now main function which is to check correct or not
    check(userpattern.length-1);
})

//main check function
function check(level)
{
if(game[level]===userpattern[level])
{
    console.log("Won");
    if(game.length===userpattern.length)
    {
        setTimeout(function(){
            sequence();
        },1000)
    }
}
else
{
    console.log("Wrong");
    //play soung for worong work
    playSound("wrong");
    //2.  there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
    $("#level-title").text("Game Over, Press Any Key to Restart");
}
}




function sequence(){
    userpattern=[];
    level++;
    $("#level-title").text("Level  "+level);

var randomcolor=Math.floor(Math.random()*4);
//will generate a random number between 0 and 3

//Now we are taking the index of color from the array
var randomcolorfound=buttonColours[randomcolor];
game.push(randomcolorfound);

//Now using jQuery we are getting id of button and applying some animation to it
$("#"+ randomcolorfound).fadeIn(100).fadeOut(100).fadeIn(100);

//Now using Jquery we are getting audio for that particular button
playSound(randomcolorfound);

}
//Now we are making the function of playsound that when randomly and user clicked that button then sound plays
function playSound(name){
var audio=new Audio("sounds/"+name+".mp3");
audio.play();
}

//Now we are making function animation to do animation on the button which is being presed or clicked
function animation(name)
{
    $("#"+name).addClass("pressed");
    setTimeout(function()
    {
        $("#"+name).removeClass("pressed");
    },100);
    
}