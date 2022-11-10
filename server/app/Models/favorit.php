<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class favorit extends Model
{
    use HasFactory;
    protected $table = 'favorit';
    protected $fillable = [
        'id_produk',
        'id_user',
        'nama_produk',
        'gambar',
        'harga',
    ];
    protected $hidden = [
        'id_user'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'id_user');
    }
}
