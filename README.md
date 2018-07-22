#### Deployment instructions
https://www.polymer-project.org/1.0/start/toolbox/deploy
https://youtu.be/ByV3MWTa1fw | https://www.youtube.com/watch?v=ByV3MWTa1fw&list=PLOU2XLYxmsII5c3Mgw6fNYCzaWrsM3sMN&index=1
- polymer.json
- package.json
- gulpfile.js
- `npm install gulp` then `npm run build` or `gulp`
- For error debugging, run `polymer build -v`
- Test build with serve command: `polymer serve build/bundled -p 8081`
https://github.com/PolymerElements/generator-polymer-init-custom-build

#### Licence source
http://softwareengineering.stackexchange.com/a/68150

#### Backup instructions
Github backup instructions are at Dropbox/CodeBase/Automation/Shell/GitBackup.sh
(at bottom of page — currently labeled ITEM 4)

#### Polymer lint command
```
polymer lint --verbose --input src/app-main/app-main.html
polymer lint --help
polymer lint --verbose
```
"lint": { "rules": ["polymer-1", polymer-2", polymer-2-hybrid", ] }

#### Cloning a github repo
https://github.com/Polymer/shop
# Using CLI
```
mkdir shop
cd shop
polymer init shop
```

# Or cloning direct from GitHub
```
git clone https://github.com/Polymer/shop.git
cd shop
bower install
```

#### Code References

