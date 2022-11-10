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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('id_seller');
            $table->string('nama_produk');
            $table->string('category');
            $table->integer('harga');
            $table->longText('gambar1');
            $table->longText('gambar2');
            $table->longText('gambar3');
            $table->longText('gambar4');
            $table->text('deskripsi');
            $table->float('stok_produk');
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
        Schema::dropIfExists('product');
    }
};
