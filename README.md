# Flight Log

This single page app is for tracking paragliding/hang gliding flight data. Pilots can enter details about their flights, and retrieve a list of previous flights. They may also edit and delete previous flights.
Certain stats are also displayed for the user, such as the number of flights they've had, total number of hours flown, what their longest or farthest flights were, etc.
The app requires authentication. Users are only allowed to view their own flights.

## related links
- Deployed client site (front-end): https://dianamcnulty.github.io/flightlogclient/
- Deployed API: https://pgflightlog.herokuapp.com/


Repositories:
- Client Github repository: https://github.com/dianamcnulty/flightlogclient
- API Github repository:https://github.com/dianamcnulty/flightlogAPI
- heroku repo: https://dashboard.heroku.com/apps/pgflightlog


## client technologies
- Bootstrap
- SASS
- Handlebars
- Javascript
- jQuery


## improvements/issues to be addressed in future iterations
Usability issues:
- refactor 'flightlist_events' file to separate the 'edit' functionality into a separate file.
-Display 'duration' in hrs/min in the flights table. Data for 'duration' of each flight is stored as a decimal (i.e. 2.75 hours). I've updated the stats page user imput fields to handle 'hours' and 'minutes', I'd like to do the same for the table of flights in the duration column.
- page loads slowly and all content flashes before it loads completely.
- Add the ability to toggle between miles and km for distance
- change format of time of day to a more user friendly display.


Potential enhancements (Luxury edition)
- Eventually, I could add the ability for pilots to upload their previous flight data via a CSV file.
- Store GPS tracks as well.
- Add ability for users to manage their wings, and display the wing input field as a dropdown to prevent multiple versions of the same wing.
- Ability to filter the flight list (i.e. current year only, etc.)

## Development process

The workload was divided by user action, then further broken down by back-end work then front-end work.
For each user action (add a flight, retrieve flights, etc) I had the following process:
1. set up the API for the required routes
2. test the necessary API requests with curl scripts.
3. Once the curl scripts return the expected results, I wrote ajax calls on the client.
4. set up the user interface
  - html,
  - jquery event handlers
  - functionality to pass data to the ajax request
  - success functionality
  - failure functionality
5. once a feature is completely tested and functioning properly through the user interface I'd move on to the next action.

This is the order of features I implemented
- Authentication (sign up, log in, log out, password change)
- Create a flight (submitted via form)
- index flights (displayed in a table)
- show a resource (populate a form for editing a flight)
- edit a resource (submitted via form)
- display statistics (using index to retrieve flights, and JS to calculate data.)



## Planning Documentation
Wireframes
-   [Login](planning/login.jpg)
-   [landing view](planning/landing_view.jpg)
-   [add flight](planning/add_flight_view.jpg)
-   [stats view](planning/stats_view.jpg)
-   [profile update](planning/profile_update_view.jpg)


user stories:
-   [user stories](planning/user_stories.jpg)
