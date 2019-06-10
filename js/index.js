

$(document).ready(function () {
    //是否关注公众号
    var attention = true;
    // 是否绑定手机号
    var binding = true;
    // 本网，异网用户(默认本网)
    var CM = true;
    //是否转增
    var increase;
    // 8道不同题
    var newData
    // 第几题
    var topicNum =0;
    // 用于存放正确题目class(.right)
    var rightnumArr = []
    // 领取奖励后当前class
    var current_clickclass
    // 用于存放题目
    var topicArr = [
        // 0
        {
            title: '1标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '111111111111111',
            topic_2: '111111111111111',
            topic_3: '111111111111111',
            topic_4: '111111111111111',
            right: 'C'
        },
        // 1
        {
            title: '2标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '2222222222222222',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        // 2
        {
            title: '3标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '3333333333333333333',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        // 3
        {
            title: '4标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '444444444444444',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        //4
        {
            title: '5标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '555555555555555555555',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        // 5
        {
            title: '6标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '6666666666666',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        // 6
        {
            title: '7标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '7777777',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        //7
        {
            title: '8标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '8888888888888888888',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        //8
        {
            title: '9标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '999999',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        //9
        {
            title: '10标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '101010101010101010',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        // 10
        {
            title: '11标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '11',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        // 11
        {
            title: '12标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '1212121212212',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        // 12
        {
            title: '13标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '13131313131313',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        // 13
        {
            title: '14标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '1441414141414141',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        // 14
        {
            title: '15标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '1515151511111115',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        },
        // 15
        {
            title: '16标志着中国工人阶级开始独立的政治力量登 上历史舞台的事件是（）',
            topic_1: '1611111111111111116',
            topic_2: '10月15日至10月25日',
            topic_3: '10月15日至10月25日',
            topic_4: '10月15日至10月25日',
            right: 'C'
        }
    ]
    // （首页）开始
    $('#start').on('click',function(){
        newData = getNumber(0, 15, 8)
        $('.home').hide()
        problemText();
        choose()
        $('.topic').show()
    })
    // 产生不同的数
    function getNumber(min_number, max_number, chose_length) {
        var chooseArr = []
        for (var i = 0; i < chose_length; i++) {
            var random_num = Math.floor(Math.random() * max_number) + min_number
            if (chooseArr.length > 0) {
                var number = 0
                for (var j = 0; j < chooseArr.length; j++) {
                    if (chooseArr[j] == random_num) {
                        number++
                    }
                }
                if (number > 0) {
                    return getNumber(min_number, max_number, chose_length)
                } else {
                    chooseArr.push(random_num)
                }
            } else {
                chooseArr.push(random_num)
            }
        }
        return chooseArr
    }
    // 题目的内容
    function problemText() {
        // 从0-15中8个数
        $('.num_com').text(topicNum+1)
        switch (topicNum) {
            case 0:
                $('.num_com2').text('第一题')
                break;
            case 1:
                $('.num_com2').text('第二题')
                break;
            case 2:
                $('.num_com2').text('第三题')
                break;
            case 3:
                $('.num_com2').text('第四题')
                break;
            case 4:
                $('.num_com2').text('第五题')
                break;
            case 5:
                $('.num_com2').text('第六题')
                break;
            case 6:
                $('.num_com2').text('第七题')
                break;
            case 7:
                $('.num_com2').text('第八题')
                break;
        }
        $('.topic_context').html(" <p>" + (topicNum+1) + "." + topicArr[newData[topicNum]].title + "</p><ul><li><p>A、" + topicArr[newData[topicNum]].topic_1 + "</p><p></p></li><li><p>B、" + topicArr[newData[topicNum]].topic_2 + "</p><p></p></li><li><p>C、" + topicArr[newData[topicNum]].topic_3 + "</p><p></p></li><li><p>D、" + topicArr[newData[topicNum]].topic_4 + "</p><p></p></li></ul><input type='hidden' value='" + topicArr[newData[topicNum]].right + "'>")
    }
    // 选题(当按钮为确定是才能选择)
    function choose() {
        $('.topic_context ul li').on('click', function () {
            if($('.topic_btn').text()== '确定'){
                if (!$(this).hasClass('topicbg')) {
                    $(this).addClass('topicbg').siblings().removeClass('topicbg')
                } else {
                    $(this).removeClass('topicbg');
                }
            }
        })
    }
    // 下一题
    $('.topic_btn').on('click', function () {
        // 点击确定
        if ($(this).text() == '确定') {
             // 选择
            if($('.topic_context ul li').hasClass('topicbg')){
                // 正确答案
                var right_val = $('.topic_context ').children('input').val();
                // 选择的答案
                var choose_val = $('.topicbg').text();
                if (choose_val.includes(right_val)) {
                    $('.topicbg').children('p:eq(1)').addClass('right');
                    rightnumArr.push('right');
                    // 点亮星星
                    $.each($('.star_list'),function(index,item){
                        $(item).children('li:eq('+(rightnumArr.length-1)+')').css({"width":".61rem","height":".59rem","background-image":"url(images/star_bling.png)"}).prevAll('li').css({"width":".61rem","height":".59rem","background-image":"url(images/star_bling.png)"});
                    })
                    $('.num_rig').text(rightnumArr.length)
                    // debugger
                    // console.log(rightnumArr)
                } else {
                    $('.topicbg').children('p:eq(1)').addClass('erro');
                }
                $(this).text('下一页')
            }else{
                // 没有选择rightnumArr
                showMask()
                $('.tc_6').show()  
            }
        } else if($(this).text() == '下一页') {
            topicNum++
            if(topicNum < 8){
                problemText()
                $(this).text('确定')
                choose();
            }else{
                $('.topic ').hide();
                $('.main').show();
            }
        }
    })

    // 主页（抽奖）
    $('.lottory').on("click",function(){
       if($(this).hasClass('lottory_left')){
            current_clickclass = 'main_left'
            jiangli()
       } else if($(this).hasClass('lottory_right')){
           if (rightnumArr.length<8) {
               showMask()
               $('.tc_7').show()
           }else{
            current_clickclass = 'main_right'
            jiangli()  
           }
       }
       $(this).addClass(current_clickclass)
    })
    // 获取奖励的最后一步
    $('.close3').on('click',function(){
        $("."+current_clickclass).text('点击查看')
        $(this).parent().hide();
        hideMask();
    })
    // 发送好友
    $('#send_fri').on('click',function(){
        $('.main').hide()
        $('.tc_7').hide()
        hideMask()
        $('.share').show()
    })
    // 点击分享（测试用）
    $('.share').on('click',function(){
        $('.share').hide()
        rightnumArr.push('right');
        $('.mian_list').children('li:eq('+(rightnumArr.length-1)+')').css({"width":".61rem","height":".59rem","background-image":"url(images/star_bling.png)"}).prevAll('li').css({"width":".61rem","height":".59rem","background-image":"url(images/star_bling.png)"});
        $('.main').show()
    })
    // 判断关注，绑定等
    function jiangli() {
        if (attention) {
            // 已关注
            if (binding) {
                if (CM) {
                    //本网中流量 
                    showMask();
                    $('.tc_1').show();
                } else {
                    //异网中流量 
                    if ($("."+current_clickclass).text() == '点击查看') {
                        showMask();
                        $('.tc_5').show()
                    } else {
                        showMask();
                        $('.tc_2').show();
                    }
                }
            } else {
                // 未绑定手机号
                $('.main').hide();
                $('.bind').show();
            }
        } else {
            // 未关注
            alert('未关注');
            // window.location.href = "https://mp.weixin.qq.com/s/FDD5Q57SnOrWAiYkfyzLFQ";
        }
    };
    // (转增和取消)
    function Transfcancel() {
        if (increase) {
            //转增
            $('.tc_2').hide();
            $('.tc_3').show();
            // $(current_clickclass).remmoveClass('cancel')
        } else {
            //  取消
            hideMask();
            $('.tc_2').hide();
            // 点击取消后加入cancel,用于判断显示那个弹窗
            // $(current_clickclass).parent('div').children('div:eq(0)').removeClass(current_lihe + 'no').addClass(current_lihe + 'yes');
            // $(current_clickclass).css('background-color', '#ff746b');
            // $(current_clickclass).text('点击查看');
            // $(current_clickclass).addClass('cancel');
        }
    };
    //异网流量弹窗 1（取消）
    $('.close2').on('click', function () {
        increase = false;
        Transfcancel();
    });
    //异网流量弹窗 1（转增）
    $('#giveBtn').on('click', function () {
        increase = true;
        Transfcancel();
    });
    //异网流量弹窗 2,确定
    $('#giveBtn_2').on('click', function () {
        var input_val = $('#inputTel').val();
        if (istel(input_val)) {
            $('.tc_3').hide();
            $('.tc_4').show();
            $('.mobile').text(input_val);
        } else {
            alert('请输入正确的北京移动号');
            // 清空input框
            $("#inputTel").val("");
        }

    });
    //异网流量弹窗 3,修改
    $('#revise').on('click', function () {
        $('.tc_4').hide();
        $('.tc_3').show();
    });
    //异网流量弹窗 3,确定
    $('#giveBtn_3').on('click', function () {
        $('.tc_4').hide();
        $('.tc_5').show();
    });
    //关闭
    $('.close').on('click', function () {
        $(this).parent().hide();
        hideMask();
    });
    //移动手机号码验证
    function istel(tel) {
        var rtn = false;
        //移动号段验证
        // var regtel = /^((13[4-9])|(15([0-2]|[7-9]))|(18[2|3|4|7|8])|(178)|(147))[\d]{8}$/;
        var regtel = /^((13[4-9])|(15([0-2]|[7-9]))|(18[2|3|4|7|8])|(17[2|8])|(165)|(147)|198)[\d]{8}$/;
        if (regtel.test(tel)) {
            rtn = true;
        }
        return rtn;
    }

    
    //点击活动规则按钮
    var ruleFlag;
    $('.rule-btn').on('click', function () {
        $('.tc_rule').show().siblings('section').hide();
        if ($(this).parent().parent().attr('id') === 'home') {
            ruleFlag = 0;
        } else {
            ruleFlag = 1;
        }
    });
    //活动规则页确定按钮
    $('.rule-back').on('click', function () {
        $('.tc_rule').hide();
        if (!ruleFlag) {
            $('.home').show();
        } else {
            $('.main').show();
        }
    });
    // 测试
    $('.test2').on('click', function () {
        $('.test2').css('color', 'red');
        attention = false;
    });
    $('.test3').on('click', function () {
        $('.test3').css('color', 'red');
        binding = false;
    });
    $('.test4').on('click', function () {
        $('.lottory ').text('领取奖励')
        $('.test4').css('color', 'red');
        CM = false;
    });
    // 恢复首次登陆
    $('.test5').on('click', function () {
        $('.test5').css('color', 'red');
        localStorage.clear();
        window.location.href = "index.html?time=" + ((new Date()).getTime());
    })               

});
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
// 获取url参数
function getUrlParms(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURI(r[2]);
    return null;
}