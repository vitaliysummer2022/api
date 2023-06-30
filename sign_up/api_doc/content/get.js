// Doc for GET method
const showGetContent = () => `
<div>
    <h2>Get users</h2>
    <span>Base url: <i class="link-main">http://localhost/sign_up</i></span>
    <div class="method">
        <span class="method-get">GET</span><b>/api/users.php</b>
    </div>
    <div class="desc-block">
        <h3>Parameters:</h3>
        <div class="header-param">
            <h4>user_id</h4><i>query (string)</i>
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. user_id isn\'t added</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>  
<code>[
    {
        "id": 1,
        "first_name": "John",
        "last_name": "Smith",
        "job": "writer",
        "phone": "700-008-5275",
        "email": "test@test.com",
        "country": "GB",
        "about": "Molestias consequuntur nisi non quod"
    },
    {
        "id": 2,
        "first_name": "Jane",
        "last_name": "Smith",
        "job": "singer",
        "phone": "230-894-2912",
        "email": "test2@test.com",
        "country": "US",
        "about": "Lorem ipsum nisi non sgasd"
    }
]</code>
    <b>2. user_id is added</b>
    <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>               
<code>{
    "id": 1,
    "first_name": "John",
    "last_name": "Smith",
    "job": "writer",
    "phone": "700-008-5275",
    "email": "test@test.com",
    "country": "GB",
    "about": "Molestias consequuntur nisi non quod"
}</code>   
<b>3. user_id is not found</b>
    <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>               
<code>{
    "message": "no user found"
}</code>
    <b>4. Incorrect method</b>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">405 Method Not Allowed</i> 
<code>{
    "error": "incorrect method"
}</code>
    </div>
</div>`;