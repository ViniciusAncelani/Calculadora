<?php
    include "./header.php";
    echo ("Hello, World!");
    include "./footer.php";

    /* Require - código obrigatório a ser digitado uma vez que a página requirida não exista, ou tenha erro de codificação,
     a página atual não executa
    
       Include - Inclui o código de uma página em outra. Se a página contiver erros ou não existir não executa a parte do 
       código incluida. A página que chamou continua executando.

       Parametro Opcional:

       _once: Apenas uma vez.

     */
?>
