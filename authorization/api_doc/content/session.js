const showSession = () => `
<div>
    <h2>Session</h2>
    <i class="task-desc">Start a new session</i>
    <div class="method"><span class="method-post">POST</span><b>/api/session.php</b></div>
    <div class="desc-block desc-block-header">
        <h3>Headers:</h3>
        <p>Content-Type: application/json</p>
    </div>
    <div class="desc-block desc-block-header">
        <h3>Body:</h3>
        <div class="header-param">
            <h4>email</h4><span>*</span><i>required</i>
        </div>
        <div class="header-param">
            <h4>password</h4><span>*</span><i>required</i>
        </div>
<code>{
    "email": "test@test.com",
    "password": "1"
}</code> 
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Session has been successfully created</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">201 Created</i>  
<code>{
    "data": {
        "userId": "5dc9da61-ce9b-2ab1-1e5e-c1bc8ba57ac3",
        "firstName": "John",
        "lastName": "Smith"
    },
    "access": {
        "jwt": &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1ZGM5ZGE2MS1jZTliLTJhYjEtMWU1ZS1jMWJjOGJhNTdhYzMiLCJleHBpcmVzIGF0IjoxNjc1NTA2MDI4fQ.nUA4pzCbRjRMQNrYRIFs975yZlNZ4znyOiYelAugc",
        "expiresAt": "2023-02-04T10:20:28Z"
    }
}</code> 
    <b>2. Authentication failed</b>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">401 Unauthorized</i> 
<code>{
    "error": "authentication failed"
}</code>
        <b>3. Required field is missed in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "email is missed"
}</code>    
        <b>4. Required field is empty in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "password can't be empty"
}</code>
        <b>5. Incorrect max length of field in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "max length of email is 20 chars"
}</code>
        <b>6. Incorrect method</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;
