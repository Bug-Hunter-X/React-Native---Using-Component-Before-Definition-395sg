# React Native - Using Component Before Definition

This repository demonstrates a common React Native error where a component is used before it's fully defined, resulting in runtime errors.  The solution showcases how to correctly import and conditionally render components to prevent this issue. 

## Bug
The `bug.js` file shows the problematic code where `MyComponent` is used before it's imported, leading to an error. 

## Solution
The `bugSolution.js` file demonstrates the corrected approach, ensuring `MyComponent` is properly imported and handled with conditional rendering. 

## Setup
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies. 
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.