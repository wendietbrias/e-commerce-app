<?php

namespace App\Http\Controllers\Main;

use App\Models\cart;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
    */
    public function cart(Request $request)
    {
        $cartList = User::with('cart')->where('id', $request->id_user)->get();
        $productList = cart::with('product')->where('id', $request->id)->get();
        return $cartList;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id_produk" => "required",
            "id_user" => "required",
            "nama_produk" => "required",
            "harga" => "required",
            "qty" => "required",
            "total" => "required",
            "gambar" => "required|string",
        ]);

        if ($validator->fails())
        {
            return response()->json([
                "message" => $validator->errors()->first(),
            ]);
        }

        $checkProduk = cart::where([
            'id_produk' => $request->id_produk,
            'id_user' => $request->id_user,
            'nama_produk' => $request->nama_produk,
        ])->first();

        if ($checkProduk != null)
        {
            $qty = $request->qty;
            $harga = $request->harga;
            
            $cart = cart::where('id_produk', $request->id_produk);
            $cart->increment('qty', $qty);
            $cart->increment('harga', $harga);

            return;
        }
        
        // $token = $request->access_token;
        $add = cart::create(array_merge($validator->validated()));
        return response()->json([
            "mesage" => $add
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id_produk, $id_user)
    {
        $deleteCart = cart::where([
            'id_produk' => $id_produk,
            'id_user' => $id_user,
        ])->delete();

        return $deleteCart;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function clear($id_user)
    {
        $clear = cart::where('id_user', $id_user)->delete();

        return $clear;
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
}
