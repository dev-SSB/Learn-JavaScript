Introduction to DOM (Document Object Model)


➡️ What is the DOM?
    👉 Document Object Model is a programming interface to interact with web pages.
    👉 It represents the HTML or XML document as a tree-like structure where every element, attribute, and piece of text is a node.
    👉 DOM access & update the web page dynamically.


➡️ Structure of the DOM tree
    👉 DOM represents HTML document as a tree-like structure, where:
        ⚪ Each HTML element is a node.
        ⚪ <html> tag is Root node.
        ⚪ Nodes are connected in a parent-child relationship.
    👉 
        Document
        └── html (Root Element Node)
            ├── head
            │   └── title → "My Web Page" (Text Node)
            └── body
                ├── h1 → "Hello, World!" (Text Node)
                └── p → "This is a paragraph." (Text Node)


➡️ Nodes
    👉 Building block of DOM.
    👉 Basic unit of DOM Tree.
    👉 Types of Nodes:
        ⚪ Element Node: Represents an HTML tag (e.g., <p>, <h1>).
        ⚪ Text Node: Represents the text content inside an element.
        ⚪ Attribute Node: Represents attributes like class, id, src.
        ⚪ Document Node: Represents the entire document (document).
        ⚪ Comment Node: Represents HTML comments (<!-- comment -->).
    👉 Nodes have relationships:
        ⚪ Parent Node: Node that contains other nodes.
        ⚪ Child Node: Node contained within a parent node.
        ⚪ Sibling Nodes: Nodes sharing the same parent.


➡️ Element Node
    👉 Elements are HTML tags.
        Ex. <div>, <p>, <h1>
    👉 Can have attributes, text content, and child nodes.


➡️ Attributes
    👉 Provides extra information about elements.
        Ex. id, class, src


➡️ Text Node
    👉 Text inside an HTML element is treated as a Text Node.


➡️ Comment Node
    👉 Represents HTML comments
        <!-- This is a comment -->


➡️ Document Node
    👉 Represents the entire document.
    👉 The root node of the DOM tree.



➡️ Accessing DOM Nodes
    JavaScript methods to access DOM nodes :

    1) document.getElementById(' ');
        Selects an element node by its id attribute.

    2) document.getElementsByClassName(' ');
        ⚪ Selects all elements with a specific class name.
        ⚪ Returns: A live HTMLCollection (array-like object). meaning updates if the DOM changes.

    3) document.getElementsByTagName(' ');
        ⚪ Selects all elements with a specific tag name.
        ⚪ Returns: A live HTMLCollection (array-like object). meaning updates if the DOM changes.

    4) document.querySelector(' ');
        Selects the first matching element using CSS selectors.

    5) document.querySelectorAll(' ');
        ⚪ Selects all matching elements using CSS selectors.
        ⚪ Returns a static NodeList (array-like object). meaning it does not update automatically if the DOM changes.


➡️ DOM Tree Traversal
    👉 DOM Tree Traversal refers to navigating through the parent, child, and sibling nodes in the DOM tree structure.

    👉 Parent, Child, and Sibling Relationships
        1) Parent Node
            ⚪ The parent node is the immediate ancestor of a node.
            ⚪ Every node (except the root node) has one parent node. 

        2) Child Nodes
            ⚪ Child nodes a⚪ re the immediate descendants of a node.
            ⚪ An element can have multiple child nodes.

        3) Sibling Nodes
            ⚪ Sibling nodes share the same parent node.
            ⚪ They are adjacent elements at the same level in the DOM hierarchy.
    
    👉 DOM Traversal Properties :
        1) parentNode
            ⚪ Accesses the parent node of an element.
            ⚪ If there’s no parent (e.g., document), it returns null.

        2) childNodes
            ⚪ Returns a NodeList of all child nodes (includes text nodes, comment nodes, and element nodes).

        3) children
            ⚪ Returns an HTMLCollection of child element nodes only (ignores text and comment nodes).

        4) firstChild
            ⚪ Returns the first child node of an element (can be text node, comment node, or element node).
        
        5) firstElementChild
            ⚪ Returns the first child node that is an element node.

        6) lastChild
            ⚪ Returns the last child node of an element (including text nodes and comments).

        7) lastElementChild
            ⚪ Returns the last child node that is an element node.

        8) nextSibling
            ⚪ Returns the next sibling node (includes text nodes).
            ⚪ If there is no next sibling, it returns null.

        9) nextElementSibling
            ⚪ Returns the next sibling node that is an element node.

        10) previousSibling
            ⚪ Returns the previous sibling node (includes text nodes).
            ⚪ If there is no previous sibling, it returns null.
        
        11) previousElementSibling
            ⚪ Returns the previous sibling node that is an element node.

    👉 Best Practices for DOM Tree Traversal
        1) Use "parentNode" to move up the DOM tree.

        2) Use "children", "firstElementChild", and "lastElementChild" to navigate down the tree.

        3) Use "nextElementSibling" and "previousElementSibling" to navigate sideways.


