<?php

namespace App\Http\Controllers\Product;

use App\Models\seller;
use App\Models\product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function getProduct(Request $request)
    {
         $all = product::limit($request->page)->get();
         $paginate = product::all();

          return response()->json([
               "page"=>1,
               "total_page"=>count($paginate),
               "size"=>count($paginate),
               "data"=>$paginate
          ] , 200);
     }

     public function getDetailProduct($id)
     {
          $product = product::where("id" , $id)->get();

        //   if(header(404)) {
        //   return response()->json(["message"=>"product dengan $id tidak ditemukan"], 400);
        //  }

          if(count($product) === 0) {
               return response()->json(["message"=>"product tidak ditemukan"],400);
          }

          return response()->json($product , 200);
     }

     public function createProduct(Request $request) {

          $token = $request->header("Authorization");

          if($token === null) {
               return response()->json(["message"=>"Unauthorized"], 401);
          }

          $validator = Validator::make($request->all() , [
               "id_seller"=>"required",
               "nama_produk"=>"required", 
               "harga"=>["required" , "min:1"],
               "gambar"=>["required"],
               "deskripsi"=>"required",
               "category"=>"required",
          ]);

          if($validator->fails()) {
               return response()->json(["errors"=>$validator->errors()->first()] , 400);
          }
          
          $checkDuplicate = product::where(["id_seller" => $request->id_seller , "nama_produk"=>$request->nama_produk])->get();
     
          if(count($checkDuplicate) === 1) {
               return response()->json(["errors"=>"produk sudah ada!!"]);
          }


          $created = product::create([
               "id_seller"=>$request->id_seller,
               "nama_produk"=>$request->nama_produk,
               "harga"=>$request->harga,
               "deskripsi"=>$request->deskripsi,
               "category"=>$request->category ,
               "gambar1"=>$request->gambar[0],
               "gambar2"=>$request->gambar[1],
               "gambar3"=>$request->gambar[2],
               "gambar4"=>$request->gambar[3],
               "stok_produk"=>$request->stok_produk
          ]);

          if($created) {
               return response()->json([
                    "status"=>true ,
                    "method"=>"post",
                    "data"=>$created
               ]);
          }
     }

     public function deleteProduct(Request $request, $id) {
         if($id === null) {
          return response()->json(["message"=>"product dengan $id tidak ditemukan"],  400);
         }

         $token = $request->header('Authorization');

         if($token === null) {
          return response()->json(["message"=>"Unauthorized"] , 401);
         }

         $deleted = product::where('id' , $id)->delete();

         if($deleted) {
           return response()->json(["message"=>"berhasil delete product $id"]);
         }
         return response()->json([
            "nessage" => "Produk dengan id $id tidak ditemukan"
         ]);
     }

     public function updateProduct($id , Request $request) {
          if($id===null) {
               return response()->json(["message"=>"product dengan $id tidak ditemukan"], 400);
          }

          $validator = Validator::make($request->all() , [
                "id_seller"=>["required"],
                "nama_produk"=>["required"], 
                "harga"=>["required" , "min:1"],
                "gambar"=>["required"],
                "deskripsi"=>["required"],
                "category"=>["required"],
          ]);

          if($validator->fails()) {
               return response()->json(["message"=>$validator->errors()->first()], 400);
          }

          $updated = product::where("id" , $id)->update([
               "id_seller"=>$request->id_seller,
               "nama_produk"=>$request->nama_produk, 
               "harga"=>$request->harga,
               "gambar1"=>$request->gambar[0],
               "gambar2"=>$request->gambar[1],
               "gambar3"=>$request->gambar[2],
               "gambar4"=>$request->gambar[3],
               "deskripsi"=>$request->deskripsi,
               "category"=>$request->category,
          ]);

          return response()->json(["data"=>$updated , "status"=>true , "method"=>"put"] , 200);     
     }

     public function GetSellerProduct($id) {
         $sellerProduct =  seller::with("product")->where('id', $id)->get();
         return response()->json($sellerProduct);
     }
}
