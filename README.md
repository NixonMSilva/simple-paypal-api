# Simple PayPal API

This is a simple Node.js application that demonstrates how to call the PayPal API to create an order based on the data from a form and then automatically capture it as soon as the user approves the payment.

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [D

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-nodejs-paypal-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-nodejs-paypal-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Environment Variables

Before running the application you might need to set the environment variables, you can achieve that by copying the file .env.example and renaming it to .env

In the .env file make sure to set the variables for your CLIENT_ID and CLIENT_SECRET related to your application credentials on PayPal Developer Dashboard.

You may also alter the PORT number, which will be used for running the application.

## Running Locally

You can run this application locally using the following commands:

  ```bash
  npm run build && npm run start
  ```
The application will be started on http://localhost in the port specified by the environment variable.

## Running Using docker-compose

Alternatively you can use docker-compose to build a container and execute the application through it. To achieve this run the following command:

```bash
docker-compose up --build
```

In the same fashion as the local run, you can access the application via the following URL in the browser: http://localhost:port

## Deployment on GCP

This application contains a build setting that allows the container to be uploaded onto Google Cloud Platform, to perform that run the following command:
  
  ```bash
  make deploy
  ```
This will create the image in the cloud but in order to implement it onto a service the configuration needs to be done manually via Cloud Run.

## Acknowledgements

This application serves as an educational purpose and should not be used in production environments.
