<?php

namespace App\Controller;

class ProductController
{
    /* @var \App\Model\Product */
    private $model;

    public function __construct($model)
    {
        $this->model = $model;
    }

    public function index($catalog) {
        $data = $this->model->findAll($catalog);
        return json_encode($data);
    }

    public function show($id) {
        $data = $this->model->findOne((int)$id);
        if (!$data) {
            return json_encode(['message' => 'Not found']);
        }
        return json_encode($data);
    }
}
