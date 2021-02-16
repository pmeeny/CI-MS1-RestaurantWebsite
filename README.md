# Milestone Project 1 - Lilys Restaarant
## Table of Contents
* [**Project overview**](#project-overview)
* [**UX**](#ux-design)
  - [**User Stories**](#user-stories)
  - [**User Goals**](#user-goals)
  - [**Design**](#design)
  - [**Libraries**](#libraries)
  - [**Colour Scheme**](#colour-scheme)
  - [**Wireframes**](#wireframes)

* [**Features**](#features)
  - [**Existing Features**](#existing-features)
  - [**Features Left to Implement**](#features-left-to-implemement)

* [**Technologies Used**](#technologies-used)

* [**Testing**](#testing)
  - [**Test Results**](#testresults)
  - [**Validators**](#validators)

* [**Deployment**](#deployment)

* [**Credits**](#credits)
  - [**Content**](#content)
  - [**Media**](#media)
  - [**Acknowledgements**](#acknowledgements)

# Project Overview

- This project is a website for a fictional restaurant named "Lily's Restaurant" fo submission as milestone project 1 as part of the Code Institute - Diploma in Software Development (Full stack) course.
- The website showcases the restaurant, its menu, team, awards and allows the user to fill in a form to book a table in the restaurant

- The website is deployed using GIThub pages at the following url: [Lilys Restaurant](https://pmeeny.github.io/CodeInstitute-MilestoneProject1-RestaurantWebsite/)

- The respository on Github that contains the website source code and assets is available at the folowing url: [Code Respository](https://github.com/pmeeny/CodeInstitute-MilestoneProject1-RestaurantWebsite)

- The website was built with a responsive look and feel for desktop, tablet and mobile devices
![Responsive site example](/assets/images/responsive_devices.png)

# UX
## Primary Goal
- The primary goal of the website from the site owners perspective is to increase bookings and visibility of the restaurant to potential customers
- The primary goal of the website from a users perspective is to find out details about the restaurant, view the menu and book a table online.
## Structure
I have structured the website into four pages, each with clear and concise structure and information
1. Index: The index(homepage): This is the first page the user encounters, it contains a header/footer and imagery/links to the other pages Menu, About Us, Awards as well as a button to book a table in the restaurant
2. Menu: The menu page displays the restauarant menu and a picture carousel
3. Awards: The awards page displays awards from 2017-2020 and a youtube video
4. About Us: The about us page displays the three team members, picture and biography
## Scope
### User Stories
There user stories for the website are described as follows: 
- As a user the navigation bar is displayed on the Index, Menu, About Us and Awards pages
- As a user I want to view the restaurant logo
- As a user I want to view the restaurant home, menu, about us, awards page link 
- As a user I want to book a table in the restaurant
- As a user I want to view the restaurant home page hero image
- As a user I want to book a table (Hero Image button)
- As a user I want to book a table (Website body button)
- As a user I want to view the menu on the restaurant home page (Website body button)
- As a user I want to view the about us information (Website body button)
- As a user I want to view the restaurant awards(Website body button)
- As a user I want to enter my name when booking a table
- As a user I want to enter my phone number when booking a table
- As a user I want to enter my email address when booking a table
- As a user I want to enter the number of guests when booking a table
- As a user I want to enter the preferred booking date when booking a table
- As a user I want to enter the preferred booking time when booking a table
- As a user I want to submit a booking
- As a user I want to close the table booking modal
- As a user I want to view the restaurant opening times
- As a user I want to view the restaurant phone number
- As a user I want to view the restaurant email address
- As a user I want to view the restaurant location on a map
- As a user I want to view the restaurant Facebook, Twitter, Snapchat, Instagram, Pinterest, Linkedin social media pages
- As a user I want to view the restaurant menu items and price (Starters and Main courses)
- As a user I want to view the restaurant allergan advice (Staters and Main courses)
- As a user I want to view a selection of the dishes available in a picture carousel
- As a user I want to view the restaurant about us section
- As a user I want to view the restaurant team members pictures and biography
- As a user I want to view the restaurant awards for the years 2020, 2019, 2018, 2017
- As a user I want to view the restaurant michelin star awards youtube video

## Skeleton
### Wireframes
- Wireframes for the wesbite were developed in Balsamiq and are linked below for Desktop, Tablet and Mobiel devices.
- The wireframes are stored in GIT in the png format and are available at the links below(Desktop, Tablet and Mobile wireframes)
- One overall pdf containing all wireframes is also stored in the GIT at the following location: - [All Wireframes in PDF format](assets/wireframes/Wireframes_allformats.pdf)
<br>
Desktop 
- [Index](assets/wireframes/desktop/index_desktop.png)
- [Menu](assets/wireframes/desktop/menu_desktop.png)
- [Awards](assets/wireframes/desktop/awards_desktop.png)
- [About Us](assets/wireframes/desktop/about-us_desktop.png)

Tablet
- [Index](assets/wireframes/tablet/index_tablet.png)
- [Menu](assets/wireframes/tablet/menu_tablet.png)
- [Awards](assets/wireframes/tablet/awards_tablet.png)
- [About Us](assets/wireframes/tablet/about-us_tablet.png)

Mobile
- [Index](assets/wireframes/mobile/index_mobile.png)
- [Menu](assets/wireframes/mobile/menu_mobile.png)
- [Awards](assets/wireframes/mobile/awards_mobile.png)
- [About Us](assets/wireframes/mobile/about-us_mobile.png)
 

## Surface
### Color Palette
There are five colours in the color palette with a 
- Primary colour of #0F4C75(Dark Blue/Navy) 
- Secondary colour of #6B4E0A (Gold)
- Grey colour of #E8E8E8
- White colour of #FFFFFF 
- Black colour of #212529
![Responsive site example](/assets/images/color_palette.png)

I feel the primary and secondary colours complement each other very well, and I choose those colours after testing a number of palettes while making sure the colour palette met accessibility standards.

### Typography
The Lato font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the Lato font cannot be imported into the website correctly.

# Features
The website has seven main features in the four web pages(Index(Homepage), Menu, Awards, About Us)
## Existing Features
### Feature 1: Navigation Bar 
#### Description: 
This is the navigation bar of the website, and is displayed on the four web pages Index(Homepage), Menu, Awards, About Us
The navigation bar is a bootstrap component, and is a resonsive component. It becomes a burger menu on tablet and mobile devices.
#### User Stories:
- User Story 1.1: As a user the navigation bar is displayed on the Index, Menu, About Us and Awards pages
- User Story 1.2: As a user I want to view the restaurant logo
- User Story 1.3: As a user I want to view the restaurant home, menu, about us, awards page link 
- User Story 1.4: As a user I want to book a table in the restaurant

### Feature 2: Hero Image and Four images/text(Website body) (index.html)
#### Description: 
This is a large hero image on the index/home page with a splash message and table button button and four images with corresponding text/buttons, with a navigation bar as the header and a footer
#### User Stories: 
- User Story 2.1: As a user I want to view the restaurant home page hero image
- User Story 2.2: As a user I want to book a table (Hero Image button)
- User Story 2.3: As a user I want to book a table (Website body button)
- User Story 2.4: As a user I want to view the menu on the restaurant home page (Website body button)
- User Story 2.5: As a user I want to view the about us information (Website body button)
- User Story 2.6: As a user I want to view the restaurant awards(Website body button)

### Feature 3: Table Booking Modal
#### Description: 
This is a modal that is a form for the user to enter in the relevant information to book a table in the restaurant and is available in the navigation bar on the Index(Homepage), Menu, Awards, About Us pages
#### User Stories: 
- User Story 3.1: As a user I want to enter my name when booking a table
- User Story 3.2: As a user I want to enter my phone number when booking a table
- User Story 3.3: As a user I want to enter my email address when booking a table
- User Story 3.4: As a user I want to enter the number of guests when booking a table
- User Story 3.5: As a user I want to enter the preferred booking date when booking a table
- User Story 3.6: As a user I want to enter the preferred booking time when booking a table
- User Story 3.7: As a user I want to submit a booking
- User Story 3.8: As a user I want to close the table booking modal

### Feature 4: Website footer
#### Description: 
This is the website footer displaying the restaurant contact information, map location and social media page links
#### User Stories: 
- User Story 4.1: As a user I want to view the restaurant opening times
- User Story 4.2: As a user I want to view the restaurant phone number
- User Story 4.3: As a user I want to view the restaurant email address
- User Story 4.4: As a user I want to view the restaurant location on a map
- User Story 4.5: As a user I want to view the restaurant Facebook, Twitter, Snapchat, Instagram, Pinterest, Linkedin social media pages

### Feature 5: Menu page (menu.html)
#### Description: 
This page displays the menu and a selection of the dishes available in a picture carousel with a navigation bar as the header and a footer 
#### User Stories: 
- User Story 5.1: As a user I want to view the restaurant menu items and price (Starters and Main courses)
- User Story 5.2: As a user I want to view the restaurant allergan advice (Staters and Main courses)
- User Story 5.3: As a user I want to view a selection of the dishes available in a picture carousel

### Feature 6: About Us page (about-us.html)
#### Description: 
This page displays the three team members, picture and biography
#### User Stories: 
- User Story 6.1: As a user I want to view the restaurant about us section
- User Story 6.2: As a user I want to view the restaurant team members pictures and biography

### Feature 7: Awards (awards.html)
#### Description: 
This page displays the restauarant awards for the years 2020, 2019, 2018, 2017 and a michelin star awards youtube video with a navigation bar as the header and a footer
#### User Stories: 
- User Story 7.1: As a user I want to view the restaurant awards for the years 2020, 2019, 2018, 2017
- User Story 7.2: As a user I want to view the restaurant michelin star awards youtube video
 
##  Features Left to Implement
The following features are outside the scope of this milestone project, but they would provide the user with a moe complete user expereience from the site, and would also drive users to the website.
- An online table booking feature that has a server side implementation and database to store bookings
- An online ordering feature, so that users can order onlinem, this would require a server side implementation, database and payment processing to process orders
- Google maps integration - In an earlier version of the website I had used the Google Maps API to add a google map to the footer.
The performance of the index page in the Google Developer lighthouse analysis tool was less than 70% on a mobile device | 


# Technologies Used
## Languages 
- HTML (https://en.wikipedia.org/wiki/HTML)
    - The project uses html to build the relevant pages

- CSS (https://en.wikipedia.org/wiki/CSS)
    - The project uses CSS to style the relevant pages

- Javascript (https://www.javascript.com/)
    - Javascript was used for the lazy loading feature to improve mobile site performance

## Libraries and other resources
- Bootstrap 4.6 (https://getbootstrap.com/docs/4.6)
    - The project uses the bootsttrap library for some of the UI components in the website

- Git (https://git-scm.com/)
    - Git was used as the source control tool for this project

- Gitpod (https://gitpod.io/)
    - An online Integrated Development Enviroment

- Github (https://github.com/)
    - Githib was used to store the project code in a repository

- Microsoft VSCode (https://code.visualstudio.com/)
    - A locally installed Integrated Development Enviroment

- Google Fonts (https://fonts.google.com/)
    - Google font Lato was used as the website font

- Balsamiq (https://balsamiq.com/)
    - Balsamiq was used to create the website wireframes

- Font Awesome (https://fontawesome.com/)
    - Font awesome was used to provide the relevant fonts/icons for the website

- JQuery (https://jquery.com)
    - JQuery was required by boostrap for some of the the UI components, for example the carosoul

- TinyPNG (https://tinypng.com/)
    - TinyPNG was used to compress images

 - CSS Validation Service (https://jigsaw.w3.org/css-validator/)
    - CSS validation service for validation the css in the project  

- HTML Markup Validation Service (https://validator.w3.org/)   
    - HTML validation service for validation the css in the project  

- Chrome dev tools (https://developers.google.com/web/tools/chrome-devtools)
    - For troubleshooting and debugging of the project code

- Chrome Lighthouse (https://developers.google.com/web/tools/lighthouse)
    - For performance, accesibility, progressive web apps, SEO analysis of the project code

- Responsive Design (http://ami.responsivedesign.is/)
    - Website for generating the responsive image in this README

- JS Fiddle (https://jsfiddle.net/)
    - Used for testing html and css concepts

- Canva (https://www.canva.com/)
    - Canva was used to design/create the website logo

# Testing
The testing approach was manual, and testing was completed on the following browsers and device types

Device Number | Physical/Emulator | Device Name | Device Type | Browser | Version
------------ | ------------ | ------------- | ------------- | ------------- | -------------
1 | Physical | iPad | Tablet |  Safari | 14.4 |
2 | Physical | iPhone | Mobile |Safari | 14.4 |
3 | Physical | One Plus 5 | Mobile | Chrome | 88.0 |
4 | Physical | Windows Desktop| Desktop | IE Edge | 88.0 |
5 | Physical | Windows Desktop| Desktop | Mozilla Firefox | 85.0 |
6 | Emulator | Galaxy S5 | Mobile | Chrome Emulator | 86.0 |
7 | Emulator | iPad | Tablet | Chrome Emulator | 86.0 |
8 | Emulator | iPhone X | Mobile | Chrome Emulator | 86.0 |

## Test Results
Below are the test results for testing the website requirements against a range of browsers and devices

### Feature 1: Navigation Bar 
Requirement | Test Case Steps |  Expected Result | 1(iPad, Safari) | 2(iPhone, Safari) | 3(One Plus 5, Chrome) | 4(Windows Desktop, IE) | 5(Windows Desktop, Firefox) | 6(Galaxy S5, Chrome) | 7(iPad, Chrome) | 8(iPhone X, Chrome)
------------ | ------------- | ------------- | ------------ | ------------- | -------------  | ------------ | ------------- | -------------  | -------------  | ------------- 
1.1: As a user the navigation bar is displayed on the Index, Menu, About Us and Awards pages | 1. Open the Index, Menu, About Us and Awards pages | The navigation is displayed, on a tablet/mobile device, it is displayed in a burger menu | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
1.2: As a user I want to view the restaurant logo | 1. Open the Index, Menu, About Us and Awards pages | The log is displayed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
1.3: As a user I want to view the restaurant home, menu, about us, awards page links  | 1. Open the Index, Menu, About Us and Awards pages <br>2. Click on each page link in the navigation bar | The navigation is displayed and the links bring the user to the relevant page, on a tablet/mobile device, it is displayed in a burger menu | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
1.4: As a user I want to book a table in the restaurant | 1. Open the Index, Menu, About Us and Awards pages <br>2. Click on the "Book a Table" button | The navigation is displayed, on a small tablet/mobile device, the button is hidden | Passed | N/A | N/A | Passed | Passed | N/A| Passed | N/A |


## Feature 2: Hero Image and Four images/text(Website body) (index.html)
Requirement | Test Case Steps |  Expected Result | 1(iPad, Safari) | 2(iPhone, Safari) | 3(One Plus 5, Chrome) | 4(Windows Desktop, IE) | 5(Windows Desktop, Firefox) | 6(Galaxy S5, Chrome) | 7(iPad, Chrome) | 8(iPhone X, Chrome)
------------ | ------------- | ------------- | ------------ | ------------- | -------------  | ------------ | ------------- | -------------  | -------------  | ------------- 
2.1: As a user I want to view the restaurant home page hero image | 1. Open the Index page | The hero image and text is displayed under the navigation bar | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
2.2: As a user I want to book a table (Hero Image button) | 1. Open the Index page <br> 2. On the hero image, click the book a table button  | The table booking modal will be displayed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
2.3: As a user I want to book a table (Website body button) | 1. Open the Index page <br> 2. On the website body click the book a table button  | The table booking modal will be displayed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
2.4: As a user I want to view the menu on the restaurant home page (Website body button) | 1. Open the Index page <br> 2. On the website body click the menu button  | The menu page will be displayed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
2.5: As a user I want to view the about us information (Website body button) | 1. Open the Index page <br> 2. On the website body click the about us button  | The about us page will be displayed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
2.6: As a user I want to view the restaurant awards(Website body button) | 1. Open the Index page <br> 2. On the website body click the awards button  | The awards page will be displayed| Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |

## Feature 3: Table Booking Modal
Requirement | Test Case Steps |  Expected Result | 1(iPad, Safari) | 2(iPhone, Safari) | 3(One Plus 5, Chrome) | 4(Windows Desktop, IE) | 5(Windows Desktop, Firefox) | 6(Galaxy S5, Chrome) | 7(iPad, Chrome) | 8(iPhone X, Chrome)
------------ | ------------- | ------------- | ------------ | ------------- | -------------  | ------------ | ------------- | -------------  | -------------  | ------------- 
3.1: As a user I want to enter my full name when booking a table | 1. Click on the book a table button <br> 2. Fill in a full name in the name field | The full name is displayed in the form | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
3.2: As a user I want to enter my phone number when booking a table | 1. Click on the book a table button <br> 2. Fill in a phone number in the name field | The email address is displayed in the form | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
3.3: As a user I want to enter my email address when booking a table | 1. Click on the book a table button <br> 2. Fill in an email address number in the name field | The email address is displayed in the form | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
3.4: As a user I want to enter the number of guests when booking a table | 1. Click on the book a table button <br> 2. Select the number of guests in the numbr of guests field| The numbr of guests is displayed in the form | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
3.5: As a user I want to enter the preferred booking date when booking a table | 1. Click on the book a table button <br> 2. Select the preferred date in the date field | The date is displayed in the form | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
3.6: As a user I want to enter the preferred booking time when booking a table | 1. Click on the book a table button <br> 2. Select the preferred time in the time field | The time is displayed in the form | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
3.7: As a user I want to submit a booking and the form details is validated | 1. Click on the book a table button <br> 2. Leave all fields blank and then fill then in one by one and click the book a table button | The full name, phone number, email address, date and time fields are mandatory. <br> The email address must include an ampersand. The data is then sent succesfully to the CodeInstitute POST request  | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
3.8: As a user I want to close the table booking modal | 1. Click on the book a table button <br> 2. Close the modal | The modal is closed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
## Feature 4: Website footer
Requirement | Test Case Steps |  Expected Result | 1(iPad, Safari) | 2(iPhone, Safari) | 3(One Plus 5, Chrome) | 4(Windows Desktop, IE) | 5(Windows Desktop, Firefox) | 6(Galaxy S5, Chrome) | 7(iPad, Chrome) | 8(iPhone X, Chrome)
------------ | ------------- | ------------- | ------------ | ------------- | -------------  | ------------ | ------------- | -------------  | -------------  | ------------- 
4.1: As a user I want to view the restaurant opening times | 1. Open the Index, Menu, Awards, About Us pages and view the footer | The restaurant opening times are displayed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
4.2: As a user I want to view the restaurant phone number | 1. Open the Index, Menu, Awards, About Us pages and view the footer | The restaurant phone number is displayed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
4.3: As a user I want to view the restaurant email address | 1. Open the Index, Menu, Awards, About Us pages and view the footer | The restaurant email address is displayed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
4.4: As a user I want to view the restaurant location on a map | 1. Open the Index, Menu, Awards, About Us pages and view the footer | The restauarant google map is displayed, and clicking on it opens google maps in a new tab | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
4.5: As a user I want to view the restaurant Facebook, Twitter, Snapchat, Instagram, Pinterest, Linkedin social media pages | 1. Open the Index, Menu, Awards, About Us pages and view the footer <br> 2. Click on each of the social icon buttons x 6(Facebook, Twitter, Snapchat, Instagram, Pinterest, Linkedin)| The restaurants social media page(Facebook, Twitter, Snapchat, Instagram, Pinterest, Linkedin) opens up in a new tab | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |

## Feature 5: Menu page (menu.html)
Requirement | Test Case Steps |  Expected Result | 1(iPad, Safari) | 2(iPhone, Safari) | 3(One Plus 5, Chrome) | 4(Windows Desktop, IE) | 5(Windows Desktop, Firefox) | 6(Galaxy S5, Chrome) | 7(iPad, Chrome) | 8(iPhone X, Chrome)
------------ | ------------- | ------------- | ------------ | ------------- | -------------  | ------------ | ------------- | -------------  | -------------  | ------------- 
5.1: As a user I want to view the restaurant menu items and price (Starters and Main courses) | 1. Open the Menu page and view the menu | The menu is displayed, starter, main course items and prices | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
5.2: As a user I want to view the restaurant allergan advice (Staters and Main courses) | 1. Open the Menu page and view the allergan advice | The allergan advice for each item is displayed and explained | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
5.3: As a user I want to view a selection of the dishes available in a picture carousel | 1. Open the Menu page and click on the carousel items | A selection of the dishes available is displayed in a picture carousel | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |

## Feature 6: About Us page
Requirement | Test Case Steps |  Expected Result | 1(iPad, Safari) | 2(iPhone, Safari) | 3(One Plus 5, Chrome) | 4(Windows Desktop, IE) | 5(Windows Desktop, Firefox) | 6(Galaxy S5, Chrome) | 7(iPad, Chrome) | 8(iPhone X, Chrome)
------------ | ------------- | ------------- | ------------ | ------------- | -------------  | ------------ | ------------- | -------------  | -------------  | ------------- 
6.1: As a user I want to view the restaurant about us section | 1. Open the About Us page  | The about us section is displayed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
7.1: As a user I want to view the restaurant team member pictures and biography | 1. Open the About Us page | The team members pictures and biography is diplsayed | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |

## Feature 7: Awards page
Requirement | Test Case Steps |  Expected Result | 1(iPad, Safari) | 2(iPhone, Safari) | 3(One Plus 5, Chrome) | 4(Windows Desktop, IE) | 5(Windows Desktop, Firefox) | 6(Galaxy S5, Chrome) | 7(iPad, Chrome) | 8(iPhone X, Chrome)
------------ | ------------- | ------------- | ------------ | ------------- | -------------  | ------------ | ------------- | -------------  | -------------  | ------------- 
7.1: As a user I want to view the restaurant awards for the years 2020, 2019, 2018, 2017 | 1. Open the Awards page and click each award year(2020, 2019, 2018, 2017) in the dropdown | The awards are displayed for each award year(2020, 2019, 2018, 2017) | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |
7.2: As a user I want to view the restaurant michelin star awards youtube video | 1. Open the Awards page and open the youtube video on the page | The youtube video loads and plays | Passed | Passed | Passed | Passed | Passed | Passed| Passed | Passed |


## Bugs found during the testing phase

Bug Number | Comment |  Solution/Design decision |
------------ | ------------- | ------------- | 
1 | When the website was deployed to GitPages some images were not displaying | The fix was to update the image src to remove the "/" from ```src="/assets/images/name ofimage...``` to ```src="assets/images/name ofimage...```
2 | The table booking modal was not loading on phone and tablet devices | The fix was to make sure only the button div was under the div ```<div class="d-none d-lg-block d-xl-block">``` rather than the button and the modal
3 | The carousel on its own container div looked out of place and too large | The fix was to put the menu and the carousel side by side in a row div
4 | The book a table button looked out of place under the burger menu on tablet and mnobiel devices | The fix was to hide the button in the navigation bar on mobile and tablet devices using the following classes ```<div class="d-none d-lg-block d-xl-block">```
5 | The wave accesbility analysis tool displayed an error of the contrast of the original gold (#AF83460 and white text on the buttons on the website |The fix was to use a different colour for the secondary colour #6B4E0A

## Code Validators/ Website Analysis
The websites pages were run against the following validators

### HTML Markup Validation Service (I used https://validator.w3.org/)
Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
index.html | Passed, No errors found | [Results](assets/images/testing/html-validation/index_validation.jpg)
menu.html | Passed, No errors found | [Results](assets/images/testing/html-validation/menu_validation.jpg)
awards.html | Passed, No errors found | [Results](assets/images/testing/html-validation/awards_validation.jpg)
about-us.html | Passed, No errors found | [Results](assets/images/testing/html-validation/about-us_validation.jpg)

### CSS Validation Service (I used https://jigsaw.w3.org/css-validator/)
<p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>
Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
style.css | Passed, No errors found | [Results](assets/images/testing/css-validation/css_validation.jpg)

### Chrome Dev tools Lighthouse (I used Lighthouse https://developers.google.com/web/tools/lighthouse)
Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
index.html (Desktop) | ------------- | -------------
menu.html (Desktop) | ------------- | -------------
awards.html (Desktop) | ------------- | -------------
about-us.html (Desktop) | ------------- | -------------
index.html (Mobile) | ------------- | -------------
menu.html (Mobile) | ------------- | -------------
awards.html (Mobile) | ------------- | -------------
about-us.html (Mobile) | ------------- | -------------



# Deployment
The website was developed using initally the Gitpod IDE, but then I switched to use the Visual Studio Code IDE due to the extensibility of the Visual Studio Code IDE and I plan on using this IDE for future projects. 

The source code is stored in GIT in the repo: pmeeny/CodeInstitute-MilestoneProject1-RestaurantWebsite(master branch) 

The website was deployed on GitHub pages (https://pages.github.com/) using the following steps
1. Log to GitHub (https://wwww.github.com)
2. Click the Repositories tab and select the repository pmeeny/CodeInstitute-MilestoneProject1-RestaurantWebsite 
3. In the menu, select Settings
4. Scroll down to the GitHub Pages section
5. Under source, select the master branch and save
6. The website is now deployed, and the link is displayed in the GitHub Pages section

To run this project locally, you will need to clone the repository
1. Login to GitHub (https://wwww.github.com)
2. Select the repository pmeeny/CodeInstitute-MilestoneProject1-RestaurantWebsite 
3. Click the Code button and copy the HTTPS url, for example: https://github.com/pmeeny/CodeInstitute-MilestoneProject1-RestaurantWebsite.git
4. In your IDE, open a terminal and run the git clone commaned, for example 
```git clone https://github.com/pmeeny/CodeInstitute-MilestoneProject1-RestaurantWebsite.git```
5. The repository will now be cloned in your workspace

# Credits
- For the image carousel scaling and margin sizing I used source code with some tweaks from: https://bootstrapcreative.com/create-full-width-bootstrap-4-responsive-carousel/

- For the social media icons, I used the code with some tweaks from the Code Institute, CV project, reference: https://github.com/Code-Institute-Org/ucd-resume

- For the navigation bar, and hero image, I used the code with some tweaks from the Code Institute, Whiskey project, reference https://learn.codeinstitute.net/login?next=/ci_program/diplomainsoftwaredevelopment

- I used lazy loading java script code (https://github.com/aFarkas/lazysizes) to improve image loading and performance on the website

# Content
- The text for the menu in menu.html was copied and tweaked from the [Square table restaurant](https://thesquaretable.ie/dinner-menu/)

- I used the name Michelin Star, Bridgestone Award and McKenna Guide in the awards page 
    - https://guide.michelin.com/ie/en/restaurants
    - https://www.bridgestone.com/responsibilities/bga/
    - https://www.guides.ie/

# Media
- Pixabay (https://pixabay.com/)
    - The photos used in this site were downloaded from Pixabay

- Youtube (https://www.youtube.com/)
    - The video used in this site(awards.html) was obtained from Youtube
    - Url: https://www.youtube.com/embed/kFiSU6kLrTs

- Canva (https://www.canva.com/)
    - Canva was used to design/create the website logo
 
# Acknowledgements
- I would like to thank my fiancee Mary for her help, constant support and ideas for the website.
- I would like to thank my mentor Mo for his input, help and feedback.