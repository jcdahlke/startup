From the GitHub assignment I have learned how to create markdown files, use VS Code with Github, and just how to use Github in general
[Back to README](README.md)

These are Notes from the CS 260 Class and these can even be used in the midterm and final

## AWS
➜  ssh -i [key pair file] ubuntu@[ip address]
For example,

➜  ssh -i ~/keys/production.pem ubuntu@53.104.2.123
My public IP address: http://34.239.126.78/
Size: t2.micro
Server Region: US East (N. Virginia) - us-east-1
Name: jcdahlke-CS260WebServer-1.0
Elastic IP allows me to keep the same public IP Address

## Domain
➜  rgbcolorguesser.click

## HTML
### HTML Overview:
HTML structures web content and is foundational for web development.
Core to both Single Page Applications (SPAs) and Multi-Page Applications (MPAs).
### Basic Example:
Simple HTML document structure:
html
'&lt;p>Hello world&lt;/p>'

### Elements & Tags:
Tags are enclosed with &lt; > and define content structure, e.g.,
'&lt;p>text&lt;/p>' for paragraphs.
### Attributes:
Elements can have attributes like id and class, e.g.,'&lt;p id="greet" class="welcome">'.

### Hyperlinks:
Links are created with the
'&lt;a> tag, e.g., &lt;a href="url">link text&lt;/a>'.
### Common HTML Elements:
html, head, body, p, h1-h9, a, div, img, form.

## HTML Startup
* index.html is for the homepage
* I have 4 HTML pages
* I can use a table of div to display place holders for different colors
* I can change the color of letters using the following span style="color: red;">Input here&lt;/span>

## CSS Flex
### Flexbox Layout for Responsive Design
Flexbox is ideal for creating responsive layouts where elements move around based on window resizing or orientation changes.
Example layout includes a header, footer, and a main content area that is split into two sections (controls on the left, content on the right).
### Setting up Flexbox on the Body
The body is turned into a flex container by applying display: flex and setting flex-direction: column to stack the header, main, and footer vertically.
Other properties like margin: 0 and height: 100vh are used to ensure the body fills the entire viewport.
css

body {
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100vh;
}
### Flexbox Properties for Header, Footer, and Main
Header and Footer: flex: 0 80px for the header and flex: 0 30px for the footer create fixed-height boxes that do not grow.
Main: flex: 1 makes the main content fill the remaining space. It is also a flex container with display: flex and flex-direction: row to lay out its children (controls and content) side by side.
css
  
main {  
    flex: 1;  
    display: flex;  
    flex-direction: row;  
}
### Dividing Space Between Controls and Content
The two sections inside main are split using flex: 1 for controls (25% space) and flex: 3 for content (75% space). This creates a responsive ratio that adjusts with the window size.
css
  
section:nth-child(1) {  
    flex: 1;  
}  
section:nth-child(2) {  
    flex: 3;  
}  
### Media Queries for Small Screens
Portrait Mode: When in portrait orientation, flex-direction of the main element changes to column so that controls and content stack vertically.
Short Screens: If the viewport height is less than 700px, both the header and footer are hidden to allow the main section to take up all available space.
css

@media (orientation: portrait) {  
    main {  
        flex-direction: column;  
    }  
}  

@media (max-height: 700px) {  
    header, footer {  
        display: none;  
    }  
}  
  
## CSS Frameworks
CSS Frameworks provide common components for web development, speeding up projects and ensuring consistency.  
Examples include Tailwind CSS and Bootstrap, both popular for different reasons.  
Tailwind CSS: Uses utility classes for individual elements, shifting much of the CSS into HTML, offering flexibility and customization.  
Example:  
html  
&lt;div class="pt-6 md:p-8 text-center">  
  &lt;p class="text-lg">Tailwind CSS&lt;/p>  
&lt;/div>  
Bootstrap: A well-established framework, provides rich components but may result in sites looking similar.  
Bootstrap can be easily included via a CDN link:  
html  
&lt;link href="https://cdn.jsdelivr.net/.../bootstrap.min.css" rel="stylesheet" />  
To add Bootstrap's JavaScript components, include the JS bundle at the end of the HTML body.  
html  
Copy code  
&lt;script src="https://cdn.jsdelivr.net/.../bootstrap.bundle.min.js">&lt;/script>  



# CS 260 Class Notes

These are Notes from the CS 260 Class and these can even be used in the midterm and final.

---

## AWS

➜ `ssh -i [key pair file] ubuntu@[ip address]`

For example:

➜ `ssh -i ~/keys/production.pem ubuntu@53.104.2.123`

