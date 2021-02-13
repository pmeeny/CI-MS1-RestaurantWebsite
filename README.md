# Lilys Restaurant

This project is a website for a fictional restaurant names "Lily's Restauarant"
The website showcases the restaurant, its menu, team, awards and allows the user to book a table.

The website is deployed using GIThub pages at the following url: 
The repositiry on GITHub that stores the website source code and assets is available at the folowing url: 

![Responsive site example](/assets/images/responsive_devices.png)

## UX
List of User Stories
- Requirement 1: As a user I want to view the restaurant operating times
- Requirement 2: As a user I want to view the restaurant phone number
- Requirement 3: As a user I want to view the restaurant email address
- Requirement 4: As a user I want to view the restaurant location in a map
- Requirement 5: As a user I want to view the restaurant facebook page
- Requirement 5: As a user I want to view the restaurant facebook page
- Requirement 5: As a user I want to view the restaurant facebook page

- Requirement 5: As a user I want to view the restaurant menu
- Requirement 6: As a user I want to view the restaurant team members
- Requirement 7: As a user I want to view the restaurant awards
- Requirement 8: As a user I want to view the restaurant awards video
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.


Color Palette
![Responsive site example](/assets/images/color_palette.png)

Primary Colour: #0f4c75 (Dark blue/navy)
Secondary Colour: #af8346 (Gold)
Grey: #e8e8e8
White: #ffffff
Black: #212529


Wireframes
The wireframes are stored in GIT
Desktop


Tablet


Mobile

## Features

- Index - This is the homepage

- Menu

- About Us

- Table Booking

- Awards
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used
- HTML (https://en.wikipedia.org/wiki/HTML)
    - The project uses html to build the relevant pages

- CSS (https://en.wikipedia.org/wiki/CSS)
    - The project uses CSS to style the relevant pages

- Bootstrap 4.6 (https://getbootstrap.com/docs/4.6)
    - The project uses the bootsttrap library for some of the UI components in the website

- Javascript (https://www.javascript.com/)
    - Javascript was used for display the google map

- Git (https://git-scm.com/)
    - Git was used as the source control tool for this project

- Gitpod (https://gitpod.io/)
    - An online Integrated Development Enviroment

- Github (https://github.com/)
    - Githib was used to store the project code in a repository

- Microsoft VSCode (https://code.visualstudio.com/)
    A locally installed Integrated Development Enviroment

- Google Fonts (https://fonts.google.com/)
    - Google font Lato was used as the website font

- Balsamiq (https://balsamiq.com/)
    - Balsamiq was used to create the website wireframes

- Font Awesome (https://fontawesome.com/)
    - Font awesome was used to provide the relevant fonts/icons for the website

- JQuery (https://jquery.com)
    - JQuery was required by boostrap for some of the the UI components, for example the carosoul

- TinyPNG https://tinypng.com/

## Testing

Table of testing


Requirement | Desktop(Chrome 86.0) | Desktop(Mozilla) | Desktop(IE 11) | Ipad | IPhone | OnePlus 5(Android, Chrome)
------------ | ------------- | ------------- | ------------ | ------------- | ------------- | -------------
Requirement 1 | Passed | Passed | Passed | Passed | Passed | Passed
Requirement 1 | Passed | Passed | Passed | Passed | Passed | Passed

1. Awards Page
    1. Go to the "Awards" page


In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.
Bugs found and fixed during testing

1. When deployed, images not appearing, solution was to update image location, and move the src attribute into the html
2. The book a table button in the navr bar was appear on phone and tablet devices, solution was to hide it
3. The carsoule was too big
4. The modal was not appearing on phone and tablet devices . Issue was the modal was incorrectly under this div, and only the button should be under this div <div class="d-none d-lg-block d-xl-block">

## Deployment

The website was deployed on GITHub pages (https://pages.github.com/)

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits
Image Carousel
https://bootstrapcreative.com/create-full-width-bootstrap-4-responsive-carousel/

w3schools

Gooe map code taken from 

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- Pixabay (https://pixabay.com/)
    - The photos used in this site were obtained from Pixabay

- Youtube (https://www.youtube.com/)
    - The video used in this site(awards.html) was obtained from Youtube

### Acknowledgements

Jumbotron
Whiskey project


- I received inspiration for this project from X