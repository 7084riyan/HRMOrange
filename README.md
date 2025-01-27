# Web Automation for OrangeHRM  
This project focuses on end-to-end automation testing for the **Login** and **Forgot Password** features of the OrangeHRM demo website. The tests were implemented using Cypress to demonstrate automation testing skills.

[![OrangeHRM Demo Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

---

## Table of Contents  
- [Web Automation for OrangeHRM](#web-automation-for-orangehrm)  
  - [Features Tested](#features-tested)  
  - [Tech Stack](#tech-stack)  
  - [Installation and Setup](#installation-and-setup)  
  - [Running the Tests](#running-the-tests)  
    - [Interactive Mode](#interactive-mode)  
    - [Headless Mode](#headless-mode)  
  - [Video Demonstration](#video-demonstration)  

---

## Features Tested  
1. **Login Functionality**  
   - Positive Test Case: Valid credentials result in successful login.  
   - Negative Test Cases: Invalid credentials shows error notification.   

2. **Forgot Password Functionality**  
   - Ensures a success notification appears when credentials is submitted for password recovery.  

---

## Tech Stack  
- **Cypress.io**  
- **JavaScript**  
- **Node.js**  
- **Visual Studio Code**  
- **Google Chrome**  

---

## Installation and Setup  
To set up and run this project locally:  

1. **Clone the repository**  
   ```bash  
   git clone https://github.com/7084riyan/HRMOrange.git 
   cd HRMOrange  
   ```  

2. **Install dependencies**  
   ```bash  
   npm install  
   ```  

---

## Running the Tests  

### Interactive Mode  
Run Cypress Test Runner to view the tests interactively:  
```bash  
npx cypress open  
```  

### Headless Mode  
Run all tests in headless mode:  
```bash  
npx cypress run  
```  

---

## Video Demonstration  
### Login Feature Test Execution  
- **Positive Scenario:** Tests successful login with valid credentials.  
  [![Test Demo](https://img.youtube.com/vi/7xK2FWxZ-xY/maxresdefault.jpg)](https://www.youtube.com/embed/7xK2FWxZ-xY)  

- **Negative Scenario:** Tests login with invalid credentials (e.g., incorrect username or password).  
  [![Test Demo](https://img.youtube.com/vi/sgF04TwrAso/maxresdefault.jpg)](https://www.youtube.com/embed/sgF04TwrAso)  
### Forgot Password Feature Test Execution  
- **Positive Scenario:** Tests if a success notification appears when a valid credentials is submitted for password recovery.
[![Test Demo](https://img.youtube.com/vi/fbBZFIjbHqs/maxresdefault.jpg)](https://www.youtube.com/embed/fbBZFIjbHqs)

- **Negative Scenario:** Tests if a success notification appears when a invalid credentials is submitted for password recovery. 
[![Test Demo](https://img.youtube.com/vi/GCZfyJ25fyI/maxresdefault.jpg)](https://www.youtube.com/embed/GCZfyJ25fyI)  

## Credits  
Created by Riyan(https://github.com/7084riyan)  
