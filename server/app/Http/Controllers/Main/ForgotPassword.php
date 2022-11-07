<?php

namespace App\Http\Controllers\Main;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password as RulesPassword;

class ForgotPassword extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function forgot(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users',
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors());
        }

        $status = Password::sendResetLink(
            $request->only('email'),
        );

        if ($status === Password::RESET_LINK_SENT) {
            return response()->json([
                'message' => 'Email telah terkirim!',
            ], 200);
        } 
        return response()->json([
            'message' => [trans($status)],
        ], 401);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function reset(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required|min:8',
            'confirm' => 'required|same:password',
            'token' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->first()]);
        }

        // $tokenParts = explode(".", $request->token);  
        // $tokenHeader = base64_decode($tokenParts[0]);
        // $tokenPayload = base64_decode($tokenParts[1]);
        // $jwtHeader = json_decode($tokenHeader);
        // $jwtPayload = json_decode($tokenPayload);
        $payload = Crypt::decryptString($request->email);

        // return $payload;
        // $email = Crypt::decryptString($request->token);

        $userPass = User::where('email', $payload)->first('password');
        $password = Hash::check($request->confirm, $userPass->password);
        // return $password;

        if ($password == true) {
            return response()->json([
                'message' => 'Harap masukkan password lain',
            ]);
        }
            
        $user = User::where('email', $payload);
        $user->update([
            "password" => bcrypt($request->password),
            "remember_token" => Str::random(60),
        ]);
        event(new PasswordReset($user));

        if ($user = Password::PASSWORD_RESET)
        {
            return response([
            'message' => 'Password telah di reset',
        ], 200);
        }
            
        return response([
            'message' => [trans($user)],
        ], 500);
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
