<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\admin;
use App\Models\seller;
use Illuminate\Http\Request;
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

        $admin = admin::where('email', $request->email)->get('isAdmin');
        $data = User::with('seller')->where('email', $request->email)->get()->pluck('seller');

        if (count($admin) === 1)
        {
            return $this->login3($request);
        }
        
        if ($data[0] === null)
        {
            if (!$token = auth($this->guard_user)->attempt($validator->validated())) 
            {
                return response()->json(["message" => "Akun tidak ditemukan"]);
            };

            return $this->respondWithToken($token);
        }
        return $this->login2($request);
        // Config::set('jwt.user', App\Models\seller::class);
        // Config::set('auth.providers.users.model', App\Models\seller::class);
        // // $token = Auth::shouldUse('seller-api');
        // $token = null;
        // if (!$token = Auth::attempt($validator->validated()))
        // {
        //     return response()->json(["message" => "Unaothorized"], 401);
        // }
        // return response()->json([
        //     "seller" => true,
        //     "token" => $token,
        // ], 200);
    }

    public function login2(Request $request)
    {
        // Config::set('auth.providers.seller.model',\App\Models\seller::class);
        $seller = seller::where([
            'email' => $request->email,
        ])->first();
        if (!$token = auth($this->guard_seller)->login($seller))
        {
            return response()->json(["message" => "Unaothorized"], 401);
        }
        // $token = Auth::shouldUse('seller-api');
        return $this->respondWithToken($token);
    }

    public function login3(Request $request)
    {
        // $dupAdmin = user::with('admin')->where('email', $request->email)->get()->pluck('admin');
        // if(count($dupAdmin) === 1)
        // {
        //     return response()->json(['message' => 'Anda bukan admin'], 422);
        // }
        $adminUser = admin::where(['email' => $request->email, 'password' => Hash::check('password', $request->password)])->first();

        if (!$token = auth($this->guard_admin)->login($adminUser))
        {
            return response()->json(["message" => "Unaothorized"], 401);
        }
        // $token = Auth::shouldUse('seller-api');
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

        // if ($request->confirm !== $request->password)
        // {
        //     return response()->json([
        //         "message" => "Password tidak sama",
        //     ]);
        // }

        if ($validator->fails())
        {
            return response()->json([
                "message" => $validator->errors()->first(),
            ]);
        }

       User::create(array_merge($validator->validated(), ["password" => bcrypt($request->password)]));
       
    // $seller = seller::create(array_merge($validator->validated(), ["id_user" => $request->id_user, "nama_toko" => $request->nama_toko, "alamat_toko" => $request->alamat_toko, "no_toko" => $request->no_toko, "password" => bcrypt($request->password)]));

    // $admin = admin::create(array_merge($validator->validated(), ["password" => bcrypt($request->password)]));

       return response()->json([
        "message" => "Akun berhasil di register!",
        // "User" => $user,
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

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
