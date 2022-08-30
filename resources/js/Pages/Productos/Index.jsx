import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Index(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Productos</h2>}
        >
            <Head title="Productos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <Link as="button" type="button" className="py-2 px-4 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" href={route('productos.create')}>
                            Crear
                        </Link>
                    </div>
                    <div className="bg-white rounded-md shadow overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <thead>
                                <tr className="text-left font-bold">
                                    <th className="pb-4 w-40 pt-6 px-6">Nombre</th>
                                    <th className="pb-4 w-40 pt-6 px-6">Referencia</th>
                                    <th className="pb-4 w-10 pt-6 px-6">Precio</th>
                                    <th className="pb-4 w-10 pt-6 px-6">Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.productos.length ? props.productos.map(producto => (
                                    <tr className="hover:bg-gray-100 focus-within:bg-gray-100 w-auto" key={producto.id}>
                                        <td className="border-t">
                                            <Link className="flex items-center px-6 py-4" href={route('productos.edit', producto.id)} tabIndex="-1">
                                                {producto.producto_nombre}
                                            </Link>
                                        </td>
                                        <td className="border-t">
                                            <Link className="flex items-center px-6 py-4" href={route('productos.edit', producto.id)} tabIndex="-1">
                                                {producto.producto_referencia}
                                            </Link>
                                        </td>
                                        <td className="border-t">
                                            <Link className="flex items-center px-6 py-4" href={route('productos.edit', producto.id)} tabIndex="-1">
                                                {producto.producto_precio}
                                            </Link>
                                        </td>
                                        <td className="border-t">
                                            <Link className="flex items-center px-6 py-4" href={route('productos.edit', producto.id)} tabIndex="-1">
                                                {producto.producto_stock}
                                            </Link>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td className="px-6 py-4 border-t text-center" colSpan={4}>No hay registros.</td>
                                    </tr>
                                )}
                            </tbody >
                        </table >
                    </div >
                </div >
            </div >
        </Authenticated >
    );
}
