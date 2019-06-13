

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
            title: '党的（ ）是党的根本性建设，决定党的建设方向和效果。',
            topic_1: '制度建设',
            topic_2: '组织建设',
            topic_3: '政治建设',
            topic_4: '思想建设',
            right: 'C'
        },
        // 1
        {
            title: '党的十九大召开时间（ ）：',
            topic_1: '2017年10月15日至2017年10月21日',
            topic_2: '2017年10月16日至2017年10月22日　',
            topic_3: '2017年10月17日至2017年10月23日',
            topic_4: '2017年10月18日至2017年10月24日',
            right: 'D'
        },
        // 2
        {
            title: '中国共产党以马克思列宁主义、毛泽东思想、邓小平理论、"三个代表"重要思想、科学发展观、（ ）作为自己的行动指南。',
            topic_1: '中国特色社会主义思想',
            topic_2: '习近平新时代中国特色社会主义思想',
            topic_3: '新时期中国特色社会主义思想 ',
            topic_4: '习近平新时期中国特色社会主义思想',
            right: 'B'
        },
        // 3
        {
            title: '标志着中国工人阶级开始独立的政治力量登上历史舞台的事件是（）',
            topic_1: '中国共产党的成立  ',
            topic_2: '五四运动',
            topic_3: '南昌起义',
            topic_4: '二七大罢工',
            right: 'B'
        },
        //4
        {
            title: '1936年12月12日发生的（），对促成以国共两党合作为基础的抗日民族同一战线的建立，起了重要的作用。',
            topic_1: '西安事变',
            topic_2: '华北事变',
            topic_3: '七七事变',
            topic_4: '两广事变',
            right: 'A'
        },
        // 5
        {
            title: '1931年11月在瑞金举行的第一次全国苏维埃代表大会，宣布成立中华苏维埃共和国临时中央政府。（ ）被选为临时中央政府主席。',
            topic_1: 'A、林柏渠',
            topic_2: '瞿秋白',
            topic_3: '毛泽东',
            topic_4: '周恩来',
            right: 'C'
        },
        // 6
        {
            title: '党章规定什么样的人面向党旗宣誓：( )',
            topic_1: '申请入党的人',
            topic_2: '预备党员 ',
            topic_3: '正式党员',
            topic_4: '优秀党员',
            right: 'B'
        },
        //7
        {
            title: '预备党员的预备期一般为：（ ）',
            topic_1: '一年 ',
            topic_2: '二年',
            topic_3: '三年',
            topic_4: '四年',
            right: 'A'
        },
        //8
        {
            title: '坚持解放思想，实事求是，与时俱进，（）。党的思想路线是一切从实际出发，理论联系实际，实事求是，在实践中检验真理和发展真理。',
            topic_1: '求真务实',
            topic_2: '艰苦奋斗',
            topic_3: '执政为民',
            topic_4: '清正廉洁',
            right: 'A'
        },
        //9
        {
            title: '“没有革命的理论，就不会有革命的运动”这一科学论断是由（ ）提出来的',
            topic_1: '叶挺 ',
            topic_2: '毛泽东',
            topic_3: '刘少奇',
            topic_4: '列宁 ',
            right: 'D'
        },
        // 10
        {
            title: '1927年9月至10月，毛泽东领导秋收起义部队进行了( )，从组织上确立了党对军队的绝对领导，为建立一支无产阶级领导下的新型人民军队奠定了基础。',
            topic_1: '井冈山会师  ',
            topic_2: '南昌起义 ',
            topic_3: '三湾改编',
            topic_4: '遵义会议',
            right: 'C'
        },
        // 11
        {
            title: '1937年7月7日，日本侵略军在北平西南的卢沟桥附近，突然向中国驻军进攻，中国官兵奋起抵抗。中华民族全面抗战从此开始。这一事件史称（ ）。',
            topic_1: '九一八事变 ',
            topic_2: '一二八事变',
            topic_3: '七七事变',
            topic_4: '两广事变',
            right: 'C'
        },
        // 12
        {
            title: '党的最高领导机关是（ ）',
            topic_1: '人民代表大会 ',
            topic_2: '中央委员会',
            topic_3: '党组',
            topic_4: '中央政治局',
            right: 'B'
        },
        // 13
        {
            title: '党的全国代表大会每（ ）举行一次。',
            topic_1: '2年',
            topic_2: '3年',
            topic_3: '5年',
            topic_4: '10年',
            right: 'C'
        },
        // 14
        {
            title: '《党章》规定，中国共产党的宗旨是（ ）。',
            topic_1: '全心全意为人民服务',
            topic_2: '实现社会主义现代化',
            topic_3: '坚持群众路线',
            topic_4: '坚持党的基本路线和基本纲领不动摇',
            right: 'A'
        },
        // 15
        {
            title: '中国共产党党员是（ ）的有共产主义觉悟的先锋战士。',
            topic_1: '中国无产阶级',
            topic_2: '中国工人阶级 ',
            topic_3: '中国先进阶级',
            topic_4: '中国劳动人民',
            right: 'B'
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
                } else {
                    $('.topicbg').children('p:eq(1)').addClass('erro');
                    $('.topicbg').siblings('li').each(function(index,item){
                        if ($(item).text().includes(right_val)) {
                            $(item).children('p:eq(1)').addClass('right')
                        } 
                    })   
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
                    showMask()
                    if ( $("."+current_clickclass).text() == '点击查看') {
                        $('.tc_5').show()
                    } else {
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
        } else {
            //  关闭
            hideMask();
            $('.tc_2').hide();
        }
    };
    //异网流量弹窗 1（关闭）
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
    // 好友列表
    function friendList() {
        var list = [{ 'name': '你的好友猪猪你的好友猪猪1', 'time': 'X月X日', 'count': '点亮一颗星星' },
        { 'name': '你的好友猪猪你的好友猪猪2', 'time': 'X月X日', 'count': '点亮一颗星星' },
        { 'name': '你的好友猪猪你的好友猪猪3', 'time': 'X月X日', 'count': '点亮一颗星星' },
        { 'name': '你的好友猪猪你的好友猪猪5', 'time': 'X月X日', 'count': '点亮一颗星星' },
        { 'name': '你的好友猪猪你的好友猪猪6', 'time': 'X月X日', 'count': '点亮一颗星星' },
        { 'name': '你的好友猪猪你的好友猪猪7', 'time': 'X月X日', 'count': '点亮一颗星星' }
        ]
        for (var i = 0; i < list.length; i++) {
            var li = '<li><p class="friend_nick">' + list[i].name + '</p><p>' + list[i].time + '</p><p>' + list[i].count + '</p></li>'
            $('.friend_list').append(li)
        }
    }
    friendList()
    // 限制名称字符长度
    $('.friend_nick').text($('.friend_nick').text().substring(0, 6) + '...')
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
    //点亮八颗星星  
    $('.test6').on('click', function () {
        $('.test6').css('color', 'red');
        for(i=rightnumArr.length; i<8 ; i++){
            rightnumArr.push('right');
        }
        $('.mian_list').children('li:eq('+(rightnumArr.length-1)+')').css({"width":".61rem","height":".59rem","background-image":"url(images/star_bling.png)"}).prevAll('li').css({"width":".61rem","height":".59rem","background-image":"url(images/star_bling.png)"});
    });
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
