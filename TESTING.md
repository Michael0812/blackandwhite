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


