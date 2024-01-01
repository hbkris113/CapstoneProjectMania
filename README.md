![Screenshot 2024-01-01 144031](https://github.com/hbkris113/CapstoneProjectMania/assets/81546826/bd0cd77a-d3db-427f-94fc-bf33038b7a48)

The HTML structure (index.html) includes a set of buttons split into two columns that include labels related to PC handheld specs. The buttons are labeled with PC handheld device specs. 

Furthermore, the CSS Styling file (style.css) provides some entertainment or fun with graphics, when buttons are hovered over with a mouse cursor, it reveals vibrant colors that coordinate with the gradient background motion color-changing graphics using keyframes. 

Also, JavaScript code is applied to fetch data from different API requests that are matched with buttons when clicked; there are event listeners attached to the buttons that activate corresponding API requests; Axios is included for asynchronous HTTP requests. 

The Express Server (server/index.js) is set up to handle API requests, CORS is applied for cross-origin resource sharing. Moreover, there are endpoints defined for various PC handheld features; for each endpoint, it returns a randomly selected item from a predefined list related to the specified feature.

Then, the Content Security Policy is added to block hackers from manipulating the code originally in place to serve its initial purpose.

This is a project that displays a web application that helps gamer fans with PC gaming handheld recommendations based on their gaming preferences such as screen size, screen types, hard drive capacity, and battery longevity. 
