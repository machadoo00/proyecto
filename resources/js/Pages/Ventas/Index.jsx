import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Index(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ventas</h2>}
        >
            <Head title="Ventas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <Link as="button" type="button" className="py-2 px-4 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" href={route('ventas.create')}>
                            Crear
                        </Link>
                    </div>
                    <div className="bg-white rounded-md shadow overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <thead>
                                <tr className="text-left font-bold">
                                    <th className="pb-4 w-80 pt-6 px-6">Producto</th>
                                    <th className="pb-4 w-10 pt-6 px-6">Cantidad</th>
                                    <th className="pb-4 w-10 pt-6 px-6">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.ventas.length ? props.ventas.map(venta => (
                                    <tr className="hover:bg-gray-100 focus-within:bg-gray-100 w-auto" key={venta.id}>
                                        <td className="border-t">
                                            <Link className="flex items-center px-6 py-4" tabIndex="-1">
                                                {venta.producto.producto_nombre}
                                            </Link>
                                        </td>
                                        <td className="border-t">
                                            <Link className="flex items-center px-6 py-4" tabIndex="-1">
                                                {venta.producto_ventas_cantidad}
                                            </Link>
                                        </td>
                                        <td className="border-t">
                                            <Link className="flex items-center px-6 py-4" tabIndex="-1">
                                                {venta.producto_ventas_creacion}
                                            </Link>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td className="px-6 py-4 border-t text-center" colSpan={3}>No hay registros.</td>
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
