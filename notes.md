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


Frontend (Client-Side): The frontend consists of all the files and assets (HTML, CSS, JavaScript) that the browser loads and displays. It makes requests to external services, like APIs, to fetch data, which can be displayed dynamically to the user. For example, using JavaScript's fetch() function, the frontend can request data from other sources.

Backend (Server-Side): The backend provides the logic and functions that support the frontend. It serves static files and provides endpoints or APIs for operations like storing data or running tasks. The backend also processes requests from the frontend and may interact with other services or databases to provide relevant data.

Web Service Endpoints: The backend exposes these endpoints, which the frontend calls using HTTP requests. These endpoints represent specific functionality, like retrieving a user or posting data to a database.

HTTP and URLs: Understanding how URLs work is crucial for web applications. A URL (Uniform Resource Locator) specifies the location of a web resource. It includes the scheme (like https), domain (like byu.edu), port (if non-standard), path, query parameters, and anchor.

Ports: Ports allow multiple services to run on a single device. Web services typically use ports like 80 for HTTP and 443 for HTTPS. Services can run on different high-numbered ports to avoid conflicts.

Web Service Example: The backend can call other external services using fetch() to gather information, combine it with internal data, and send it back to the frontend. This allows the backend to integrate various data sources and handle complex tasks.

Key Components of an HTTP Request
Request Line:

Verb: Specifies the action being requested (e.g., GET, POST).
URL Path: Defines the location of the resource being requested.
Version: Indicates the HTTP version being used (e.g., HTTP/1.1).
Headers:

Key-value pairs that provide additional information about the request (e.g., Host, Accept).
Body (optional):

Contains data sent with the request (e.g., form data or JSON).
Example Request:
http
Copy code
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
HTTP Response
The HTTP response follows a similar structure, with the first line containing:

Version: The HTTP version being used.
Status Code: A 3-digit code indicating the result of the request.
Status Message: A textual description of the status.
The response also contains headers (e.g., Content-Type, Content-Length) and an optional body, which holds the requested resource.

Example Response:
http
Copy code
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help...
Common HTTP Verbs
Verb	Meaning
GET	Retrieve the resource at the specified URL.
POST	Create a new resource with the provided data.
PUT	Update an existing resource with the provided data.
DELETE	Delete the resource identified by the URL.
OPTIONS	Retrieve metadata about the resource without returning the resource itself.
HTTP Status Codes
Status codes are grouped into five classes to indicate the result of a request:

1xx (Informational): The request is being processed.
2xx (Success): The request was successful (e.g., 200 OK, 201 Created).
3xx (Redirection): The resource has moved to a new location (e.g., 301 Moved Permanently).
4xx (Client Errors): The request was invalid (e.g., 404 Not Found, 401 Unauthorized).
5xx (Server Errors): The server encountered an error (e.g., 500 Internal Server Error).
HTTP Headers
Headers provide additional context for the request or response, such as content types, authorization tokens, and caching instructions.

Common Headers:
Authorization: Provides credentials for authentication (e.g., Bearer token).
Accept: Specifies the formats the client can handle (e.g., text/html, application/json).
Content-Type: Specifies the format of the data being sent (e.g., application/json).
Cache-Control: Provides caching instructions (e.g., public, max-age=604800).
Cookies
Cookies are small pieces of data sent by a server to a client and stored in the browser. They are included in subsequent requests to maintain state, such as user authentication or preferences.

Example:

http
Copy code
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
HTTP Versions
HTTP has evolved over time to improve performance and support modern web applications:

HTTP/1.1 (1997): Introduced persistent connections.
HTTP/2 (2015): Added multiplexing and server push.
HTTP/3 (2022): Uses QUIC as the transport protocol, always encrypted.

Node.js Web Service
Creating a Simple Web Service with Node.js

Install Node.js and create a new project directory.
sh
Copy code
mkdir webservicetest
cd webservicetest
npm init -y
Create index.js with the following code:
js
Copy code
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
This code creates a basic HTTP server using Node.js's built-in http module. It listens on port 8080 and responds with a simple HTML message, including the HTTP method and URL requested.
To run the server:
sh
Copy code
node index.js
Test by visiting http://localhost:8080 in a browser.
Debugging Node.js with VS Code

