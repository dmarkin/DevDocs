Language:

Namespace polluting by creating a large footprint of variables in the global context.

Binding event handlers in the form 'foo.onclick = myFunc' (inextensible, should be using attachEvent/addEventListener).

Using eval in almost any non-JSON context

Almost every use of document.write (use the DOM methods like document.createElement)

Prototyping against the Object object (BOOM!)

A small one this, but doing large numbers of string concats with '+' (creating an array and joining it is much more efficient)

Referring to the non-existent undefined constant

Design/Deployment:

(Generally) not providing noscript support.

Not packaging your code into a single resource

Putting inline (i.e. body) scripts near the top of the body (they block loading)

Ajax specific:

not indicating the start, end, or error of a request to the user

polling

passing and parsing XML instead of JSON or HTML (where appropriate)