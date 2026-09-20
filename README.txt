MORAFEQ
=======

How to open the site
--------------------
Open index.html in the browser. That is the home page.

Every other page is inside its own folder, and each folder has the same
three files: index.html, style.css and script.js.


The folders
-----------
index.html            the home page
style.css             the home page styles
script.js             the home page code
images/               all the pictures

schedule/             My Schudele page (add and see your medicines)
premium/              the prices page
contact/              the contact form page
learn/                the "Learn More" page
login/                login and register
forget-password/      forgot password page
loading/              the loading spinner


The header and the footer
-------------------------
The header (the blue bar at the top) and the footer (the blue box at the
bottom) are written exactly the same in these five pages:

    index.html
    schedule/index.html
    premium/index.html
    contact/index.html
    learn/index.html

If you change the header in one page, change it in the other four the same
way, so the site stays the same everywhere.

The only difference between them is:
  1. Pages inside a folder start their links with ../
     Example:  index.html  becomes  ../index.html
  2. The link of the page you are on has  class="active"  so it turns gold.


Links between pages
-------------------
All links are relative now, so the site works on any computer and also
works when you put it online.

From the home page:        schedule/index.html
From inside a folder:      ../schedule/index.html
For pictures:              images/logo.png   or   ../images/logo.png

Never write links like file:///C:/Users/... because they only work on the
computer they were written on.


Where the medicines are saved
-----------------------------
The medicines are saved in the browser using localStorage, with the name
"medicines". If you clear the browser data, the list is deleted.
There is no server yet, so the contact form and the login do not send
anything anywhere.
