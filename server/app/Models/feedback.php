<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class feedback extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'feedback';

    protected $fillable = [
        'nama',
        'deskripsi',
        'id_user',
    ];

    // protected $hidden = [
    //     'created_at',
    //     'updated_at',
    // ];
}
