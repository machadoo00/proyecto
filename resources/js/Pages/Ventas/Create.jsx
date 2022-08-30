import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Button from '@/Components/Button';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Create(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        producto_ventas_producto: '',
        producto_ventas_cantidad: ''
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('ventas.store'));
    };
    
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link className="underline" href={route('ventas.index')}>Ventas</Link> / Crear</h2>}
        >
            <Head title="Ventas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="producto_ventas_producto" value="Producto" />

                            <select
                                name="producto_ventas_producto"
                                className="mt-1 block w-full"
                                onChange={onHandleChange}
                                required
                            >
                                <option></option>
                                {props.productos.map(producto => (
                                    <option value={producto.id}>{producto.producto_nombre}</option>
                                ))}
                            </select>

                            <InputError message={errors.producto_ventas_producto} className="mt-2" />
                        </div>

                        <div>
                            <Label forInput="producto_ventas_cantidad" value="Stock" />

                            <Input
                                type="number"
                                min="0"
                                name="producto_ventas_cantidad"
                                value={data.producto_ventas_cantidad}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.producto_ventas_cantidad} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button className="ml-4" processing={processing}>
                                Crear
                            </Button>
                        </div>

                    </form>
                </div >
            </div >
        </Authenticated >
    );
}
