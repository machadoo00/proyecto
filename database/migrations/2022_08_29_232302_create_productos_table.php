<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('producto_nombre');
            $table->string('producto_referencia');
            $table->integer('producto_precio');
            $table->integer('producto_peso');
            $table->foreignId('producto_categoria');
            $table->unsignedInteger('producto_stock')->default(0);
            $table->dateTime('producto_creacion');
  
            $table->foreign('producto_categoria')->references('id')->on('categorias');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
};
