<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class seller extends Model
{
    use HasFactory;

    protected $table = 'seller';

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'email', 'email');
    }

    // protected static function boot()
    // {
    //     parent::boot();

    //     static::creating(function ($model) {
    //         try {
    //             $model->uuid = Uuid::uuid4()->toString();
    //         } catch (UnsupportedOperationException $e) {
    //             abort(500, $e->getMessage());
    //         }
    //     });
    // }
}
