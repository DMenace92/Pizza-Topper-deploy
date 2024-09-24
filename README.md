# Getting Started

First make sure you have MongoDB installed locally. If not follow the instructions (here)[https://www.mongodb.com/docs/manual/installation/]

To install on a mac run:

```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
```

After install run:

```bash
brew services start mongodb-community@7.0
npm run devlop
```

for frontend cd to pizza-topper:

```bash
cd pizza-topper
npm i
npm start
```

.env file in the client side
REACT_APP_API_CALL="HTTP://LOCALHOST:9000"

.env file in the api:

MONGO_URI="mongodb://127.0.0.1:27017/pizzaAPI"
