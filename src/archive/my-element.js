// source: https://www.polymer-project.org/3.0/docs/about_30

// Import the PolymerElement base class and html helper
import {PolymerElement, html} from '@polymer/polymer';

// Import an element
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
customElements.define('likeable-element', LikeableElement);