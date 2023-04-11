window.onload=function(){

     /*计算一个segment的宽度*/

    //  var segmentWidth = 0;
    //  var timeori=10000;
    //  $(".prod ul li").each(function () {
    //      segmentWidth += $(this).outerWidth(true);
    //  });

    //  $(".prod ul li").clone().appendTo($(".prod ul"));
    //  $(".prod ul li").clone().appendTo($(".prod ul"));

    //  run(timeori);

    //  function run(interval) {
    //     $(".prod ul").animate({ "left": -segmentWidth }, interval, "linear", function () {
    //         $(".prod ul").css("left", 0);
    //          run(timeori);
    //      });
    //  }

    //  $('.prod ul').mouseenter(function () {
    //     $(".prod ul").stop();
    //  }).mouseleave(function () {
    //      var passedCourse = -parseInt($(".prod ul").css("left"));
    //      var time = timeori * (1 - passedCourse / segmentWidth);
    //      run(time);
    //  });
    /*
    var oDiv=$('.prod');
    var oUl=$('.prod ul');
    oUl[0].innerHTML+=oUl[0].innerHTML+oUl[0].innerHTML+oUl[0].innerHTML+oUl[0].innerHTML;//定义图片可以循环播放
    var aLi=$('.prod ul li');
    var aA=$('.scroll');//获取向右向左的箭头
    var timer=null;
    var iSpeed=4;
    
    
    oUl.eq(0).css("left",-(aLi.eq(0).outerWidth(true)*3));
    //$('.test').text('坐标=当前：'+aLi.eq(0).outerWidth(true)+' 限制：'+oUl.eq(0).css("left"));
    
    //oUl[0].style.width=aLi.length*aLi[0].offsetWidth+'px';//定义外层ul的宽度，根据图片的个数和每个图片的宽度计算，保证总宽度是可调整的
    //oUl[0].style.width=aLi.length*(aLi[0].outerWidth)+'px';
    function fnMove(){
        if(oUl.eq(0).css("left")>(aLi.eq(0).outerWidth(true)*3)+'px'){
            oUl.eq(0).css("left",-(aLi.eq(0).outerWidth(true)*3));
        }
        //else if(oUl[0].offsetLeft>-oUl[0].offsetWidth/2){
        //    oUl[0].style.left=inileft;
        //}//定义到边界的时候，实现无缝衔接
        //oUl[0].style.left=oUl[0].style.left-'px'+iSpeed+'px';
        oUl.eq(0).css("left",oUl.eq(0).css("left")+iSpeed+'px');
        //$('.test').text('坐标=当前：'+oUl.eq(0).css("left")+' 限制：'+(aLi.eq(0).outerWidth(true)*3));
        //定义图片的右边距随着速度不断不断增加，或减小，实现运动的效果
    }
    timer=setInterval(fnMove,30);
    if(aA.length>0){
        aA[0].onclick=function(){
            iSpeed=-5;
            //console.log(iSpeed);
        //按下左箭头，定义向左运动
        }
    }
    if(aA.length>1){
        aA[1].onclick=function(){
            iSpeed=5;
            //console.log(iSpeed);
        //按下右箭头，定义向右运动
        }
    }
    oUl[0].onmouseover=function(){
        clearInterval(timer);
        //console.log('stop');
        //鼠标移动到图片上，清除定时器，停止运动
    }
    oUl[0].onmouseout=function(){
        timer=setInterval(fnMove,30);
        //console.log('run');
        //鼠标移出，重新开启定时器，重新运动
    }
    */

        
};

$('.goTop').click(function(){

    $('body,html').stop().animate({scrollTop:0});

    return false;

});

$('.main_bk').eq(0).mousemove(function (e) {
    var x = ((e.offsetX* -1+$(this).width()/2) / 100), y = ((e.offsetY* -1-$(this).height()*2) / 50);
    //$('.test').text('坐标=X：'+x+' Y：'+y);
    $(this).css('background-position', x + 'px ' + y + 'px');
    //$(this).css('transform', 'translate3d(' + x + 'px,' + y + 'px,' + 0 + ')');
});
$('.main_bk').eq(0).mouseleave(function (e) {
    $(this).css('background-position', 0 + 'px ' + -100 + 'px');
    //$(this).css('transform', 'translate3d(0px, 0px, 0px)');
});

function getUrlParams(url) {
    // 通过 ? 分割获取后面的参数字符串
    let temp=url.split('?');
    let obj = {};
    if(temp.length>1){
        let urlStr = url.split('?')[1]
        // 创建空对象存储参数
        //console.log(urlStr)
        
        // 再通过 & 将每一个参数单独分割出来
        let paramsArr = urlStr.split('&')
        for(let i = 0,len = paramsArr.length;i < len;i++){
            // 再通过 = 将每一个参数分割为 key:value 的形式
            let arr = paramsArr[i].split('=')
            obj[arr[0]] = arr[1];
        }
        return obj
    }
    else {
        return obj;
    }
    
}
//console.log(getUrlParams(location.href))

$(function () {
    //var a=window.location.hash; 
    //var b=a.from(1); 
    //console.log(b);
    var ali = $('.mainleft li span'); 
    var aDiv = $('.mainright>div');

    let temp=getUrlParams(location.href)
    if(!$.isEmptyObject(temp)){
        var curIndex=temp["patent"]
        //console.log(curIndex)
        aDiv.eq(curIndex).show().siblings().hide();
        ali.eq(curIndex).addClass('highlight').parent().siblings().find("span").removeClass('highlight');
    }
    else{
        aDiv.eq(0).show().siblings().hide();
        ali.eq(0).addClass('highlight').parent().siblings().find("span").removeClass('highlight');
    }
    
    //console.log(curIndex);

    

    ali.click(function () { 
        var _this = $(this);
        //$(this)方法属于哪个元素，$(this)就是指哪个元素
        _this.addClass('highlight').parent().siblings().find("span").removeClass('highlight');
    });
    $('.mainleft li').click(function () {
        var _this = $(this);
        var index = _this.index();
        aDiv.eq(index).show().siblings().hide();

    });
    
})