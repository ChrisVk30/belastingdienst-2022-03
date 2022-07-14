# Lab 4 - Declare variables

## Preparations

Create the setup you made last lab.

## Case explanation

Welcome to the greatest bank in the world. The first bank that decided to go all in! The future is bright indeed.

Our mission? TYPE SAFETY. Yes. All the way. We will program our entire code base 100% type safe. No customer will lose it's money because of a type error!

Our brilliant bank will be TypedBank™.

![Typed Bank](img/TypedBank-logo-and-slogan.png)

The success of this company depends solely on you. Good luck!

## Exercise 1 - Declare constants

Create/empty the file `main.ts`.

Declare readonly variables:

1. A `string` called `DEFAULT_COUNTRY_CODE` with value `'NL'`
1. A `string` called `DEFAULT_BANK_CODE` with value `'TYPE'`
1. Try predict what the types of the variables are. Are you correct? You can see the type by hovering over the variable name in your code editor.

## Exercise 2 - Playing with variables - If time permits

1. Copy + paste the following boilerplate:
    ```ts
    for(var i=0; i<2; i++){
        let j = i;
        console.log(i, j);
    }
    ```
1. Try to guess what the result is.
1. Execute the code and verify the result.
1. Now replace the `console.log(i, j)` statement with `setTimeout(function() { console.log(i, j); }, 0)`.\
   _Note:_ `setTimeout` will queue work to be done at a later time. In this case, the `console.log` will be executed _after_ the for loop is executed.
1. Try to guess what the result might be.
1. Execute the code. Is it what you expected? Can you explain why?
1. Remove the for statement (keep only the result of exercise 1)

