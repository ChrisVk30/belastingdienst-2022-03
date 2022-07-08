## Lab 1 - Introduction

### 1. Prepare your development environment

* Make *Google Chrome* the default browser.
* Ensure the free source-code editor *Visual Studio Code* (VSC) has been installed on your computer.
* Let VSC automatically save all your changes: check File | Autosave.
* To allow running your solution on a simple development web server, install the plugin *Live Server* (developed by Ritwick Dey).
* To run JavaScript server-side requires *Node.js*. Download and install the latest LTS (Long Term Support) version of Node.js.


### 2. Write Hello World

* Create a new folder and open it in Visual Studio Code. In the folder create two files:
	* ```hello.html```
	* ```hello.js```
* In ```hello.js``` write a JavaScript function that prints "Hello World" in the console.
* In ```hello.html``` use  the emmet abbreviation to add the boilerplate code (```<html><head>```etc.). Type an exclamation mark (!) followed by a TAB.
* Make a reference to ```hello.js``` and make sure the function is called.
* To watch the result you could open ```hello.html``` in the browser directly. Instead make use of the *Live Server* plugin. Ensure the html code is visible, then click the icon *Go Live* in the bottom bar.
* In the background the development server will start and host your files. Furthermore, the default browser will start and will show the html file. From now on all changes you'll make in the code will be visible in the browser almost immediately.
* In ```hello.js``` declare a new variable: ```me```.
* Assign an object literal to ```me``` that holds your name and city.
* Print it in the console.
* After checking the results in the browser close the plugin (same icon in the bottom bar).
* Close the browser.
* As Node.js has been installed you can also run the JavaScript code outside of the browser. Ensure the JavaScript code is visible in VSC and press F5.
Note that both the browser and Node.js have got a console in which you can log results.