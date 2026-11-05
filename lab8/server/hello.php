<?php
header('Content-Type: application/json; charset=utf-8');

echo json_encode([
    'status'  => 'ok',
    'message' => 'Hello from PHP server',
    'php'     => PHP_VERSION,
    'time'    => date('c'),
], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
