$(document).ready(function(){
  var gues= 0;
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var number=Math.floor(Math.random()*100);
  console.log(number);
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    $('feedback').empty();
    
    //save their guess as a variable
    var play_guess= parseInt($('input').val());
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    $('#guess_number').empty());
    $('guess_number').append("guess so far:" +guess)
    $('feedback').empty());
    if (play_guess===number){
      
    //what happens if the guess is correct?
    alert("correct")
    }
      
    //if the user guessed too high...
    else if (play_guess>number){
    alert("number too high");
  }
    
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    else{
    console.log('number too low');
    }
      //update the 'feedback' paragraph to tell them to guess higher
      $("guess_number").empty();
    
  });
});
