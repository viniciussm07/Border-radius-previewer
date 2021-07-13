var box_preview = document.getElementById("box-preview");

var input_tl = document.getElementById("tl");
var input_tr = document.getElementById("tr");
var input_br = document.getElementById("br");
var input_bl = document.getElementById("bl");

input_tl.onchange = atualizarPreview;
input_tr.onchange = atualizarPreview;
input_br.onchange = atualizarPreview;
input_bl.onchange = atualizarPreview;

function atualizarPreview(){
    validarCampos();

    var propriedade = "border-radius: " +
        input_tl.value + "px " + input_tr.value + "px " + 
        input_br.value + "px " + input_bl.value + "px;";
    
    console.log("Propriedade: " + propriedade);

    //document.getElementById("input-prop").value = propriedade;

    box_preview.style = propriedade;
}

function validarCampos(){
    var inputs = [
        input_tl,
        input_tr,
        input_br,
        input_bl
    ];
    for (valor of inputs){
        if (valor.value.length === 0 || valor.value < 0)
            valor.value = 0;
        else if (valor.value > 150)
            valor.value = 150;
    }
}