using System;

// // A C# Exercise
// // Write a console program in C# that invites the user to guess a number.


// // **Display a message to the user asking them to guess the secret number. 
Console.WriteLine();
Console.WriteLine();
Console.WriteLine("**Guess a secret number**"); 
Console.WriteLine("**_____________________**");
Console.WriteLine();
Console.WriteLine("How hard do you want to make it? Enter the coorisponding level number:");
Console.WriteLine();
Console.WriteLine("1 - Easy 8 guesses");
Console.WriteLine("2 - Medium 6 guesses");
Console.WriteLine("3 - Hard 4 guesses");
Console.WriteLine("4 - Cheater, no limits");

string difficulty = Console.ReadLine();
int difficultyNumber = int.Parse(difficulty);
int guessCount = 8;

if (difficultyNumber == 1)
{
    guessCount = 8;
};

if
(difficultyNumber == 2)
{
    guessCount = 6;
};

if
(difficultyNumber == 3)
{
    guessCount = 4;
};
if 
(difficultyNumber == 4)
   {
guessCount = 100;
   } 

Console.WriteLine();//space line
// // **Display a prompt for the user's guess.
Console.WriteLine($"You have {guessCount} tries to guess the number between 1 - 100. Enter your number: ");

// // Take the user's guess as input and save it as a variable.
//truns guess into an integer

// // Use a random number to set the secret number between 1 and 100 instead of a hard-coded number.
Random randomAnswer = new Random();//function to set a random number
int answer = randomAnswer.Next(1, 100); //set the paramaters for the number range 
for (int i = 1; i < (1 + guessCount); i++)
{

// // Display the user's guess back to the screen.
// //Console.Writeline(guess)

Console.WriteLine($"Enter guess number {i}");//space line
// // Compare the user's guess with the secret number. Display a success message if the guess is correct, otherwise display a failure message.
string guess = Console.ReadLine();
int parsedGuess = int.Parse(guess);

if (parsedGuess == answer)
 {
Console.WriteLine("Woo Hoo! You got it!"); //correct
  Console.WriteLine();

 break;
 } 

else if (parsedGuess != answer && (guessCount - i) == 0)        
 {
Console.WriteLine($"You Failed :( the answer is {answer}");
  Console.WriteLine();
 
       
}

else if (parsedGuess < answer)
{
 Console.WriteLine($"NOPE! guess again. {parsedGuess} is lower than the Answer. You have {guessCount - i} guesses left");
 Console.WriteLine();
 
 }

else if (parsedGuess > answer)
{

 Console.WriteLine($"NOPE! guess again. {parsedGuess} is higher than the Answer. You have {guessCount - i} guesses left");
 Console.WriteLine();

}
    
}

