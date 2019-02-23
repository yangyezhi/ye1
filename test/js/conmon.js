Vue.directive('focus',{
    inserted:function(el){
        el.focus()
    }
})

Vue.component('foots', {
    props: ['ac1','ac2','ac3'],
    template:`
    <ul class="footer wids">
        <a href="index.html"><li v-bind:class="{red:ac1}"><img v-bind:src="ac1?'images/foot_1.png':'images/foot1.png'" alt=""/><br/>创客区</li></a>
        <a href="agent.html"><li v-bind:class="{red:ac2}"><img v-bind:src="ac2?'images/foot_2.png':'images/foot2.png'" alt=""/><br/>代理区</li></a>
        <a href="user.html"><li v-bind:class="{red:ac3}"><img v-bind:src="ac3?'images/foot_3.png':'images/foot3.png'" alt=""/><br/>个人中心</li></a>
    </ul>
`,methods:{}


})