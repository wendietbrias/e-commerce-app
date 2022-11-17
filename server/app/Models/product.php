<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $guarded = [
        'id'
    ];

    public function cart()
    {
        return $this->hasMany(cart::class, 'id_produk', 'id');
    }

    public function seller()
    {
        return $this->belongsTo(seller::class, 'id', 'id_seller');
    }

    public function report()
    {
        return $this->hasMany(report::class, 'id_produk', 'id');
    }
}
