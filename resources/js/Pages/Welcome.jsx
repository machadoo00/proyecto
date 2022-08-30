import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-700 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm dark:text-gray-50">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm dark:text-gray-50">
                                Iniciar sesión
                            </Link>

                            <Link href={route('register')} className="ml-4 text-sm dark:text-gray-50">
                                Registrar
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <svg viewBox="0 0 50 50" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" className="h-16 w-auto sm:h-20">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="_1" data-name="1">
                                    <path className="cls-1" d="M25 48H8a1 1 0 0 1-1-.89l-4-35a1 1 0 0 1 .24-.78A1 1 0 0 1 4 11h34a1 1 0 0 1 .75.33 1 1 0 0 1 .24.78l-1.06 9.34-2-.23.95-8.22H5.12l3.77 33H25z" />
                                    <path className="cls-1" d="M41 13H1a1 1 0 0 1-.77-.37A1 1 0 0 1 0 11.8l1-5A1 1 0 0 1 2 6h38a1 1 0 0 1 1 .8l1 5a1 1 0 0 1-.21.83A1 1 0 0 1 41 13zM2.22 11h37.56l-.6-3H2.82z" />
                                    <path className="cls-1" d="M35 8H7a1 1 0 0 1-.81-.42 1 1 0 0 1-.14-.9l2-6A1 1 0 0 1 9 0h24a1 1 0 0 1 1 .68l2 6a1 1 0 0 1-.14.9A1 1 0 0 1 35 8zM8.39 6h25.22l-1.33-4H9.72zM34 48a14 14 0 1 1 14-14 14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12 12 12 0 0 0-12-12z" />
                                    <path className="cls-1" d="M34 35a.91.91 0 0 1-.45-.11l-6-3 .9-1.78 5.35 2.67 6.49-6.49 1.42 1.42-7 7A1 1 0 0 1 34 35zM24 33h2v2h-2zM33 42h2v2h-2zM33 24h2v2h-2zM42 33h2v2h-2zM5 20h20v2H5zM7 33h12v2H7z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}
