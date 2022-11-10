<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class cart extends Model
{
    use HasFactory, SoftDeletes;

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

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'id_user');
    }

    public function product()
    {
        return $this->belongsTo(product::class, 'id', 'id_produk');
    }

    public function checkout()
    {
        return $this->hasMany(checkout::class, 'id_user', 'id_user');
    }
}
