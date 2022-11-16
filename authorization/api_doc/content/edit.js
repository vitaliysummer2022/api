const showEditProfile = () => `
<div>
    <h2>Edit profile</h2>
    <i class="task-desc">Edit profile data</i>
    <div class="method">
        <span class="method-put">PUT</span><b>/api/edit_profile.php</b>
    </div>
    <div class="desc-block desc-block-header header-param">
        <h3>Headers:</h3>
        <p>Authorization:<span>*</span><i>required (string)</i></p>
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
    "firstName": "James",
    "lastName": "Brown"
}</code> 
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Profile has been successfully edited</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>  
<code>{
    "message": "profile has been edited"
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
