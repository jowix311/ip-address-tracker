# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

For visual, please see Live Site URL shared below.

### Links

- Solution URL: [https://github.com/jowix311/ip-address-tracker](https://github.com/jowix311/ip-address-tracker)
- Live Site URL: [https://ip-address-tracker-jowix311.netlify.app/](https://ip-address-tracker-jowix311.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind
- React
- CSS Grid and Flexbox
- Mobile-first workflow
- [Redux Toolkit](https://redux-toolkit.js.org/) - handle state and API calls
- [Axios](https://axios-http.com/docs/intro) - to handle API calls
- [LeafletJS](https://leafletjs.com/) - for the map
- [Abstract Geo Location API](https://www.abstractapi.com/api/ip-geolocation-api) - for free geo location API with no credit card needed
- [React Hook Form](https://react-hook-form.com/) - for handling forms
- [Zod](https://zod.dev/) - for form validation

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- Learned to use Zod validation with React Hook Forms
- Learned to use Redux Toolkit for API calls by using createAsyncThunk and extraReducers
- Learned to use Axios with Redux Toolkit
- Learned to use LeaftletJS with React-Leaflet, adding custom markers
- Learned to use Geo Location API to get current IP and pass custom IP address
- Learned to set input data in Rect Hook Form setValue

```js
useEffect(() => {
  setValue("ipAddress", ipAddress);
}, [ipAddress, setValue]);
```

- Learned to use loading form Redux Toolkit

### Continued development

- Get familiar with React Hook Form and Zod combination
- Get familiar with React Toolkit and AsyncThunk
- Learn more about React best practice and optimization

### Useful resources

- [Redux Toolkit With AsyncThunk](https://www.youtube.com/watch?v=I2aM7YcOXDY) - This helped me how to call API using Redux Toolkit
- [React Hook Form with Zod](https://dev.to/majiedo/using-zod-with-react-hook-form-using-typescript-1mgk) - This helped me understand how to use Zod inside React Hook Form

## Author

- Website - [https://jowi-englis.vercel.app/](https://jowi-englis.vercel.app/)
- Frontend Mentor - [https://www.frontendmentor.io/profile/jowix311](https://www.frontendmentor.io/profile/jowix311)
