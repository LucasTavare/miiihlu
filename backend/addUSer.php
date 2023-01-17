<?php
    include 'include/conexao.php';

    try{

        $login = $_POST['login-cadastro'];
        $senha = $_POST['senha-cadastro'];
        $confirmar = $_POST['confirmar-cadastro'];

        if($senha != $confirmar){
            $retorno = array ("retorno" => "error",
                              "mensagem" =>  "As senhas não conferem! As revise!");
            $json = json_encode($retorno, JSON_UNESCAPED_UNICODE);
        }else{

        $sql = "INSERT INTO tb_cadastro (`login`,`senha`) VALUES ('$login', $senha)";

        $comando = $con -> prepare($sql);

        $comando -> execute();

        $retorno = array("retorno"=>"ok","mensagem"=>"Usuario inserido com sucesso");

        }

        

    }catch(PDOException $erro){
        $retorno = array("retorno"=>"erro","mensagem"=>$e->getMessage());
    }

    $json = json_encode($retorno, JSON_UNESCAPED_UNICODE);

    echo $json;

    $con=null;
    
?>