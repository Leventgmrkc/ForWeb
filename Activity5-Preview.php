<!DOCTYPE html>
<html lang="en">
<body>
<?php

$name = filter_input(INPUT_POST,'Name');
echo "".$name."</br>";
if(empty($name))
echo "Name : Not Provided.</br>"	;

$username = filter_input(INPUT_POST,'Username');

echo "".$username."</br>";
if(empty($username))
echo "username : Not Provided.</br>"	;


$Password = filter_input(INPUT_POST,'Password');
echo "".$Password."</br>";
if(empty($Password))
echo "Password : Not Provided.</br>"	;


$Address = filter_input(INPUT_POST,'Address');
echo "".$Address."</br>";
if(empty($Address))
echo "Address : Not Provided.</br>"	;


$Country = filter_input(INPUT_POST,'Country');
echo "".$Country."</br>";
if(empty($Country))
echo "Country : Not Provided.</br>"	;


$Zipcode = filter_input(INPUT_POST,'Zipcode');
echo "".$Zipcode."</br>";
if(empty($Zipcode))
echo "Zipcode : Not Provided."	;


$Email = filter_input(INPUT_POST,'Email');
echo "".$Email."</br>";
if(empty($Email))
echo "Email : Not Provided.</br>"	;


$Gender = filter_input(INPUT_POST,'Gender');
echo "".$Gender."</br>";
if(empty($Gender))
echo "Gender : Not Provided.</br>"	;


$Language = filter_input(INPUT_POST,'Language');
echo "".$Language."</br>";
if(empty($Language))
echo "Language : Not Provided.</br>"	;


$About = filter_input(INPUT_POST,'About');
echo "".$About."</br>";
if(empty($About))
echo "About : Not Provided.</br>"	;



	
?>


</body>

</html>