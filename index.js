function display(val){
    document.getElementById("result").value+=val;
}
function pow(){
    let str = document.getElementById("result").value;
    document.getElementById("result").value = str**2;
}
function factorial(){
    let n = document.getElementById("result").value;
    let ans = 1;
    let i=1;
    for(i=1;i<=n;i++){
        ans*=i;
    }
    document.getElementById("result").value = ans;
}
function solve(){
    let str = document.getElementById("result").value;
    document.getElementById("result").value = eval(str);
}
function cls(flag){
    if(flag){
        document.getElementById("result").value = "";
    }else{
        let str = document.getElementById("result").value;
        str = str.slice(0,-1);
        document.getElementById("result").value = str;
    }
    
}
