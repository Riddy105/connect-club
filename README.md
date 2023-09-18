# PROJECT TITLE

A landing page for ClubConnect, a place where businesses can grow and improve their outreach.

## Built With

- [ReactJS](https://beta.reactjs.org/) - A JavaScript library for building user interfaces
- [ChakraUI](https://chakra-ui.com/) - Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

## Available Scripts

In the project directory, you can run:

### `yarn` or `npm install`

Installs all necessary packages needed to run the application

### `yarn dev` or `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:8100](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\

## PROJECT DESCRIPTION

ClubConnet landing page has multiple sections which were abstracted as a standalone components for ease of reusability

- Navigation Bar, the navigation bar contains all the CTAs and the company's logo.

- Hero section, consists of the major heading of the landing page and a hero image.

- Partners section, contains a list of companies/businesses that are currently memebers of ClubConnect.

- Banners section, contains a list of features businesses get access to should they decide to join ClubConnect.

- Packages section, outlines different packages a business can suscribe to, their perks and their prices.

- Carousel section, a section where trending events can be showcased.

- Testimonials section, consists of reviews from businesses that have tried out ClubConnect.

- FAQ section, contains frequently asked questions and answers.

- Footer contains, contains links to ClubConnect Socials and other links as well.

## BRIEF APPROACH.

I utilised react-router for routing, since this is a landing page. I had a 'Root' Page where my Nav and Footer components were rendered. This 'Root' component has just a children component 'Home' rendered on the '/' path. The reason for creating this 'Root' component is for future development, another page can be added with ease which will also have the Navigation and Footer.

## CHALLENGES

- I only have two issues which I wouldn’t really call a challenge, if I was working with the designer, it’d have been a trivial issue.

- The font-family used isn’t a common one so I was unable to get it, he’d have sent to me as file if we were working as a team.

- I’d also have asked him to help me group the background image used on the entire body, the grid cells colored grey on the entire page.

## File Structure

In the src folder, there is a components folder and pages folder basically. These folders are configured in such a way that they have an 'index.ts' file each at their root. This file serves as an export point for all files in the respective folders. i.e If you take a look at the index.ts in the components folder, you'll see there are a lots of export going on there. This is done in order to reduce the number of lines of import we will have to do in another file elsewhere whenever we need any file from "components" folder. This will be better understood if you take a look at "./src/pages/Root/Root.tsx".

- The usual way we go about importing a file is to navigate through the file directory i.e

import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

- But you'll notice that all these files are located inside "components" folder and we are utilising lot of lines to import different things from same folder("components"). We can instead have our import like this which makes our code neater and saves us a lot of lines of relative imports i.e

import { Header, Footer, Nav} from '../../components';
