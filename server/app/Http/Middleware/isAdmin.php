<?php

namespace App\Http\Middleware;

use App\Models\admin;
use Closure;
use Illuminate\Http\Request;

class isAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (admin::auth() && admin::auth()->isAdmin === true) {
        return $next($request);
        }

        return back()->with('error', 'Oops, You are not admin');
    }
}