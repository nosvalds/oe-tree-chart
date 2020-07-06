# Offset Earth - Developer Challenge

## Deployed Location (github pages)
https://nosvalds.github.io/oe-tree-chart/

## Set Up
1. Clone the git repository to your local machine by running the following commands in your terminal.
```bash
git clone git@github.com:nosvalds/oe-tree-chart.git {project-directory}
```
2. In your terminal cd into the project directory and run the below npm command to install neccessary dependency packages
```bash
cd {project-directory}
npm install
```
3. In your terminal run the local development server provided by create-react-app to view on your local machine
```bash
npm start
```

4. You should see a message like this when the development server is up and running.
```bash
Compiled successfully!

You can now view come-on-you-team in the browser.

  Local:            http://localhost:3000/come-on-you-team
  On Your Network:  http://192.168.0.96:3000/come-on-you-team
```
5. Navigate to the "Local" URL from above in your favourite browser

## Tips
- Firefox worked well for me without CORS issues
- If you're still having CORS issues you can use my Heroku cors-anywhere instance to get around them
  - Just edit the baseURL ins axios.js to ```baseURL: "https://niks-cors-anywhere.herokuapp.com/https://api.offset.earth/trees"```

## API Updates/Feedback
- Ideally the API would return the data in a # of trees/day format that I transform the data into in src/data/api.js. Doing this work in the front-end is probably an uncessary hit on performance that would impact user experience/load times.

```json
{
    "YYYY-MM-DD": numTrees,
    "YYYY-MM-DD": numTrees,
    ...
}
```

- The back end might also consider paginating the data, so that we only get a months-worth of days back at a time. You could then add buttons on the front end to toggle to between months.

```json
{
    "next": "https://api.offset.earth/trees?month=02",
    "results": 
        {
            "YYYY-01-DD": numTrees,
            "YYYY-01-DD": numTrees,
            ...
        }
}
```

## If I had more time
- [ ] Make it pretty
- [ ] Refactor the format data function to store data in state as { Date: value} format rather than using a date string "YYYY-MM-DD"
- [ ] A more user friendly filtering mechanism
- [ ] Hover bubble shouldn't show the time of day
- [ ] Make the vertical axis indicate the year as well

# Create React App documentation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
