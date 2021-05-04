<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AlbumController;
use App\Http\Controllers\Api\FaixaController;


 Route::namespace('Album')->group( function(){

    Route::get('/albums', [AlbumController::class, 'index']);
    Route::post('/albums/create', [AlbumController::class, 'create']);
    Route::get('/albums/{id}', [AlbumController::class, 'show']);
    Route::put('/albums/{id}/edit', [AlbumController::class, 'update']);
    Route::delete('/albums/{id}/delete', [AlbumController::class, 'destroy']);
 });

Route::namespace('Faixa')->group( function(){

    Route::get('/faixas', [FaixaController::class, 'index']);
    Route::post('/faixas/create', [FaixaController::class, 'create']);
    Route::get('/faixas/{id}', [FaixaController::class, 'show']);
    Route::put('/faixas/{id}/edit', [FaixaController::class, 'update']);
    Route::delete('/faixas/{id}/delete', [FaixaController::class, 'destroy']);
    Route::get('/faixas/{busca}/search', [FaixaController::class, 'search']);
});
