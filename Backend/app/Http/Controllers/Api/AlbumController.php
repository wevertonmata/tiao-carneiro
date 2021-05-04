<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Album;
use App\Models\Faixa;

class AlbumController extends Controller
{

    public function index(){
        $album = Album::all();

        return $album;
    }

    public function create( Request $request) {

        $validator = Validator::make($request->all(), [
            'nome'=>'required',
            'ano'=>'required|numeric'
        ]);

        if ($validator->fails()) {
            return ['msg'=>'O formulário foi preenchido errado.', 'errors'=>$validator->errors()];
        }

        try{
            $album = new Album();

            $album->nome = $request->nome;
            $album->ano = $request->ano;

            $album->save();

            return ['msg' => 'Álbum criado com sucesso', 'Data' =>$album];

        }catch(\Exception $err) {
            return ['msg' =>'erro ao executar essa ação.', 'Details'=>$err];
        }
    }

    public function show($id){
        $album = Album::find($id);

        return $album;
    }

    public function update(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'nome'=>'required',
            'ano'=>'required|numeric'
        ]);

        if ($validator->fails()) {
            return ['msg'=>'O formulário foi preenchido errado.', 'errors'=>$validator->errors()];
        }


        try{
            $album = Album::find($id);

            $album->nome = $request->nome;
            $album->ano = $request->ano;

            $album->save();

            return ['msg' => 'Atualizado feita com sucesso', 'Data' =>$album];

        }catch(\Exception $err) {
            return ['msg' =>'erro ao executar essa ação.', 'Details'=>$err];
        }
    }

    public function destroy($id){

        $album = Album::find($id);

        if(!$album){
            return ['msg' =>'Álbum não encontrada.'];
        }

        $album->delete();

        return ['msg' => 'Álbum deletado'];


    }

}
