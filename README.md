# arbitrage-bot-error
_Writes arbitrage-bot errors to a centralized document_

## Description

This is a error recording microservice for the DeFi arbitrage bot. This service uses Typescript, Express.js, and Ethers.js. Application receives incoming requests and writes the error messages to an error log.

## Quick Start

### Using Docker
```
sudo docker build . -t arbitrage-bot-error
```

### Using NPM - Production Start
#### Install Dependencies
```
npm install
```

#### Build
```
npm run build
```

#### Start Command
```
npm run start
```
## Development
### Dev Container
Activate Development container using your preferred IDE.
### Using NPM - Development Start
#### Start for Development - _Nodemon_
```
npm run typeWatch
npm run devStart
```