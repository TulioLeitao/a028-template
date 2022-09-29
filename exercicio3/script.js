function checaCaps(event){
    /*
    console.log(event.target.value); //exibe o elemento que ativou o evento
    
    console.log(event.key); // checa a tecla que estou apertando
    */
    const mensagem = document.getElementById("mensagem");
    if(event.key==="Shift"){
        mensagem.innerHTML= "ATENÇÃO! SEGURANDO O SHIFT"
    } else {
        mensagem.innerHTML = ""
    }


}