➡️ Selecting DOM Elements
    👉 JavaScript provides several methods for selecting elements based on ID, class, tag, or CSS selectors.

    👉 querySelector
        ⚪ Selects the first matching element using CSS selectors.
        ⚪ Returns: A single element or null if no match is found.
        ⚪ Can target IDs, classes, tags, and pseudo-classes.
        ⚪ Ex. let element = document.querySelector('selector');

    👉 querySelectorAll
        ⚪ Selects all matching elements using CSS selectors.
        ⚪ Returns a static NodeList (array-like object). meaning it does not update ⚪ automatically if the DOM changes.
        ⚪ Ex. let elements = document.querySelectorAll('selector');
            Outputs: NodeList [<p>, <p>]

    👉 Best Practices for Selecting Elements: 
        1) Use "getElementById" when selecting an element by ID — it's the fastest method.

        2) Use "getElementsByClassName" or "querySelectorAll" for multiple elements with a class name.
        
        3) Use "querySelector" for complex CSS selectors or when working with pseudo-classes.

        4) Avoid relying on live collections ("getElementsByClassName") if you're frequently updating the DOM — prefer "querySelectorAll" instead.


➡️ Manipulating DOM Elements 
    👉 Changing Element Content :
        1) innerHTML
            ⚪ get or set the HTML content of an element, including HTML tags.
            ⚪ add or update HTML with markup (tags).
            ⚪ Warning: Directly using innerHTML with user input can expose your code to Cross-Site Scripting (XSS) attacks.
            ⚪ 
                Get: Ex. console.log( element.innerHTML );
                Set: Ex. element.innerHTML = '<p>New Content</p>';

        2) innerText
            ⚪ Gets or sets the visible text content of an element, ignoring hidden text and HTML tags.
            ⚪ Best for: Displaying only text content.
            ⚪ 
                Get: Ex. console.log( element.innerText );
                Set: Ex. element.innerText = 'Hello World';

        3) textContent
            ⚪ Gets or sets the text content of an element, including hidden text. 
            ⚪ It does not parse HTML tags.
            ⚪ Best for: Purely text manipulation without considering CSS visibility.
            ⚪ 
                Get: Ex. console.log( element.textContent );
                Set: Ex. element.textContent = 'Hello World';

    👉 Modifying element attributes
        1) setAttribute()
            ⚪ Sets a specified attribute on an element and updates its value.
            ⚪ Ex. element.setAttribute('attribute', 'value');
        
        2) getAttribute()
            ⚪ Retrieves the value of a specified attribute from an element.
            ⚪ Ex. let value = element.getAttribute('attribute');

        3) removeAttribute()
            ⚪ Removes a specified attribute from an element.
            ⚪ Ex. element.removeAttribute('attribute');

        4) Working with dataset for Custom Attributes
            ⚪ dataset allows you to access and change data-attributes easily.
            ⚪ Ex.
                <div id="product" data-id="123" data-category="electronics">
                    Product
                </div>

                <script>
                    let product = document.getElementById('product');
                    console.log(product.dataset.id); // Outputs: 123
                    console.log(product.dataset.category); // Outputs: electronics

                    product.dataset.id = '456'; // Updates the data-id attribute
                </script>


