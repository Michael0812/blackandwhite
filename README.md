[![Build Status](https://travis-ci.org/Michael0812/blackandwhite.svg?branch=master)](https://travis-ci.org/Michael0812/blackandwhite)


<img src="https://i.ibb.co/Fxs06m9/main-image.png" alt="banner" width="100%" height="" border="0">

Oh, coffee — it’s part of your daily morning routine, your life force, and at times, your only motivation. 
There’s no denying your true, unconditional love for coffee when your barista knows your usual order, but not your name.
 Whether you enjoy a latte, a cappuccino, or simply black coffee, these funny coffee quotes and sayings will have you 
 nodding your head and tempting you to reach for another cup. You’ll be perked up and inspired in no time. 
 [Black & White](https://black-a-white.herokuapp.com/)
 
## Navigation

1. [UX](#ux)
    - [Goals](#goals)
        - [Visitor Goals](#visitor-goals)
        - [User Goals](#user-goals)
        - [Business Goals](#business-goals)
    - [User Stories](#user-stories)
    - [Design Choices](#design-choices)
    - [Wireframes](#wireframes)
2. [Features](#features)
    - [Existing Features](#existing-features)
        - [Home Page](#home-page)
        - [About](#about)
        - [Shops](#shops)
        - [Register](#register)
        - [Login](#login)
        - [Products](#products)
        - [Cart](#cart)
        - [Checkout](#checkout)
     - [Features for Future Releases](#features-for-future-releases)
     
3. [Information Architecture](#information-architecture)
    - [Database choice](#database-choice)
    - [Data Models](#data-models)
        - [Products Model](#products-model)
        - [Order Model](#order-model)
        - [Payments Model](#payments-model)
        
4. [Technologies Used](#technologies-used)
    - [Tools](#tools)
    - [Databases](#databases)
    - [Libraries and Frameworks](#libraries-and-frameworks)
    - [Languages](#languages)
    
5. [Testing](#testing)
    - See separate [TESTING.md](TESTING.md) file.
    
6. [Deployment](#deployment)
    - [How to run this project locally](#how-to-run-this-project-locally)
    - [Heroku Deployment](#heroku-deployment)
    - [Google Map](#how-to-get-an-Google-Maps-API-key)
  
7. [Credits](#credits)
    - [Content](#content)
    - [Images](#images)
    - [Acknowledgements](#acknowledgements)


## UX
### Goals
### Visitor Goals
The central target audience for **Black & White** are:

-   People who love coffee
-   People who value good coffee
-   People who loves taste of real brewed coffee
-   People who support small business
-   People who care about environment and the Earth

### User Goals

-   Find a best real coffee
-   Read about coffee
-   See journey coffee needs to take to taste them
-   Be able to navigate the shop easily, find what I need and make a safe and secure purchase.
-   Buy from a trustworthy online shop.



### Business Goals
 
The Goals of **Black & White** business are:

  
-   Provide a professional online shop that helps the user to feel safe that they are buying from a trustworthy source.
-   Build brand awareness by including all the branding photographs, colours, fonts and logo associated with The House of Mouse brand.
-   Connect to fans of the shop through **Black & White** social media channels.
-   Build **Black & White** newsletter subscriptions.
-   Make sales of products easy for buyers to increase sales conversion.
-   Partner with influencers.
-   Improve lead conversion rate
-   Improve sales conversion rate
-   Improve Customer satisfaction
-   Create a friendly place for our employees
-   Expand the business


### User Stories
As a user of **Black & White** website I expect/want/need:

- To be able to access website from any devices
- For the content to look good and be useable on all of devices
- To be able login and register
- To see information about the website
- To easily navigate on the website
- For all information and images to be laid out in a clear and easy to understand way,
- To be able to make a purchase for product
- Visit social media
- To make sure company care for environment
- To make sure products are high quality
- Be able to read policy and delivery information
- To have easy flow through the website
- To easily find what I am looking for
- To be able to contact the owners of the software
- To get information and addresses of all the shops


## Design Choices

**White & Black Coffee** branding has an overall **elegant** but simple design. The home page design is very **stylish** and **modern**, this should help the site to appeal to the right type of customers to grow the business. The following design choices were made with this in mind: 

### Fonts

<div  align="center">
<img src="https://i.ibb.co/fpZCn1z/font-design.png" alt="font-design" aria-label="Fonts used on Black & White website"  />
</div>

### Header Font
[Poly](https://fonts.google.com/specimen/Poly) was chosen as for the main headings for its **elegance** look. That typeface is a key moment in the history of typography, and European type designers have been reacting to this work ever since. It is probably the most revived typeface in the world and many are **excellent**. In the world of free/libre culture, however, only a few Poly-inspired types exist, and none share the scope of this project.

### Body Font
[Open Sans](https://fonts.google.com/specimen/Open+Sans) is one of the most popular body fonts for websites. People love Open Sans for its **simplicity** and **readability**. Open Sans is designed with an upright stress, open forms and a neutral, yet **friendly** appearance. It was optimized for print, web, and **mobile interfaces**, and has **excellent** legibility characteristics in its letterforms.
From a design perspective there are only two fonts used throughout the whole website to make sure website does not look unstructured and unprofessional. Keeping in mind that too many type sizes and styles at once can also wreck any layout. The kerning and leading was also adjusted to make sure readability for all users is easy. These two fonts complement each other and work really well together. 

### Colours
<div align="center">
<img src="https://i.ibb.co/b1MDQcH/colors.png"  alt="Colours used on Black & White website"  aria-label="Colours used on Black & White website"  />
</div>

The brand colours in this design were chosen really carefully as the name of the website is **Black & White** coffee, this would make the user obviously think about **Black & White**. These colours are used through out the design but as secondary colours. The aims was to kind of surprise the user with the colours of coffee.

For the primary colours we used **browns** and **creams** – this is what you get from mixing **black** and **white** together – coffee + milk. These colours compliment the theme of the website, make people think and crave coffee. 

### Icons
<div align="center">
<img src="https://i.ibb.co/KKs79HB/icons.png"  alt="Icons used on Black & White website"  aria-label="Icons used on Black & White website"  />
</div>

There are few icons and text breakers used throughout the website.

As this is an ecommerce website where people will buy their favourite coffees, user will expect to see search and cart icons in the navigation banner. 

There are also social media icons in the footer to navigate the customers to have a look at **Black & White** coffees **Facebook**, **Instagram** etc.

To make the website design more outspoken and **elegant** there are few hand drawn illustrated icons used. These are coffee **trees**, **beans** and **leaves**, mainly used to support the content about services we provide and CTAs.

Text breakers (text ornaments) are used to break up the content, usually used to underline the heading text. Makes the content look more elegant and easier to use. 

<div align="center">
<img src="https://i.ibb.co/BLw2X8V/break.png"  alt="breaker used on Black & White website"  aria-label="breaker used on Black & White website"  />
</div>


## Wireframes

Wireframes were created using [Balsamiq](https://balsamiq.com/).

- [Home](https://i.ibb.co/SmxF0qL/Home.png)
- [Return Policy](https://i.ibb.co/L9y406j/return-policy.png)
- [Delivery Information](https://i.ibb.co/fp45S54/delivery.png)
- [Contact](https://i.ibb.co/44tnGNf/contact.png)
- [Products](https://i.ibb.co/9wxnFh2/coffee.png)
- [Shops](https://i.ibb.co/mvwgxrc/shops.png)
- [Sign Up](https://i.ibb.co/PW4y0BC/Sign-up.png)
- [Login](https://i.ibb.co/NLK2FNt/Login.png)
- [About](https://i.ibb.co/w6MTPMw/about.png)
- [Cart](https://i.ibb.co/WPYMDSr/cart.png)
- [Checkout](https://i.ibb.co/8c7gRVH/cart.png)




# **Features**
## **Existing Features**
### **Elements appearing on every page**

  
#### Navbar:

<img src="https://i.ibb.co/LNr9jtK/navbar.png" alt="navbar" border="0" width="100%">

  Navigation bar is located at the top of every page. For better UX on smaller devices navbar is changed to toogle navbar.


Links located in navbar are connect to following pages of the website :

**Products** - Takes users to products page. The user can see the products offered by the store, read about them and see the price. In this page user is allowed to add any of the products to the cart.

**Shops** - There is google map located on this page. User can see three shops located in Dorset, by clicking at one of three marker, user can quickly find out what is the address what the opening hours are. 

**About** - The primary purpose of an about us page is to inform the reader about the company and its operations. Also, there is a gallery with photos to show off the coffee shops. 

**Login/Register** - This is an option for the customers to register and log in, this will then allow them to start shopping. 

**Logout** - By clicking on this link user can log out from their account. 

**Profile** - This is a page where users is allowed to update thier profiles (available only after register).

**Search button** - Located at the top right corner for users to quickly search through the website. 

**Shopping** - The shopping cart icon is located next to search icon at the top right corner. Once a user has added at least one item to their cart a yellow square will appear with the total number of items in their cart displayed within it. 


#### Footer

<a href="https://ibb.co/f9BDsgQ"><img src="https://i.ibb.co/KDRKJPm/footer.png" alt="footer" width="100%" border="0"></a>




- Includes a logo and some information about the company
- Shows 3 address to our local stores based in Dorset
- User can see copyright info
- Navigation links are also located in the footer to make website more user friendly :

 **Products** -- Takes users to products page. The user can see the products offered by the store, read about them and see the price. In this page user is allowed to add any of the products to the cart.

**Login/Logout** -- This is an option for the customers to register and log in, this will then allow them to start shopping. 

**Terms** -- This page gives the user information about terms & condition

**Delivery** -- This page contains the necessary information about delivery

- The footer also includes a link to social media:
  - [Facebook](https://www.facebook.com/)
  - [Twitter](https://twitter.com/)
  - [Instagram](https://www.instagram.com/)

The footer is displayed on each page. Users need to be allowed to quickly navigate to addresses, delivery, contact details and social media.


**Banner Image** -- In web design, a hero image is a large web banner image, prominently placed on a web page, generally in the front and center. The hero image is often the first visual element a visitor encounters on the site; it presents an overview of the site's most important content. A hero image often consists of image and text, and can be static or dynamic. For a better user experience and friendly website, each page contains different banner image.

- Breadcrumbs are located on all pages, apart the home page. It is a secondary navigation system that shows a user's location in a site or web app.

### Home Page

**Logo** -- The logo is of one of the most important things on every website . This is a suitable business card for brands, it is worth ensuring that it is transparent and legible to the user. 

Therefore, the logo idea was obvious for this page. The logo that I have used is simple but effective, straight away gives you an idea that the content on this website will have something to do with coffee. Logo is a transparent SVG and it is easily accessible. 

We have used the logo in the middle of banner image as well as at the bottom of the page in the footer section. We are certain that these two location are the best to make sure user will remember the brand. Logo is visible on home page and on all devices in the footer.
 
 **Introduction** -- This section contains an introduction about who the company is, what we do and what can be find on the website.
 
**Promises** -- The promises section tells the user what drives the company, the priorities and what to expect from the brand. 
By clicking on **View More**, user will go to the **About** page.

**Products** -- In this section user can read brief info about each product and easily go to the next page where can find all our products.

**Video** -- This is a video section where the user can find out and learn all about the natural coffee processing.

Natural processed coffees have a long history—possibly the longest history in the coffee-drinking world. Picking the ripe coffee cherry and allowing it to dry completely before removing it from the seed was probably the original way coffees were processed in East Africa, though now the process has been updated, modernized, and adapted to many different growing regions. 

In this video we see how staff at the Worka washing station in Yirgacheffe, Ethiopia tend to the steps of a Natural process, as one example of its present-day execution.

**Mission & Vission** -- This section contains information about missions and visions that the company follows. This is a very important section on the website. This should be pleasing to the eye and inspire customer confidence in the company.

**Contact** -- In that section user can easily go to the contact page clicking by **Contact Us**. On this page, user can easily find the contact form to send a message to the admin. If anything was unclear or if they have got any other question or request, they can easily fill up the form, giving their details and send it.

### About
- The main purpose of About page is to give visitors a glimpse into the identity of the business. 
- User can read a short story about the company. Also, promises are visible to keep the user confident in what the company is doing.
- Scrolling down a bit, user can see a photo gallery.

### Shops

There is google map located on this page. User can see three shops located in Dorset, by clicking at one of three marker, user can quickly find out what is the address and what the opening hours are. 

<img src="https://i.ibb.co/px92mRZ/googlemap.png" alt="googlemap" width="100%" border="0">

### Register

<a href="https://ibb.co/9H1hqb1"><img src="https://i.ibb.co/PGPM5cP/register.png" alt="register" width="100%" border="0"></a>

-   A user who is not logged in can create a new account using the register. The page on this form includes a username (which must be unique), email address, password and password conformation fields.
-   Information about what characters are accepted by these fields is displayed with the form.
-   If a user who is already logged in tries to access this page, they are redirected to the home page.

### Login

<a href="https://ibb.co/Mkn3q4P"><img src="https://i.ibb.co/9HnCRLy/login.png" alt="login" width="100%" border="0"></a>
-   The login page features a standard login form asking for username and password.
-   Validation for this form is handled in the back end and relevant feedback is sent to the user when they sign in.


### Products

### Cart
<img src="https://i.ibb.co/5RsQTxX/cart.png" alt="cart" width="100%" border="0">
- The shopping cart page features a summary of all the items the user has added to their cart.
- Each list item includes a picture of the item, the item title and the price.
- A quantity field is displayed with each cart item, giving the user the ability to adjust the quantity in their cart. Any time a quantity is adjusted the subtotal displayed is updated to reflect the change.
- Information is provided for the user to tell them that tax is already included in the price they saw

### Checkout
<img src="https://i.ibb.co/DGXT401/checkout.png" alt="checkout" width="100%" border="0">

- Each checkout page features an order summary, which lists all the items in the users cart, title, price and quantity. A link is provided at the top of this for the user to return to the cart page to make changes to the order.

- User is asked to provide the shipping name and address to send their order to. They are also asked to type the country, full address and phone number

- User is asked to provide bank card details, for example:

| Card number | 4242424242424242 |
|--|--|
| Security Code | 111 |
|Month | pick futher month
|Year| 2020

- On clicking the **Submit Payment** button and on successful completion of payment.

## Features for Future Releases
- Sending an email to customer when their new order has been placed.
- Auto login on registering a new account.
- Coupons and discount codes.
- Password Reset.
- Additional payment methods.
- Live Chat.


# Information Architecture

### Database Choice

- As a framework Django works with SQL databases. During development on my local machine I worked with the standard **sqlite3** database installed with Django.
- On deployment, the SQL database provided by Heroku is a **PostgreSQL** database. 

#### Products Model
| Name | Key in db | Validation | Field Type |
--- | --- | --- | ---
Name | name | max_length=254 | CharField
Description | description |  | TextField
Price | price | max_digits=6, decimal_places=2 | DecimalField
Image 1 | product_image1 |  | ImageField


#### Order model

| Name | Key in db | Validation | Field Type | Attribute |
--- | --- | --- | ---
Full Name | full_name | max_length=150 | CharField | required |
Phone Number | phone_number | max_length=20, blank=False | CharField| required |
Country | country | max_length=40, blank=False | CharField| required |
Postcode | postcode | max_length=20 | CharField| required |
Town / City | town_or_city | max_length=150 | CharField| required |
Address line 1 | address_line_1 | max_length=150 | CharField| required |

#### Payments Model
| Name | Key in db | Validation | Field Type |
--- | --- | --- | ---
Card number | credit_card_number | required=False | CharField
CVV | cvv | required=False | CharField
Expiry Month | expiry_month | required=False | choices=MONTH_CHOICES
Expiry Year | expiry_year | required=False | choices=Year_CHOICES


# Technologies Used

### Languages
- HTML
- CSS
- JavaScript
- [Python](https://www.python.org/)

### Libraries and Frameworks
- [JQuery](https://jquery.com)
- [Bootstrap](https://www.bootstrapcdn.com/)
- [FontAwesome](https://www.bootstrapcdn.com/fontawesome/)
- [Google Fonts](https://fonts.google.com/)
- [Django](https://www.djangoproject.com/)
- [Gunicorn](https://pypi.org/project/gunicorn/)
- [Psycopg2](https://pypi.org/project/psycopg2/)
- [Pillow](https://pillow.readthedocs.io/en/stable/)
- [Whitenoise](http://whitenoise.evans.io/en/stable/)
- [Stripe](https://stripe.com)

### Tools
- [Gitpod](https://gitpod.io/)
- [Travis](https://travis-ci.org/)
- [AWS S3 Bucket](https://aws.amazon.com/)
- [Django Heroku](https://pypi.org/project/django-heroku/) 
- [Imgbb](https://imgbb.com)
- [PIP](https://pip.pypa.io/en/stable/installing/) 
- [Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03)
- [GitHub](https://github.com/)
- [Balsamiq](https://balsamiq.com/)
- [AdobeXD](https://www.adobe.com/)

### Databases
- [PostgreSQL](https://www.postgresql.org/)
- [SQlite3](https://www.sqlite.org/index.html)



# Testing 

Testing information can be found in separate [TESTING.md](TESTING.md) file



# Deployment

## How to run this project locally

To run this project on your own IDE follow the instructions below:

Ensure you have the following tools: 
    - An IDE such as [Gitpod](https://gitpod.io/)

The following **must be installed** on your machine:
    - [PIP](https://pip.pypa.io/en/stable/installing/)
    - [Python 3](https://www.python.org/downloads/)
    - [Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03)

To allow you to access all functionality on the site locally, ensure you have created free accounts with the following services:
    - [Stripe](https://dashboard.stripe.com/register)
    - [AWS](https://aws.amazon.com/) and [set up an S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html)
    - [emailjs](https://www.emailjs.com/)

Please click the links above for documentation on how to set these up and retrieve the necessary environment variables.

### Instructions
1. Save a copy of the github repository located [here](https://github.com/Michael0812/blackandwhite) by clicking the "download zip" button at the top of the page and extracting the zip file to your chosen folder. If you have Git installed on your system, you can clone the repository with the following command.
    ```
    git clone https://github.com/Michael0812/blackandwhite
    ```

2. Open your preferred IDE, open a terminal session in the unzip folder or cd to the correct location.

3. A virtual environment is recommended for the Python interpreter, I recommend using Pythons built in virtual environment. Enter the command:
    ```
    python -m .venv venv
    ```  
_NOTE: The `python` part of this command and the ones in other steps below assumes  you are working with a windows operating system. Your Python command may differ, such as `python3` or `py`_

4. Activate the .venv with the command:
    ```
    .venv\Scripts\activate 
    ```
_Again this **command may differ depending on your operating system**, please check the [Python Documentation on virtual environments](https://docs.python.org/3/library/venv.html) for further instructions._

5. If needed, Upgrade pip locally with
    ```
    pip install --upgrade pip.
    ```

6. Install all required modules with the command 
    ```
    pip -r requirements.txt.
    ```

7. Set up the following environment variables within your IDE. 

    - If using GitPod, locate the `settings.json` file within the .vscode directory and add your environment variables as below. Do not forget to restart your machine to activate your environment variables or your code will not be able to see them: 

    ```json
    "terminal.integrated.env.windows": {
_NOTE: This can be change depend of what system you are using_

        "HOSTNAME": "<enter hostname here>",
        "SECRET_KEY": "<enter key here>",
        "STRIPE_PUBLISHABLE": "<enter key here>",
        "STRIPE_SECRET": "<enter key here>",
        "AWS_ACCESS_KEY_ID": "<enter key here>",
        "AWS_SECRET_ACCESS_KEY": "<enter key here>",
        "AWS_STORAGE_BUCKET_NAME": "<enter bucket name here>",
    }
    ```

    - If using an IDE that includes a `bashrc` file, open this file and enter all the environment variables listed above using the following format: 
    ```
    HOSTNAME="<enter key here>"
    ```
    - `HOSTNAME` should be the local address for the site when running within your own IDE.
    - `DEV` environment variable is set only within the development environment, it does not exist in the deployed version, making it possible to have different settings for the two environments. For example setting DEBUG to True only when working in development and not on the deployed site.

8. If you have restarted your machine to activate your environment variables, do not forget to reactivate your virtual environment with the command used at step 4.

9. Migrate the admin panel models to create your database template with the terminal command
    ```
    python manage.py migrate
    ```

10. Create your superuser to access the django admin panel and database with the following command, and then follow the steps to add your admin username and password:
    ```
    python manage.py createsuperuser
    ```

11. You can now run the program locally with the following command: 
    ```
    python manage.py runserver
    ```

12. Once the program is running, go to the local link provided and add `/admin` to the end of the ur. Here log in with your superuser account and create instances of ShippingDestination and Product within the new database.

13. Once instances of these items exist in your database your local site will run as expected.


## Heroku Deployment

To deploy The **Black & White** webshop to heroku, take the following steps:

1. Create a `requirements.txt` file using the terminal command `pip freeze > requirements.txt`.

2. Create a `Procfile` with the terminal command `echo web: python app.py > Procfile`.

3. `git add` and `git commit` the new requirements and Procfile and then `git push` the project to GitHub.

3. Create a new app on the [Heroku website](https://dashboard.heroku.com/apps) by clicking the "New" button in your dashboard. Give it a name and set the region to whichever is applicable for your location.

4. From the heroku dashboard of your newly created application, click on "Deploy" > "Deployment method" and select GitHub.

5. Confirm the linking of the heroku app to the correct GitHub repository.

6. In the heroku dashboard for the application, click on "Settings" > "Reveal Config Vars".

7. Set the following config vars:

| Key | Value |
--- | ---
AWS_ACCESS_KEY_ID | `<your secret key>`
AWS_SECRET_ACCESS_KEY | `<your secret key>`
AWS_STORAGE_BUCKET_NAME | `<your AWS S3 bucket name>`
DATABASE_URL | `<your postgres database url>`
HOSTNAME | `<your heroku app hostname>`
Debug | True
SECRET_KEY | `<your secret key>`
STRIPE_PUBLISHABLE | `<your secret key>`
STRIPE_SECRET | `<your secret key>`

8. From the command line of your local IDE:
    - Enter the heroku postres shell 
    - Migrate the database models 
    - Create your superuser account in your new database
    
     Instructions on how to do these steps can be found in the [heroku devcenter documentation](https://devcenter.heroku.com/articles/heroku-postgresql).

9. In your heroku dashboard, click "Deploy". Scroll down to "Manual Deploy", select the master branch then click "Deploy Branch".

10. Once the build is complete, click the "View app" button provided.

11. From the link provided add `/admin` to the end of the url, log in with your superuser account and create instances of ShippingDestination and Product within the new database.

12. Once instances of these items exist in your database your heroku site will run as expected.


### How to get an Google Maps API key
Follow these steps to get an API key:
   1. Go to the [Google Cloud Platform Console.](https://console.cloud.google.com/google/maps-apis/)
   2. Create or select a project.
   3. Click **Continue** to enable the API and any related services.
   4. On the **Credentials** page, get an **API key** (and set the API key restrictions). Note: If you have an existing         unrestricted API key, or a key with browser restrictions, you may use that key.
   5. To prevent quota theft and secure your API key, see [Using API Keys.](https://cloud.google.com/docs/authentication/api-keys)
   6. Copy the entire code of this tutorial from this page, to your text editor.
   7. Replace the value of the key parameter in the URL with your own API key (that's the API key that you've just obtained).
      ```
         <script async defer
         src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
         </script>
         ```
Please, follow this [link](https://developers.google.com/maps/documentation/javascript/adding-a-google-map) if you need any further information.


# Credits

## Content
- Terms and conditions template provided by [Shopify](https://en.shopify.nl/tools/policy-generator/terms-and-conditions)
- Example privacy policy provided by [Cleverbox](https://www.cleverbox.co.uk/example-privacy-policy/)
- All other text was copied and used from [Rave Coffee](https://ravecoffee.co.uk/), [Coffee Bean Shop](https://www.coffeebeanshop.co.uk/), [Taylors of Harrogate](https://www.taylorsofharrogate.co.uk/)

## Code
I would like to massive thanks [Code institute](https://codeinstitute.net/). I've been following all videos contains in this course and I've been using some code during this project.

### Images
- Logo was made by [Polka. Grahpic Design](https://www.facebook.com/polka.graphicdesign)
- All product photography was taken from [Taylors of Harrogate](https://www.taylorsofharrogate.co.uk/) and changed it by [Polka. Grahpic Design](https://www.facebook.com/polka.graphicdesign)
- Images in about section was copied from [Unsplash](https://unsplash.com/s/photos/coffee)

 ##### Also, I was working with different websites that gave me some helps, advices and ideas for this project:
- [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Learn)
- [w3schools](https://www.w3schools.com)
- [Google developers](https://developers.google.com/)
- [awwwards](https://www.awwwards.com)


## Acknowledgements
- I would like to thank my [Partner](https://www.linkedin.com/in/lidia-kabala-3b2036137/) immensely who was supporting and helping me throughout the whole journey. 
- Massive thanks to my mentor [Simen Daehlin](https://www.github.com/Eventyret), he gave me so many very useful tips and advices, and he is was always open, helpful and kind to me.
- Also, I would like to thank students and tutors from Code Institute that were helping me with every issue I had, they were always trying to give me their best advice and help me sort things out.


 ### The content of this Website is for educational purposes only.


[Back to the top](#navigation)


