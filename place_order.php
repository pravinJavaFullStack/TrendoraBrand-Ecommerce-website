<?php
$conn = new mysqli("localhost", "root", "", "trendora");
$user_id = $_POST['user_id'];
$product_name = $_POST['product_name'];
$size = $_POST['size'];
$price = $_POST['price'];
$sql = "INSERT INTO orders (user_id, product_name, size, price) VALUES ('$user_id', '$product_name', '$size', '$price')";
if ($conn->query($sql) === TRUE) {
    echo "Order placed successfully";
} else {
    echo "Error: " . $conn->error;
}
?>
