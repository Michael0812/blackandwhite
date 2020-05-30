## Testing

This site was tested across multiple browsers (Chrome, Safari, Internet Explorer, FireFox). Also, the following tools were used to constantly test each change that I made to my project and to ensure that it appeared in the desired way on different screen sizes:

- [Google Chrome's Development](https://www.google.com/chrome/dev/)

- [Responsinator](http://www.responsinator.com)

- [Am I Responsive](http://ami.responsivedesign.is/#)

- [Responsive test tool](http://responsivetesttool.com)



### Code Validation
-  This project used [W3C  HTML Validator](https://validator.w3.org/) to validate HTML code.
-  This project used [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) to validate CSS code.
-  This project used [Esprima](https://esprima.org/demo/validate.html) to validate JS code.
-  This project used [PEP8](http://pep8online.com/) to validate Python code.

#### Solved issues

- I have creted my wireframes at the planning stage. However, during build I find out that some sections may not be suitable or work properly, therefore I had to come up with another solutions.

- Home page had responsive issue on mobile devices. On the right side there was a white space around 25px. The reason of that was using **px** instead of **%** for content in footer. Issue was sorted out.


- Another issue I had was related to travis. Travis coudn't see respository. I've fixed this issue by adding:

 `script: SECRET_KEY="whatever" python ./manage.py test`
 
instead of 

`script: SECRET_KEY="whatever" manage.py test`

    
- Also, many other small issues was solving during this project. I was doing many research, talking with people in Slack community, my mentor, tutors.


### Python Testing

#### How to run Python tests

To run the existing Python tests:
1. Activate your virtual environment.
2. In the terminal enter the following command:
```
python manage.py test
```
3. If you wish to run the tests within a specific app only you can specify with: 
```
python manage.py test <app name here>
```
4. The test results will be shown within the terminal.


### Coverage

[Coverage.py](https://coverage.readthedocs.io/en/v4.5.x/) was used to provide feedback during testing to check that enough of my code had been tested.

#### How to run coverage

1. Activate your virtual environment.
2. In the terminal enter the following command:
```
coverage html
```
3. Open the newly created `htmlcov` directory in the root of your project folder. 
4. Open the `index.html` file inside it.
5. Run the file in the browser to see the output.

### Travis

- [Travis](https://travis-ci.org/) was used throughout the unit testing of this project to provide continuous integration with the deployed site. The [Travis Documentation](https://docs.travis-ci.com/) provides all the info needed to set it up.
- I set the heroku deployment settings for this project to only allow deployment when the travis had passed the latest push to the master branch on GitHub.


## User Feedback

#### Robert
The website is extremely easy to use. The company message has been conveyed in an understandable and clear fashion. 
I have just registered my profile without any issues and the website reads well on both my mobile phone and laptop. 
I have also ordered two packages of BLACK & WHITE coffee directly from the website and I used my credit card to complete 
the transaction which was secured and fast.

#### Carolina
First of all I love the colors and a design on the website, it makes me want to have a coffee! The website was very easy to use.
 Going from one screen to another was smooth and fast. I bought few coffees without any issues. I like the fact its straight to the point 
 and the information is interesting. It looks good both on a mobile and a laptop, which makes me happy as I prefer bigger screens. 
 I would recommend this website to any coffee lovers.
