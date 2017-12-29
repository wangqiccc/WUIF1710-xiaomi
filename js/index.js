{
    var arr = document.querySelectorAll(".img_box li");
    var arr1 = document.querySelectorAll(".btn_box li");
    var arr2 = document.querySelector(".banner");
    var arr3 = document.querySelector(".banner-left");
    var arr4 = document.querySelector(".banner-right");

    console.log(arr);
    console.log(arr1);
    arr1.forEach(function (ele, index) {
        ele.onclick = function () {
            for (var i = 0; i < arr.length; i++) {
                arr[i].classList.remove('active');
                arr1[i].classList.remove('active');
            }
            this.classList.add("active");
            arr[index].classList.add('active');
            n = [index]
        }
    });


    var n = 0;

    function fun(dir="r") {
        if(dir==="r") {


            n++;
            if (n === arr.length) {
                n = 0;
            }
        }else if(dir==="l"){
            n--;
            if(n===-1){
                n=arr.length-1;
            }
        }
        for (var i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
            arr1[i].classList.remove('active');
        }
        arr[n].classList.add('active');
        arr1[n].classList.add('active');
    };
    var st = setInterval(fun, 1000);
    arr2.onmouseover = function () {
        clearInterval(st);
    };
    arr2.onmouseout = function () {
        st = setInterval(fun, 1000);
    };
    let flag = true;
    arr3.onclick = function () {
        if (flag) {
            flag = false;
            fun("l")
        }
    };
    arr4.onclick=function () {
        if(flag){
            flag=false;
            fun();
        }
    };
    arr.forEach(function (val,index) {    val.addEventListener("transitionend",function () {
        flag=true;
    }) })


}
{
    var aar = document.querySelector(".danping-top-right-zuo");
    var aar1 = document.querySelector(".danping-top-right-you");
    var aar2=document.querySelector(".danping-bottom");
    var aar3=document.querySelector(".danping");
    aar.onclick = function () {
        aar1.classList.add('active');
        aar.classList.remove('active');
        aar2.style.transform="translateX(0)";

    };
    aar1.onclick = function () {
        aar.classList.add('active');
        aar1.classList.remove('active');
        aar2.style.transform="translateX(-1226px)";

    };
    let k=1;
    function fan() {
        k++;
        if(n%2===0){
            aar.onclick()
        }else {
            aar1.onclick();
        };
    };
    let t=setInterval(fan,1000);
    aar2.onmouseover=function () {
        clearInterval(t);

    };
    aar2.onmouseout=function () {
       t=setInterval(fan,1000);

    };
}