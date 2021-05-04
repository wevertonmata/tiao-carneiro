<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faixa extends Model
{
    use HasFactory;

    public $timestamps = false;

    // public function Validator($request){
    //     $validator = Validator::make($request->all(), [
    //         'nome'=>'required',
    //         'numero'=>'required|numeric',
    //         'duracao'=>'required',
    //         'album_id'=>'required|numeric'
    //     ]);

    //     if ($validator->fails()) {
    //         return ['msg'=>'O formulário foi preenchido errado.', 'errors'=>$validator->errors()];
    //     }

    //     return $request;
    // }

}
