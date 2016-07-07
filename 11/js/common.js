/**
 * Created by hww on 2016/6/13.
 */
/*创建项目模态框的调用*/


$(document).ready(function () {

});
$(function () {

    /*选择框选择*/
    $(".method-item").click(function () {
        var This = $(this);
        var targetNode = This.children(".radio_icon");
        if (targetNode.hasClass('ck')) {
            This.siblings(".method-item").children(".radio_icon").removeClass("ck");
        } else {
            targetNode.addClass("ck");
            This.siblings(".method-item").children(".radio_icon").removeClass("ck");
        }
    })

    /*设置页面倒计时，时间到页面跳转*/
    var second = 5; // 倒计时时间//几秒
    $(".timer").html(second);//初期值设置
    function changeTime() {
        if (second == 0) {
            window.location.href = "https://www.baidu.com/";   // 到时间后的操作
        }
        if (second > 0) {
            second = second - 1;
            curnum = second;
            $(".timer").html(curnum);
        }
    }
    $(".confirm_btn").click(function (e) {
        e.preventDefault();
        $("#pay_success_modal").css("display", "block");
        $(".modal-wrapper").addClass("fadeInDown");
        setInterval(changeTime, 1000);
        /*            $("#pay_fail_modal").css("display", "block");
         $(".modal-wrapper").addClass("fadeInDown");*/
        /* $("#wx_code_modal").css("display", "block");
         $(".modal-wrapper").addClass("fadeInDown");*/
    })


})
