<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorit extends Model
{
    use HasFactory;
    protected $table = 'favorites';
    protected $fillable = [
        'id_produk',
        'id_user',
        'nama_produk',
        'gambar',
        'harga',
    ];
    protected $hidden = [];
    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'id_user');
    }
}