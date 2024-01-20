// Doc for GET method
const showGetContent = () => `
<div>
    <h2>Get result</h2>
    <div class="method">
        <span class="method-get">GET</span><b>/result.php</b>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Result is found</b>
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>               
<code>{
    "name": "John",
    "gender": "m",
    "result": 5
}</code>
        <b>2. No results found</b>
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>               
<code>{
    "message": "no results found"
}</code>
        <b>3. Incorrect method</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;