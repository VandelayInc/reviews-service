# Reviews Service

This service accesses a database of room listings and renders ratings and reviews, in a style similar to Airbnb.

https://trello-attachments.s3.amazonaws.com/5a8dd2ceda98917cf7844a42/5a8dd2ceda98917cf7844a4a/1275x593/03123ace9d08315cde4a0d1d37cd77f5/Airbnb_reviews.png

## Related Projects

  - https://github.com/The-Untouchables/bookings-widget-service
  - https://github.com/The-Untouchables/description-service
  - https://github.com/The-Untouchables/neighborhood-map-service
  - https://github.com/The-Untouchables/similar-listings-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

```sh
npm start
```

The server will render a static page when accessed at http://localhost:PORT/
(if PORT is not specified by the environment, the default is 3013)

## Requirements

- Node 7.1.0
- Mongo 3.4.4

## Development

```sh
npm run server
```

In a separate terminal window:
```sh
npm run react-dev
```

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
