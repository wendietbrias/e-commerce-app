<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\admin;
use App\Models\seller;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "nama" => "required",
            "email" => "required",
            "password" => "required|min:8"
        ]);

        if ($validator->fails())
        {
            return response()->json([
                "message" => $validator->errors(),
            ], 400);
        }

        $data = User::with('seller')->where('email', $request->email)->get()->pluck('seller');
        // return $data->pluck('penjual');
        return $data;

        // if ($data === 0)
        // {
        //     return response()->json([
        //         "message" => "anda adalah seller"
        //     ]);
        // }
    
        if (!$token = auth()->attempt($validator->validated()))
        {
            return response()->json([
                "message" => "Akun tidak ditemukan",
            ], 401);
        }

        return response()->json([
            "token" => $token,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "nama" => "required",
            "email" => "required|email",
            "password" => "required|min:8"
        ]);

       $user = User::create(array_merge($validator->validated(), ["password" => bcrypt($request->password)]));

    //    $seller = seller::create(array_merge($validator->validated(), ["id_user" => $request->id_user, "nama_toko" => $request->nama_toko, "alamat_toko" => $request->alamat_toko, "no_toko" => $request->no_toko, "password" => bcrypt($request->password)]));

    //    $admin = admin::create(array_merge($validator->validated(), ["password" => bcrypt($request->password)]));

       return response()->json([
        "message" => "Akun berhasil di register!",
        "User" => $user,
        // "Seller" => $seller,
        // "Admin" => $admin,
       ], 201);
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
