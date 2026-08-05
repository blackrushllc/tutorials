# Lesson Plans

## TUTORIAL PAGE 001 - Hello World and the Basics

### Introduction Video
- KALA_FUNDAMENTAL: In this tutorial we are going to learn the fundamental concepts of programming with UI-BASIC. 
- We are going to write simple applications the demonstrate the core concepts of programming.  
- By the end of this tutorial you are going to have a general understanding how how to write code in any programming language.
### Example 1 - Hello World
```
print "Hello from UI-BASIC"
```
#### Listen: This first example is what we call the "Hello World" program.
- Whenever any programmer starts learning a new programming language, the first program they write is usually the "Hello World" program.
- It is a simple program that prints the text "Hello World" to the screen.
- Everyone does this, just to make sure that their programming language is working properly.
- To start, click the button to open our first example in an editor tab. Click the button that says "Open in UI-BASIC Editor".
- You will see a new editor tab open with the code for the first example.
- Then, do 2 things. Click the yellow "Tron/Troff" button to turn off the "Tron" mode. This is a toggle button you can 
  - use to turn on or off extra messages in the terminal that can help you debug your program. We don't need this on.
- After that, click the green "Clear" button or type the command "clear" in your terminal to clear the screen.
- Finally, click the "Run" button or press F9 to run the program. You will see the text "Hello from UI-BASIC" printed to the terminal screen.
- Now do this, change the text inside the quotes to say "Hello World" or something else instead of "Hello from UI-BASIC". 
  - Then run the program again.
- You should see the new text printed to the screen.
- Now move on to the next example.
### Example 2 – Variables and Input
```
// Run this example to see how variables and input work in UI-BASIC

A$ = "Hello"
B$ = " from UI-BASIC"
print A$ + B$

INPUT "What is your name? ", B$
print A$ + B$

// Try changing the value of B$ and running the program again.

// Try selecting just the last line of the program and running it alone with F8

```
#### Listen: Variables and Input...
- To start, click the button to open our first example in an editor tab. Click the button that says "Open in UI-BASIC Editor".
- You will see a new editor tab open with the code for this example.
- Let's talk about variables. A variable is a place in memory where you can store data.
- In UI-BASIC, a variable that ends with a dollar sign ($) is a string variable, which means it can store text.
- Variables can be any name you want, but it is conventional to use all-caps letters and underscores to separate words in variable names.
- In this example, we are creating 2 variables: we call them A\$ and B\$. We say "String" when we see the dollar signe, 
  - which helps to let us know that these variables are intended to hold strings of text and not something else like numbers or lists
- Notice the first and last couple of lines that start with "//". These are comments. 
- Comments are lines that you can add to your program to explain what the code is doing. They are not executed by UI-BASIC.
- Slash-Slash is a common watershed comment symbol in most programming languages. UI-BASIC also gives you other ways to add comments.
- The first line of actual code assigns the value "Hello" to the variable A$.
- The second line assigns the value " from UI-BASIC" to the variable B$.
- The third line prints the value of A\$ plus B\$.  When you plus together strings, it means to join them together.
- The fourth line of actual code prompts the user to enter their name in a pop up box and assigns the user's input to the 
  - variable B$, no matter what they typed.
