# Users API

CRUD API to manage users for hangry backend case study submission, implemented using NodeJS and TypeScript.

## Installation
You only need to install the latest version of [NodeJS](https://nodejs.org/en).

## Usage
After cloning the project: 
1. Run `npm install` on command line  
2. Run `npx tsc` command to compile the app
3. Run `npm start` to run the app

## API Endpoints
1. Get API  
Endpoint: `api/users/`  
HTTP Request: GET

2. Post API
Endpoint: `api/users/`  
HTTP Request: POST  
Request body example:  
```json
{
    "name":"John",
    "email":"john@doe.com",
    "dob":"2022-01-03"
}
```
3. Put API  
Endpoint: `api/users/`  
HTTP Request: PUT  
Request body example:  
```json
{
    "id": "31475bb5-e79d-4c5d-bd28-75f15a84e7a8",
    "name":"John",
    "email":"john@doe.com",
    "dob":"2022-01-03"
}
```  
4. Delete API
Endpoint: `api/users/{id}`   
HTTP Request: DELETE  
Example endpoint: `api/users/31475bb5-e79d-4c5d-bd28-75f15a84e7a8`

