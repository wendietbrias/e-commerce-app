<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $feedback = feedback::all();
        return response()->json([
            "feedback" => $feedback
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function submit(Request $request, $id_user)
    {
        $validator = Validator::make($request->all(), [
            "nama" => "required",
            "deskripsi" => "required",
        ]);

        if ($validator->fails())
        {
            return response()->json([
                "message" => $validator->errors()->first(),
            ]);
        }

        $feedback = feedback::create(array_merge($validator->validated(), ["id_user" => $id_user]));

        return response()->json([
            "message" => $feedback,
        ]);
    }
    /**
     * Clear all feedback
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function clear()
    {
        $feedback = feedback::getQuery()->delete();

        if ($feedback)
        {
            return response()->json([
            "message" => "Feedback cleared!"
        ]);
        }
        
        return response()->json([
            "message" => "Feedback has been cleared"
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
