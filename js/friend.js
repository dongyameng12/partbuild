// ios点击事件不触发
$(function () {
    FastClick.attach(document.body);
})
$(document).ready(function () {
    // 第一次参加（默认）
    var firstjoin = true
    // 限制名称字符长度
    $('.friend_nick').text( $('.friend_nick').text().substring(0,6)+'...')
    // 点亮星星
    $('.light_star').on('click',function(){
        showMask()
        $('.fri_tc').show()
    })
    // 点击活动规则
    $('.rule').on('click',function(){
        $('.fri_home').hide();
        $('.tc_rule').show()
    })
    $('.rule_btn').on('click',function(){

    })
     //关闭
     $('.close').on('click', function () {
        $(this).parent().hide();
        hideMask();
    });
    $('#join').click(function () {
        if (firstjoin) {
            window.location.href="index.html?test=true";
        } else {
            window.location.href="index.html?time="+((new Date()).getTime());
        }
    })
    // 测试用
    $('.test1').on('click',function(){
        $('.test1').css('color', 'red');
        firstjoin = false
        var firstLoading2 = localStorage.getItem('firstLoading2')
        if (!firstLoading2) {
            localStorage.setItem('firstLoading2', true)
        }
    })
})
//显示遮罩层
function showMask() {
    $("#mask").css("height", $(document).height());
    $("#mask").css("width", $(document).width());
    $("#mask").show();
    $('body').css('position', 'fixed');
}
//隐藏遮罩层
function hideMask() {
    $("#mask").hide();
    $('body').css('position', 'unset');
}

