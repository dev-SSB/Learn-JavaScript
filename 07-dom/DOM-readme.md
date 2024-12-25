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
        ⚪
    👉 Appending, Inserting, and Removing Elements
        ⚪
    👉 append() and prepend() (Modern Methods)
        ⚪
    👉 Removing Elements with remove() (Modern Method) 
        ⚪
    👉 Comparison 
        ⚪
    👉 Key Takeaways
        ⚪