Debug by setting breakpoints in your code and using the "F5" key.
Inspect the request (req) and response (res) objects when the server is hit.
Nodemon for Automatic Restarts
Nodemon
Install Nodemon globally to automatically restart the Node.js server when changes are saved:
sh
Copy code
npm install -g nodemon
Set up VS Code to use Nodemon for debugging by creating a launch.json configuration with the Node.js: Nodemon setup.
Express Framework
Installing Express

Install Express and create a basic Express application:
sh
Copy code
npm install express
js
Copy code
const express = require('express');
const app = express();

app.listen(8080);
Defining Routes

Create HTTP routes using Express methods for each HTTP verb (GET, POST, PUT, DELETE).
Example for a GET route:
js
Copy code
app.get('/store/:storeName', (req, res) => {
  res.send({ name: req.params.storeName });
});
Path parameters (:storeName) are accessed via req.params.
Example using a wildcard:
js
Copy code
app.put('/st*/:storeName', (req, res) => res.send({ update: req.params.storeName }));
Using Middleware

Middleware functions are invoked on every request and can manipulate the request/response objects.
Example middleware for logging the request URL:
js
Copy code
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
Built-in middleware like express.static serves static files from a specified directory:
js
Copy code
app.use(express.static('public'));
Error Handling Middleware

Add error handling middleware to catch and handle errors:
js
Copy code
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});
Example route to generate an error:
js
Copy code
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

SOP and CORS Notes
Same-Origin Policy (SOP)
Definition: The Same-Origin Policy (SOP) restricts web pages from making requests to a different domain than the one the page was loaded from. This policy prevents malicious websites from accessing sensitive data on another site that a user may be authenticated with.

Security Purpose: SOP ensures that a website's JavaScript can only interact with the domain it was loaded from. For example, if a user is on byu.instructure.com, JavaScript on byu.iinstructure.com cannot make requests to byu.instructure.com unless explicitly allowed.

Example of a Security Threat:

An attacker could trick a user into clicking a link to a fake website (byu.iinstructure.com), which may try to make requests to the real site (byu.instructure.com). This would expose the user's data if SOP was not enforced.
Cross-Origin Resource Sharing (CORS)
Definition: CORS is a mechanism that allows servers to specify which origins (domains) are allowed to access their resources. The server includes Access-Control-Allow-Origin headers to control access.

When CORS is Used: CORS is useful when a web application needs to make requests to a domain different from its own. This typically happens when integrating third-party APIs.

How It Works:

A client (browser) sends an HTTP request with an Origin header indicating the domain making the request.
The server responds with an Access-Control-Allow-Origin header specifying which origin(s) are allowed to access the resource.
If the server does not include this header, the browser blocks the request.
Example of CORS in Action
Request: A hacker site (byu.iinstructure.com) tries to make a request to the real course website (byu.instructure.com):

http
Copy code
GET /api/auth/login HTTP/2
Host: byu.instructure.com
Origin: https://byu.iinstructure.com
Response: If the course website returns a CORS header:

http
Copy code
HTTP/2 200 OK
Access-Control-Allow-Origin: https://byu.instructure.com
The browser compares the Origin header with the Access-Control-Allow-Origin header. If they do not match, the browser blocks the request.

The key idea: CORS is a browser-side security measure, ensuring that only allowed origins can interact with a server.
Using Third-Party Services
Requests to Same Origin: When your web application makes requests to resources hosted on the same domain, SOP does not apply, and no CORS headers are needed.

Requests to Different Origins:

If you want to make requests to a third-party service, the server must return an Access-Control-Allow-Origin header to allow the request.

Example of a Failed Request:

