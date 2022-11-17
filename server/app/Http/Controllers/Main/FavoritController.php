<?php

namespace App\Http\Controllers\Main;

use App\Models\User;
use App\Models\favorit;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FavoritController extends Controller
{
    public function favorit($id_user)
    {
        $favoritList = User::with('favorit')->where('id', $id_user)->get();
        return response()->json($favoritList);
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
        ]);
    }
        $checkProduk = favorit::where([
            'id_produk' => $request->id_produk,
            'id_user' => $request->id_user,
            'nama_produk' => $request->nama_produk,
        ])->first();
        // return $checkProduk;
        if ($checkProduk != null )
        {
            $favorit = favorit::where([
                'id_user' => $request->id_user,
                'id_produk' => $request->id_produk
                ])->delete();
            return $favorit;
        }
        $like = favorit::create(array_merge($validator->validated()));
        return response()->json([
            "message" => $like
        ]);
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
