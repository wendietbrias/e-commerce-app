<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class seller extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $table = 'seller';

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'email', 'email');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return ["seller" => $this];
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
