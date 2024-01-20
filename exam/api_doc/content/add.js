// Doc for POST method
const showAddContent = () => `
<div>
    <h2>Add result</h2>
    <div class="method"><span class="method-post">POST</span><b>/result.php</b></div>
    <div class="desc-block desc-block-header">
        <h3>Headers:</h3>
        <p>Content-Type: multipart/form-data; boundary=123</p>
    </div>
    <div class="desc-block desc-block-header">
        <h3>Body:</h3>
        <div class="header-param">
            <h4>name</h4><span>*</span><i>required (string)</i>
        </div>
        <div class="header-param">
            <h4>gender</h4><span>*</span><i>required (enum: m or f)</i>
        </div>
        <div class="header-param">
            <h4>result</h4><span>*</span><i>required (integer: between 1 and 5)</i>
        </div>
<code>    name: Alice
    gender: f
    result: 5
</code> 
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Result has been successfully added</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">201 Created</i>  
<code>{
    "name": "Alice",
    "gender": "f",
    "result": 5
}</code>  
        <b>2. Required field is missed in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "name is missed"
}</code>    
        <b>3. Incorrect gender format</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "gender must be m or f"
}</code>
    <b>4. Incorrect result format</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "result must be between 1 and 5"
}</code>
        <b>5. Incorrect method</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;