- The fifth line prints the text A\$ plus B\$ again, this time using the value of B$ instead of the literal string " from UI-BASIC".
- Now here's an extra assignment. Use your mouse to only select the last line of the program and run it with F8. Hit F8 again and again to see what happens.
### Example 3 – Decision Making with IF
```
REM Print a message if the user's number is less than 5, equal to 5, or greater than 5

INPUT "Enter a number from 1 to 10? ", number%
IF number% < 5 THEN print "The number is less than 5"
IF number% = 5 THEN print "The number is equal to 5"
IF number% > 5 THEN print "The number is greater than 5"
```
####  Listen: Decision Making with IF...
- To start, click the button to open our first example in an editor tab. Click the button that says "Open in UI-BASIC Editor".
- You will see a new editor tab open with the code for this example.
- Sometimes you will want your program to make a decision based on some condition. That's one of the main things we use computers for, after all!
- In UI-BASIC, we use the IF statement to make decisions.
- The first line of the program prompts the user to enter a number from 1 to 10.
- The second line uses the IF statement to check if the number entered by the user is less than 5.
- If it is, the program prints the message "The number is less than 5".
- The third line uses the IF statement to check if the number entered by the user is equal to 5.
- If it is, the program prints the message "The number is equal to 5".
- The fourth line uses the IF statement to check if the number entered by the user is greater than 5.
- If it is, the program prints the message "The number is greater than 5".
- We can use IF a lot of different ways, and you'll learn more about them in the next section.
### Example 4 – Loops with FOR/NEXT
```
REM Print the squares of numbers 1 through 10

FOR i = 1 TO 10
  PRINT i, " squared is ", i * i
NEXT i
```
####  Listen: Loops with FOR/NEXT...
- To start, click the button to open our first example in an editor tab. Click the button that says "Open in UI-BASIC Editor".
- You will see a new editor tab open with the code for this example.
- Sometimes you will want your program to repeat a block of code multiple times. That's where loops come in.
- In UI-BASIC, we use the FOR/NEXT loop to repeat a block of code a specific number of times.
- The first line of the program starts the FOR loop. It creates a variable called i and sets it to 1. 
- The loop will continue as long as i is less than or equal to 10.
- The second line prints the value of i, the text " squared is ", and the square of i (which is i multiplied by itself).
- The third line ends the FOR loop and increments the value of i by 1.
- The loop will repeat until i is greater than 10.
- We have lots of other ways we can do loops, and you'll learn more about them as we go through the lessons.
###  Recap Video (Todo: Kala)
- In this lesson we learned the basics of programming with UI-BASIC.
- We wrote our first program, the "Hello World" program, which prints text to the screen.
- We also learned about variables and input, decision making with "if" statements, and loops with "For" and "Next".
- These are the fundamental concepts of programming that you will use in every programming language.
- In the next lesson, we will dive deeper into variables and functions. See you there!

- I den här lektionen lärde vi oss grunderna i programmering med UI-BASIC.
- Vi skrev vårt första program, programmet "Hello World", som skriver ut text på skärmen.
- Vi lärde oss också om variabler och indata, beslutsfattande med "if"-satser och loopar med "For" och "Next".
- Det här är de grundläggande programmeringsbegreppen som du kommer att använda i alla programmeringsspråk.
- I nästa lektion kommer vi att fördjupa oss i variabler och funktioner. Vi ses där!
---

## TUTORIAL PAGE 002 - Variables and Functions

### Introduction Video (Todo Skye)
- In this tutorial we are going to learn about variables and functions in UI-BASIC.
- Variables are used to store data in your program, and functions are used to group code together to perform a specific task.
- By the end of this tutorial you will understand how variables and functions are used together in most programming languages.
### Example 1 - Using a very simple function, or "CALLING"
```
// Create a function called PRINTME
FUNCTION PRINTME()
  print "------------------"
  print "Hello from UI-BASIC"
  print "------------------"
END FUNCTION

// Then run the function
PRINTME()

```
####  Listen: 
- To use a function, we must first create it.  After we create a function, we then call it by name whenever we want to use it.
- In this example, we are calling the function PRINTME, which prints text to the screen in between lines of dashes.
### Example 2 – Sending a variable to a function
```
// Create a function called PRINTME that takes a string variable as a parameter
FUNCTION PRINTME(TextToPrint$)
  print "------------------"
  print TextToPrint$
  print "------------------"
END FUNCTION

// Then run the function with a different string each time
A$ = "Hello from UI-BASIC"
PRINTME(A$)

B$ = "I can reuse functions!"
PRINTME(B$)
```
####  Listen: Blah...
### Example 3 – Another function example with multiple parameters
```
// Create a function called PRINTME that takes a two string variables as a parameters
FUNCTION PRINTME(TextToPrint$, LinesToPrint$)
  print LinesToPrint$
  print TextToPrint$
  print LinesToPrint$
END FUNCTION

// Then run the function with a different string each time
A$ = "Hello from UI-BASIC"
PRINTME(A$, "------------------")

B$ = "I can reuse functions!"
PRINTME(B$, "====")
```
####  Listen: Blah...
### Example 4 – A function that can call itself!
```
// Create a function called fib() that calculates 

FUNCTION fib%(n%)
    IF n% < 2 THEN 
        rVal% =  n%
    ELSE    
        rVal% =   fib%(n% - 1) + fib%(n% - 2)
    END IF   
    RETURN rVal%
END FUNCTION

PRINT fib%(10); // 55

TODO: ERROR!!!! - ALSO RETURN inside IF/END IF block errors with a different error

[BASIC] Run Program
[BASIC ERROR] RETURN without GOSUB at line 9
[BASIC] End Run Program
RETURN without GOSUB at line 9


```
####  Listen: Blah...
###  Recap Video  (Todo Skye)
In this tutorial we learned about variables and functions in YoBASIC. We learned how to create functions, call them, and pass variables to them as parameters. We also learned about recursion, which is when a function calls itself. These concepts are fundamental to programming and are used in most programming languages. In the next tutorial, we will learn about loops and how to use them in YoBASIC. See you there!
---

