# Progressive_Web_App-Online-Offline-Budget-Tracker-

Add expenses and deposits to your budget with or without a connection. When entering transactions offline, the total is populated when you are back online.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of contents

- [Description](#Description)
- [Heroku Deployed Link](#DeployedApp)
- [Installation](#Installations)
- [Usage](#Usage)
- [Testing](#Testing)
- [Contributing](#Contributing)
- [Questions](#Questions)
- [License](#License)

## Description

```md
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.
```

## DeployedApp

https://safe-woodland-77561.herokuapp.com/

![](./public/icons/images/budget_tracker_offline.gif)

![](./public/icons/images/budget_tracker_back_online.gif)

## Usage

Install this app on your mobile device and use it for tracking your budget whether online or offline.

## Installations

```md
npm install
npm install express --save
npm install mongoose
npm install compression
```

```md
This app is a progressive web application so it uses :
manifest.webmanifest
service-worker.js
```

## Heroku deployment

Create heroku app using these commands

```md
heroku --version
heroku login
heroku create
```

Push to heroku using(push the updated version to Git before doing this)

```md
git add -A
git commit -m 'deploying'
git push heroku main
```

To run the app from CLI

```md
heroku open
```

## Run

Keep the following terminals running to use this app on localost

```md
mongod
node server.js
```

## Testing

Test the app using heroku link and run the app.

## Contributing

Rajni Dua

## Questions

For any further questions, reachout to me at :

- Github: [rajnidua](https://github.com/rajnidua)
- Email: rajni.dua14@gmail.com

## Reference Documents

set up mongo atlas
https://coding-boot-camp.github.io/full-stack/mongodb/how-to-set-up-mongodb-atlas

Deploy with mongodb and atlas
https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas

## Credits(Icon)

```md
<div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
```

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

&copy; 2021 Rajni Dua

_Licensed under [MIT](./license)_
