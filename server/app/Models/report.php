<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class report extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'report';

    protected $guarded = [
        'id'
    ];

    public function product()
    {
        return $this->belongsTo(product::class, 'id', 'id_produk');
    }
}
