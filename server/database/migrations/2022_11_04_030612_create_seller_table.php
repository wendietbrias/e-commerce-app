<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seller', function (Blueprint $table) {
            $table->id();
            $table->string('nama_toko');
            $table->string('alamat_toko');
            $table->string('no_toko');
            $table->string('nama');
            $table->string('email')->unique();
            $table->foreign('email')->references('email')->on('users')->onDelete('cascade');
            $table->string('alamat');
            $table->longText('profile');
            $table->integer('total_penjualan');
            $table->integer('id_user');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seller');
    }
};
