# Restaurants 🧆

In this assignment you will be expected to write an API for connecting to a restaurant database

> Difficulty level: Advanced beginner 🧙 🍵

## Keywords

`request parameters`, `query parameters`, `schemas`, `sample_restaurants`, `mongoose validation`, `routes`, `endpoints`, `patch`, `array of subdocuments`, `nested paths`, `lean`, `limit`, `findByIdAndUpdate`, `findByIdAndDelete`

## What you will be doing

For this assignment you will have to:

1. Load a sample dataset
2. Create a schema for the dataset collection `restaurants`
3. Create an API which is divided between 2 routes - `search` and `update`

This project assumes you've already had experience with:

- Express.js
- dotenv
- Setting up routes / endpoints
- Mongoose / MongoDB
- Schema subdocuments

## Tasks

Before starting these tasks, run the command `npm install` or `npm i`

This will automatically install the following packages:
- express
- mongoose
- dotenv

## Task 1 - Loading the sample data

Before we can begin, we will load a sample dataset to work with.

MongoDB provides multiple sample datasets, with sample data for us.

1. Log into your MongoDB account
2. Follow the [instructions](https://docs.atlas.mongodb.com/sample-data/) on how to load the sample dataset

> Note: It may take up to 15 minutes for the dataset to completely load

After this, you should have some new databases / collections:

> sample_airbnb
> sample_analytics
> sample_geospatial
> sample_mflix
> sample_restaurants
> sample_supplies
> sample_training
> sample_weatherdata

We will be using the `sample_restaurants` database.

## Task 2 - Setting up the .env file

1. Using the `.env.example` file as a template, create a `.env` file
2. Add your database connection details to your `.env` file
3. The key `DB_NAME` points to the name of the database you want to connect to. Use the name `sample_restaurants`. This will ensure that Mongoose will try and use the existing sample dataset you previously set up
4. For the other keys, fill in the details as provided to you by your MongoDB service.
5. The key `DB_HOST` is the domain of the MongoDB service you will connect to

## Task 3 - Connecting your server to your database

1. Using the `mongoose.connect()` method, setup the connection to your server inside `server.js`
2. `mongoose.connect()` returns a promise
   - use the `then()` method to display a message saying the connection was successful
   - use the `catch()` method to display a message saying the connection failed
3. Check that your database can connect

> Here is an example of you how might setup your connection string,
> once you have destructured the properties from `process.env`

> `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

## Task 4 - Preparing our server to receive requests

In the next tasks, we will create a REST API so that clients can connect and perform actions on our server. To do this, we must first begin with a few steps:

1. Install the npm package `cors`
2. Import and add `cors` to your middleware stack. This will prevent the dreaded same origin policy error in your browser.

> Remember to run your middleware before any of your routes!

3. Run `express.json()` as middleware. This will allow any JSON sent for example, with a POST request, to be correctly read by the server.

## Task 5 - Restaurants Schema & Model

Unfortunately the sample datasets do not come with Models or Schemas, so we must build our own to interact with these databases / collections

1. Using the MongoDB viewing tool (or another similar tool), examine the data in the `restaurants` collection. What MongoDB data types are being used?
2. Create a folder `models`
3. In this folder, create a `restaurantSchema` schema for the collection `restaurants`
4. Create a model `Restaurant` for your schema `restaurantSchema`

> Hint: You may use `String`, `Date`, `Number`, `Boolean` as your data types

> Hint: For some data you may need to use subdocuments, or an array of subdocuments

## Task 6 - Creating a search route

1. Create a `search` router which will handle all requests to the path `/search`

## Task 7 - Endpoint to search for restaurants by id

We will create an endpoint to load specific restaurant data, based on the restaurant `id`

1. Create an endpoint with the path `/id` in your `search` router. This will be a `GET` endpoint. The endpoint should expect a parameter, the restaurant `id`.

> Hint: You can access parameters from the **request** object with the `params` property

1. Import and use your `Restaurant` model to find the restaurant by `id`, then:
   - Use the `lean()` method to remove all inherited Model methods 
   - If found, return a status of `200` and the resulting restaurant
   - If not found, return a status of `404` and an appropriate message
   
> Hint: You can use the method `findById()`

## Task 8 - Endpoint to search for restaurants by name

We will create an endpoint to search for restaurant data, by name

1. Create an endpoint `/name` in your `search` router. This will be a `GET` endpoint
    - The endpoint should expect a **parameter**, the restaurant `name` to search by
    - The endpoint should expect a **query parameter**, the number of results to limit to search to

> Hint: You can access parameters from the **request** object with the `params` property

2. Use your `Restaurant` model to find the restaurant by searching in the `name` field. It should:
    - Limit the results using the `limit()` method. If no value is supplied, default to `10`
    - Use the `lean()` method to remove all inherited Model methods
    - If found, return a status of `200` and the resulting restaurants
    - If not found, return a status of `404` and an appropriate message

> Hint: Here you must use the `find()` method

## Task 9 - Creating an update route

1. Create an `update` router which will handle all requests to the path `/update`

## Task 10 - Endpoint to search and update the restaurant name restaurant by id

We will create an endpoint to update the **name** of the restaurant, based on the restaurant `id`

1. Create an endpoint `/name` in your `update` router. This will be a `PATCH` endpoint.
   - The endpoint should expect a parameter, the restaurant `id`

> Hint: You can access parameters from the **request** object with the `params` property

   - The endpoint should also expect a JSON object with details to update the restaurant document
   - Only update the following field:
     - **name**

> Hint: You can access the request body from the **request** object with the `body` property

2. Use your `Restaurant` model to find the restaurant by `id`, then:
   - If found, return a status of `200` and the resulting restaurant
   - If not found, return a status of `404` and an appropriate message

> Hint: You can use the method `findByIdAndUpdate()`

## Task 11 - Endpoint to search and update the restaurant cuisine by id

We will create an endpoint to update the **cuisine** of the restaurant, based on the restaurant `id`

1. Create an endpoint `/cuisine` in your `update` router. This will be a `PATCH` endpoint.
   - The endpoint should expect a parameter, the restaurant `id`

> Hint: You can access parameters from the **request** object with the `params` property

- The endpoint should also expect a JSON object with details to update the restaurant document
- Only update the following field:
   - **cuisine**

> Hint: You can access the request body from the **request** object with the `body` property

2. Use your `Restaurant` model to find the restaurant by `id`, then:
   - If found, return a status of `200` and the resulting updated comment text
   - If not found, return a status of `404` and an appropriate message

> Hint: You can use the method `findByIdAndUpdate()`

## Task 12 - Endpoint to search and update the restaurant location by id

We will create an endpoint to update the **address** and **borough** of the restaurant, based on the restaurant `id`

1. Create an endpoint `/location` in your `update` router. This will be a `PATCH` endpoint.
   - The endpoint should expect a parameter, the restaurant `id`

> Hint: You can access parameters from the **request** object with the `params` property

- The endpoint should also expect a JSON object with details to update the restaurant document
- Only update the following fields:
   - **address**
   - **borough**

> Hint: You can access the request body from the **request** object with the `body` property

2. Use your `Restaurant` model to find the restaurant by `id`, then:
   - If found, return a status of `200` and the resulting updated comment text
   - If not found, return a status of `404` and an appropriate message

> Hint: You can use the method `findByIdAndUpdate()`

## Task 13 - Endpoint to search and update the restaurant grades by id

We will create an endpoint to update the **grades** of the restaurant, based on the restaurant `id`

1. Create an endpoint `/grades` in your `update` router. This will be a `PATCH` endpoint.
   - The endpoint should expect a parameter, the restaurant `id`

> Hint: You can access parameters from the **request** object with the `params` property

- The endpoint should also expect a JSON object with details to update the restaurant document
- Only update the following fields:
   - **grade**

> Hint: You can access the request body from the **request** object with the `body` property

2. Use your `Restaurant` model to find the restaurant by `id`, then:
   - If found, return a status of `200` and the resulting updated comment text
   - If not found, return a status of `404` and an appropriate message

> Hint: You can use the method `findByIdAndUpdate()`

## Task 14 - Endpoint to search and delete restaurants by id

We will create an endpoint to search for and delete a restaurant based on the restaurant `id`

1. Create an endpoint `/delete` in your `restaurants` router. This will be a `DELETE` endpoint. The endpoint should expect a parameter, the restaurant `id`.

2. Use your `Restaurant` model to find the restaurant by `id`, then:
   - If found, return a status of `200` and an appropriate message
   - If not found, return a status of `404` and an appropriate message
   
> Hint: You can use the method `findByIdAndDelete()`
