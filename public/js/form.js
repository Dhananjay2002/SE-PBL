function checkBoxValidator() {
    let c1 = document.querySelector("#cb1");
    let c2 = document.querySelector("#cb2");

    if(c1.checked==true && c2.checked==true) {
        console.log("Both Checked!\n")
        return true;
    }
    else{
        console.log("Unchecked!\n")
        alert("Please Check Both Boxes!")
        return false;
    }
}

$("button").on("click",function(){
    if(checkBoxValidator()==true){
        console.log("Checked\n");
    }
    else{
        console.log("Checked\n");
    }
});