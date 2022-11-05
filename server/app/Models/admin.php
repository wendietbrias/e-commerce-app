<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class admin extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $table = 'admin';

    protected $guarded = ['id'];

    protected $hidden = ['password'];

    public function userAdmin()
    {
        $this->belongsTo(User::class, 'email', 'email');
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
        return ["admin" => $this];
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
