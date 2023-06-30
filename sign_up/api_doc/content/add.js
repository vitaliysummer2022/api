// Doc for POST method
const showAddContent = () => `
<div>
    <h2>Add user</h2>
    <span>Base url: <i class="link-main">http://localhost/sign_up</i></span>
    <div class="method"><span class="method-post">POST</span><b>/api/users.php</b></div>
    <div class="desc-block desc-block-header">
        <h3>Headers:</h3>
        <p>Content-Type: application/json</p>
    </div>
    <div class="desc-block desc-block-header">
        <h3>Body:</h3>
        <div class="header-param">
            <h4>first_name</h4><span>*</span><i>required</i>
        </div>
        <div class="header-param">
            <h4>last_name</h4><span>*</span><i>required</i>
        </div>
        <div class="header-param">
            <h4>job</h4><span>*</span><i>required</i>
        </div>
        <div class="header-param">
            <h4>phone</h4><span>*</span><i>required</i>
        </div>
        <div class="header-param">
            <h4>email</h4><span>*</span><i>required</i>
        </div>
        <div class="header-param">
            <h4>country</h4><span>*</span><i>required</i>
        </div>
        <div class="header-param">
            <h4>about</h4><span>*</span><i>required</i>
        </div>
<code>{
    "first_name": "Adam",
    "last_name": "Clark",
    "job": "athlete",
    "phone": "328-007-4851",
    "email": "test3@test.com",
    "country": "AU",
    "about": "Et sint voluptas similique iure amet"
}</code> 
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. User has been successfully added</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">201 Created</i>  
<code>{
    "id": 378,
    "first_name": "Adam",
    "last_name": "Clark",
    "job": "athlete",
    "phone": "328-007-4851",
    "email": "test3@test.com",
    "country": "AU",
    "about": "Et sint voluptas similique iure amet"
}</code>  
        <b>2. Required field is missed in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "first_name is missed"
}</code>    
        <b>3. Email is already taken</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "email is already taken"
}</code>
    <b>4. Incorrect phone format</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "phone format should be XXX-XXX-XXXX"
}</code>
        <b>5. Incorrect method</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;