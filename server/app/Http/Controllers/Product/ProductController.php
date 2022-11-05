<?php 

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\admin;
use App\Models\seller;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Product;


class ProductController extends Controller {

     public function getProduct() {
          $paginate = Product::all()->get(10);
          $all = Product::all();

          return response()->json([
               "page"=>1,
               "total_page"=>count($all) / count($paginate),
               "size"=>count($all),
               "data"=>$paginate
          ] , 200);
     }

     public function createProduct() {}

     public function deleteProduct() {}

     public function updateProduct() {}
     
}

?>