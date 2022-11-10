<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Main\CartController;
use App\Http\Controllers\Main\ForgotPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    "middleware" => "auth.guard",
    "prefix" => "auth",
], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('forget', [ForgotPassword::class, 'forgot']);
    Route::post('reset', [ForgotPassword::class, 'reset']);
});

Route::group([
    "middleware" => "api",
    "prefix" => "cart",
], function ($router) {
    Route::get('list/{id_user}', [CartController::class, 'cart']);
    Route::post('add', [CartController::class, 'add']);
    Route::post('delete/{id_produk}/{id_user}', [CartController::class, 'delete']);
    Route::post('clear/{id_user}', [CartController::class, 'clear']);
});