If you make a request from cs260.click to i.picsum.photos, and i.picsum.photos does not support CORS (i.e., it doesn't send the necessary headers), the request will be blocked by the browser.
http
Copy code
HTTP/2 403 Forbidden
Example of a Successful Request:

If a service (e.g., icanhazdadjoke.com) includes the appropriate CORS headers, the request will succeed.

icanhazdadjoke.com might return:

http
Copy code
HTTP/2 200 OK
Access-Control-Allow-Origin: *
This means any origin can access the service.

Explicit Origin in CORS:

A service might restrict access to a specific origin. For example, if cs260.click makes a request, the server could explicitly allow it:
http
Copy code
HTTP/2 200 OK
Access-Control-Allow-Origin: https://cs260.click
Testing Third-Party Services
Before integrating third-party APIs, always check if they support CORS by inspecting the headers in their response.
Valid CORS response: The response includes Access-Control-Allow-Origin: * or your origin.
Invalid CORS response: If the server does not return this header or returns a 403, you cannot use the service as-is.
Key Takeaways:
SOP prevents cross-origin requests by default for security.
CORS allows servers to specify which domains are allowed to make requests to their resources.
Always check the CORS headers of third-party services before making requests to ensure compatibility.

Service Design Principles
When designing a web service, it’s essential to focus on the functionality and performance of the service, ensuring it is easy to use, scalable, and extensible. The design decisions you make will influence the user experience, processing costs, and overall effectiveness of your application.

1. Model and Sequence Diagrams
To ensure the service design reflects the real-world needs of users, it’s vital to start with modeling the core objects of your application. This approach ensures your web service aligns with the user's mental model and avoids unnecessary complexity. For instance, a chat program should focus on modeling participants, conversations, and messages, rather than underlying infrastructure like network connections.

Once the primary objects are defined, sequence diagrams illustrate how these objects interact within the system. Sequence diagrams provide clarity by mapping out the flow of interactions, helping identify necessary endpoints and ensuring a well-organized API design.

2. Leveraging HTTP
HTTP plays a central role in web services. Understanding and leveraging HTTP’s built-in mechanisms like HTTP verbs (GET, POST, PUT, DELETE) and MIME types can enhance your service’s functionality and performance. By aligning your service actions with these existing protocols, you can take advantage of existing networking infrastructure (e.g., caching servers, edge servers) to boost performance and reliability.

GET: Retrieve data from a resource.
POST: Create or send data to a resource.
PUT: Update an existing resource.
DELETE: Remove a resource.
These verbs should directly mirror the actions of your web service for clarity and ease of use.

3. Endpoints
Endpoints represent specific functional areas within a web service. A well-designed endpoint is a resource (a noun or object), and the HTTP verb defines the action to be performed on that resource. Consider these design principles when creating endpoints:

Grammatical: Ensure that endpoint names clearly represent the underlying resource (e.g., /store/provo/order/28502).
Readable: Keep URLs simple and intuitive, so they are easy to remember and use.
Discoverable: Include linked resources to make endpoints easily navigable (e.g., return a list of orders associated with a store).
Compatible: Design endpoints to be backward-compatible to allow for future updates without breaking existing functionality.
Simple: Focus on the core functionality of your service and avoid unnecessary endpoints.
Documented: Use tools like Open API Specification and Swagger to document and test your service endpoints.
4. Different API Models
There are several models for exposing web service functionality, each with its strengths and weaknesses.

RPC (Remote Procedure Call)
RPC treats service endpoints as function calls, which is a straightforward approach when the server’s internal logic maps directly to the actions in the endpoint. This approach can result in tight coupling between the endpoint and its implementation. RPC endpoints often use the POST verb, and the function is either specified in the URL or the request body.

Example:

http
Copy code
POST /updateOrder HTTP/2
{
    "id": 2197,
    "date": "20220505"
}
REST (Representational State Transfer)
REST maximizes the capabilities of HTTP. It works with resources and uses HTTP verbs to interact with them, making it more consistent with the HTTP protocol. RESTful services are designed around the concept of managing resources, and they utilize caching mechanisms to improve performance.

Example:

http
Copy code
PUT /order/2197 HTTP/2
{
    "date": "20220505"
}
REST is the most common model for web services due to its alignment with HTTP standards and its simplicity.

GraphQL
GraphQL offers more flexibility than REST and RPC. It allows clients to request exactly the data they need and even specify how the data should be structured. The downside is that GraphQL can give clients too much power, which may lead to inefficiencies or security concerns. However, it is useful when clients require multiple types of data that are spread across different resources.

Example GraphQL query:

graphql
Copy code
query {
  getOrder(id: "2197") {
    orders(filter: {date: {allofterms: "20220505"}}) {
      store
      description
      orderedBy
    }
  }
}
While GraphQL provides a single endpoint, the complexity of the queries and the risk of over-fetching data must be carefully managed.

5. Service Design Best Practices
Separation of Concerns: Keep different parts of your service logically separated. For instance, your authentication logic, user management, and data storage should each have their own layers or components.
Scalability: Design with growth in mind. Think about how the service can scale horizontally (across servers) or vertically (on more powerful machines).
Security: Secure every endpoint and consider using authentication mechanisms such as OAuth or API keys. Ensure that sensitive data, like passwords or financial information, is encrypted.
Error Handling: Be clear about how your service will handle errors. Provide consistent error codes and messages to clients.
Versioning: When making changes to your API, consider versioning it (e.g., /v1/orders, /v2/orders) to maintain backward compatibility.

PM2 Overview:
PM2: A process manager that keeps Node.js services running as daemons (background processes).
Automatically restarts services if they crash and persists services across server reboots.
Useful PM2 Commands:
pm2 ls: List all hosted processes.
pm2 monit: Visual monitor for processes.
pm2 start index.js -n <name>: Start a service with a name.
pm2 start index.js -n <name> -- <port>: Start service on a specific port.
pm2 stop <name>: Stop a service.
pm2 restart <name>: Restart a service.
pm2 delete <name>: Delete a service.
pm2 save: Save the current list of processes to be restarted after reboot.
pm2 logs <name>: View logs for a service.
pm2 startup: Command to keep PM2 running after reboot.
Setting Up a Web Service:
Caddyfile: Set up reverse proxy to direct requests to a specific port on localhost.

Use reverse_proxy and specify headers like Cache-Control none.
Web Service: Create a service (copy a template), ensuring it listens on a specific port and serves static files with express.static.

PM2 for Daemons: Start services with PM2 to keep them running in the background after the SSH session ends.

Example: pm2 start index.js -n <name> -- <port>
Additional Notes:
PM2 keeps services alive even after SSH session closure or system restarts.
Use pm2 save to persist the process list.
Caddy acts as a reverse proxy to direct traffic to the correct service based on subdomains.

WebSocket Overview:
WebSocket is a communication protocol that enables two-way communication between a client and server. It was designed to overcome the limitations of the traditional client-server model in HTTP, where the client always initiates a request, and the server responds. This makes WebSocket ideal for applications that need continuous, real-time data exchange, such as notifications, chat, and multiplayer games.

Duplex Communication: WebSocket allows both the client and server to send messages to each other at any time after the connection is established. This is more efficient than constantly polling the server or keeping long-lived HTTP connections open.

Server as Intermediary: While WebSocket enables peer-to-peer communication, when multiple peers are involved, the server acts as an intermediary to forward messages between clients.

Creating a WebSocket Conversation:
Client-side (Browser):
Create a WebSocket Object:

Use the browser's WebSocket API to create a connection to a server.
Example: const socket = new WebSocket('ws://localhost:9900');
Send Messages:

Use the send method to send data to the server.
Example: socket.send('I am listening');
Receive Messages:

Use the onmessage callback to listen for incoming messages from the server.
Example:
js
Copy code
socket.onmessage = (event) => {
  console.log('received: ', event.data);
};
Server-side (Node.js):
Set up WebSocket Server:

Use the ws package to create a WebSocket server.
Example:
js
Copy code
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 9900 });
Handle Connections:

