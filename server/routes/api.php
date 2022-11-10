<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Product\CartController;
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
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post("seller" , [AuthController::class , "Seller"]);
});

Route::group([
    "prefix"=>"product"
], function($router) {
    Route::get("all", [ProductController::class, "getProduct"]);
    Route::get("{id}" , [ProductController::class,  "getDetailProduct"]);
    Route::post("create" , [ProductController::class , "createProduct"]);
    Route::get("seller/{id}" , [ProductController::class,  "GetSellerProduct"]);
    Route::delete("delete/{id}" , [ProductController::class,  "deleteProduct"]);
    Route::put("update/{id}" , [ProductController::class , "updateProduct"]);
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