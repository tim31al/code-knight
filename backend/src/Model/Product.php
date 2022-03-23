<?php

namespace App\Model;

use \PDO;

class Product
{
    const TABLE = 'products';
    /* @var PDO $pdo */
    private $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    public function findAll($catalog = null)
    {
        if ($catalog) {
            $sql = 'SELECT id, model_number, small_title FROM ' . self::TABLE .
                ' WHERE type = "item" AND pid IN (SELECT id from ' . self::TABLE .
                ' WHERE small_title = ?) ';
            $smtp = $this->pdo->prepare($sql);
            $smtp->execute([$catalog]);
        } else {
            $sql = 'SELECT id, model_number, small_title FROM ' . self::TABLE . ' WHERE type = "item" ';
            $smtp = $this->pdo->prepare($sql);
            $smtp->execute();
        }

        return $smtp->fetchAll();
    }

    public function findOne($id)
    {
        $sql = 'SELECT * FROM ' . self::TABLE . ' WHERE id = ? LIMIT 1';
        $smtp = $this->pdo->prepare($sql);
        $smtp->execute([$id]);

        return $smtp->fetch();
    }

}
