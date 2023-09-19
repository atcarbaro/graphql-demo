# React Parcel Example

A minimum viable React app with [Parcel Bundler](https://parceljs.org) to fetch GraphQL API data.

**What's inside?**

* `client folder`
* `server folder`

## Getting started with client folder

```
git clone git@github.com:atcarbaro/graphql-demo.git
cd graphql-demo
cd client 
npm i
npm run dev
```

## Getting started with server folder

```
cd server 
npm i
npm run dev
```

Then open `http://localhost:1234` and check project running for React App

Open `localhost:3000/graphql` and check GraphQL project running

## Building for Production on each folder

```
npm run build
```

This will compile your JS and copy your `index.html` to the `dist` folder which
you can deploy wherever as a good ol' webpage.

