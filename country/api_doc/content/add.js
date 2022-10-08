// Doc for POST method
const showAddContent = () => `
<div>
    <h2>Add country</h2>
    <i class="task-desc">Add a new country</i>
    <div class="method"><span class="method-post">POST</span><b>/api/add_country.php</b></div>
    <div class="desc-block desc-block-header">
        <h3>Headers:</h3>
        <p>Content-Type: application/json</p>
    </div>
    <div class="desc-block desc-block-header">
        <h3>Body:</h3>
        <div class="header-param">
            <h4>country</h4><span>*</span><i>required</i>
        </div>
        <div class="header-param">
            <h4>capital</h4><span>*</span><i>required</i>
        </div>
        <div class="header-param">
            <h4>region</h4><span>*</span><i>required (one of: africa,america,asia,australia,europe)</i>
<code>{
    "country": "Japan",
    "capital": "Tokyo",
    "region": "Asia"
}</code> 
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Country has been successfully added</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">201 Created</i>  
<code>{
    "message": "country has been added"
}</code>  
        <b>2. Required field is missed in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "country is missed"
}</code>    
        <b>3. Required field is empty in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "country can't be empty"
}</code>
        <b>4. Incorrect max length of field in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "max length of capital is 20 chars"
}</code>
        <b>5. Region value differs from the required list</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "invalid region value"
}</code>
        <b>6. Country with this name has been already added</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "country already exists"
}</code>
        <b>7. Incorrect method</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;