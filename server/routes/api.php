 <?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Product\CartController;
use App\Http\Controllers\Product\FavoritController;
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
    Route::get("search" , [ProductController::class , "searchProduct"]);
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
    Route::patch("update/{id}" , [CartController::class,  'update']);
    Route::delete('delete/{id}', [CartController::class, 'delete']);
    Route::post('clear/{id_user}', [CartController::class, 'clear']);
});

Route::group([
    "middleware" => "api",
    "prefix" => "favorite",
], function ($router) {
    Route::get('list/{id_user}', [FavoritController::class, 'favorit']);
    Route::post('like', [FavoritController::class, 'like']);
    Route::delete("clear/{id_user}" , [FavoritController::class,  "clear"]);
});