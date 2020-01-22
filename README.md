# Setup environment

1. Clone the repo `git clone git@github.com:aimementoring/website.git`
1. Open the folder `cd website`
1. Install dependencies `yarn`
1. Run the project in development mode `yarn dev`
1. If you want to test the project in build mode (similar to production mode) you need to run `yarn build && yarn start`

# How to create a new page

1. Create a new folder inside **pages** folder, with the name of your page (that page is accessible from URL with exact name by default)
1. Create a new **index.js** file inside that folder with your React component.
1. It is really important to add the BasicLayout as a parent component, so you need to add in `render` method something like this:
```jsx
render() {
  return (
    <Layout>
      {/* YOUR COMPONENT HTML */}
    </Layout>
  );
}
```
1. If you want to change the URL, there is a file called `server.js` and you can specify the URL you want to use there, the code is something like this:
```js
server.get('/your-component-url', (req, res) => {
  const pagePath = '/yourComponentFolder';
  const queryParams = {};
  return ssrCache({
    req, res, pagePath, queryParams,
  });
});
```

# Good practices

## Dynamic imports

Use dynamic imports instead of importing directly every time you think it is possible to import the component dynamically. To do that, first you need to use a dynamic utils from next `import dynamic from 'next/dynamic';`. After that, you can import a component dynamically using:

<span style="color:green;">Good way to import components</span>
```jsx
const MyComponent = dynamic(() => import(/* webpackChunkName 'MyComponent' */ '../components/myComponent'));
```

<span style="color:red;">Bad way to import components</span>
```jsx
import MyComponent from '../components/myComponent';
```

This is important because we can reduce the amount of lines and code for the first render, and we load the components asynchronously.

### When we should use dynamic imports

We use dynamic imports for React Components which has render method, and for UI libraries (e.g. Aime Blueprint component).
It is important to use only in those cases, and we should avoid using it when we load data, functional libraries or methods, because it could break prerender, and also we want the data directly when we render the page for the SEO.

## Small pages and components

It is quite important to create small components and small pages, so we can have good performance on the website.

### How to do that?

Instead of adding a long HTML in your render method on your page, you should break it down, and create small components from there that you can import in your page dynamically.

The main idea with that is:
1. We can easily reuse code adding the same components on different pages.
1. We can easily Unit test components and methods.
1. Refactors and design changes are faster and easier.
1. First render is faster because we load content asynchronously so we don't need to have the full page when we are navigating.
1. It is easier to add and update styles with css modules because files are smaller.

# AWS Command line

If you want to test aws s3 command locally, you need first to install aws command, following next instructions:
```shell
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
```

or you can install it with python, based on [aws documentation](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)
```shell
# Install pip3 if you don't have it yet
curl -O https://bootstrap.pypa.io/get-pip.py
python3 get-pip.py --user
# Install aws cli
pip3 install awscli --upgrade --user
```

After installation is finished, verify the installation has completed correctly with the following command:
```shell
pip3 install awscli --upgrade --user
```

Now follow next steps:
1. From root folder of this project, run `cp -R .aws ~/.awd` to save credentials in our computer
1. `aws configure list` to see what credentials you have defined in your computer. Expected output should look like this:
    ```
    Name Value Type Location
    ---- ----- ---- --------
    profile <not set> None None
    access_key ****************CNUG shared-credentials-file
    secret_key ****************v962 shared-credentials-file
    region ap-southeast-2 config-file ~/.aws/config
    ```
1. Execute `sync:aws:next:staging` or any other command on aws to check if it works

# IMPORTANT ON STAGING AND MASTER

1. Don't forget to add **PUBLIC_URL** in environment variables on Heroku for Staging and Production, because are uploading next static folder there to improve the performance, and it is important to load those files from the CDN instead of loading them locally.

