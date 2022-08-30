<?php

use App\Http\Controllers\Base\CategoriaController;
use App\Http\Controllers\Base\ProductoController;
use App\Http\Controllers\Base\VentaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('categorias', CategoriaController::class)->except('destroy');
    Route::resource('productos', ProductoController::class);
    Route::resource('ventas', VentaController::class)->except(['edit', 'update', 'destroy']);
});

require __DIR__.'/auth.php';