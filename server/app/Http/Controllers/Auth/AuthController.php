<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\admin;
use App\Models\seller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function __construct()
    {
        $this->guard_user = "api";
        $this->guard_seller = "seller-api";
        $this->guard_admin = "admin-api";
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required",
            "password" => "required|min:8"
        ]);

        if ($validator->fails())
        {
            return response()->json([
                "message" => $validator->errors()->first(),
            ], 400);
        }

        $admin = admin::where('email', $request->email)->first('isAdmin');
        // return $admin;
        $penjual = User::with('seller')->where('email', $request->email)->get()->pluck('seller');
        // return $penjual;

        if ($admin == true)
        {
            return $this->login3($request);
        }
        if (count($penjual) === 0)
        {
            return response()->json([
                "message" => "Akun tidak ditemukan",
            ]);
        }
        if ($penjual[0] === null)
        {
            if (!$token = auth($this->guard_user)->attempt($validator->validated())) 
            {
                return response()->json(["message" => "Akun tidak ditemukan"]);
            };

            return $this->respondWithToken($token);
        }
        if (count($penjual) === 1)
        {
            return $this->login2($request);
        }
    }

    public function login2(Request $request)
    {
        $password = seller::where('email', $request->email)->first();

        $seller = Hash::check($request->password, $password->password);

        if ($seller == false)
        {
            return response()->json([
                "message" => "Akun tidak ditemukan",
            ]);
        }

        if (!$token = auth($this->guard_seller)->login($password))
        {
            return response()->json(["message" => "Unaothorized"], 401);
        }
        // $token = Auth::shouldUse('seller-api');
        return $this->respondWithToken($token);
    }

    public function login3(Request $request)
    {
        $adminUser = admin::where('email', $request->email)->first();

        $password = Hash::check($request->password, $adminUser->password);

        if ($password == false)
        {
            return response()->json([
                "message" => "Akun tidak ditemukan",
            ]);
        }

        if (!$token = auth($this->guard_admin)->login($adminUser))
        {
            return response()->json([
                "message" => "Unaothorized"
            ], 401);
        }
        // $token = Auth::shouldUse('admin-api');
        return $this->respondWithToken($token);
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
            "email" => "required|unique:users,email|unique:admin,email",
            "password" => "required|min:8",
            "confirm" => "required|min:8|same:password",
        ]);

        if ($validator->fails())
        {
            return response()->json([
                "message" => $validator->errors()->first(),
            ]);
        }

       User::create(array_merge($validator->validated(), ["password" => bcrypt($request->password)]));

       return response()->json([
        "message" => "Akun berhasil di register!",
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

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
