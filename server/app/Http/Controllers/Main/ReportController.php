<?php

namespace App\Http\Controllers\Main;

use App\Models\User;
use App\Models\report;
use App\Models\product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produk = product::with('report')->get();

        return response()->json([
            "produk" => $produk
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function submit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "nama" => "required",
            "deskripsi" => "required",
            "id_produk" => "required",
            "id_user" => "required",
        ]);

        if ($validator->fails())
        {
            return response()->json([
                "message" => $validator->errors()
            ]);
        }

        $produk = product::where('id', $request->id_produk)->first();

        $user = User::where('id', $request->id_user)->first();

        $report = report::create(array_merge($validator->validated()));

        return response()->json([
            "report" => $report
        ]);
    }
    /**
     * Clear all report
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function clear()
    {
        $report = report::getQuery()->delete();

        if ($report)
        {            
            return response()->json([
                "message" => "Report cleared!"
            ]);
        }

        return response()->json([
            "message" => "Report has been cleared!"
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
