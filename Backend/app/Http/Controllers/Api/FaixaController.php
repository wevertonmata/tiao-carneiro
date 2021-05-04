<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Faixa;

class FaixaController extends Controller
{
    public function index(){
        $faixa = Faixa::all();

        return $faixa;
    }

    public function create( Request $request) {

        $validator = Validator::make($request->all(), [
            'nome'=>'required',
            'numero'=>'required|numeric',
            'duracao'=>'required',
            'album_id'=>'required|numeric'
        ]);

        if ($validator->fails()) {
            return ['msg'=>'O formulário foi preenchido errado.', 'errors'=>$validator->errors()];
        }

        try{
            $faixa = new Faixa();

            $faixa->nome = $request->nome;
            $faixa->numero = $request->numero;
            $faixa->duracao = $request->duracao;
            $faixa->album_id = $request->album_id;

            $faixa->save();

            return ['msg' => 'Faixa criado com sucesso', 'Data' =>$faixa];

        }catch(\Exception $err) {
            return ['msg' =>'erro ao executar essa ação.', 'details'=>$err];
        }
    }

    public function show($id){
        $faixa = Faixa::find($id);

        return $faixa;
    }

    public function update(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'nome'=>'required',
            'numero'=>'required|numeric',
            'duracao'=>'required',
            'album_id'=>'required|numeric'
        ]);

        if ($validator->fails()) {
            return ['msg'=>'O formulário foi preenchido errado.', 'errors'=>$validator->errors()];
        }

        try{
            $faixa = Faixa::find($id);

            $faixa->nome = $request->nome;
            $faixa->numero = $request->numero;
            $faixa->duracao = $request->duracao;
            $faixa->album_id = $request->album_id;

            $faixa->save();

            return ['msg' => 'Atualizado da faixa feita com sucesso', 'Data' =>$faixa];

        }catch(\Exception $err) {
            return ['msg' =>'erro ao executar essa ação.', 'Details'=>$err];
        }
    }

    public function destroy($id){

            $faixa = Faixa::find($id);

            if(!$faixa){
                return ['msg' =>'Faixa não encontrada.'];
            }

            $faixa->delete();

            return ['msg' => 'Faixa deletada.'];
    }

    function search($busca){
        $faixas = Faixa::all();
        $resul = [];
         foreach( $faixas as $faixa){
            if(str_contains(  $faixa->nome,$busca)){
                $resul[] = $faixa;
            }
         }

        return ['msg' => $resul];
    }
}
