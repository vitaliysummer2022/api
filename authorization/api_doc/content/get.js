const showProfile = () => `
<div>
    <h2>Get profile</h2>
    <i class="task-desc">Get profile data</i>
    <div class="method">
        <span class="method-get">GET</span><b>/api/get_profile.php</b>
    </div>
    <div class="desc-block desc-block-header header-param">
        <h3>Headers:</h3>
        <p>Authorization:<span>*</span>Bearer &#60;token&#62;</p>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Get profile data</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>  
<code>{
    "data": {
        "userId": "5dc9da61-ce9b-2ab1-1e5e-c1bc8ba57ac3",
        "firstName": "John",
        "lastName": "Smith"
    }
}</code>
    <b>2. Authentication failed</b>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">401 Unauthorized</i> 
<code>{
    "error": "authentication failed"
}</code>
    <b>4. Incorrect method</b>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;