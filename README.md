# Password Generator

This is a randomized password generator capable of creating a password of 8-128 characters that may or may not include lower case letters, upper case letters, numbers, and special characters, depending on the user's choices. It first generates and randomly places one of each type of chosen character before generating random characters of chosen types to ensure that at least one of each character type will be represented in the final password.

![Password generation preview](./assets/images/generation-demo.gif)

### Error Cases

This password generator was also designed to account for error cases such as invalid inputs for length and all character types being excluded.

![Error case demonstration](./assets/images/error-demo.gif)

### Flexibility

The Javascript code for this generator was written such that it can be easily modified for different requirements. The upper and lower limits of allowed character count are stored as intuitively named constants that can be modified in one location to change all behavior and messaging.

![Character limits constants](./assets/images/limits.png)

Similarly, the array of special characters allowed can be changed to allow for or exclude certain special characters, a requirement that is often inconsistent across different websites and softwares.

![Array of special characters](./assets/images/special-array.png)

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* IDE to view/edit source code (e.g. Visual Studio Code).

### Installing

1. Clone repository.
1. Make any desired changes to `lowerLimit`, `upperLimit`, and `specialCharacters` in IDE.
1. Open [index.html](index.html) in web browser.

### Deployment

1. Upload index.html and assets folder to webhosting site, such as GitHub.
1. If using GitHub, deploy via GitHub Pages.

---

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [GitHub](https://github.com/)

## Deployed Page

* [See Live Site](https://starryblue7.github.io/password-generator/)

## Author

Vince Lee
- [Portfolio](https://starryblue7.github.io/portfolio/)
- [Github](https://github.com/StarryBlue7)
- [LinkedIn](https://www.linkedin.com/in/vince-lee/)


## Acknowledgments

* List of possible special characters to be used sourced from Oracle document ["Special Characters Supported for Passwords"](https://docs.oracle.com/cd/E11223_01/doc.910/e11197/app_special_char.htm#MCMAD416).
