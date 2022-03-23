<?php

namespace App;

use App\Controller\ProductController;


class App
{

    /* @var \App\Controller\ProductController */
    private $productController;

    public function __construct()
    {
        $services = $this->getServices();
        $this->productController = $services[ProductController::class];
    }

    public function run () {
        $header = 'Content-Type: application/json; charset=utf-8';

        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        if ('/app.php/products' === $uri && !isset($_GET['id'])) {
            $catalog = isset($_GET['catalog']) ? $_GET['catalog'] : null;
            $data = $this->productController->index($catalog);
        } elseif ('/app.php/products' && isset($_GET['id'])) {
            $data = $this->productController->show($_GET['id']);
        } else {
            header('HTTP/1.1 404 Not Found');
            $data = json_encode(['error' => 'not found']);
        }

        header('Access-Control-Allow-Origin: *');
        header($header);
        echo $data;
    }

    private function getServices() {
        return require_once(__DIR__.'/config/services.php');
    }

}
