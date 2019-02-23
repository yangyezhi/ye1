/**
 * Created by Administrator on 2019/1/2.
 */
$.ajax({
    url:address+'Index/Login/is_other_login',
    type:'post',
    data:{
        token:session
    },
    success:function(e){
        //console.log(e)
        if(e.code != 1000){
            mui.toast(e.msg);
            setTimeout(function(){
                window.location.href = 'login.html';
            },1000)
        }
    }
})