[Polymer Shop Demo](https://github.com/Polymer/shop.git)
[Vaadin Velo Theme](https://demo.vaadin.com/valo-theme/#!comboboxes)
[Vaadin CheapTickets Demo](https://demo.vaadin.com/dashboard/#!schedule)
[CSS Grid Demo: Source Code](https://github.com/drewharvey/css-grid-example)
[CSS Grid Demo: Article](https://vaadin.com/blog/-/blogs/responsive-design-made-easy-with-css-grid-and-web-components)
[CSS Grid Demo: Supplemental Reading](https://css-tricks.com/snippets/css/complete-guide-grid/)

[v2.0 Element Definition](https://raw.githubusercontent.com/Polymer/polymer/master/img/migration.png)
[v2.0 Cheat Sheet](https://meowni.ca/posts/polymer-2-cheatsheet/)

## Version History

### v11
1. Completed most look and feel of app
2. Encountered problem implementing `paper-textarea`
3. Updated bower components but could not successfully revert after updates introduced breaking changes
4. Decided to upgrade to Polymer 3 for perceived upgrade in NPMs ability to manage nested dependencies
5. TODO: Re-establish proper look and feel of app; proceed to release

### v10
1. Began solidity smart contracts -- /src/smart-contracts/x.sol
2. Pausing attempt to programmatically populate views and pages from views.json file
3. TODO: Manually write page views

### v09
1. Implemented standardized <app-view> element to complement standard <app-item>.
2. Made all views consistently styled.
3. Created second app meta data file (first was /src/app-data/app-data.json) called /src/app-data-app-views.json.
4. TODO:
   a. Refactor to solve the following problems.
   b. It's "messy" getting a solid 'items' object to populate the <app-view> elements.
   c. Maybe create another element that does the heavy computing. Then access results via databindings.
   d. app-views.json is redundantly processed by every call of <app-view> (one per view, totalling 8).
   e. Refactor by centralizing fetching settings, processing app-views.json and computing <app-view> items.

### v08
1. Solved for standardized content styling by creating custom <app-item> element.
2. Implemented <app-item> throught the app to hold content, display information on both the list and detail views.
3. Implemented split-screen style viewing of list items on left and detail of selected item on right side of view.
4. TODO:
   a. Automate data retieval to fetch then push data from database to display and internal <app-item> elements.
   b. Consider adding internal references to data node location by adding, say, a "name" property to the <app-list> or <app-view> elements. Then passing that "name" value to the <app-items>.

### v07
1. Implemented shell.
2. Implemented <settings>.
3. Implemented data architechture and data flow to Firebase.
4. Implemented Material Design specs and professional app themes (e.g., Velo from Vaadin).
5. Implemented extensive use of <paper-item> and lists to give 'mobile' look-feel.
6. Extend mobile look-feel to tablet and desktop.
7. Implemented and templated use of Cloud Functions for Firebase to automate server tasks.
8. TODO: Refactor UI/UX to:
   a. more closely resemble standard Android apps (e.g., Settings, Gmail, Youtube, etc.).
   b. navigate with maximum use of 'lists within lists' nesting concept seen in standard Android apps.

### v06
1. Clone Shop app. https://github.com/Polymer/shop
2. Begin integration.
3. Create app shell: `app-shell.html`
4. TODO: Complete shell and integration.

### v05a
1. Branch v05 to explore fixing `user-action-module/user-dialog.html` dialog.

### v05
1. TODO: Merge v02a into v04
   a. Preserve routing structure
	 b. Preserve Vaadin Board
   c. Guard against introducing `polymer build` errors

### v04
1. Cloned [Vaadin-Board-Demo](https://demo.vaadin.com/vaadin-board/).
2. Added features.
3. Added [Vaadin Valo Theme](https://demo.vaadin.com/valo-theme/) and [QuickTickets Demo](https://demo.vaadin.com/dashboard/).

### v03
1. PSK2 plus added gage progressbar.js
	 
### v02a
1. Broken by running `polymer build`
			
### v02
1. Extended swap/v01
2. Began experimenting with dashboard components
3. TODO:
   a. Improve UX
	 b. Improve navigation experience
	 c. Leverage other apps
	    1. Home Assistant | https://home-assistant.io/demo/ | https://github.com/home-assistant/home-assistant-polymer
			2. Polymer Admin | https://polymer-admin.firebaseapp.com/ | https://github.com/akveo/polymer-admin
			3. FitBit | https://www.microsoft.com/en-us/store/p/fitbit/9wzdncrfj1xx#
   d. Begin with PSK-2
	 e. Add dashboard components, paper drawer panel, minimizer, as described
	 f. Fix build error by starting with PSK-2 (zero build errors) and building incrementally

### v01
1. Forked emna/v15
2. Created MVP (minimum viable product) for deployment and beta test release
3. TODO:
   a. Replace iron-data-table with Vaadin Grid 2.x -- for
	    1. CRUD and
			2. data refreshing
	 b. Improve UX
	    1. Minimize clicks
			2. More logical navigation layout

## References

#### Demos

|Name|Demo|Source|
|---|---|---|
|Vaadin Board|[Demo](https://demo.vaadin.com/vaadin-board/)|[Source](https://github.com/vaadin/vaadin-board-demo)|
|Moji Brag|[Demo](https://mojibrag.firebaseapp.com/)|[Source](https://github.com/notwaldorf/mojibrag)|
|Blocks Dashboard|[Demo](http://www.prepbootstrap.com/bootstrap-theme/single-page-admin/preview/index.html)|None|
|Home Assistant|[Demo](https://home-assistant.io/demo/)|[Source](https://github.com/home-assistant/home-assistant-polymer)|
|Polymer Admin|[Demo](https://polymer-admin.firebaseapp.com/)|[Source](https://github.com/akveo/polymer-admin)|
|Admin Template|[Demo](http://demo.tb3.co.in/polymer/admin-starter-theme/theme/#dashboard)|[Source](https://github.com/akveo/polymer-admin)|
|Vaadin Dashboard Demo|[Demo](https://demo.vaadin.com/dashboard/)|[Source](https://github.com/vaadin/dashboard-demo)|
|Vaadin Valo Theme|[Demo](https://demo.vaadin.com/valo-theme/)|[Source](https://github.com/vaadin/valo-demo)|
|Vaadin Expense Manager|[Demo](https://demo.vaadin.com/expense-manager/)|[Source](https://github.com/vaadin/expense-manager-demo)|
|Vaadin Fitness Tracker|None|[Source](https://github.com/vaadin/fitness-tracker-demo)|
|Hoverboard|[Demo](https://hoverboard-master.firebaseapp.com)|[Source](https://github.com/gdg-x/hoverboard)|

[List of Polymer Projects](https://github.com/abdonrd/PolymerProjects)

#### How to Run Github Source Code
```
git clone https://github.com/vaadin/vaadin-board-demo
cd vaadin-board-demo
bower install
polymer serve
```

#### How to install latest version of something using Bower
Say, v1.0 is the latest stable release. But you want the features of v3.0. Use:
```
bower install --save vaadin-context-menu#3.0.0-alpha1
```

#### Vaadin License
[30-day free trial license for Vaadin Charts](https://vaadin.com/directory#!addon/vaadin-charts)
and clicking the orange "Free trial key" button.
It gives you a trial key. [See the help section](https://vaadin.com/directory/help/installing-cval-license)
which shows you how to install the key.

#### Themes and Colors
[Reference](http://paletton.com/)

|Base|Complementary|Palette|Source|
|---|---|---|---|
|rgb(0, 105, 204)|||Apple web site: https://support.apple.com/en-us/HT201236|
|#0079FF|#FF9A00|[Palette](http://paletton.com/#uid=23B0u0k++++qKZWAF+V+VAFZWqK)|Apple osX, iOS, Valo?|
|#00B4F0|#FF8300|[Palette](http://paletton.com/#uid=23p0u0k++VZrFZTEh+V+VyeZZpQ)|Vaadin (Theme-A) primary ("--water")|
|#33383A|#5C5751|[Palette](http://paletton.com/#uid=23q0u0k42bB2+n-3-hC5X4Df15m)|Vaadin (Theme-A) secondary ("--charcoal")|
|#414B56|#847661|[Palette](http://paletton.com/#uid=23B0u0k8vgy4AqO6Lln9A9Ah+9C)|Vaadin (Theme-B) secondary [`valo-menu-background-color`](https://github.com/vaadin/dashboard-demo/search?utf8=%E2%9C%93&q=valo-menu-background-color&type=)|
|#1879DB|||Valo Theme Primary ("--water", gradient: low:rgb(22, 110, 213), mid:rgb(24, 121, 219), high:rgb(27, 135, 227) | #166ED5, #1879DB, #1B87E3 ) (measured by Digital Color Meter | macOS > Utilities)|
|#1778DC|||Valo Theme Primary ("--water", rgb(23, 120, 220)) (measured by Digital Color Meter : macOS > Utilities)|
|#187CDD|||Valo Theme Primary ("--water", rgb(24, 124, 221)) (measured by Digital Color Meter : macOS > Utilities)|
|#4B4B4B|||Valo Theme Secondary ("--charcoal", rgb(75, 75, 75)) (measured by Digital Color Meter : macOS > Utilities)|
|#434343|||Valo Theme Secondary-selected ("--charcoal-dark", rgb(67, 67, 67)) (measured by Digital Color Meter : macOS > Utilities)|
|#585858|||Valo Theme Secondary-selected ("--charcoal-light", rgb(88, 88, 88)) (measured by Digital Color Meter : macOS > Utilities)|
|#FAFAFA|||Valo Theme Background ("--smoke", rgb(250, 250, 250)) (measured by Digital Color Meter : macOS > Utilities)|

# \<board-demo\>

Demo app for vaadin-board element

### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

##### Install dependencies

    bower install


### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open


# SHOP

### Setup

##### Prerequisites

Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli


##### Setup
    # Using CLI
    mkdir shop
    cd shop
    polymer init shop

    # Or cloning direct from GitHub
    git clone https://github.com/Polymer/shop.git
    cd shop
    bower install

### Start the development server

    polymer serve

### Run web-component-tester tests

    polymer test

### Build

Build presets provide an easy way to define common build configurations in your `polymer.json` file. There are 2 build presets we put in `polymer.json` file in Shop:

**es5-bundled**

- js: {minify: true, compile: true}
- css: {minify: true}
- html: {minify: true}
- bundle: true
- addServiceWorker: true
- addPushManifest: true
- insertPrefetchLinks: true

**es6-unbundled**

- js: {minify: true, compile: false}
- css: {minify: true}
- html: {minify: true}
- bundle: false
- addServiceWorker: true
- addPushManifest: true
- insertPrefetchLinks: true

Run the command to build the presets:

    polymer build

### Test the build

This command serves the `es5-bundled` build version of the app:

    polymer serve build/es5-bundled

This command serves the `es6-unbundled` build version of the app:

    polymer serve build/es6-unbundled
