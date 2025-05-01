# Spacto.js 
- Version 1.0
- Distro : main

## Project Structure

```txt
./myWebsite
  Lib/
   spactoSDK.js

  src/
   index.js
   confi.js

  index.html

```

 ## Configuration file (confi.js)
This file is used to configure your project like the title and you can use it like this :

```js
const siteconfi = {
    title: "website title",
};
```

## Components

Components are template codes that you can create to use the same html code so many times, you can define the html code template and use in your index html file.

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

and you can use in your html code :

```html
<custom-tag></custom-tag>
```

## Click

Click functions are used to add click events in objects and a function whem they are clicked in a easy way and you can use it using the code :
```js
click("#myElement", ()=>{
    log("Clicked");
});
```
 
## Play song function

This function is used to play a audio in your document in a easy way without a lot of commands or variables, and you can use it with a simple command :
 
```js
playsong("./src/audio.mp3");
```
 
## Get id & Get class

Get id and Get class is used to get elements with simple codes and store in a variable or return the entire element, you can get it by classname or id.<br>
Here a example :
```js
let tile = spacto.getId("myTitle");
let buttons = spacto.getclass("buttonClass");
```

## spacto.css()

Spacto css is used to define a element selected by id css and remove the last css code from the entire element, here a example code :

```js
spacto.css("myElement", "color: red; background: black;");
```
 
## Elviw

Elviw is used to toggle a element display with but without remove it from the parent node, here a simple example of use :
```js
elviw("myElement", 1); // Visible
elviw("myElement", 0); // Invisible
```
