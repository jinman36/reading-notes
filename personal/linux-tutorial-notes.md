
# Day 1 - 31
### Date 01-01-21

### Link
 - [Linux Tutorial](https://ryanstutorials.net/linuxtutorial/)

## Table of Contents
1. [Outline](#outline)
1. [Structure](#structure)
1. [General House Rules](#general-house-rules)
1. [Problem Solving and Creativity](#problem-solving-and-creativity)
1. [Obtaining Linux](#obtaining-linux)

## vocabulary
- GUI - Graphic user interface
- Bash - Borne Again Shell
- PWD - Print Workng Directory


## intro
- Some tasks are best suited for the GUI - word processing and video editing
- some tasks are better for the command line - data manipulation (reporting) and file management

## Outline
### The command line
- the command line or termial is a text based interface to the system.
- opening the terminal - I'm using windows powershell, then using an Ubantu add on
- The shell, bash - within a terminal we have the shell - this defines how the terminal will beave and looks after running (or executing) commands.
- (echo $SHELL) entered into the command prompt will display the current working shell for the system.

### Shortcuts
- learn and use lots of shortcuts
- (up and down keys) these will let you traverse your history in the command line.

### Basic Navigation
- (pwd) - tells you what your present working directory is. USe this command often, since so many commands rely on you being in the right locations for execution of commands.

- (ls) - list will list out all folders in the directory that you are over
- (ls -l) - list with a long list - adds blocks, file or directory owner, grouping of file and directory owner, file size, modification time, actual name of file or directory.

### Paths
- paths under linux are hierarchial structured.  the top is the root directrtoy and is denoted with a single (/)
- Absolute - specify a location (file or directory) in relation tot he root directory. - these begin with (/)
- relative - specify a location (file or directory) in relation to where we are currently in the system. -will not begin with (/)
- (tilde) ~ - is a shortcut for home directory
- (dot) . - reference to your currentt directory
- (dot dot) .. - refernce to your parent directory

- (cd) - change directory

### Manual Pages
- (man<command>) - look up the manual page for a particular command
- (man -k <search term>) - do a keyword search through all the manual pages containing the given search term
- (/<term>) - within a man page, perform a search for 'term'
- (n) - after performing a search witin a manual page, the the next found item

### file manipulation
- (mkdir [option] <directory>) - command for creating a directory in the linux widnow
- (rmdir) - remove directory
- (touch) - create a blank file
- (cp) - copy
- (mv) - move
- (rm) - remove a file

### Utilizing Vi
- I didn't participate in this,a s much, only a ready through. I'm not sure I want to start adjusting things in this manner until further in the code fellows course.

### Wildcards
- * - represents zaro or more characters
- ? - represents a single character
- [] - represents a range of characters

### Permissions
- (chmod [permissions] [path]) -  chmod has permission arguments that are made up of 3 components
    1. Who we arethe permissions for
    2. are we granting or revoking - (+) or (-)
    3. which permission are we setting - read (r), write (w) or execute (x)
- on linux systems there are 2 ppl who may change the permissions of a file or directory. The owner of the file r dir and the root user
- a root user is a superuser who is allowed to do anything and everything to a system - typically an administrator

### filters
- (head [-number of lines to print] [print]) - view the first n lines
- (tail [-number of lines to print] [path]) - view the last n lines
- (sort [-options] [path]) - organize the data
- (nl [-options] [path]) nl - number lines
- (wc [-options] [path]) wc - word count - prints a count of lines, words, and characters
- (cut [-options][path]) - cut can seperate fields in your files from others
- (sed<expression>[path]) sed -stream editor - allows us to do a search and replace on our data
- (uniq[options][path]) - romoves duplicate lines from the data - only works if lines are adjacent to eachother
- (tac [path]) opposite of 'cat' this will print the lines in reverse order
- (awk)
- (diff)

### Grep and Regular Expressions
- Re's are regular expressions that are similar to wildcards. They allow us to create a pattern
- egrep is a program which will search a given set of data and print every line which contains a given pattern. 
- (egrep [command line options]<pattern>[path])

- Regular expression overview - allow us to identify particular pieces of information
    - .(dot) - a single character
    - ? - the preceding character matches 0 or 1 times only
    - * the preceding character matche 0 or more times 
    - + - the preceding charactoer matches 1 or more times
    - {n} - the preceding charactoer matches exactly n times
    - {n,m} - the preceding matches at least one n times but not more than m times
    - [agd] - the charactoer is one of those included within the square brackets 
    - [^agd] - the character is not one of those included inthe square brackets
    - [c-f] - the dash within the square brackets operates as a range. Inthis case it means wither the letters c, d, e or f
    - () - allows us to group several characters to behave as one
    - | (pipe symbol) -logical OR operation
    - ^ - matcheds the beginning of the line]
    - $ - matches the end of th line

### Piping and Redirection
- Every program we run on the command line auto has three data streams connected to it
    - STDIN (0) - standard input (data fed into the program)
    - STDOUT (1) - Standard output (data printed by the program, defaults to the terminal)
    - STDERR (2) - Standard error (for error messages, also defaults to the terminal)

### Process managment
 - (top) - view real-time data about processes running on the system
 - (ps) - get a listing of processes running on the system
 - (kill) - end the running of a process
 - jobs - display a list of current jobs running in the background
 - (fg) move a background process to the foreground
 - ctrl + z - pause the current foreground process and move it into the background

 ### Bash Script
 - a bash script is a documnet stating what to say and do. It is something that the computer readed and then executes
    - this allows us to define a series of actions which the computer will then perform without us having to enter the commands ourselves.
    - if a particular task is done often, or is repetitive, then a script can be a usefull tool
- Anything you can run on the command line you may place into a script and they will behave exactly the same. Vice Versa, anything you can put into a script, you may run on the command line and again it will perform exactly the same.
- The Shebang
    - the very first line of a script should tell the system which interpreter should be used on theis file.  the first two characters #!(the shebang) tells the system that directly after it will be a path tot eh interpreter used

- (which<program>) this is the comand to find the interpreter if the shebang is missing

- Stuff we learnt
    - X! - shebang
    -echo - print message to the screen
    - which - tells you the path to a particular program
    - $ - placed before a variable name when we are referring to it's value
    - ```(backticks) - used to save the output of a program into a variable
    - date - prints the date
    - if[] then else fi - perform basic conditional logic


## Structure


## General House Rules


## Problem Solving and Creativity


## Obtaining Linux


