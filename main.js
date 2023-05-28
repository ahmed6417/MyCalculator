function sum(){
    let a =Number(document.getElementById("firstNumber").value);
    let b =Number(document.getElementById("secondNumber").value);
    
    alert(a + b); /*alert only accept string values so i used in this case Number() in decliration*/
    }





    function suminbox(){

        document.getElementById('result').style.display = "block";

        // document.getElementById('hideif').style.display = "none";

        let c =document.getElementById("firstNumber").value;
        
        let d =document.getElementById("secondNumber").value;
        
        document.getElementById("result").value = Number(c) + Number(d);
        }
    
        // resultDisplay.text= document.getElementById("result").value;
        
        
        
    


        // Change background


        $('#lmode').click(function() {
            $('#darkmode').addClass('lightmode');
            document.getElementById('lmode').style.display = "none";
            document.getElementById('dmode').style.display = "block";
        });

        $('#dmode').click(function() {
            $('#darkmode').removeClass('lightmode');
            document.getElementById('dmode').style.display = "none";
            document.getElementById('lmode').style.display = "block";
        });