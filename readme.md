<h2>Ans: 01</h2>
<li>getElementById returns a single element that matches the given id.</li>
<li>getElementsByClassName returns all matching elements.</li>
<li>querySelector returns only the first match within the CSS selector.</li>
<li>querySelectorAll returns all elements that match the CSS selector.</li>

 <h2>Ans: 02</h2>
 To add a new element in the DOM, first create the element using document.createElement() with the tag. Then set the content of this element, and finally insert it into the parent element using appendChild() or insertBefore().

<h2>Ans: 03</h2>
When an event occurs on an element, it first happens on that element and then gradually moves up step by step. For example, if there is a button inside a div and a click event is triggered on this button, the click event will first work on the button and then on the div.

This is event bubbling.


<h2>Ans: 04</h2>
Event delegation is a technique where a single event listener is attached to the parent element and handles the events of child elements. So, there is no need to give separate event listeners to each child element.
<br>
<br>
<li>Many child elements can be handled at once.</li>
<li>Dynamic elements can also be handled.</li>
<li>It is easy to maintain because the code is shorter.</li>


<h2>Ans: 05</h2>
The preventDefault() method is used to stop the browser's default behavior in an event, and stopPropagation() is used to stop event bubbling.

For example, normally clicking a link reloads the page by default, but if preventDefault() is used, clicking that link will not reload the browser. On the other hand, if an event is triggered on a child element, stopPropagation() prevents it from reaching the parent element.

In short, preventDefault() stops the browser action, and stopPropagation() stops the event's DOM propagation.



