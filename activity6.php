<?php




if(isset($POST['convert'])){
	
	$fr = filter_input(INPUT_POST,'from');



$cr1 = filter_input(INPUT_POST,'currency1');

$money = $fr ;

if($cr1 == 'US Dollar')
$fr = $fr * 8;
elseif($cr1 == 'Canadian Dollar')
$fr = $fr * 6.44;
elseif($cr1 == 'Euro')
$fr = $fr * 9.76;


$cr2 = filter_input(INPUT_POST,'currency2');

if($cr2 == 'US Dollar')
$fr = $fr / 8;
elseif($cr2 == 'Canadian Dollar')
$fr = $fr / 6.44;
elseif($cr2 == 'Euro')
$fr = $fr / 9.76;
	
	
	
	
	
	$to = $fr ;
}


	
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<title>Activity6</title>
	<link rel="stylesheet" type="text/css" href="act6.css">
</head>
<body>
    <form action="Activity6.php" method="GET">
        <div class="container">
                    <p >
                        <label class="sol" for="from">From:</label>
                        <input type="text" name="from" maxlength=30 size="25" id="from"
                            value=""/> 

                        <label for="currency1" required>Currency:</label>
                        <select name="currency1">
                            <option  value="" selected><?php echo $money;    ?></option>
                            <option value="usd">US Dollar</option>
                            <option value="cad">Canadian Dollar</option>
                            <option value="eur">Euro</option>
                        </select>
                    </p>
                    <div class="clear" ></div>
                    <p>
                        <label class="sol" for="to">To:</label>
                        <input type="text" name="to" maxlength=30 size="25" id="to" 
                        value=""/> 

                        <label for="currency2">Currency:</label>
                        <select name="currency2">
                            <option  value="" selected><?php echo $to; ?></option>
                            <option value="usd">US Dollar</option>
                            <option value="cad">Canadian Dollar</option>
                            <option value="eur">Euro</option>
                        </select>
                    </p>
                    <input class="convert" type="submit" value="convert" name="convert"/>
        </div>    

                    
    </form>
</body>
</html>