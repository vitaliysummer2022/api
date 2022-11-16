const showLogout = () => `
<div>
    <h2>Logout</h2>
    <i class="task-desc">Delete a session</i>
    <div class="method">
        <span class="method-delete">DELETE</span><b>/api/logout.php</b>
    </div>
    <div class="desc-block desc-block-header header-param">
        <h3>Headers:</h3>
        <p>Authorization:<span>*</span><i>required (string)</i></p>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Logout</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">204 No Content</i>  
    <b>2. Authentication failed</b>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">401 Unauthorized</i> 
<code>{
    "error": "authentication failed"
}</code>
    <b>3. Incorrect method</b>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;