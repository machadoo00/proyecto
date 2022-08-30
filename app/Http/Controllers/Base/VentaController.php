<?php

namespace App\Http\Controllers\Base;

use App\Http\Controllers\Controller;
use App\Models\Venta, App\Models\Producto;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DB, Log;

class VentaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Ventas/Index', ['ventas' => Venta::with('producto:id,producto_nombre')->get()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Ventas/Create', ['productos' => Producto::where('producto_stock', '>', '0')->get()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->ajax()) {
            $data = $request->all();
            $venta = new Venta;
            if ($venta->isValid($data)) {
                DB::beginTransaction();
                try {
                    // Validar que el producto exista
                    $producto = Producto::find($request->producto_ventas_producto);
                    if (!$producto instanceof Producto) {
                        DB::rollback();
                        return response()->json(['success' => false, 'error' => 'No es posible recuperar el producto.']);
                    }

                    // Validar que la cantidad ingresada no sea mayor al stock
                    if ($request->producto_ventas_cantidad > $producto->producto_stock) {
                        DB::rollback();
                        return response()->json(['success' => false, 'error' => 'No hay suficiente stock del producto.']);
                    }

                    // Crear venta
                    $venta->fill($data);
                    $venta->producto_ventas_creacion = date('Y-m-d H:i:s');
                    $venta->save();

                    // Actualizar stock
                    $producto->producto_stock -= $request->producto_ventas_cantidad;
                    $producto->save();

                    // Commit Transaction
                    DB::commit();
                    return redirect()->route('ventas.index');
                } catch(\Exception $e) {
                    DB::rollback();
                    Log::error($e->getMessage());
                    return response()->json(['success' => false]);
                }
            }
            return response()->json(['success' => false, 'errors' => $venta->errors]);
        }
        abort(403);
    }
}
