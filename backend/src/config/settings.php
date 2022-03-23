<?php

//return [
//    'db' => [
//        'driver' => 'mysql',
//        'host' => 'localhost',
//        'dbname' => 'programmer20_maindb',
//        'user' => 'programmer20_user1',
//        'password' => 'Qwsxza123'
//    ]
//];

return [
    'db' => [
        'driver' => 'mysql',
        'host' => getenv('DB_HOST'),
        'dbname' => getenv('DB_NAME'),
        'user' => getenv('DB_USER'),
        'password' => getenv('DB_PASSWORD'),
    ],
];
