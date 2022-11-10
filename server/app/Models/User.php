<?php

namespace App\Models;

use App\Models\seller;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Notifications\ResetPassword;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users';

    public function seller()
    {
        return $this->belongsTo(seller::class, 'email', 'email');
    }

    public function admin()
    {
        return $this->belongsTo(admin::class, 'email', 'email');
    }

    public function cart()
    {
        return $this->hasMany(cart::class, 'id_user', 'id');
    }
    public function favorit()
    {
        return $this->hasMany(favorit::class, 'id_user', 'id');
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
        return ["user" => $this];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [
        'id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

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
    public function sendPasswordResetNotification($token)
    {
        $email = Crypt::encryptString($this->email);

        // $tokenParts = explode(".", $token);  
        // $tokenHeader = base64_decode($tokenParts[0]);
        // $tokenPayload = base64_decode($tokenParts[1]);
        // $jwtHeader = json_decode($tokenHeader);
        // $jwtPayload = json_decode($tokenPayload);
        $url = "http://localhost:3000/forget?token=".$token."&email=".$email;
        $this->notify(new ResetPassword($url));
    }
}
