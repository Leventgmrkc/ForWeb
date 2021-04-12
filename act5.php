<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Activity 5</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="verify.css" />
  
  </head>
  <body>

    <form action="Activity5-Preview.php" method="post">
      Name: <input type="text" name="Name"/><br/><br/> 
      Username: <input type="text" name="Username"/><br/><br/> 
	    Password: <input type="password" name="Password"><br/><br/> 
      Adress: <input type="text" name="Address"/><br/><br/> 
      <label>Country:</label>
      <select name="Country">
        <option value="America">America</option>
        <option value="Turkey">Turkey</option>
        <option value="England">England</option>
        <option value="Germany">Germany</option>
      </select><br/><br/> 
      ZIP Code: <input type="number" name="Zipcode"/><br/><br/> 
      E-mail: <input type="email" name="Email"/><br/> <br/> 
         <div class="gender">
         Sex:
            <div class="gender-input">
              <input type="radio" id="radio1" name="Gender" value="Male" >
              <label>Male</label>
              <input type="radio" name="Gender" value="Female" >
              <label>Female</label>
            </div>
         </div>
         <br/>
        <div class="language">
        Language: 
           <div class="language-input">
              <label> English</label>
              <input type="checkbox" name="Language" class="one-check" value="English" >
              <label> French</label>
              <input type="checkbox" name="Language" class="one-check" value="French">
              <label> German</label>
              <input type="checkbox" name="Language" class="one-check" value="German">
           </div>  
        </div> 
        <br/>
      About: <textarea type ="text" name="About" rows="3" cols="30"></textarea> <br/><br/> 
	    <input type="submit" value="submit"/>
	</form>

 
  </body>
</html>