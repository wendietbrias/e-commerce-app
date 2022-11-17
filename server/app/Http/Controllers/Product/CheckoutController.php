<?php

namespace App\Http\Controllers\Product;

use App\Models\cart;
use App\Models\checkout;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list($id_user)
    {
        $checkout = User::with('checkout')->where('id', $id_user)->get();
        return response()->json($checkout);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function checkout(Request $request, $id_user)
    {
        $validator = Validator::make($request->all(), [
            "id_user" => "required",
            "pengiriman" => "required",
            "biaya_layanan" => "required",
        ]);

        if ($validator->fails())
        {
            return response()->json(["message" => $validator->errors()->first()]);
        }

        $cart = cart::where('id_user', $id_user)->get([
            'id_user',
            'id_produk',
            'qty',
            'total',
            'nama_produk',
            'harga',
        ]);

        // return $cart;

        foreach ($cart as $carts)
        {
        checkout::create(array_merge($validator->validated(), [
            'id_user' => $carts->id_user,
            'qty' => $carts->qty,
            'total' => $carts->total,
            'id_produk' => $carts->id_produk,
            'nama_produk' => $carts->nama_produk,
            'harga' => $carts->harga,
        ]));

        cart::where('id_user', $id_user)->delete();
        }

        if (count($cart) == null)
        {
        return response()->json([
            "message" => "Item sudah di checkout",
        ]);
        }

        return response()->json([
            "message" => "Item berhasil di checkout",
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
