<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class cart extends Model
{
    use HasFactory;

    protected $table = 'carts';

    protected $fillable = [
        'id_user',
        'nama_produk',
        'harga',
        'qty',
        'total',
        'gambar',
    ];

    public function id_user()
    {
        return $this->BelongsTo(User::class, 'id_user', 'id');
    }
}