The server listens for incoming WebSocket connections and can respond to them.
Example:
js
Copy code
wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);
    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
Key Concepts:
Connection Upgrade: When the client sends an HTTP request with a connection: Upgrade header, the server upgrades the connection to WebSocket.
Two-way Communication: After the upgrade, the server and client can exchange messages in real-time without additional requests.


What is the default port for HTTP/HTTPS/SSH?

HTTP: Port 80
HTTPS: Port 443
SSH: Port 22
What does an HTTP status code in the range of 300/400/500 indicate?

300: Redirection (e.g., the requested resource has moved)
400: Client Errors (e.g., bad request, unauthorized access)
500: Server Errors (e.g., internal server error, bad gateway)
What does the HTTP header content-type allow you to do?

The Content-Type header informs the server about the type of data being sent by the client (e.g., application/json, text/html). It allows the server to process the data correctly based on the specified format.
What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do?

Secure cookie: Can only be sent over HTTPS connections, ensuring data is transmitted securely.
Http-only cookie: Cannot be accessed via JavaScript (helps mitigate XSS attacks).
Same-site cookie: Controls whether the cookie is sent along with cross-site requests, helping mitigate CSRF attacks.
Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?

The console.log output would depend on the actual middleware code. Typically, it could log information about the request method, URL, or headers. For example, if the middleware logs the request URL, the output would be /api/document.
Given the following Express service code: What does the following front-end JavaScript that performs a fetch return?