## TUTORIAL PAGE 003 - Loops

### Introduction Video (Todo: Tiffany)
- Hi! In this tutorial we are going to learn about creating different kinds of "loops", which are used to repeat a block of code multiple times.
- All programming languages have different ways to create loops, but they all follow the same basic structure.
- Loops are important because they allow us to automate repetitive tasks and process large amounts of data efficiently, or to run a continuous workflow, such as a video game, until certain conditions are met.
- For example, a video game loop might pause when you open up an inventory screen, and then exit when you quit the game or get your self killed.
- A loop on a website might check for new posts every few seconds, and then display them on the screen until you close the browser window.
- By the end of this tutorial you will have a basic understanding of different kinds of loops.
  
### Example 1 - Looping with GOTO 
```
start:
  print "Hello from UI-BASIC"
  INPUT "Do you want to see this again? (Y/N) ", answer$
  IF answer$ = "Y" OR answer$ = "y" THEN GOTO start
```
####  Listen: Hello World...
### Example 2 – Looping with GOSUB
```
start:
    print "Hello from UI-BASIC"
    INPUT "Do you want to see the time and date? (Y/N/Q) ", answer$
    IF answer$ = "Y" OR answer$ = "y" THEN GOSUB time_and_date
    IF answer$ = "Q" OR answer$ = "q" THEN END
    PRINT "You pressed ", answer$
    GOTO start
    
time_and_date:
    print "The current date and time is: ", DATE$ + " " + TIME$
    RETURN
```
####  Listen: Blah...
### Example 3 – Looping with WHILE/END WHILE
```
print "Hello from UI-BASIC"
counter% = 1
WHILE counter% <= 5
  print "This is loop iteration number "; counter%
  counter% = counter% + 1
END WHILE
```
####  Listen: Blah...
### Example 4 – Loopingn with FOR/NEXT
```
print "Hello from UI-BASIC"
FOR i = 1 TO 5
  print "This is loop iteration number ", i
NEXT i
```
####  Listen: Lesson Recap

###  Recap Video  (Todo: Tiffany)
- In this tutorial we learned about loops in UI-BASIC.
- We learned how to use GOTO and GOSUB to create loops, as well as WHILE/END WHILE and FOR/NEXT loops.
- While most programming languages no longer use GOTO, "For Loops" and "While Loops" are extremely common in most languages.
- Loops are an essential part of programming and are used to automate repetitive tasks and process large amounts of data efficiently.
- In the next tutorial, we will learn about arrays, lists, and dictionaries. See you there!
---

## TUTORIAL PAGE 004 - Arrays and Lists

