# Spacto.js 
- **Version**: 1.0
- **Distro**: main

## Project Structure

```txt
myWebsite/
├─ Lib/
│   ├─ spactoSDK.js
├─ src/
│   ├─ index.js
│   └─ confi.js
└─ index.html
```
---

 ## Configuration file (confi.js)

A special file used to configure your project settings, such as the website title.

Here's how to set it:

```js
const siteconfi = {
    title: "website title",
};
```
---

## Components

Components are reusable pieces of HTML code that let you define a template once and use it wherever you want, avoiding repetitive copy-pasting. Just define it once, and you're ready to use it in your index HTML file.

##### Example :
```js
spacto.component("custom-tag", {  // Custom tag/component
    data() {  // Variables
        return {
            title: "Cool title",
            message: "Cool message"
        };
    },  // The html code that the custom tag will generate on your code
    template: `
      <div>
        <h2>{{title}}</h2>
        <p>{{message}}</p>
      </div>
    `
});
```

Here's how you use it in your HTML code:

```html
<custom-tag></custom-tag>
```

---

## Click

Click functions are used to assign click events to elements in an easy way, triggering a specific function when it's clicked. You can use it with the following code:

```js
click("#myElement", ()=>{
    log("Clicked");
});
```

---
 
## Play song function

This function provides an easy way to play an audio, avoiding a lot of commands or variables. You can use it with the following code:
 
```js
playsong("./src/audio.mp3");
```
 
---

## Get id & Get class

These functions allow you to easily retrieve elements by an id or a class name and store them in variables.

Here's an example:

```js
let tile = spacto.getId("myTitle");
let buttons = spacto.getclass("buttonClass");
```

---

## spacto.css()

Spacto css allows you to define an element's style by its id, overwriting any previously applied style.

Here's an example code:

```js
spacto.css("myElement", "color: red; background: black;");
```

---
 
## Elviw

Elviw is used to toggle the visibility of an element without altering the page's layout.

Here's a simple example of use:

```js
elviw("myElement", 1); // Visible
elviw("myElement", 0); // Invisible
```
