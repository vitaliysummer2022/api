// Doc for GET method
const showGetContent = () => `
<div>
    <h2>Get country</h2>
    <i class="task-desc">Filter countries</i>
    <div class="method">
        <span class="method-get">GET</span><b>/api/get_country.php</b>
    </div>
    <div class="desc-block">
        <h3>Parameters:</h3>
        <div class="header-param">
            <h4>country</h4><i>query (string)</i>
        </div>
        <div class="header-param">
            <h4>capital</h4><i>query (string)</i>
        </div>
        <div class="header-param">
            <h4>region</h4><i>query (array: all,africa,america,asia,australia,europe)</i>
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. At least one country is found</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>  
<code>[
    {
        "country": "Japan",
        "capital": "Tokyo",
        "region": "Asia"
    }
]</code>
    <b>2. No results found</b>
    <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>               
<code>{
    "message": "no results found"
}</code>    
    <b>3. Region doesn't exist</b>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i> 
<code>{
    "error": "invalid region value"
}</code>
    <b>4. Incorrect method</b>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;