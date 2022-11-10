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
     *A
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
                "message" => $validator->errors(),
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


    public function login2(Request $request) {
        $userSeller = seller::where(["email"=>$request->email])->first();

        if(!$token = auth($this->guard_seller)->login($userSeller)) {
            return response()->json(["message"=>"Unauthorized"], 401);
        }

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


    public function Seller(Request $request) {
        $validator = Validator::make($request->all() , [
            "nama_toko"=>'required',
            "alamat_toko"=>'required',
            "no_toko"=>'required',
            "nama"=>'required',
            "id_user"=>'required',
            "email"=>"required",
        ]);

        if($validator->fails()) {
            return response()->json(["error"=>$validator->errors()->first()],400);
        }

        $created = seller::create([
            "nama_toko"=>$request->nama_toko,
            "alamat_toko"=>$request->alamat_toko,
            "no_toko"=>$request->no_toko,
            "nama"=>$request->nama, 
            "email"=>$request->email,
            "is_seller"=>true,
            "id_user"=>$request->id_user
            
        ]);

        if($created) {
         return $this->login2($request);
        }
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
    public function updateUser(Request $request, $id)
    {
        if($id === null) {
            return response()->json(["message"=>"akun dengan id : $id tidak ditemukan"] , 401);
        }

        $validator = Validator::make($request->all() , [
            "nama"=>"required",
            "alamat"=>"required",
            "profile"=>"required"
        ]);

        if($validator->fails()) {
            return response()->json(["message"=>$validator->errors()->first()]);
        }

        
    }

    public function updateSeller(Request $request , $id){
        if($id === null) {
            return response()->json(["message"=>"akun dengan id : $id tidak ditemukan"] , 401);
        }

        $validator = Validator::make($request->all() , [
            "nama"=>"required",
            "alamat"=>"required",
            "profile"=>"required"
        ]);   

        
        if($validator->fails()) {
            return response()->json(["message"=>$validator->errors()->first()]);
        }
   

        $updated = seller::findOrFail($id)->update([
           "nama_toko"=>$request->nama_toko,
           "alamat"=>$request->alamat,
           ""
        ]);

        if($updated) {
            return response()->json(["data" => $updated]);
        }
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
