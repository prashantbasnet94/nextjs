
Routing

Pages should be created inside src>app


1. cd src>app
    a. /thread
        i. create mkdir thread
        ii. create page.tsx

    b. /major/computer
        i.   create mkdir major
        ii.  create another mkdir computer
        iii. create page.tsx

        now this page is visible from /major/computer

2. How to make a dynamic route
    /major/[title]

    a. This can be created using slug
        we first create a major dir i.e mkdir major
    b. then we create a dynamic routing segment
        i. mkdir major>[slug]
    c. Finally create a page to match this slug
        i. major>[slug]>page.tsx