➡️ Creating and Inserting Elements 
    👉 Creating Elements 
        1) document.createElement()
            ⚪ Creates a new HTML element.
            ⚪ Syntax: let newElement = document.createElement('tagName');
            ⚪ Example:
                let newDiv = document.createElement('div'); 
                newDiv.innerText = 'Hello, I am a new div!';
                newDiv.style.color = 'blue';
                document.body.appendChild(newDiv); 

                Result: A new <div> with blue text is added to the end of the <body>.

        2) document.createTextNode()
            ⚪ Creates a text node that can be added to an element.
            ⚪ Syntax: let textNode = document.createTextNode('Some Text');
            ⚪ Example:
                let text = document.createTextNode('Hello, I am plain text!');
                let newDiv = document.createElement('div');
                newDiv.appendChild(text); 
                document.body.appendChild(newDiv);

                Result: A <div> with plain text is added to the end of the <body>. 

    👉 Appending, Inserting, and Removing Elements
        1) appendChild()
            ⚪ Appends a child node (element or text) as the last child of a parent node.
            ⚪ Syntax: parent.appendChild(child);
            ⚪ Example:
                let text = document.createTextNode('Hello, I am plain text!');
                let newDiv = document.createElement('div');
                newDiv.appendChild(text); 
                document.body.appendChild(newDiv);

                Result: A <div> with plain text is added to the end of the <body>. 
            ⚪ ⚠️ Limitation: We can only append a single node.
        
        2) insertBefore()
            ⚪ Inserts a node before a reference node under a parent node.
            ⚪ Syntax: parent.insertBefore(newElement, referenceElement);
            
        3) removeChild()
            ⚪ Removes a child node from a parent node.
            ⚪ Syntax: parent.removeChild(child); 

    👉 Modern Methods
        1) append()
            ⚪ Adds one or more nodes or text strings to the end of a parent node.
            ⚪ Syntax: parent.append(node, 'string');
            ⚪ Example:
                let div = document.getElementById('box');
                div.append('New Text Content', document.createElement('span'));

                Result: Adds both text and an empty <span> at the end.

        2) prepend()
            ⚪ Adds one or more nodes or text strings to the start of a parent node.
            ⚪ Syntax: parent.prepend(node, 'string');
            ⚪ Example:
                let div = document.getElementById('box');
                div.prepend('Prepended Text', document.createElement('span'));

                Result: Adds both text and an empty <span> at the beginning.
        3) remove()
            ⚪ Directly removes an element from the DOM.
            ⚪ Syntax: element.remove(); 

    👉 Key Takeaways
        ⚪ Prefer modern methods like append(), prepend(), and remove() when supported. 


➡️ Styling DOM Elements
    👉 Modifying CSS Properties Using the style Property
        ⚪ Style property used to change the inline styles of an HTML element directly using JS.
        ⚪ Syntax: element.style.property = "value";
        ⚪ The property names are written in camelCase instead of kebab-case.
            Ex. 
                box.style.backgroundColor = 'lightblue';
                box.style.border = '2px solid black';
                box.style.textAlign = 'center';
        ⚪ Prefer to Not use More: 
            overrides external or internal styles.
            hard to manage.

    👉 Using classList to Manipulate CSS Classes
        classList property is a more efficient way to apply and manage styles, especially when working with predefined CSS classes.
        
        1) classList.add()
            ⚪ Adds one or more classes to an element.
            ⚪ Syntax: element.classList.add('class1', 'class2');
        
        2) classList.remove()
            ⚪ Removes one or more classes from an element.
            ⚪ Syntax: element.classList.remove('class1', 'class2');

        3) classList.toggle()
            ⚪ Toggles (adds/removes) a class from an element.
            ⚪ If the class is not present, it adds it.
            ⚪ If the class is present, it removes it.
            ⚪ Syntax: element.classList.toggle('class');

    👉 Key Takeaways
        Prefer classList for maintainability and cleaner code.


