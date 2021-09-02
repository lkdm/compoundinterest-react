# react-compound-interest-calculator
A compound interest calculator to assist in financial decision making. Created to demonstrate my ability to develop applications in ReactJS, Typescript, and Bootstrap CSS.

![A preview of the bar graph from the application.](https://i.imgur.com/s1ChISV.png)

- [Try it online](https://compoundinterest.lkdm.org)

## Features

- **Disallows illegal inputs**: Only allows numbers in fields. Each field can have a range (ie. years is from 0-30).
- **Updates results immediately**: Uses an asycronous `useEffect` hook to update the result and graph each time the user changes something.
- **Responsive design**: Works and maintains high quality appearance on all browsers, devices, and screen sizes.

## Dependencies

- ReactJS 17.0.2
- Typescript 4.1.5
- Bootstrap CSS 5.1.0
- Recharts 2.1.2

## Inspired by

This calculator is inpsired by the Australian Government's [Compound Interest Calculator](https://moneysmart.gov.au/budgeting/compound-interest-calculator) built for the Money Smart website.
