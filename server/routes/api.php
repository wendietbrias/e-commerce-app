<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Main\ForgotPassword;
use App\Http\Controllers\Main\ReportController;
use App\Http\Controllers\Product\CartController;
use App\Http\Controllers\Main\FeedbackController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Product\CheckoutController;
use App\Http\Controllers\Main\FavoritController;

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
    Route::post("seller" , [AuthController::class , 'Seller']);
    Route::post('updateUser/{id}', [AuthController::class, 'updateUser']);
    Route::post('updateSeller/{id}', [AuthController::class, 'updateSeller']);
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

Route::group([
    "middleware" => "api",
    "prefix" => "checkout",
], function ($router) {
    Route::get('list/{id_user}', [CheckoutController::class, 'list']);
    Route::post('checkout/{id_user}', [CheckoutController::class, 'checkout']);
});

Route::group([
    "middleware" => "api",
    "prefix" => "favorit",
], function ($router) {
    Route::get('list/{id_user}', [FavoritController::class, 'favorit']);
    Route::post('like', [FavoritController::class, 'like']);
});

Route::group([
    "middleware" => "api",
    "prefix" => "product",
], function($router) {
    Route::get("all", [ProductController::class, "getProduct"]);
    Route::get("{id}" , [ProductController::class,  "getDetailProduct"]);
    Route::post("create" , [ProductController::class , "createProduct"]);
    Route::get("seller/{id}" , [ProductController::class,  "GetSellerProduct"]);
    Route::delete("delete/{id}" , [ProductController::class,  "deleteProduct"]);
    Route::post("update/{id}" , [ProductController::class , "updateProduct"]);
});

Route::group([
    "middleware" => "api",
    "prefix" => "feedback",
], function ($router) {
    Route::get('all', [FeedbackController::class, 'index']);
    Route::post('submit/{id_user}', [FeedbackController::class, 'submit']);
    Route::post('clear', [FeedbackController::class, 'clear']);
});

Route::group([
    "middleware" => "api",
    "prefix" => "report",
], function ($router) {
    Route::get('all', [ReportController::class, 'index']);
    Route::post('submit', [ReportController::class, 'submit']);
    Route::post('clear', [ReportController::class, 'clear']);
});