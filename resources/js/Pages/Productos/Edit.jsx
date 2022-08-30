import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Button from '@/Components/Button';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Create(props) {
    const { data, setData, put, processing, errors, reset } = useForm({
        producto_nombre: props.producto.producto_nombre,
        producto_referencia: props.producto.producto_referencia,
        producto_precio: props.producto.producto_precio,
        producto_peso: props.producto.producto_peso,
        producto_categoria: props.producto.producto_categoria,
        producto_stock: props.producto.producto_stock
    });

    const onHandleChange = (event) => {
        console.log(event.target.name, event.target.value)
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        put(route('productos.update', {producto: props.producto.id}));
    };
    
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link className="underline" href={route('productos.index')}>Productos</Link> / {props.producto.producto_nombre} / Editar</h2>}
        >
            <Head title="Productos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="producto_nombre" value="Nombre" />

                            <Input
                                type="text"
                                name="producto_nombre"
                                value={data.producto_nombre}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.producto_nombre} className="mt-2" />
                        </div>

                        <div>
                            <Label forInput="producto_referencia" value="Referencia" />

                            <Input
                                type="text"
                                name="producto_referencia"
                                value={data.producto_referencia}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.producto_referencia} className="mt-2" />
                        </div>

                        <div>
                            <Label forInput="producto_precio" value="Precio" />

                            <Input
                                type="number"
                                min="0"
                                name="producto_precio"
                                value={data.producto_precio}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.producto_precio} className="mt-2" />
                        </div>

                        <div>
                            <Label forInput="producto_peso" value="Peso" />

                            <Input
                                type="number"
                                min="0"
                                name="producto_peso"
                                value={data.producto_peso}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.producto_peso} className="mt-2" />
                        </div>

                        <div>
                            <Label forInput="producto_categoria" value="Categoria" />

                            <select
                                name="producto_categoria"
                                className="mt-1 block w-full"
                                onChange={onHandleChange}
                                required
                            >
                                <option></option>
                                {props.categorias.map(categoria => (
                                    <option value={categoria.id} selected>{categoria.categoria_nombre}</option>
                                ))}
                            </select>

                            <InputError message={errors.producto_categoria} className="mt-2" />
                        </div>

                        <div>
                            <Label forInput="producto_stock" value="Stock" />

                            <Input
                                type="number"
                                min="0"
                                name="producto_stock"
                                value={data.producto_stock}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.producto_stock} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button className="ml-4" processing={processing}>
                                Guardar
                            </Button>
                        </div>

                    </form>
                </div >
            </div >
        </Authenticated >
    );
}
