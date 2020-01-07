# Baseball Trivia Game

## Getting Started

This game should be run on Google Chrome on a desktop for best results, but will work fine on any browser. The game is also fully mobile-responsive.

## Game Instructions

This game is a basic multiple choice trivia game centered around baseball facts from 2019. The goal is to score 10 runs before the user makes 3 incorrect guesses (a.k.a "outs")

Each correct guess will count as a "hit", and will add a runner to the field of play or on the bases. Once there are 3 runners on the bases, each subsequent hit will count as a "run".

![questions](https://user-images.githubusercontent.com/58187597/71845492-4848d780-307d-11ea-9a6e-212942df6a5b.png)

The pitch count timer will allow the user 20 seconds to answer the question before being marked as an out.

![pitchclock](https://user-images.githubusercontent.com/58187597/71845457-38c98e80-307d-11ea-966f-0471d6c871c9.png)

The game will track the player's highest score in the browser's local storage, and you can clear the high score using the X-button next to the counter if needed.

![scoreboard](https://user-images.githubusercontent.com/58187597/71845407-1d5e8380-307d-11ea-9450-ba0d513b4b0b.png)

If you wish to mute the music/sounds, press the volume icon in the lower-right corner of the baseball field screen.

Have fun, and good luck!

## Built With

- HTML
- CSS
- Javascript

## Game Development

This game was built using the above technologies,using primarily DOM manipulation as well as z-indexing to shift the order of the questions on the screen.

An alternate version may be added later that uses OOP in the Javascript build to allow for higher scaling as more questions are added.

Note: The high score feature using the browser's local storage to save the score variable, so it doesn't track across browsers or environments.

## Future Versions

- Using OOP for randomization of questions/answers
- Adding an inning function to raise difficulty throughout the game
- Two-player score tracker and modes
- Real-time scoreboard from MLB API

## Creator

**Brendan Wilson** - [Portfolio](https://bwilson19.github.io)
