<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = "product";

    protected $fillable = [
        "nama_produk", 
        "harga",
        "gambar1",
        "gambar2",
        "gambar3",
        "gambar4",
        "category",
        "deskripsi",
        "stok_produk"
    ];

    protected $guarded = ["id" , "_id_seller"];
}
