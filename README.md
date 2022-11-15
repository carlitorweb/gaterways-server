# Gaterways

REST service for storing and share information about Gaterways

## Tech Stack

**Client:** React, ViteJS, TailwindCSS, Typescript

**Server:** Node, Express, ORM PrimaJS, MongoDB Atlas, Typescript

## Requirements tasks completed

-   [x] Create and Store the information of a Gaterway
-   [x] Create and Store information of a Peripheral Device
-   [x] Add a Peripheral Device to a Gaterway
-   [x] Delete a Gaterway from the database
-   [x] Validate the IPv4 field before store a Gaterway.
-   [x] Show a error message to the user in case of a wrong IPv4.
-   [x] Display information about all Gaterway stored
-   [x] Display the amount of Peripheral Device each Gaterway stored have
-   [x] Display the amount of Peripheral Device each Gaterway stored have
-   [x] Provide a UI for the app

## Requirements tasks not completed due time

-   [ ] Display information about all Peripheral Device stored
-   [ ] Check a Gaterway not have more than 10 Peripheral Device before add a new one to him
-   [ ] Delete one or more Peripheral Device from a Gaterway
-   [ ] Meaningful Unit tests (Jest was the choosen tool)
-   [ ] An automated build

## Installation

```bash
  npm install
```

When all dependency are installed, run the follow commands in this order:

```bash
  npx prisma merge
  npx prisma db push
  npm run start
```

`prisma merge` and `prisma db push` is only one time. If you need start the server again, just run `npm run start`

The server will start, and will listen for:

```bash
  127.0.0.1:8000;
```

## Appendix

The .env file have the DATABASE_URL for MongoDB Atlas. This is used by the application. You can change it if is needed for one of your own. If you choose a localhost, please, have in mind MongoDB need be configure with a replica set deployment in your localhost.

## API Reference

#### Get all gaterways

```http
  GET /gaterways
```

`return` a array of gaterways objects. Each gaterway include their devices connected.

#### Get a specific gaterway

```http
  GET /gaterways/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

`return` a gaterway object

#### Delete a gaterway

```http
  DELETE /gaterways/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

`return` a message of success or failed

#### Store a new gaterway

```http
  POST /gaterways/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

`return` a message of success or failed. If succesuful message include the name of the new gaterway stored.

```http
  GET /devices
```

`return` a array of devices objects.
