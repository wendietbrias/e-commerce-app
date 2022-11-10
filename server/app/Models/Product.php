<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = "products";

  
    public function seller() {
        return $this->belongsTo(seller::class , 'id_seller', 'id');
    }

    protected $fillable = [
        "nama_produk", 
        "harga",
        "gambar1",
        "gambar2",
        "gambar3",
        "gambar4",
        "category",
        "deskripsi",
        "stok_produk",
        "id_seller"
    ];

    protected $guarded = ["id"];
}
