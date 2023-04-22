const showGetContent = () => `
<div>
    <h2>Get winners</h2>
    <span>Base url: <i class="link-main">http://localhost/oscar</i></span>
    <div class="method">
        <span class="method-get">GET</span><b>/api/winners</b>
    </div>
    <div class="desc-block">
        <h3>Parameters:</h3>
        <div class="header-param">
            <h4>category</h4><i>query (array: picture,actress,actor,international film,costume,writing)</i>
        </div>
        <div class="header-param">
            <h4>search</h4><i>query (string)</i>
        </div>
        <div class="header-param">
            <h4>sort</h4><i>query (name, -name, film, -film)</i>
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. At least one winner is found</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>  
<code>[
    {
        "category": "actor",
        "name": "Brendan Fraser",
        "film": "The Whale"
    }
]</code>
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