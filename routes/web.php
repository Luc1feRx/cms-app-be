<?php

use App\Http\Controllers\BE\Auth\LoginController;
use App\Http\Controllers\BE\CategoryController;
use App\Http\Controllers\BE\DashboardController;
use Illuminate\Support\Facades\Route;

// Start Admin routes
Route::middleware('checkLogin')->prefix('admin')->as('admin.')->group(function () {
    Route::get('/login', [LoginController::class, 'index'])->name('login');
    Route::post('/login', [LoginController::class, 'login'])->name('login.post');
});

Route::middleware('admin')->prefix('admin')->as('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/signout', [DashboardController::class, 'signOut'])->name('signOut');

    //Categories
    Route::get('/categories', [CategoryController::class, 'index'])->name('categories');
});

// End Admin routes
