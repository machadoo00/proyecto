<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Validator;

class Venta extends Model
{
    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'producto_ventas';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'producto_ventas_producto', 'producto_ventas_cantidad'
    ];

    public function isValid($data)
    {
        $rules = [
            'producto_ventas_producto' => 'required',
            'producto_ventas_cantidad' => 'required|min:0'
        ];

        $validator = Validator::make($data, $rules);
        if ($validator->passes()) {
            return true;
        }
        $this->errors = $validator->errors();
        return false;
    }

    /**
     * Get the phone associated with the user.
     */
    public function producto()
    {
        return $this->hasOne(Producto::class, 'id', 'producto_ventas_producto');
    }
}
