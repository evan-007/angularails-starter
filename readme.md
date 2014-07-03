#Angular Rails BoilerPlate

This is some light code for starting an angular app inside of a Rails API project. This is NOT for rails/angular apps that will use any of Rails' views.

##Setup

`clone` into a Rails application and rename the folder to `client`. Remove the `.git` folder from this repo as it's assumed the rails app is under version control.

Add `client/node_modules` and `client/app/bower_components` to the rails `.gitignore`.

Run `npm install` and `bower install` in `client` to install `angular` and the `gulp` dependencies.

##Working with Rails

This setup will build the angular application and its dependencies into the rails `public` directory. Rails will serve an `index.html` as the root from `public` if not `root` is defined in rails routes.

Assuming the rails app is serving an api to angular, some small configuration of the gulpfile is needed.

Configure this block in `gulpfile.js`:

	modRewrite([
		'^/api/(.*)$ http://localhost:3000/api/v1/$1 [P]'
	])

to whereever the rails API is served. In the default, it reroutes all angular-side requests from `/api/REQUEST` to `localhost:3000/api/v1/REQUEST`

To get rails and angular to talk, simply fire up `rails s` and then open a new terminal window, `cd client` and run `gulp connect`. The angular app is now served at `localhost:8000` and can communicate with the API running at `localhost:3000`.

