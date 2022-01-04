<?php
    if(!empty($_POST)){
        # *********************************************************
        #       CREATE A CONNECTION AND CHECK THAT IT WORKS
        # *********************************************************
        $connection=mysqli_connect("localhost","root","","snazzle");
        if(mysqli_connect_errno()){
            die ("Database connection failed: ".mysqli_connect_error()."(".mysqli_connect_errno().")");
        }

        # *********************************************************
        #  GET READY TO INSERT THE DATA INTO THE TABLE 'contactsubmissions'
        # *********************************************************
        $tablename ="contactsubmissions";
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $reasonForContact = $_POST['reasonForContact'];
        $subject1 = $_POST['subject1'];

        $sql1="INSERT INTO $tablename (firstName,lastName,reasonForContact,subject1) VALUES (
            '{$connection-> real_escape_string($firstName)}',
            '{$connection-> real_escape_string($lastName)}',
            '{$connection-> real_escape_string($reasonForContact)}',
            '{$connection-> real_escape_string($subject1)}')";

# *********************************************************
#   INSERT THE DATA AND IF IT DOESNT WORK PRINT THE ERROR
# *********************************************************
    $insert1=$connection->query($sql1);
    if($insert1 == TRUE){
        echo "<h1>Your form has been submitted. Thank you!</h1>";
    } else
        die("Error: {$connection->errno} : {$connection->error}");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/snazzles.css">

    <style>
        /* Style inputs with type="text", select elements and textareas */
        input[type=text], select, textarea {
            width: 100%; /* Full width */
            padding: 12px; /* Some padding */
            border: 1px solid #ccc; /* Gray border */
            border-radius: 4px; /* Rounded borders */
            box-sizing: border-box; /* Make sure that padding and width stays in place */
            margin-top: 6px; /* Add a top margin */
            margin-bottom: 16px; /* Bottom margin */
            resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
        }

        /* Style the submit button with a specific background color etc */
        input[type=submit] {
            background-color: #000000;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        /* When moving the mouse over the submit button, add a darker green color */
        input[type=submit]:hover {
            background-color: #808080;
        }

        /* Add a background color and some padding around the form */
        .container {
            border-radius: 5px;
            background-color: #f2f2f2;
            padding: 20px;
        }
    </style>
    <link rel="stylesheet" href="snazzles.css">
</head>
<body>
<nav id="mainNavBar">
    <a href="homePage.html">Home</a>
    <a href="Packages.html">Packages</a>
    <a href="http://localhost:63342/Web_FinalProject/html/homePage.html#bottom">Shop</a>
    <a href="http://localhost/Web_FinalProject/html/Contact.php">Contact</a>
    <a href="About.html">About</a>
    <a href="cart.html">
        <button id="cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3"
                 viewBox="0 0 16 16">
                <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
        </button>
    </a>
</nav>
<br><br><br>
<h1 style="text-align: center">Contact Us</h1>
<hr><br>

<div class="container">
    <form id="contactform" method="POST" action="">

        <label for="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="Your name..">

        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder="Your last name..">

        <label for="reasonForContact">Please Select the Reason for Contact</label>
        <select id="reasonForContact" name="reasonForContact">
            <option value="Business">I am a local business owner interested in partnering with Snazzles.</option>
            <option value="Personal">I am a customer with a comment/concern.</option>
            <option value="Other">Other reasons.</option>
        </select>

        <label for="subject1">Subject</label>
        <textarea id="subject1" name="subject1" placeholder="Please enter your text here.." style="height:200px"></textarea>

        <input type="submit" class="" value="Submit" onclick="contactSubmit();">
    </form>
</div>
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2021 Snazzles</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="http://localhost/Web_FinalProject/html/About.html">About</a></li>
          <li class="list-inline-item"><a href="http://localhost/Web_FinalProject/html/Contact.php">Contact</a></li>
        </ul>
      </footer>
</body>
</html>

<script>
    function contactSubmit(){
    var form = document.getElementById("contactform");
    form.submit();
    }
</script>
