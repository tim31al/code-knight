<?php

use App\Model\Product;
use App\Controller\ProductController;

$pdo = require_once(__DIR__.'/db-connect.php');
$modelProduct = new Product($pdo);
$productController = new ProductController($modelProduct);

return [
    PDO::class => $pdo,
    Product::class => $modelProduct,
    ProductController::class => $productController,
];
