<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class checkout extends Model
{
    use HasFactory;
    protected $table = 'checkout';

    protected $fillable = [
        'id_user',
        'pengiriman',
        'qty',
        'total',
        'biaya_layanan',
        'nama_produk',
        'harga',
    ];

    public function cart()
    {
        return $this->belongsTo(cart::class, 'id_user', 'id_user');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'id_user');
    }
}
