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


## Device APIs
*Definition: Enable web apps to interact with user devices via browser or OS features.

** Examples: Location services, contact access.
** Goal: Make web apps more like native apps.

* Privacy Considerations:

** Users must consent to API use.
** Ensure ethical use (e.g., location services for nearby restaurant suggestions, not invasive tracking).
** Be aware of legal implications.
* Location API:

** Provides device GPS location with user consent.
** React example: navigator.geolocation.getCurrentPosition fetches coordinates.
** Allows embedding maps (e.g., OpenStreetMap iframe).
* Notification API:

** Requires user permission (Notification.permission).
** React example: Display notifications using the Notification class.
** States: default, granted, denied.
* Other Notable APIs:

** Contact Picker, Bluetooth, File System Access.
** Always check browser support and adapt functionality as needed.

## Web Frameworks
* Purpose: Simplify web app development with tools for tasks like modularization, SPA creation, and reactivity.

* Hybrid Formats: Combine HTML, CSS, and JS for functional components (e.g., React JSX, Vue SFC, Svelte).

* Choosing Frameworks:

** Consider ease of learning, productivity, performance, institutional backing, open-source community, and evolution.
** See StateOfJS for trends.
* Hello World Examples:

** Vue: Combines HTML, CSS, JS in a single file using template.
** Svelte: Transpiles files into browser-ready code.
** React: Combines HTML (JSX) and JS; CSS is external.
** Angular: Keeps JS, HTML, CSS separate but grouped.

## Performance Monitoring
* Impact of Latency:

** Delays increase user drop-off rates.
** Target: Load within ~1 second.
* Key Areas:

** Browser Application Latency:
*** Reduce file sizes (e.g., compression, minification).
*** Limit HTTP requests; use HTTP/2 or HTTP/3.
*** Optimize JavaScript for asynchronous processing.
** Network Latency:
*** Minimize data and optimize for bandwidth.
*** Mitigate global latency with geographically distributed data centers.
** Service Endpoint Latency:
*** Aim for <10ms per endpoint request.
*** Consolidate multiple requests where possible.
* Performance Tools:

** Chrome Network Tab: Analyze file and endpoint requests.
** Throttle Networks: Simulate low-bandwidth connections.
** Chrome Lighthouse: Measure load time, content paint, and interactivity.
** Chrome Performance Tab: Profile frontend performance (e.g., memory usage, function timings).
** Global Speed Tests:
*** Use tools like Pingdom or DotCom Tools to test latency worldwide.
*** Insights: Compression, caching, and CDN recommendations.

## React
### Components
* React apps are built from components, which are reusable, independent pieces of UI.

Function Components:

'''
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
''' jsx
Class Components (legacy):

'''
class Welcome extends React.Component {
  render() {
    return <h1>Welcome to React!</h1>;
  }
}
''' jsx
### JSX
* JSX combines HTML-like syntax with JavaScript.

Example:

'''
const name = "Joey";
const element = <h1>Hello, {name}!</h1>;
''' jsx
* Attributes use camelCase, e.g., className instead of class.
### Props
Props are read-only data passed from parent to child components.

Passing Props:

'''
<Welcome name="Joey" />
''' jsx
Using Props:

'''
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
''' jsx
### State
* State stores dynamic data in components.

useState Hook:
'''
const [count, setCount] = React.useState(0);

return (
  <button onClick={() => setCount(count + 1)}>
    Clicked {count} times
  </button>
);
''' jsx
### Reactivity
* React automatically updates the UI when state or props change.

Example:

'''
const [color, setColor] = React.useState("blue");
return <p style={{ color }}>This text is {color}!</p>;
''' jsx
### Hooks
* React hooks let you manage state and lifecycle in function components.

