<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Validator;

class Producto extends Model
{
    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'productos';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'producto_nombre', 'producto_referencia', 'producto_precio', 'producto_peso', 'producto_categoria', 'producto_stock'
    ];

    public function isValid($data) {
        $rules = [
            'producto_nombre' => 'required',
            'producto_referencia' => 'required',
            'producto_precio' => 'required|integer',
            'producto_peso' => 'required|integer',
            'producto_stock' => 'required|integer',
        ];

        $validator = Validator::make($data, $rules);
        if ($validator->passes()) {
            return true;
        }
        $this->errors = $validator->errors();
        return false;
    }
}
