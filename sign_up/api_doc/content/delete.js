// Doc for DELETE method
const showDeleteContent = () => `
<div>
    <h2>Delete user</h2>
    <span>Base url: <i class="link-main">http://localhost/sign_up</i></span>
    <div class="method">
        <span class="method-delete">DELETE</span><b>/api/users.php</b>
    </div>
    <div class="desc-block">
        <h3>Parameters:</h3>
        <div class="header-param">
            <h4>user_id</h4><span>*</span><i>query (string)</i>
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. User has been successfully deleted</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>  
<code>{
    "message": "user has been deleted"
}</code>     
        <b>2. user_id is missed</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i> 
<code>{
    "error": "user_id is missed"
}</code>
        <b>3. User doesn't exist</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">404 Not Found</i> 
<code>{
    "error": "user doesn't exist"
}</code>
        <b>4. Incorrect method</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;