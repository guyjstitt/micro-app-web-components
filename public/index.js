document.addEventListener("DOMContentLoaded", function() {
    const rootEl = document.getElementById('root');
    const myAppButton = document.getElementById('my-app-button');
    const yourAppButton = document.getElementById('your-app-button');

    myAppButton.addEventListener('click', () => {
        const yourApp = document.querySelector('your-app');

        rootEl.removeChild(yourApp);
        
        rootEl.appendChild(document.createElement('my-app'));
    })

    yourAppButton.addEventListener('click', () => {
        const myApp = document.querySelector('my-app');

        rootEl.removeChild(myApp);
        
        rootEl.appendChild(document.createElement('your-app'));
    })


    class MyApp extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
          // Get template content from DOM
          const template = document.getElementById("my-app");
          const templateContent = template.content;
  
          // Create new Shadow Root
          this.appendChild(
              templateContent.cloneNode(true)
          );
        }

        disconnectedCallback() {
            console.log('i disconnected');
        }
    }

    class YourApp extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            // Get template content from DOM
            const template = document.getElementById("your-app");
            const templateContent = template.content;
    
            // Create new Shadow Root
            this.appendChild(
                templateContent.cloneNode(true)
            );
        }

        disconnectedCallback() {
            console.log('i disconnected');
        }
    }
      
    customElements.define('my-app', MyApp);
    customElements.define('your-app', YourApp);
    rootEl.appendChild(document.createElement('my-app'));
});