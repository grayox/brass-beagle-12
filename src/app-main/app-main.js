// <link rel="import" href="/bower_components/polymer/polymer.html">
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

// <link rel="import" href="/bower_components/polymerfire/polymerfire.html">

// <!-- state -->
// <link rel="import" href="/src/app-state/state-user-auth.html">

// <link rel="import" href="/src/app-login/login-view.html">
// <link rel="import" href="/src/app-login/loggedin-view.html">

class AppMain extends PolymerElement {

  static get template() {
    return html`
      <style></style>
      
      <!---->
      <!-- Include firebase-app here to avoid multiple instances -->
      <firebase-app name="app"
                    auth-domain="green-comet-e2c85.firebaseapp.com"
                    database-url="green-comet-e2c85.firebaseio.com"
                    api-key="AIzaSyAOEXILaYcxjmJsJ81_WfubS_h3AQ3lLdA"
                    >
      </firebase-app>
      <!---->
  hello world
      <state-user-auth id="auth"
                        user-logged-in="{{userLoggedIn}}"
                        xon-logout="xlogout"
                        >
      </state-user-auth>
      
      <login-view hidden$="{{userLoggedIn}}"></login-view>
      
      <template restamp is="dom-if" if="[[userLoggedIn]]">
        <loggedin-view hidden$="{{!userLoggedIn}}"></loggedin-view>
      </template>
    `;
  }
    
  constructor() {
    super();
  }
  
  ready() {
    super.ready();
    //window.addEventListener('logout', (e) => this.logout(e));
    //window.addEventListener('user-action-select', (e) => this.onUserActionSelect(e));
  }

  // logout(e) {
  // 	 console.log('logout\n', e);
  //   const auth = this.$.auth;
  //   auth.signOut();
  // }

}

window.customElements.define('app-main', AppMain);
