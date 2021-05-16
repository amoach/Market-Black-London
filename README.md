# Market-Black-London
## Code Institute: Milestone Project 2 - Amanda Achampong

![screens ](https://user-images.githubusercontent.com/70138332/118381909-c610e180-b5e7-11eb-8eb4-e81db49049ff.png)

---
Market Black London is a website platform idea developed from the "Black Pound Day" movement in order to give more exposure to 
black-owned businesses and for the user to discover where they are located and find more information about them. The idea is 
also so it can be built upon so the user can also nominate and suggest other black-owned business not already listed to create 
awareness and exposure.

Live version of the website can be accessed [here](https://amoach.github.io/Market-Black-London/)

# Project Requirements:

Create a user centric website using front end technologies - HTML5 - CSS3 and supporting libraries such as Bootstrap.


# Table of contents

1. [Strategy & Scope](#strategy-and-scope)
* [UX](#ux)
        * [Business Objectives](#business-objectives)
        * [User Objectives](#user-objectives)
        * [Project goals](#project-goals)
2.  [Structure](#structure)
    * [Design Process](#design-process)
        * [Page Structure](#page-structure)
            * [Home](#home)
            * [Services](#services)
            * [Gallery](#gallery)
            * [About](#about)
            * [Contact](#contact)
3.  [Skeleton](#skeleton)
    * [Wireframe Designs](#wireframe-designs)
    * [Responsive Design](#responsive-design)
    * [Changes In Functionality / Design](#changes-in-functionality-and-design)
4.  [Surface](#surface)
    * [Colors](#colours)
    * [Fonts](#fonts)
5.  [Features](#features)
    * [Sitewide](#sitewide)
        * [Modal](#get-a-quote-form)
        * [Navbar](#nav-bar)
        * [Contact Information](#contact-information)
    * [Homepage](#home-page)
        * [Testimonials](#testimonials)
        * [Hero Image Buttons](#hero-image-buttons)
    * [About Page](#about-page)
        * [Google Map Feature](#google-map-feature)
    * [Contact Page](#contact-page)
        * [Contact Us Form](#contact-us-form)
6.  [Future Features](#future-features)
7.  [Technologies Used](#technologies-used)
    * [Languages](#languages)
    * [Libraries](#libraries)
    * [Tools](#tools)
8.  [Testing](#testing)
    * [Testing User Stories](#testing-user-stories)
    * [Testing Features](#testing-features)
    * [Testing Responsiveness](#testing-responsiveness)
    * [Testing Different Browsers](#testing-different-browsers)
    * [Validating Code](#validating-the-html-and-css-code)
    * [Issues Found](#issues-found)
9. [Deployment](#deployment)
    * [Hosting on GitHub Pages](#hosting-on-github-pages)
    * [Cloning](#cloning)
10. [Credits](#credits)
    * [Content](#content)
    * [Media](#media)
        * [Images](#images)
    * [Acknowledgements](#acknowledgements)
        * [Sites used](#sites-used-for-information-and-support)
        * [Advice & Support](#i-received-advice-and-support-from)


# Strategy and Scope
## UX

#### Business Objectives

- The website will be a space for the user to discover, locate and support black-owned businesses in London through the map disclosed
- It will give the user information on why they should support these businesses and what motivate the idea to create the website
- It will also be a space to give exposure to these businesses
- The website will be informative so the user can have to opportunity to nominate and find out more about black-owned businesses in London

#### User Objectives

- Engage with anyone on the search for black-owned businesses in London
- Users can also enquire about any of the businesses by submitting the contact form
- Users are also encouraged to take part in growing the 'Market Black London' community and platform by nominating businesses not already listed

#### Project Goals

- Creating a clear, aesthetically pleasing website which is also easily navigatable for the user.
- Having a theme which is consistent throughout the website.
- Including all relevant information in regards to the black-owned businesses to be accessed 
- Interactivity in different forms throughout the site to encourage engagement

# Structure

- Starts with the landing page with logo at the very top and navbar right underneath
- Automatic moving carousel with a series of images centered  
- Ultimately the user would want to first of all find out what motivated the idea of Market Black London so a little background provided in the about section
- Site is one page, however the different sections of the page can be accessed via the fixed navbar

## Design Process

- The wireframe was designed on figma which made it easy to visualize as well as successfully make it consistent throughout.
- The overall aim was to simply educate the user the importance of being from black businesses and how to access them
- Every other section has a pale brown background in order to seperate and therefore not bore the user with what could feel like endless scrolling
- The aim was to also have an overall minimal and clean look for info to be digested. And also goes for the choice of colour palette which was thought about in a way that they marry well together

#### Page Structure

* I wanted the site to remain simple and easy to navigate, therefore the use of sections was kept to a minimum. The reason for this design choice, is to achieve the purpose set out to make the user experience quick and easy to locate the information they require.

* With the exception of the landing page section, all sections consist of the same structure when it comes to the logo at the header, title with headlining paragraph following with their relevant content.

* Fixed responsive navbar throughout the site links to all sections. It also stays fixed on mobile devices as you scroll and menu also then reduced to hamburger toggle bar.

#### Home

* The Home landing section has an automatic carousel feature which displays images which relate to black businesses along with a fixed navbar navigating the rest of the site. Images for the carousel were taken from here:

    1. First image of [group of women](https://unsplash.com/photos/rWxMfj9y0F4) 

    2. Second image of a [florists](https://unsplash.com/photos/6IDXtm-HRU4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

    3. Third image of a [barber](https://unsplash.com/photos/2ZjKLOe7vOI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

    4. Fourth image of [plated food](https://unsplash.com/photos/XInJNV422eo)

    5. Fifth image of [women walking](https://unsplash.com/photos/24vjqGCu0pI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

#### About us 

* Headline and summary of why Market Black London was created and what to expect from the site. The facts used in this section were taken from the following sources:
 - [The Promota Africa](https://www.thepromota.com/black-consumers-are-worth-300-billion/)
 - [The Financial Times](https://www.ft.com/content/4f7ab34c-5a70-4cae-b04d-1c90ed1a230e)
 - [Elle](https://www.elle.com/uk/life-and-culture/a33466517/black-pound-day/)
 - [Stylist](https://www.stylist.co.uk/life/black-pound-day-black-owned-businesses-support-what-is-it/402465)


#### Search

* This section is for the user to display the recommended locations on a london map
    1. Paragraph instructing user on the map usage
    2. Map was added by using Leaflet API
    - The additional map functions called popups allowed me to add small images of the business and a short summary line

#### Places to go 

* This section is for the user to get more information about the recommended businesses
* Bootstrap cards added to provide images of the businesses and what to expect from them
    
    1. First card - Bidhaar store with image taken from [here](https://ndaane.com/blog/new-in-bidhaar-concept-store-why-you-need-to-it-check-out)
    2. Second card - Buster Mantis bar with image taken from [here](https://www.bustermantis.com/home/2017/1/17/glqkw7l9o08h38d0869i7eopn0g8en)
    3. Third card - Dark Sugars with image was taken from [here](https://www.darksugars.co.uk/collections/chocolates)
    4. Fourth card - Sage Flowers with image taken from [here](https://sageflowers.co.uk/)
    5. Fifth card - Yo Crackers with image taken from [here](https://www.instagram.com/p/CIGFMEsAGtP/)
    6. Sixth card - Uncle John's Bakery with image taken from [here](https://theunclejohnsbakery.com/our-story/)
    7. Seventh card - Round Table Bookstore with image taken from [here](https://www.roundtablebooks.co.uk/about)
    8. Eigth card - The Black Butcher with image taken from [here](https://twitter.com/tootingnewsie/status/1296769095778672649)

- They all had their relevant websites and social links provided at the bottom of the cards, with icons taken from font awesome

#### Contact

* This section consists of the header and a paragraph encouraging the user to get in touch
* A contact form has been added to complete and as an email, with code taken from [here](https://codepen.io/matmarsiglio/pen/HLIor)


## Wireframe designs

* The wireframes were created in Photoshop in order to get all the screenshots on the same page

* The screenshots were taken from a desktop screen of 1183px x 821px

![Home](https://user-images.githubusercontent.com/70138332/118381965-27d14b80-b5e8-11eb-990a-fb7525d1253f.jpg)

![About](https://user-images.githubusercontent.com/70138332/118382767-87cbf000-b5f0-11eb-8a33-c7b710e3f23b.jpg)

![Search](https://user-images.githubusercontent.com/70138332/118382808-ceb9e580-b5f0-11eb-8247-93dfea933b7a.jpg)

![Places to go](https://user-images.githubusercontent.com/70138332/118382822-ee510e00-b5f0-11eb-81d1-3677465ae3c3.jpg)

![Contact](https://user-images.githubusercontent.com/70138332/118382827-032da180-b5f1-11eb-8013-396b0521906e.jpg)


## Responsive Design

All wireframe were created to a large sized desktop display and other screen sizes were then worked on to ensure responsiveness. And this included mobile size for iphone x and larger screen size of 1270px x 815px
This required me to decide how best the content should be displayed on smaller devices. I ensured to keep the 'user' at the heart of any design choices. Making decisions on content order was important, as less content is viewable on smaller screen sizes without the need to scroll. To ensure engagement was maintained and users are able to find key content quickly, some content was shifted or even removed on smaller screens, using responsive design.

# Surface

## Colours

Colour Palette - I chose three colours which were either taken from the photos used on the website or just one I thought would work well with the theme and be complimentary to the overall look. I also ensured there was continuity throughout the site.

- ![2E1005](https://user-images.githubusercontent.com/70138332/118383118-1c375200-b5f3-11eb-954c-38e39cc04438.jpg) `rgb(46, 16, 4)` - Logo, text, form border, card borders
- ![B78D79](https://user-images.githubusercontent.com/70138332/118383206-b4353b80-b5f3-11eb-8e38-71fe63c3534c.jpg) `rgb(183, 141, 121)` - Navbar, background-color
- ![2543EB](https://user-images.githubusercontent.com/70138332/118383270-4d645200-b5f4-11eb-9e32-71ce93171b9e.jpg) `rgb(37,67,235)` - Logo, headers
- ![B40000](https://user-images.githubusercontent.com/70138332/118383333-b21fac80-b5f4-11eb-8f23-01435c82efdb.jpg) `rgb(180, 0, 0)`-  Headers
- ![dummy_20x20__ffdcb1](https://user-images.githubusercontent.com/70138332/112835245-ecf37280-9090-11eb-9513-a56f11b70407.png) `rgb(255, 255, 255)` -Homepage logo, buttons hover


There were also greys used for some things like the background overlay of home buttons and text of navbar dropdown menu.

### Nav Bar

* Navbar which all collapses into a hamburger version on mobile screens

* Fixed at the top as the default position users are familiar in navigating. Created to float and scroll along as the user scrolls down the page for easy access to the menu regardless where they are on the page.


### Contact Information

* Users have the option of contacting via the contact section and this goes for any queries they may have as well as nominating a business.

## Languages

* HTML 
* CSS 
* Javascript

## Libraries

* [Bootstrap](https://getbootstrap.com/) (4.0.0) - Responsiveness, styling and navbar.
* [FontAwseome](https://fontawesome.com/) (4.7.0) - Icons for the social media links.
* [Google Fonts](https://fonts.google.com/) - Google Roboto font.
* [Unsplash](http://unsplash.com/) - Most images used across the site.

## Tools

* [Gitpod](https://www.gitpod.io) 
* [Github](https://github.com/) - hosting repository and website.
* [Figma](https://www.figma.com/) - used for creation of wireframes.
* [Leaflet](https://leafletjs.com/examples/quick-start/) - Interactive map
* [Google Geocoder](https://developers.google.com/maps/documentation/geocoding/overview) - used to find the map coordinates for the markers. 
* [Am I Responsive](http://ami.responsivedesign.is/) - used to test the website and screenshot was taken for the top of README page.
* [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - used for testing and debugging.
* [Diffchecker](https://www.diffchecker.com/diff) - used for debugging.
* [w3 html validator](https://validator.w3.org/) - used to validate my html code.
* [w3 css validator](https://jigsaw.w3.org/) - used to validate my css code.
* [Autoprefixer CSS](https://autoprefixer.github.io/) - used to validate my css code.
* [JSHint](https://jshint.com/) - used to validate JS.

## Testing 

## Validating the HTML, CSS and Javascript code

All of my code passed the following validation tests:
- HTML: [W3C Markup Validation Service](https://validator.w3.org/)
- CSS: [W3C Markup Validation Service](https://jigsaw.w3.org/css-validator/)
- Javascript: [JShint](https://jshint.com/)

Screenshots of validations for each page of code can be found [here](https://github.com/amoach/Ghana-based/tree/main/assets/images/testing)

### Testing Features

* The navbar was tested to collapse as well as with the dropdown menu also the responsiveness in mobile view as a hamburger.
* Different screen sizes were looked at in order to see how the responsiveness is on different devices.
* Nav links were tested to ensure they were being correctly linked to the intended internal and external sites.
* Friend was also asked to preview the site on his xl screen and iphone 5 device.

### Testing responsiveness

- Using Google Chrome Dev Tools all pages were viewed in the responsive setting to display various screen sizes. 

### Testing different browsers

I tested the website on the following web browsers:
- Google Chrome 
- Mozilla Firefox 

## Testing User Stories from User Experience (UX) Section

* First Time Visitor Goals
- As a first time vistor, it essential to understand the reason the site was created and what the intentions for the user are within seconds of landing on the page.
- With the content of the navbar text clearly fixed at the top also made it easy to navigate from page to page.
- User sees images taken in Ghana which ties into the theme of the site. As if you are having a preview of what to expect on your visit with a gallery like format, high quality photos.
- Short caption under the logo straight to the point and outlines the purpose of the site.
- The user also has options on the homepage, they can leave the page via the buttons linked to the other pages or you can continue scrolling down for more features but also navigate from the fixed navbar.
- Visitor also intially has the option to find out the intention of the site by simply clicking the about button located right of the page purposely to catch the users' attention immediately

* Returning Visitor Goals 
- As a returning visitor I would expect more experiences added over time to encourage me to explore Ghana more.
- It is essential a returning visitor finds it easy to find the answers they are looking for otherwise be able to simply contact the company. This can be done by filling out a form on the contact page.
- The footer also contains buttons which link to social media pages in order to expand on their knowledge of the company.

* Frequent User Goals
- A frequent user would want this to be an ongoing community being built without limitations. This could include facebook groups, local meetups in cities internationally.
- This can all be enquired via the contact page submitting a form and staying in the loop about new advances with Ghana Based.

## Bugs
* I came across various bugs when creating the site:

1. Getting Google maps API to display on the site
- I had issues with the Google Maps API 

## Issues 

* Making the site responsive to the different screen sizes initially with bootstrap which helped with the bulk of it, and different media queries were created to

* There were some errors which arose in the HTML and CSS validators which were mostly rectified.

* The CSS errors were not as they were issues it was perceived but is actually a part of styling the font.


# Deployment

* The site was coded in GitPod and then pushed onto GitHub repository - [REPO]
    * The following GIT commands were used throughout deployment:
        * **git status** - to identify any changes yet to be commited.
        * **git add .** - to stage files ready to commit.
        * **git commit -m " "** - to commit the specific files for logging purposes.
        * **git push** - push all files onto final respository in Github.

## Content

I am responsible for all content and code written.

   
### Sites used for information and support

* [W3C](https://www.w3.org/)
* [Stack overflow](https://stackoverflow.com/)
* [W3schools](https://www.w3schools.com/)
* [Free Formatter](https://www.freeformatter.com/)
* [CSS Validation](https://jigsaw.w3.org/css-validator/)
* [HTML Validation](https://validator.w3.org/)


#### Support
   * Aaron Sinnott (mentor)
   * Code Institute (tutors)