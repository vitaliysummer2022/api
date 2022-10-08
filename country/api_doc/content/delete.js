// Doc for DELETE method
const showDeleteContent = () => `
<div>
    <h2>Delete country</h2>
    <i class="task-desc">Remove a country</i>
    <div class="method">
        <span class="method-delete">DELETE</span><b>/api/delete_country.php</b>
    </div>
    <div class="desc-block">
        <h3>Parameters:</h3>
        <div class="header-param">
            <h4>country</h4><span>*</span><i>query (string)</i>
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Country has been successfully removed</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>  
<code>{
    "message": "country has been deleted"
}</code>     
        <b>2. Country value is missed</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i> 
<code>{
    "error": "country is missed"
}</code>
        <b>3. Country doesn't exist</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">404 Not Found</i> 
<code>{
    "error": "country isn't found"
}</code>
        <b>4. Incorrect method</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;