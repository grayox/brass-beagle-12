// source: https://www.polymer-project.org/3.0/docs/about_30
// online editing: https://stackblitz.com // font: lato, sans-serif
// original anon polymer project: https://8y9neu.run.stackblitz.io
// list of starter projects on stackblitz.com: https://stackblitz.com/@e111077
// lit-element hello world: https://stackblitz.com/edit/lit-element-hello-world

// Import the PolymerElement base class and html helper

// Import an element

// import {PolymerElement, html} from '@polymer/polymer';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-checkbox/paper-checkbox.js';

// Define an element class
class LikeableElement extends PolymerElement {

  // Define the element's template
  static get template() {
    return html`
      <style>
        .response { margin-top: 10px; } 
      </style>
      <paper-checkbox checked="{{liked}}">I like web components.</paper-checkbox>

      <div hidden$="[[!liked]]" class="response">Web components like you, too.</div>
    `;
  }

  // Define publc API properties
  static get properties() { return { liked: Boolean }}

}

// Register the element with the browser
// customElements.define('likeable-element', LikeableElement);
window.customElements.define('likeable-element', LikeableElement);