The answer depends on the specific service code and the fetch request. Generally, the fetch function returns a promise that resolves to the response object. You can access the data using .json() or .text() methods, depending on the response format.
Given the following MongoDB query, select all of the matching documents {name:Mark}

The query will return all documents from the collection where the name field is "Mark". In MongoDB, this can be executed like so:
js
Copy code
db.collection.find({ name: "Mark" });
How should user passwords be stored?

User passwords should be stored securely using hashing algorithms (e.g., bcrypt, Argon2) and never stored in plaintext. The hashed password should then be stored in the database.
Assuming the following Node.js WebSocket code in the back end, and the following front-end WebSocket code, what will the front-end log to the console?

The output on the front-end would depend on the WebSocket interaction between the client and server. For example, if the back-end sends a message like "Hello, WebSocket" and the front-end has a onmessage handler, it will log that message to the console.
What is the WebSocket protocol intended to provide?

WebSocket provides full-duplex communication, allowing both the client and server to send and receive messages independently over a single, persistent connection. It’s designed for real-time applications.
What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
JSX: JavaScript XML
JS: JavaScript
AWS: Amazon Web Services
NPM: Node Package Manager
NVM: Node Version Manager
Assuming an HTML document with a body element. What text content will the following React component generate? The React component will use parameters.
The output depends on the parameters passed to the component. For example, if the component renders a paragraph like <p>{props.text}</p>, and the text parameter is "Hello", it will generate <p>Hello</p>.
Given a set of React components that include each other, what will be generated?
React components can be nested to generate a tree of HTML elements. The final output depends on the JSX structure. For example, if a parent component includes a child component with specific props, the HTML generated will reflect that structure.
What does a React component with React.useState do?
useState is a React hook that allows a component to manage local state. It returns an array with the current state value and a function to update it.
What are React Hooks used for?
React Hooks are functions that allow you to "hook into" React state and lifecycle features from functional components. Common hooks include useState, useEffect, and useContext.
What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do?
State Hook (useState): Allows functional components to manage state.
Context Hook (useContext): Provides a way to access context values in a component tree.
Ref Hook (useRef): Allows you to persist values between renders or access DOM elements directly.
Effect Hook (useEffect): Allows you to perform side effects in function components, such as fetching data or subscribing to events.
Performance Hook (useMemo, useCallback): Helps optimize performance by memoizing values or functions.
Given React Router code, select statements that are true.
The truth of statements regarding React Router would depend on the code in question, but typical behavior includes defining routes with <Route />, using useNavigate() for programmatic navigation, and NavLink to handle navigation with styling.
What does the package.json file do?
The package.json file is used to manage project metadata, dependencies, scripts, and configurations for Node.js projects.
What does the fetch function do?
The fetch function is used to make HTTP requests (e.g., GET, POST) and returns a promise that resolves to the response from the request.
What does Node.js do?
Node.js is a runtime environment that allows you to execute JavaScript code outside of a browser. It’s often used for server-side applications.
What does PM2 do?
PM2 is a process manager for Node.js applications, used to manage and monitor application processes. It helps ensure that applications are always running and can restart them on failure or reboot.
What does Vite do?
Vite is a build tool that provides fast development environments and bundling for modern web projects, particularly those using frameworks like React or Vue. It focuses on performance and speed during development.