* useState: Manage local state.
* useEffect: Handle side effects like data fetching.
'''
React.useEffect(() => {
  console.log("Component rendered");
  return () => console.log("Cleanup");
}, []);
''' jsx
### Data Flow
Parent to Child:
'''
<Child data={parentData} />
''' jsx
Child to Parent:
'''
function Parent() {
  const handleUpdate = (data) => console.log(data);
  return <Child onUpdate={handleUpdate} />;
}

function Child({ onUpdate }) {
  return <button onClick={() => onUpdate("Data")}>Click</button>;
}
''' jsx


Router
React Router Basics
React Router DOM: Used for routing in single-page React applications.
BrowserRouter: Encapsulates the application and manages routing.
NavLink: Captures user navigation events and renders the appropriate component.
Routes: Defines the components to render for different paths.
Key Components:
<BrowserRouter>: Controls routing.
<NavLink to='path'>: Used for navigation.
<Routes>: Contains route definitions.
<Route path='/' element={<Component />} />: Defines a route that renders a specific component.
Wildcard Route: <Route path='*' element={<Navigate to='/' replace />} /> handles undefined routes by redirecting.
Assignment:
Fork and modify a CodePen by adding a /scores route component.
Submit CodePen URL and update your GitHub notes.md with key learnings.

Toolchains
Common Web Development Tools:
Code Repository: Stores code with version control (e.g., GitHub).
Linter: Ensures consistent code style.
Prettier: Formats code automatically.
Transpiler: Converts code (e.g., JSX to JavaScript).
Polyfill: Adds support for older browsers.
Bundler: Packages code for deployment (e.g., Rollup).
Minifier: Reduces file size for faster delivery.
Testing: Automates correctness checks.
Deployment: Automates the process of moving code from development to production.

Vite Toolchain:
Vite: Fast bundler and development server that supports JSX, TypeScript, and CSS.
ESBuild: Underlies Vite for fast transpiling and module bundling.
Rollup: Handles final bundling and tree shaking for optimized performance.

Vite Setup
Creating a React Project with Vite:
Run npm create vite@latest demoVite -- --template react.
Navigate to the project directory: cd demoVite.
Install dependencies: npm install.
Run the development server: npm run dev.

File Structure:
index.html: The main HTML page.
package.json: Contains project dependencies and scripts.
vite.config.js: Configuration file for Vite.
main.jsx: Entry point for React, renders the App component.
App.jsx: The main component that holds the application logic.

JSX vs JS:
Use .jsx for files containing JSX (recommended for better editor support).

Building for Production:
Run npm run build to generate a production build in the dist directory.
The output is optimized for deployment.

Internet Connections: The internet connects computers globally through networks, with each device requiring an IP address for communication. These addresses are translated into human-friendly domain names via the Domain Name System (DNS).

Traceroute: You can trace the path of a connection using tools like traceroute, which shows the hops between your device and the destination, helping understand the network route and identifying failures.

TCP/IP Model: The internet follows the TCP/IP model with layers that manage how data moves from the physical medium (link layer) to application services (application layer), including protocols like HTTP for the web.

Web Servers: These servers host web services and handle incoming HTTP requests. They can serve static content or dynamically generate content in response to requests, as seen in the Go language examples for building web servers.

Web Service Gateways: In modern architectures, a service gateway (reverse proxy) maps incoming requests to different services running on separate ports, simplifying access for users.

Microservices: Web applications often use microservices, which are small, independent services that perform specific tasks, allowing scalable systems that handle large user bases.

Serverless: This model removes the need to manage physical servers, where functions are executed on demand and scale automatically.

Domain Names: A domain name (like byu.edu) is a human-readable label for an IP address, broken into subdomains and top-level domains (TLDs). Domain names are maintained in registries, and tools like whois provide ownership information.

DNS (Domain Name System): The DNS maps domain names to IP addresses using records such as A (address) and CNAME (alias). Caching and TTL (time-to-live) settings help speed up name resolution and manage updates.

Leasing Domain Names: Domain names can be leased for specific periods. Their prices vary, and it's often more cost-effective to choose unique, obscure names rather than popular ones.
