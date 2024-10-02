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
Copy code
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
Copy code
main {
    flex: 1;
    display: flex;
    flex-direction: row;
}
### Dividing Space Between Controls and Content
The two sections inside main are split using flex: 1 for controls (25% space) and flex: 3 for content (75% space). This creates a responsive ratio that adjusts with the window size.
css
Copy code
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
Bootstrap offers easy-to-use components like buttons:
html
&lt;button class="btn btn-primary">Bootstrap&lt;/button>
Future integration via NPM is possible with npm install bootstrap.
