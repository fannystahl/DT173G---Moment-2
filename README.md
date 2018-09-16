# DT173G---Moment-2
A repository used for the course Webbutveckling III - Moment 2

## What is the purpose of automation?

Automation is a conveinient tool to make repetitive and tedious tasks run automatically in the background while developing. By using a system created by Gulp, or other software with the same purpose, many tasks such as minifying, concatinating and moving files can be automated.

## What systems have been created, and why?

A system has been created to automate an amount of tasks when developing a website. The working directory is called "src", where changes to html, css, javascript and image files are made. With gulp, all files from src can be moved to a pub directory when they are edited, and then into subdirectories based on what type of file they are. Before moving the file, gulp also minifies JacaScript and CSS files to reduce the filesize, and concatinates multiple JavaScript files into a main.js file, and multiple CSS files are concatinated into a style.css file. Gulp also minimizes images before moving them to the pub directory.

All this is to make the work of a developer more streamlined and to remove simple tasks from the workload, and instead automating them. In a long term project, the amount of time saved by this will be very valuable. 

## Description of the system, how to run it and what tasks it contains

To run all of the system, all that needs to be called in the terminal, if npm and gulp is installed and you are standing in the home directory, is "gulp". This is because all the specified tasks are also listed under a task that is specified to be the 'default' task. The tasks that are part of default can also be called by calling "gulp" and then the function name.

The function copyHTML copies all HTML files from src to pub.

The function scripts concatinates and minifies javascript files in the src/js directory, then moves them to pub/js.

The function styles concatinates and minifies CSS files in the src/css directory, then moves them to pub/css.

The function imageMin minimizes images and moves them from src/img to pub/css.

The function watcher, is a bit special. It contains a series of gulp.watch methods, pointing to the other specified functions and their directories except for default. When the function runs, it will continously look for changes in the directories, then run the function specified. This way, the developer does not have to call the functions continously to minify their files, copy them to the pub directory and so on. The watcher will notice changes and automatize the process.

## Notes

#### Visual Studio Code and Live Reload
Since Visual Studio Code is used for coding, a Live Reload gulp plugin was not used. Instead, a VSC extension called Live server is used. If a live reload alternative is wanted, gulp-livereload can be installed for use in gulpfile.js.

#### JavaScript files and functions
The Javascript files do not contain any actual functions. Instead they run two separate colsole logs for testing. I still feel a bit unsure what kind of JavaScript functions could be used to improve the small website. For the purpose of the assignment, to show that gulp can minify and concatinate the two files, this could still be enough. 

#### Working in the terminal
I still think it's difficult to work in the terminal, especially using git. I know the commands and how to use them but sometimes inserting messages or recovering from inserting the wrong password when pushing a commit to a remote repository makes me unsure how to work with it. I hope at the end of the course I will be confident in how to solve problems like these.
