# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### Screenshot

![](./desktop.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned
Learned how to use fetch api in javascript? This challenge gave me confidence how to get api response and display inside html


To see how you can add code snippets, see below:

```js
  fetch('https://api.adviceslip.com/advice').then((Response)=>{
        return Response.json()
    }).then((data)=>{
        h1.innerHTML=`Advice #${data.slip.id}`
        p.innerHTML=`${data.slip.advice}`              
    })
```

### Continued development
Currently i am more focusing on advance js concept related stuffs.😊

### Useful resources
- [Example resource 1](https://developer.mozilla.org/en-US/) - Extremely useful resource.

## Author
- Frontend Mentor - [@amandeep2603](https://www.frontendmentor.io/profile/amandeep2603)
