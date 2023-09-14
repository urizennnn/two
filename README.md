# two
This is a simple REST API that performs CRUD operations on a person resource 

**THE FOLLOWING FIELDS ARE REQUIRED** :
NAME
EMAIL MUST BE UNIQUE
AGE MUST BE A NUMBER
USER_ID MUST BE A NUMBER 

**CREATE PERSON**
ENDPOINT : /api
METHOD: POST
REQUEST BODY : FILL THE ABOVE FIELDS
RESPONSE : SHOWS YOU THE PERSON YOU JUST CREATED

**GET ALL PEOPLE**
ENDPOINT : /api
METHOD: GET
RESPONSE : SHOWS YOU ALL THE YOU  CREATED

**GET PESON BY ID**
ENDPOINT : /api/USER_ID
METHOD: GET
REQUEST BODY : PUT THE PERSON USER_ID THAT YOU WANT TO SEE
RESPONSE : SHOWS YOU THE PERSON DETAILS OF THE USER_ID YOU PASSED

**UPDATE PERSON**
ENDPOINT : /api/user_id
METHOD: PATCH
Description: Update an existing person's information.
Request Body: JSON object with updated person details.
Response: JSON object with the updated person's information

**DELETE PERSON**
ENDPOINT : /api/user_id
METHOD: DELETE
Description: Delete a person by their unique ID.
Response: Success message.

Sample Requests and Responses
REQUEST : https://example.com/1
RESPONSE : {"_id":"6502273da312b772a756c7d5","name":"Paul","age":18,"email":"paul@gmail.com","user_id":1,"__v":0}



