<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthGuard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (($request->user('api'))) {;
        auth()->shouldUse('api');
        }

        else if (($request->user('seller-api'))) {;
        auth()->shouldUse('seller-api');
        }

        else if (($request->user('admin-api'))) {;
        auth()->shouldUse('admin-api');
        }
        return $next($request);
    }
}
