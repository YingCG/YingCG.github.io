function check_uncheck(truefalse){
    var boxes = document.forms[0].chkboxarray.length;
    var form = document.getElementById('checkForm1');
    for(var i=0;i < boxes;i++){
     if (truefalse) {
      form.chkboxarray[i].checked=true;
     } else {
      form.chkboxarray[i].checked=false;
     }
    }
   }

