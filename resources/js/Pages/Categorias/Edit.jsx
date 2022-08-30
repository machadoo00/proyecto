import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Edit(props) {
    const { data, setData, put, processing, errors, reset } = useForm({
        categoria_nombre: props.categoria_nombre,
        categoria_activa: props.categoria_activa,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        put(route('categorias.update', {categoria: props.id}));
    };
    
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link className="underline" href={route('categorias.index')}>Categorias</Link> / {props.categoria_nombre}</h2>}
        >
            <Head title="Categorias" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="name" value="Nombre" />

                            <Input
                                type="text"
                                name="categoria_nombre"
                                value={data.categoria_nombre}
                                className="mt-1 block w-full"
                                autoComplete="categoria_nombre"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.categoria_nombre} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <Label forInput="categoria_activa" value="Activa" />

                            <Checkbox
                                name="categoria_activa"
                                value={data.categoria_activa}
                                checked={data.categoria_activa}
                                handleChange={onHandleChange}
                            />
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
