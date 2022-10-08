// Doc for PUT method
const showEditContent = () => `
<div>
    <h2>Edit country</h2>
    <i class="task-desc">Edit country and capital</i>
    <div class="method">
        <span class="method-put">PUT</span><b>/api/edit_country.php</b>
    </div>
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
            <h4>newCountry/newCapital</h4><span>*</span><i>required</i>
<code>{
    "country": "Holland",
    "newCountry": "Netherlands",
    "newCapital": "Amsterdam"
}</code> 
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Country has been successfully added</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>  
<code>{
    "message": "country has been edited"
}</code>  
        <b>2. Country value is missed in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "country value is missed"
}</code>    
        <b>3. New country or new capital are missed in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "new country or capital should be added"
}</code>
        <b>4. Required field is empty in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "newCountry can't be empty"
}</code>
        <b>5. Incorrect max length of field in body</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "max length of newCapital is 20 chars"
}</code>
        <b>6. Old country name doesn't exist</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "invalid current country value"
}</code>
        <b>7. New country name already exists</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">422 Unprocessable Entity</i> 
<code>{
    "error": "country already exists"
}</code>
        <b>8. Incorrect method</b>
        <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;