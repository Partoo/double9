<template>  
  <div id="wrap">
    <div class="content">
     <span id="multi-1" class="card" v-bind:class="currentColor">{{multi_1}}</span>
     <span class="static">×</span>
     <span id="multi-2" class="card" v-bind:class="currentColor">{{multi_2}}</span>
     <span class="static">=</span>
     <span id="result" class="card yellow"><i>?</i></span>
   </div>

    <div class="answers">
         <span class="card orange" id="{{answer}}" v-on:click="isCorrect($event)" v-for="answer in answers">{{answer}}</span>
    </div>  
 </div>
 <div id="cloudy">
  
  </div>
    <footer>                
          <span>机会:{{life}}</span>
        <span class="animated result">分数:{{score}}</span>      
    </footer>
 <div class="overlay">
  <div class="mymodal">
   <p>{{comment}}</p>
   <p><a href="#" class="button" v-on:click="init()">再来一次</a></p>
 </div>
</div>

</template>

<script>
  module.exports = {
    data:function(){
      return{
        multi_1:1,
        multi_2:1,
        currentColor:'red',
        animateState:false,
        right:true,
        correct:1,
        uAnswer:1,
        life:2,
        score:0,
        answers:[],
        comment:''
      }
    },
    ready:function(){
      this.gameStart();
    },
    methods:{
      init:function(){
        this.life = 2;
        this.score = 0;
        $('.overlay').hide();
      },
      gameStart:function(){        
        this.multi_1 = this.random();
        this.multi_2 = this.random();
        this.correct = this.multi_1*this.multi_2;
        this.randomAnswers();
        this.animation();
        $('.overlay').hide();
      },
      gameOver:function(){
        $('.overlay').show();
        if (this.score>=100) {
          this.comment = '宝贝全对呢,但要注意保护视力喔'
        }else{
          this.comment = '宝贝得了' + this.score + ',加油!'
        };
      },
      random:function(){
        return Math.floor((Math.random()*9)+1);
      },
      randomAnswers:function(){
        var a = this.correct;
        var b = this.correct + this.random();
        var c = this.correct + 10;
        this.answers = this.shuffleArray([a,b,c]);
      },
      genAnswers:function(){
        var answers = []; 
        var answer1 =  this.correct;
      },
      isCorrect:function(e){
        this.uAnswer = e.target.id;      
        if (this.uAnswer == this.correct) {
          this.score+=5; 
        }else{
          this.life=this.life -1;
        }
        if (this.life <=0 || this.score>=100) {
          this.gameOver()
        }else{
          this.gameStart();       
        }
      },
      shuffleArray:function(array){
        for (var i = 2; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      },

      getColor:function(){
       var colors=['red','orange','yellow','green','cyan','blue','purple'];

       var max = colors.length - 1;
       if (this.i >= max) {
        this.i = 0;
      };
      this.i ++;

      this.currentColor =  colors[this.i];
    },

    animation:function(){
      var myBox = $('.content span');
      myBox.addClass('animated bounceIn');
      myBox.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
        function(e) {
          myBox.removeClass('animated bounceIn rollIn');
        });

    }
  }
}
</script>