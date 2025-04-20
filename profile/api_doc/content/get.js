// Doc for GET method
const showGetContent = () => `
<div>
    <h2>Get profile</h2>
    <div class="method">
        <span class="method-get">GET</span><b>/result.php</b>
    </div>
    <div class="desc-block">
        <h3>Parameters:</h3>
        <div class="header-param">
            <h4>id<span>*</span></h4><i>query (number)</i>
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Profile is found</b>
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>               
<code>{
    "name": "John",
    "gender": "m",
    "age": 25,
    "admin": true
}</code>
        <b>2. Missing required parameter</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i>               
<code>{
    "error": "Missing required parameter"
}</code>
        <b>3. Access denied</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">403 Access denied</i> 
<code>{
    "error": "Access denied"
}</code>
        <b>4. Incorrect method</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;