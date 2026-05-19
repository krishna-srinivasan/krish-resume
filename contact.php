<?php
// 1. Database Connection Settings (Default for XAMPP)
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "portfolio_db";

// 2. Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

// 3. Check Connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 4. Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Grab the data from the HTML form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // 5. Prepare and bind the SQL statement (Secure against SQL Injection)
    $stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    // 6. Execute and check if successful
    if ($stmt->execute()) {
        // Pop-up alert and redirect back to your portfolio
        echo "<script>
                alert('Thank you! Your message has been sent successfully.');
                window.location.href = 'index.html'; 
              </script>";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>