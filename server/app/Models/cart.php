<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class cart extends Model
{
    use HasFactory;

    protected $table = 'carts';

    protected $fillable = [
        'id_produk',
        'id_user',
        'nama_produk',
        'harga',
        'qty',
        'total',
        'gambar',
    ];

    protected $hidden = [
        'id_user',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'id_user');
    }

    public function product()
    {
        return $this->belongsTo(product::class, 'id', 'id_produk');
    }
}
