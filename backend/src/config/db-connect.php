<?php

$conf = require_once(__DIR__.'/settings.php');
$dbConf = $conf['db'];

$dsn = sprintf(
    '%s:host=%s;dbname=%s',
    $dbConf['driver'],
    $dbConf['host'],
    $dbConf['dbname']
);

$opt = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

return  new PDO($dsn, $dbConf['user'], $dbConf['password'], $opt);
