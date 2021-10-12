function calcularIMC(){
    edad=document.getElementById("edad").value
    resultado=document.getElementById("resultado")
    peso=document.getElementById("peso").value
    altura=document.getElementById("altura").value
    mensaje=""
    sexoM=document.getElementById("indicadorM").style.color
    sexoH=document.getElementById("indicadorH").style.color
    flecha=0
    if(peso=="" || altura=="" || edad==""){
        alert("Llene todos los campos")           
    }else if(sexoM=="grey" && sexoH=="grey"){
        alert("Dale clic a uno de los iconos de sexo")
    }else if(altura.indexOf(",")>=0){
        alert("coloque un altura con punto no con coma")    
    }else{
    imc=Math.round(peso/Math.pow(altura,2)*100)/100
    resultado.innerHTML=""+imc;
    if(imc>0 && imc<18.5){
       mensaje="Bajo de peso"
       flecha=(imc*100/18.5)/25
    }else if(imc>18.5 && imc<25){
        mensaje="Saludable"
        flecha=25+((imc-18.5)*3.84)        
    } else if(imc>=25 && imc<30){
        mensaje="Con sobrepeso"
        flecha=50+((imc-25)*5)        
    } else if(imc>=30 && imc<40){
        flecha=75+((imc-30)*2.25)
        mensaje="Obeso"
        console.log(flecha)
    }else{
        mensaje="Obesidad extrema"
        flecha=100
    }    
    document.getElementById("flecha").style.marginLeft = flecha+"%"
    if(sexoM=="pink"){
        sexoM="femenino"
        guardarEstadistica(sexoM,edad,peso,altura)  
    }else if(sexoH=="blue"){
        sexoH="masculino"
        guardarEstadistica(sexoH,edad,peso,altura)
    }      
    }    
}
function cambiarColor(){    
    $(document).ready(function(e) {
        $("#indicadorH").click(function() {
            console.log("Sexo Masculino")
            document.getElementById("indicadorH").style.color="blue"
            document.getElementById("indicadorM").style.color="gray"
        });
        $("#indicadorM").click(function() {
            console.log("Sexo Femenino")
            document.getElementById("indicadorH").style.color="gray"
            document.getElementById("indicadorM").style.color="pink"
        });
    });
}
function guardarEstadistica(sexo,edad,peso,altura){
imc=Math.round(peso/Math.pow(altura,2)*100)/100

var persona = { 'sexo':sexo,'edad':edad, 'peso':peso, 'altura':altura, 'imc':imc };
// Guardo el objeto como un string
contador=localStorage.length+1
localStorage.setItem(''+contador, JSON.stringify(persona));
}