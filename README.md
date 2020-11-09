# The Flux architectural pattern using `useReducer`, the `Context` API, and Sagas

Just in case, here is a nice diagram about the generic Flux pattern in React.

<img src="public/images/flux-pattern.png" alt="Flux architectural pattern">

## So, why does this repo even exist?

It demonstrates the combination of :

- `Context` API and `useContext` hook
- `useReducer` hook
- [`useReactSaga` custom hook](https://www.npmjs.com/package/use-react-saga)

---

[Demo Link](https://confident-turing-f05f43.netlify.app/) | [GitHub Repo](https://github.com/boostup/react-context-api-multiple-reducers-mulitple-sagas)

---

## But why, you ask ?

Because I can ;)

No, but seriously, because I needed to make sense of Redux, of the Context API, and more generally, the Flux Pattern, and of async actions.

Also, to me, it is important to understand as many React functions or third-party packages as I include in my apps, and `useContext` and `useReducer` being shipped defacto with React is a plus, versus having to include a whole bunch of packages that revolve around the Redux ecosystem.

So this demo allows to demonstrate that the `redux` and `react-redux` packages are no longer required dependencies to implement the Flux Pattern in React, in a way that makes both sense and is scalable with combined reducers to handle endless future slices of state.

## Word of caution

What this demo does not demonstrate though, is if this combination mimicking redux will be as performant as redux.
And this, I do not know myself, as this is very experimental. I wouldn't recommend using this in production ;).

## Notes

This demo depends on a tiny package called `use-react-saga`.

All it is, is a custom hook for React which depends on the `redux-saga` package, which is something I wanted to experiment with as the next natural evolution step after `redux-thunk`, for async actions.

## Addendum

After the perusal of the installed packages in the `node_modules` directory, I have come to realize that there is a `redux` directory in there!! After perusing the `yarn.lock` file, `redux-saga` packages has it as a dependency.

So this demo does NOT unfortunately demonstrate that adding Redux as a dependency can be avoided. Fortunately, it is only [2kB, including dependencies](https://www.npmjs.com/package/redux)!

So this demo only goes to shows how **unavoidable** `redux` is when it comes to making stable apps ;)

In the particular case of this demo, if I wish to remove it as a dependency, I must implement Sagas myself. Is it worth it ? I'll leave it up to you to decide.

Finally, I should mention that I do not hold a grudge against Redux, I just wanted to evaluate the Context API as a potential replacement, since we see so many articles on this topic, but they all show very small unscalable demos or POCs which were never convincing to me.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
