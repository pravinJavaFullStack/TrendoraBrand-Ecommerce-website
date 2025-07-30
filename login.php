<?php
$conn = new mysqli("localhost", "root", "", "trendora");

$usernameOrEmail = $_POST['username'];
$password = $_POST['password'];

$result = $conn->query("SELECT * FROM users WHERE email='$usernameOrEmail' OR name='$usernameOrEmail'");
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
    echo "Login";  // ✅ Return simple success text
} else {
    echo "Fail";   // ❌ Return failure text
}
?>
