<?php

namespace App\Http\Controllers\Product;

use App\Models\Favorit;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class FavoritController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function clear($id_user) {
        if($id_user === null) {
            return response()->json(["message"=>"Unauthorized"] ,401);
        }

        $deleted = Favorit::where("id_user" , $id_user)->delete();

        if($deleted) {
            return response()->json(["message"=>$id_user] , 200);
        }
     }

    public function favorit($id_user)
    {
        $favoritList = User::with('favorit')->where('id', $id_user)->get();
        if($favoritList === null || count($favoritList) === 0) {
            return response()->json(["message"=>"Belum ada favorit yang ditambahkan"] ,200);
        }

        return response()->json(["data"=>$favoritList, "method"=>"GET","status"=>true] , 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function like(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id_produk" => "required",
            "id_user" => "required",
            "nama_produk" => "required",
            "gambar" => "required|string",
            "harga" => "required",
        ]);
        if($validator->fails())
    {
        return response()->json([
            "message" => $validator->errors()->first(),
        ] , 400);
    }
        $checkProduk = favorit::where([
            'id_produk' => $request->id_produk,
            'id_user' => $request->id_user,
            'nama_produk' => $request->nama_produk,
        ])->get();

        if (count($checkProduk) === 1)
        {
            $favorit = favorit::where([
                'id_user' => $request->id_user,
                'id_produk' => $request->id_produk
            ])->delete();

            return response()->json(["message"=>$request->id_produk] , 200);
        }

        $createdLike = favorit::create(array_merge($validator->validated()));

       if($createdLike === null) {
          return response()->json(["message"=>"Something went wrong"] ,400);
       }

        return response()->json([
            "data" => $createdLike,
            "method"=>"POST",
            "status"=>true
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}