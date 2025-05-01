const body = document.body
const vertion = "spacto.js 1.0"

console.log(" pawer by:"+ vertion)

function log(text) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    const modal = document.createElement('div');
    modal.style.backgroundColor = '#f4e8d2';
    modal.style.padding = '30px';
    modal.style.borderRadius = '15px';
    modal.style.border = '5px solid #8b7355';
    modal.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    modal.style.textAlign = 'center';
    modal.style.fontFamily = '"MedievalSharp", cursive';
    modal.style.fontSize = '20px';
    modal.style.color = '#5a4a3a';

    const message = document.createElement('p');
    message.textContent = text;
    modal.appendChild(message);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.style.marginTop = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.border = '2px solid #8b7355';
    closeButton.style.borderRadius = '5px';
    closeButton.style.backgroundColor = '#a67c52';
    closeButton.style.color = '#f4e8d2';
    closeButton.style.fontFamily = '"MedievalSharp", cursive';
    closeButton.style.fontSize = '16px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';

    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    modal.appendChild(closeButton);
    overlay.appendChild(modal);

    document.body.appendChild(overlay);
}


const spacto = {
  components: {},

  component(name, options) {
    this.components[name] = options;
  },

  mount(el) {
    const root = document.querySelector(el);
    this.compile(root);
  },
  
 css(id, styleString, overwrite = true) {
    if (!overwrite) {
        document.getElementById(id).style += styleString;  // Append the styles
    } else {
        document.getElementById(id).style = styleString;  // Replace the styles
    }
}
 
 getId(id){
   return document.getElementById(id)
 },
 getclass(clas){
   return document.getElementsByClassName(clas)
 },



  compile(el) {
   
    const children = el.querySelectorAll('*');
    children.forEach(node => {
      const comp = this.components[node.tagName.toLowerCase()];
      if (comp) {
        const instance = comp.data();
        let template = comp.template;

        for (let key in instance) {
          template = template.replace(new RegExp(`{{\\s*${key}\\s*}}`, 'g'), instance[key]);
        }

        node.outerHTML = template;
      }
    });
  }
};

function click(el, funck) {
  document.getElementById(el).addEventListener('click', funck);
}

function playsong(src) {

const audio = new Audio(src);

audio.play()
      
.then(() => {
     
})
.catch((error) => {
 console.error("Erro ao reproduzir o áudio:", error);

  
});

  
}

function elviw(id,es) {
const el = document.getElementById(id)

if(es ==1){
  el.style.opacity ="1"
}  
else if(es ==0){
  el.style.opacity ="0"
}
  
}


function moveleft(px,id) {
let el = document.getElementById(id)

el.style.left= px +"px"
}

function movetop(px,id){
let el = document.getElementById(id)

el.style.top =px +"px"

}


function core() {
  document.title = siteconfi.title;
}

core()