My public IP address: [http://34.239.126.78/](http://34.239.126.78/)

**Size:** t2.micro  
**Server Region:** US East (N. Virginia) - us-east-1  
**Name:** jcdahlke-CS260WebServer-1.0  
Elastic IP allows me to keep the same public IP Address.

---

## Domain

➜ `rgbcolorguesser.click`

---

## HTML

### HTML Overview

HTML structures web content and is foundational for web development.  
Core to both Single Page Applications (SPAs) and Multi-Page Applications (MPAs).

### Basic Example

Simple HTML document structure:

```html
<p>Hello world</p>
Elements & Tags
Tags are enclosed with < > and define content structure, e.g.,

html
Copy code
<p>text</p> <!-- for paragraphs -->
Attributes
Elements can have attributes like id and class, e.g.,

html
Copy code
<p id="greet" class="welcome">Hello</p>
Hyperlinks
Links are created with the

html
Copy code
<a href="url">link text</a>
Common HTML Elements
<html>, <head>, <body>, <p>, <h1>-<h6>, <a>, <div>, <img>, <form>

HTML Startup
index.html is for the homepage
I have 4 HTML pages
I can use a table of <div> to display placeholders for different colors
I can change the color of letters using the following:
html
Copy code
<span style="color: red;">Input here</span>
CSS Flex
Flexbox Layout for Responsive Design
Flexbox is ideal for creating responsive layouts where elements adjust based on window resizing or orientation changes.
Example layout includes a header, footer, and a main content area that is split into two sections (controls on the left, content on the right).

Setting up Flexbox on the Body
The body is turned into a flex container by applying display: flex and setting flex-direction: column to stack the header, main, and footer vertically.
Other properties like margin: 0 and height: 100vh ensure the body fills the entire viewport.

css
Copy code
body {
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100vh;
}
Flexbox Properties for Header, Footer, and Main
Header and Footer: flex: 0 80px for the header and flex: 0 30px for the footer create fixed-height boxes that do not grow.
Main: flex: 1 makes the main content fill the remaining space. It is also a flex container with display: flex and flex-direction: row to lay out its children (controls and content) side by side.
css
Copy code
main {
    flex: 1;
    display: flex;
    flex-direction: row;
}
Dividing Space Between Controls and Content
The two sections inside main are split using flex: 1 for controls (25% space) and flex: 3 for content (75% space). This creates a responsive ratio that adjusts with the window size.

css
Copy code
section:nth-child(1) {
    flex: 1;
}

section:nth-child(2) {
    flex: 3;
}
Media Queries for Small Screens
Portrait Mode: When in portrait orientation, flex-direction of the main element changes to column so that controls and content stack vertically.
Short Screens: If the viewport height is less than 700px, both the header and footer are hidden to allow the main section to take up all available space.
css
Copy code
@media (orientation: portrait) {
    main {
        flex-direction: column;
    }
}

@media (max-height: 700px) {
    header, footer {
        display: none;
    }
}
CSS Frameworks
CSS Frameworks provide common components for web development, speeding up projects and ensuring consistency.

Tailwind CSS: Uses utility classes for individual elements, shifting much of the CSS into HTML, offering flexibility and customization.
Example:
html
Copy code
<div class="pt-6 md:p-8 text-center">
  <p class="text-lg">Tailwind CSS</p>
</div>
Bootstrap: A well-established framework, provides rich components but may result in sites looking similar.
Bootstrap can be easily included via a CDN link:
html
Copy code
<link href="https://cdn.jsdelivr.net/.../bootstrap.min.css" rel="stylesheet" />
To add Bootstrap's JavaScript components, include the JS bundle at the end of the HTML body:

html
Copy code
<script src="https://cdn.jsdelivr.net/.../bootstrap.bundle.min.js"></script>
Example button:

html
Copy code
<button class="btn btn-primary">Bootstrap</button>
Midterm Questions
In the following code, what does the link element do?
➜ Links external resources to the HTML, such as stylesheets or icons. Example:

html
Copy code
<link rel="stylesheet" href="styles.css">
In the following code, what does a div tag do?
➜ A div tag is a block-level container for other HTML elements, used to structure the layout.

In the following code, what is the difference between the #title and .grid selector?
➜ #title selects an element by its id, whereas .grid selects elements by their class.

In the following code, what is the difference between padding and margin?
➜ Padding is the space inside an element, between the content and the border, whereas margin is the space outside an element, separating it from other elements.

Given this HTML and this CSS, how will the images be displayed using flex?
➜ Images will be aligned and positioned based on flex properties like flex-direction, justify-content, and align-items.

What does the following padding CSS do?
➜ Padding defines the space between the content and the border inside an element. Example:

css
Copy code
padding: 10px 15px;
What does the following code using arrow syntax function declaration do?
➜ Declares an arrow function, which is a more concise way to write a function in JavaScript:

js
Copy code
const example = () => { /* function code here */ };
What does the following code using map with an array output?
➜ map applies a function to each element in an array and returns a new array with the results.

What does the following code output using getElementByID and addEventListener?
➜ getElementByID selects an element by its id, and addEventListener attaches an event handler to the selected element.

What does the following line of JavaScript do using a #selector?
➜ Selects an element with a specific id and allows for manipulation of that element, e.g.,:

js
Copy code
document.querySelector('#id');
Bootstrap offers easy-to-use components like buttons:  
html  
&lt;button class="btn btn-primary">Bootstrap&lt;/button>  
Future integration via NPM is possible with npm install bootstrap.  
