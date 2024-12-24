/*
Introduction to DOM (Document Object Model)


➡️ What is the DOM?
    👉 Document Object Model is a programming interface to interact     with web pages.
    👉 It represents the HTML or XML document as a tree-like structure where every element, attribute, and piece of text is a node.
    👉 DOM access & update the web page dynamically.


➡️ Structure of the DOM tree
    👉 DOM represents HTML document as a tree-like structure, where:
        Each HTML element is a node.
        <html> tag is Root node.
        Nodes are connected in a parent-child relationship.
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
        Element Node: Represents an HTML tag (e.g., <p>, <h1>).
        Text Node: Represents the text content inside an element.
        Attribute Node: Represents attributes like class, id, src.
        Document Node: Represents the entire document (document).
        Comment Node: Represents HTML comments (<!-- comment -->).
    👉 Nodes have relationships:
        Parent Node: Node that contains other nodes.
        Child Node: Node contained within a parent node.
        Sibling Nodes: Nodes sharing the same parent.

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
        Selects all elements with a specific class name.
        Returns an HTMLCollection (array-like object).

    3) document.getElementsByTagName(' ');
        Selects all elements with a specific tag name.
        Returns an HTMLCollection (array-like object).

    4) document.querySelector(' ');
        Selects the first matching element using CSS selectors.

    5) document.querySelectorAll(' ');
        Selects all matching elements using CSS selectors.
        Returns a NodeList (array-like object).

*/