### Introduction Video Todo: unassigned - Updated but not re-recorded yet
- In this chapter you will learn about arrays in UI-BASIC. An array is a variable that can hold multiple values at once. Instead of creating a separate variable for every single value, you can store them all in one place and access them by number. Think of it like a row of lockers — each locker has a number, and you can put something different in each one.

  - Original Kala (still in website, it's fine for now): 
  - Things are starting to get interesting now! We're going to learn about arrays, lists and dictionaries in UI-BASIC.
  - These are data structures that allow us to store and organize multiple values in a single variable, and they are essential for handling complex data in our programs.
  - By combining loops, logic and functions with arrays, lists and dictionaries, we can create powerful and efficient programs.
  - By the end of this tutorial you will understand how to use arrays, lists and dictionaries

### Example 1 | Your First Array
- BASICARRAY.BAS — Create a numeric array with DIM, assign values, and print specific elements.

### Example 2 | Array of Words
- STRINGARRAY.BAS — Create a string array using the dollar sign, loop through it with FOR/NEXT.

### Example 3 | Adding Up an Array
- ARRAYLOOP.BAS — Use a loop to process every item in an array, calculate total and average score.

### Example 4 | A Grid of Values
- GRID.BAS — Introduction to 2D arrays using DIM grid(3,3), like a spreadsheet with rows and columns.

### Recap Video Todo: Updated - Victoria - In Progress
- Arrays let you store multiple values in a single variable and access them by number. Whether you're working with numbers or text, arrays keep your data organized and make it easy to process with loops. 2D arrays take it further — letting you store data in rows and columns, just like a spreadsheet.

- Original Kala (still in website):
  - Arrays let you store multiple values in a single variable and access them by number. Whether you're working with numbers or text, arrays keep your data organized and make it easy to process with loops. 2D arrays take it further — letting you store data in rows and columns, just like a spreadsheet.
  - We learned how to create arrays, lists, and dictionaries, and how to use them to store and organize data.
  - These data structures are essential for handling complex data in our programs.
  - In the next tutorial, we will learn about classes and objects.

---

## TUTORIAL PAGE 005 - Variables and Data Types

### Introduction Video Todo: Victoria - In Progress
- In this chapter you will learn about variables and data types in UI-BASIC. A variable is a named container that stores a value your program can use and change. UI-BASIC supports several data types including numbers and text (or strings).

### Example 1 | Numeric Variable
- NUMERICVAR.BAS — Declare and use a numeric variable with LET.

### Example 2 | String Variable
- STRINGVAR.BAS — Declare and use a string variable using the dollar sign convention.

### Example 3 | Multiple Data Types
- DATATYPES.BAS — Combine string and numeric variables in the same program using semicolons to print mixed output.

### Recap Video Todo: Taleah
- Variables are the foundation of every program. In UI-BASIC, numeric variables store numbers and string variables store text using the dollar sign convention. Knowing your data types and how to combine them in output is the first step to writing real, useful programs.

---

## TUTORIAL PAGE 006 - Data Cleaning

### Introduction Video Todo: Victoria In-Progress
- In this chapter you will learn how to clean and manipulate string data in UI-BASIC. In the real world, data is often messy — values may be too long, too short, or need to be broken apart. UI-BASIC gives us tools to inspect and fix strings using LEN, LEFT$, RIGHT$, and MID$.

### Example 1 | Checking Length
- LEN — Inspect the length of a string value.

### Example 2 | Extracting with LEFT$ and RIGHT$
- Extract characters from the beginning or end of a string.

### Example 3 | Extracting with MID$
- Pull characters from any position inside a string.

### Example 4 | Putting It Together
- Combine LEN, LEFT$, RIGHT$, and MID$ to parse real-world data like product codes, dates, phone numbers, and IDs.

### Recap Video Todo:  Victoria In-Progress
- Combining LEN, LEFT$, RIGHT$, and MID$ gives you full control over string data. In the real world, product codes, dates, phone numbers, and IDs are often stored as a single string — knowing how to break them apart is a core data skill.






NEW CHAPTERS 7 - 12  (old proposed ones are below this)

INTRO and RECAPS:

**Chapter 7 Intro — User Input & Output**
In this tutorial, we are going to learn about user input and output in YoBASIC. That means our programs will not just sit there quietly like a toaster with commitment issues. They will actually ask the user questions, accept keyboard input, and respond with useful information. We will focus on text-based input for now, but the same idea applies later when programs use buttons, forms, menus, and other graphical interfaces. By the end of this chapter, you will understand how programs communicate with users, and you will build a simple chat-style game where the computer responds to what the player types.

**Chapter 7 Recap — User Input & Output**
In this chapter, we learned how user input and output work in YoBASIC. We learned how a program can ask questions, receive keyboard input, store answers, and print responses back to the screen. We also saw how these simple text-based ideas connect to bigger programming concepts, like forms, buttons, and graphical user interfaces. Most importantly, we used input and output to make a simple chat game, which is one of the first steps toward making programs feel interactive. In the next chapter, we will learn how programs make decisions using conditional logic.

**Chapter 8 Intro — Conditional Logic**
In this tutorial, we are going to learn about conditional logic in YoBASIC. Conditional logic is how a program decides what to do next, kind of like choosing whether to go left, go right, open the mysterious door, or absolutely not open the mysterious door because that is how horror movies start. We will focus on IF, ELSE IF, and ELSE statements, which let our code respond differently depending on what is happening. We will also briefly touch on other decision-making tools that exist in programming, like switches and loops. By the end of this chapter, you will use conditional logic to build a simple text adventure game.

**Chapter 8 Recap — Conditional Logic**
In this chapter, we learned how conditional logic helps programs make decisions. We used IF, ELSE IF, and ELSE statements to check conditions and choose different paths through our code. We saw how this same idea appears in almost every programming language, whether you are making a game, a website, a business app, or a tiny program that just refuses to behave. We also used these ideas to create a simple text adventure game where the player’s choices changed what happened next. In the next chapter, we will learn how programs can connect to outside services using APIs.

**Chapter 9 Intro — Using APIs**
In this tutorial, we are going to learn about APIs in YoBASIC. An API is a way for one program to talk to another program or service. That may sound fancy, but the basic idea is simple: your code sends a request, and something else sends back a response. In this chapter, we will focus on using the AI object and the AI.CHAT method to send prompts and receive answers. This is a great example of how modern programs can connect to powerful tools outside of themselves. By the end of this chapter, you will understand the basic idea of using an API, and you will see how a simple program can communicate with AI.

**Chapter 9 Recap — Using APIs**
In this chapter, we learned what an API is and how it allows programs to communicate with outside services. We focused on using the AI object and the AI.CHAT method to send a prompt and receive a response. We saw that APIs are used everywhere in modern programming, from weather apps and payment systems to maps, games, websites, and AI tools. Even though the details can vary between languages and platforms, the basic pattern is usually the same: send a request, get a response, and use that response in your program. In the next chapter, we will return to one of the classic building blocks of coding: math and operators.

**Chapter 10 Intro — Basic Math & Operators**
In this tutorial, we are going to learn about basic math and operators in YoBASIC. Do not worry, this is not the part where someone suddenly rolls in a chalkboard and ruins your day. We are going to focus on the practical math that programs use all the time, like adding, subtracting, multiplying, dividing, comparing values, and working with simple calculations. Operators are the symbols and commands that let code do this work. By the end of this chapter, you will understand how programs use math and comparisons, and you will build a simple number game to practice these ideas.

**Chapter 10 Recap — Basic Math & Operators**
In this chapter, we learned how basic math and operators work in YoBASIC. We practiced using code to add, subtract, multiply, divide, compare values, and make simple calculations. We also learned that math in programming is not just for calculators. It is used in games, websites, business tools, animations, forms, scoring systems, and almost anything that needs to measure, count, compare, or decide. We used these concepts to build a simple number game, giving us another example of how small programming ideas can turn into something interactive. In the next chapter, we will learn what to do when things go wrong.

**Chapter 11 Intro — Error Handling**
In this tutorial, we are going to learn about error handling in YoBASIC. Every programmer eventually writes code that breaks, crashes, freezes, complains, or stares back at them like it knows their secrets. Error handling is how we prepare for problems before they ruin the whole program. We will look at basic try and catch concepts, and we will talk about when a program should stop, when it should continue, and how to show helpful messages when something goes wrong. By the end of this chapter, you will understand why good programs do not just work when everything goes perfectly. They also know how to respond when things go sideways.

**Chapter 11 Recap — Error Handling**
In this chapter, we learned the basics of error handling in YoBASIC. We talked about how programs can run into unexpected problems, and how try and catch structures can help us respond to those problems in a controlled way. We also learned that sometimes a program should stop, sometimes it should continue, and sometimes it should explain the problem to the user instead of simply failing. These ideas are important in every programming language because real-world code has to deal with real-world surprises. In the next chapter, we will learn how to make our code easier to read, understand, and maintain.

**Chapter 12 Intro — Comments & Code Readability**
In this tutorial, we are going to learn about comments, code readability, and basic programming best practices. Writing code that works is important, but writing code that another human can understand is also a big deal. That other human might be a teammate, a future student, or even you three weeks from now wondering what past-you was thinking. We will learn how comments can explain important parts of a program, and how good names for variables and functions can make code much easier to follow. By the end of this chapter, you will understand how to make your programs cleaner, clearer, and less likely to become a spooky haunted mansion of confusing code.

**Chapter 12 Recap — Comments & Code Readability**
In this chapter, we learned how comments and good coding habits make programs easier to understand. We talked about using comments to explain important ideas, choosing clear names for variables and functions, and organizing code so it is easier to read and maintain. We also learned that clean code is not just about looking professional. It helps prevent mistakes, makes debugging easier, and allows other people to work with your program more comfortably. At this point, you have learned many of the core ideas behind programming, including input, output, decisions, APIs, math, error handling, and readability. These are fundamentals you can use in YoBASIC, Basil, and many other programming languages.
















## TUTORIAL PAGE 007 -  Storing Data

### Introduction Video Todo: Taleah
- In this tutorial we are going to learn about how to store data in UI-BASIC.
- UI-BASIC provides several ways to store data, including files, databases, and cloud storage.
- UI-BASIC has built-in support for storing data in databases, which makes it easy to create applications that can save and retrieve data.
- We will also learn how to use SQL (Structured Query Language) to interact with databases and perform operations like creating tables, inserting data, and querying data.
- By the end of this tutorial you will understand how to store and retrieve data in UI-BASIC.
### Example 1 - Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Hello World...
### Example 2 – Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Blah...
### Example 3 – Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Blah...
### Example 4 – Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Blah...
###  Recap Video Todo: Taleah 
- In this tutorial we learned about how to store data in UI-BASIC.
- We learned how to use UI-BASIC's built-in database to store and retrieve data.
- We also learned how to use SQL to interact with databases and perform operations like creating tables, inserting data, and querying data.
- In the next tutorial, we will learn about how to share your work in a web page.
---

## TUTORIAL PAGE 008 - Sharing your Work in a Web Page

### Introduction Video

```
FYI we made this video already, maybe we can use that between 008 and 008b (008a?):
KALA_MAKE_WEBSITE_DOWNLOAD_BASIL: In this tutorial we are going to generate a sample website that you can on your 
browse on your local computer. Click on the link below to download and install Basil, and then come back here for chapter two.
```

- In this tutorial we are going to create a sharable web page in UI-BASIC.
- UI-BASIC makes it easy to share your web pages with others by providing built-in support for hosting and sharing web pages online.
- We will learn how to create a web page, publish it online, and share it with others.
- By the end of this tutorial you will understand how to share your web page in UI-BASIC.
### Example 1 - Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Hello World...
### Example 2 – Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Blah...
### Example 3 – Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Blah...
### Example 4 – Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Blah...
###  Recap Video 
- In this tutorial we learned about how to share your work in a web page.
- We learned how to use UI-BASIC's web server to host and share web pages online.
- In the next tutorial, we will learn about creating and sharing a web application.
---

## TUTORIAL PAGE 008b - Projects - Creating and Sharing a Web Application

### Introduction Video
- KALA_CREATE_WEBAPP_SHARE_PUBLISH_SHARE: In this tutorial we are going to use UI-BASIC to create a web application 
- that you can share with your friends.  We will build on the basics that we've learned so far to create a web 
- project that does something useful, and then publish and share your work online!
### Example 1 - Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Hello World...
### Example 2 – Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Blah...
### Example 3 – Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Blah...
### Example 4 – Blah
```
print "Hello from UI-BASIC"
```
####  Listen: Blah...
###  Recap Video
- In this tutorial we learned about creating and sharing a web application.
- We learned how to use UI-BASIC's web server to host and share web pages online.
- In the next tutorial, we will learn about handling errors in UI-BASIC.
---

## TUTORIAL PAGE 009 - Using APIs (Coming Soon)

### Introduction Video Todo: Jenna
- Coming Soon - Using APIs, specifically using the AI object, and AI.CHAT method to send prompts and receive a response.

---

## TUTORIAL PAGE 010 - Basic Math & Operators

### Introduction Video Todo: Jenna
- Basic Math & Operators, and a simple number game.

### Example 1 | Basic Arithmetic
- Use the four basic operators (+, -, *, /) to perform addition, subtraction, multiplication, and division.

### Example 2 | Order of Operations
- BASIC follows standard order of operations (parentheses, then * and /, then + and -); use parentheses to control the order yourself.

### Example 3 | MOD and Remainders
- Use MOD to get the remainder after division, useful for checking even/odd numbers or cycling through a range.

### Example 4 | Number Guessing Game
- Combine math and IF / ELSE IF / ELSE with INPUT to build a simple number guessing game that tells the player if their guess is too high, too low, or correct.

---

## TUTORIAL PAGE 011 - Error Handling (Coming Soon)

### Introduction Video Todo: Jenna
- Coming Soon - Error Handling (try/catch basic exception handling, whether to stop or continue, etc.)

---

## TUTORIAL PAGE 012 - Comments & Code Readability / Best Practices

### Introduction Video Todo: Jenna
- Comments & Code Readability / Best Practices, function and variable naming, etc.

---

## TUTORIAL PAGE 013 - Advanced Topics - Hello Worlds
- Python
- Javascript
- cplusplus
- BASH
- Php
- Java

SIDIFY music converter:

Strip Tease Symphony - DONE 
https://open.spotify.com/track/4gWeQcvByJuzXSs4KkghBI?si=0cab20d6ff8643aa
Anyway - DONE
https://open.spotify.com/track/7Hsc7e9eU7s3GwmgUVFBrC?si=0877fd2ea20a4b54

Hello - DONE
https://open.spotify.com/track/47nze8Xq8QyvhTqir4aoM6?si=eecf41e03a5d4979

Mystical Adventures - DONE
https://open.spotify.com/track/0zu0m5KevlDNU3Uk7HdU7g?si=e92be1a3599d4205

As - DONE
https://open.spotify.com/track/2TN3KmfLKlnUPDpIQPUNrp?si=5fe5cd00865b4a31

Jig - DONE
https://open.spotify.com/track/3m2k89eVZpA4GOogDNXHKx?si=cdda79031f80405f

Flight over Rio - DONE
https://open.spotify.com/track/2BiueR07VGUbxGTjp9q9fA?si=0f8d16b3bb994fc0

Midnight Tango - DONE
https://open.spotify.com/track/2ZjGc10SrEJsghK8iTOqK6?si=632aa2f6262145d9

Mediterranean Sundance - DONE
https://open.spotify.com/track/7lflARLzeb71KjdYPU7CFt?si=df8e4764ccc647e2

Race With Devil On Spanish Highway - DONE
https://open.spotify.com/track/1qPSxRyMfES52PbpxCzWcd?si=4952244d5d13471b

Lady of Rome, Sister of Brazil - DONE
https://open.spotify.com/track/3JIUGcYAFgwtjWy0DClmx3?si=ef8bed4969fe43d8

Elegant Gypsy Suite - DONE
https://open.spotify.com/track/5d1bISuOdjVc5ThkmNHOIP?si=4b1ce10fc9af4a96

Carlos Primero - DONE
https://open.spotify.com/track/0Ktu27rkXVCt07e5kw3Mtp?si=8db9d44f51224314

Rearranging Furniture - DONE
https://open.spotify.com/track/3HRqtrUKxbPgE1dqpZT1vb?si=1f33dd8d22174000

Svyryd - Beduin Rework - DONE
https://open.spotify.com/track/4MiehqrnVBCtOHU94Id6TT?si=936bb6e648db4610

A Doschyk Nakrapate - Beduin Rework - DONE
https://open.spotify.com/track/0RN1tsVNhDyxLhGtLwBVEA?si=6a05e5a373ff4e08

Union Federal - DONE
https://open.spotify.com/track/6eejZDTHCw7bBb1ZT8UI0P?si=c7e0043cf7074b76

It's Ice - DONE
https://open.spotify.com/track/2EtxqjLs4wSBTNtkm5VqkE?si=b8085c27603d40c1

Metallic Rain - DONE
https://open.spotify.com/track/04JlHsrYsWIjL6YzJBktHN?si=8431bd9316e945cf

La petite Fille de la mer - DONE
https://open.spotify.com/track/3uNFRvQVEIEsQgHdZFw6Dk?si=e7e427c8efd24029

Super Hexacordium - DONE
https://open.spotify.com/track/0eCVcOv8pHrFjkdSMW5OhW?si=08b96a1786d64d3f

Lunar Pond - DONE
https://open.spotify.com/track/0xufJ8mQSnhvDyqnAueCUr?si=06bd788b2b0545cf

Union Federal - DONE
https://open.spotify.com/track/6eejZDTHCw7bBb1ZT8UI0P?si=d2d1c70df2e6438e

Things to Build
- Run Forest (Backend script hosting) BASRUN.COM (Write this in BASIC)
- IsHoliday API
- UI-BASIC home page
 
