<?php

use App\Http\Controllers\BE\Auth\LoginController;
use App\Http\Controllers\BE\DashboardController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Dashboard/Dashboard');
// });

// Route::get('/login', function () {
//     return Inertia::render('Auth/Login');
// });

//Admin
Route::middleware('checkLogin')->prefix('admin')->as('admin.')->group(function () {
    Route::get('/login', [LoginController::class, 'index'])->name('login');
    Route::post('/login', [LoginController::class, 'login'])->name('login.post');
});

Route::middleware('admin')->prefix('admin')->as('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});
