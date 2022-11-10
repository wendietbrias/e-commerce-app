<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;

    protected $table = 'products';

    public function cart()
    {
        return $this->hasMany(cart::class, 'id_produk', 'id');
    }
}
