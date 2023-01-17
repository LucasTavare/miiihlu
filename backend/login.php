<?php
    include 'include/conexao.php';

    try{
        $login = $_POST['login'];
        $senha = $_POST['senha'];

        $sql= "SELECT login,senha FROM tb_cadastro WHERE login = '$login' AND senha = '$senha' ";

        $comando = $con -> prepare($sql);

        $comando -> execute();

        $retorno = array("retorno"=>"ok","mensagem"=>"Login efetuado com sucesso!");

    }catch(PDOException $erro){
        $retorno = array("retorno"=>"erro","mensagem"=>$e->getMessage());
    }

    $json = json_encode($retorno, JSON_UNESCAPED_UNICODE);

    echo $json;

    $con=null;
?>