➡️ Event Handling
    Event handling is the process of capturing user interactions or other events in a web application and executing specific JavaScript code in response.

    👉 Introduction to Events
        ⚪ Event: Event is an action detected by the browser. 
            Example of Events: click, mouseover, keydown, submit.
        ⚪ Event Listeners: 
            JS uses event listeners to respond to events.
            Syntax: element.addEventListener('event', eventHandlerFunction, useCapture);

    👉 addEventListener()
        ⚪ Adds an event handler to an element without overwriting existing event handlers.
        ⚪ Syntax: element.addEventListener('event', eventHandlerFunction, useCapture);
            Where, 
                event - The type of event (e.g., click, mouseover).
                eventHandler - Function to handle the event.
                useCapture (optional) - Boolean (true for capture phase, false for bubbling phase).
        ⚪ Example:
            <button id="btn">Click Me</button>
            <script>
                const btn = document.getElementById('btn');
                btn.addEventListener('click', () => {
                    console.log('Button Clicked!');
                });
            </script>

    👉 removeEventListener()
        ⚪ Removes an event handler previously added with addEventListener.
        ⚪ Syntax: element.removeEventListener('event', eventHandler);
        ⚪ Example:
            <button id="stopButton">Stop Click Event</button>
            <script>
                function sayHello() {
                    console.log('Hello!');
                }
                const stopButton = document.getElementById('stopButton');
                stopButton.addEventListener('click', sayHello);

                setTimeout(() => {
                    stopButton.removeEventListener('click', sayHello);
                    console.log('Event listener removed');
                }, 5000);
            </script>

    👉 Event Propagation: 
        ⚪ Event Propagation Phases:
            1) Capturing Phase:
                Event starts from the window and travels down to the target element.
            2) Target Phase:
                Event reaches the target element.
            3) Bubbling Phase:
                Event bubbles back up from the target to the window.

        ⚪ Event Bubbling (useCapture = false):
            Default behavior.
            The event is handled from the target element upwards.

            Example:
                <div id="parent" style="padding: 20px; background-color: lightblue;">
                    <button id="child">Click Me</button>
                </div>

                <script>
                    document.getElementById('parent').addEventListener('click', () => {
                        console.log('Parent clicked (Bubbling)');
                    });

                    document.getElementById('child').addEventListener('click', () => {
                        console.log('Child clicked');
                    });
                </script>

            Output Order (on clicking child button):
                Child clicked
                Parent clicked (Bubbling)

        ⚪ Event Capturing (useCapture = true):
            The event is handled from the outermost element down to the target.

            Example:
                document.getElementById('parent').addEventListener('click', () => {
                    console.log('Parent clicked (Capturing)');
                }, true);

                document.getElementById('child').addEventListener('click', () => {
                    console.log('Child clicked');
                });
            
            Output Order (on clicking child button):
                Parent clicked (Capturing)
                Child clicked

        ⚪ Stopping Propagation:
            Use event.stopPropagation() to stop event propagation.
            Example:
                document.getElementById('child').addEventListener('click', (event) => {
                    event.stopPropagation();
                    console.log('Child clicked, propagation stopped');
                });

    👉 DOM Events: 
        ⚪ click : Triggered when an element is clicked.
        ⚪ submit : Triggered when a form is submitted.
        ⚪ keydown & keyup : Triggered when a key is pressed or released.
        ⚪ mouseover: Triggered when the mouse enters an element.
        ⚪ mouseout: Triggered when the mouse leaves an element.

    👉 Event Object
        ⚪ The event object contains details about the event.
        ⚪ Common properties:
            event.target: The element that triggered the event.
            event.type: The type of event.
            event.preventDefault(): Prevents default behavior.
            event.stopPropagation(): Stops event bubbling.


➡️ Event Delegation
    ⚪ Event Delegation is a technique in JavaScript where a single event listener is added to a parent element to manage events for multiple child elements, even those that are dynamically added in the future.

    ⚪ How Work?
        Instead of adding individual event listeners to each child element, an event listener is added to a parent element.

        Events bubble up from child elements to the parent (via Event Bubbling) where the event listener is triggered.

        The event.target property identifies which child element triggered the event.

    ⚪ Why use?
        Improved Performance: Avoid adding event listeners to every child element.

        Handles Dynamic Content: Newly added child elements automatically inherit the event listener.

        Cleaner Code: Centralized event management.

    ⚪ Example:
        <ul id="parentList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <script>
            const parentList = document.getElementById('parentList');
            parentList.addEventListener('click', (event) => {
                if (event.target.tagName === 'LI') {
                console.log(event.target.textContent);
                }
            });
        </script>


➡️ Form Handling with DOM
    We can access and update form elements using the document.forms collection or by targeting individual form elements using their ID, name, or class.

    👉 Accessing Form & Elements
        ⚪ document.forms: Accesses all forms on a page.
        ⚪ form.elements: Accesses individual elements within a form.

    👉 Accessing Input Values
        Image See

    👉 Handling Form Submissions
        ⚪ Forms can be handled using the submit event. This is typically done to validate data or prevent default form submission behavior.
        ⚪ event.preventDefault() : Prevent form from refreshing the page
        ⚪ event.submit() : submit the form 

    👉 Handling Form Reset
        ⚪ reset() Method: Resets the form to its initial state.

    👉 Validating Form Data
        ⚪ Before submitting, it’s common to validate form fields to ensure correctness.

    👉 Events in Form : submit, reset, change, input, focus, blur
        Image see 