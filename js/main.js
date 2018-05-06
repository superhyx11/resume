
/*
 *--------------字符串命名说明--------------------
 * introduce = 介绍
 * sty1 ==the first  style   第一种样式
 * trs1 = the first transition language   第一组过渡语
 * lingtheight == gramm lightheight     高亮语法
 * scrollRight == 源码版向右移动
 * drawBoard ==画板，用于盛放简历内容
 * resume == 简历内容
 * str == 总的拼接字符串
 * 
 */

/*字符拼接区*/
	 var introduce='\n  \/*大家好，我是沈雨琦,我的朋友们都叫我琦琦*\/\n  \/*其实也没什么事情，就是给你们做一个动态的自我介绍*\/';
	var sty1='\n   body{\n    transition: all 1s;\n    background:#3f5263;\n     }\n    #sourceBoard{\n    font-family:"微软雅黑";\n    overflow:auto;\n    border:3px solid black;\n    border-radius:5px;\n    width:500px;\n    height:400px;\n    font-size:14px;\n    font-weight:900;\n  }';
	var trs1 = '\n  \/*似乎有点单调，那么就让语法高亮吧*\/';
    var lightheight = '\n  #sourceBoard{\n   background:#ffffcc\n  }\n    .token.property{\n   color:#905;\n   }\n   .token.comment{\n     color:#cc3300;\n}\n    .token.selector{\n    color:#690;\n     }\n  '; 
    var trs2 = '  \/*接下来，我需要准备一下我的自我介绍了。先将刚才写的样式踢到一边儿去*\/'
    var scrollRight = '\n  #sourceBoard{\n    -webkit-transform: rotateY(10deg);\n    -moz-transform: rotateX(10deg);\n     position:relative;\n    left:65%; } \n    \/*OK,接下来开始准备模板*\/\n  '
    var drawBoard = '#drawBoard{\n  color:#fff;\n  float:left;\n  position:relative;\n  top:-440px;\n  width:860px;\n  height:600px;\n  border:5px solid black;\n   border-radius:5px;\n  overflow:auto;\n  }'
    var resume= '\n  # <center>沈雨琦_一个一般般有趣的girl</center>\n  ----------------------------------------------\n  ## 身高体重: ## \n  ----------------------------------------------\n  ### 别想了，这是不可能告诉你们的 ### \n   \n  ### 兴趣爱好 ### \n----------------------------------------------\n      1.帅哥（越帅越好）\n  2.赚钱（越多越好）\n  3.偶尔玩一玩王者荣耀（被别人追着打的那种）\n  4.斗地主总是输，我的朋友们都不想给我送欢乐豆了\n  5.我还会玩扫雷，一般般厉害\n  6.我很能吃\n  ### 废话板块 ### \n  其实事情的经过是这样的  \n  我的闺蜜小潘是一个软件工程师\n  昨天她在群里给我和小黄分享了一个动态简历，是的,就像你看到的这个一样  \n  当时觉得没什么意思，也就这样吧  /n  但是我的闺蜜小黄花了一天就做出来了，所以我很不服气，就给我自己也来了一个 \n  就这么简单，结束了，嘻嘻  \n  ### 感谢名单\n  ----------------------------------------------\n  \n  1.感谢小黄的技术指导  \n  2.感谢小潘没什么用的兴趣启蒙  \n  好了，结束了
  var trs3 = '\n  \/*对了，这个简历是markdown语法，应该改成html才看着舒服。\n  *接下来变个魔术\n  *倒数3个数字\n  *3......\n  *2......\n  *1......\n  *OK,这就是我花了一晚上做出来的没什么用的介绍，祝享用愉快！ */'
	var str = introduce.concat(sty1).concat(trs1).concat(lightheight).concat(trs2).concat(scrollRight).concat(drawBoard).concat(resume).concat(trs3);

	/*常规定义区*/
	var styleTag = document.getElementById('styleTag');
	var sourceBoard = document.getElementById('sourceBoard');
	var n = 0;

	 
/*源码版控制区*/	 
var controller= setInterval(put,90);
	 function put(){

			/*吐代码区域*/
			n++;
		
			if(n>0&&n<=929){
					sourceBoard.innerHTML =str.substring(0,n)
		
		
			    styleTag.innerHTML =str.substring(0,n);
	
			}
			
			/*溢出下拉*/
			if(n>=380){
					$('#sourceBoard').animate({
						scrollTop: 1000
						}, 50);
			}
			/*代码高亮*/
			if(n>=465&&n<=929){
				sourceBoard.innerHTML =  Prism.highlight(str.substring(0,n), Prism.languages.css);
			
			}
		
		/*创建pre简历板*/
			if(n>=672&&n<=929){
				
				if(document.getElementById('drawBoard')){
					console.log('drawBoard元素已经存在');
				
				}
				else{
					var drawBoard = document.createElement('pre');
				    drawBoard.id = 'drawBoard';
				    document.body.appendChild(drawBoard);
				  
				} 

			}
			
			/*简历板溢出下拉*/
			if(n>929&&n<1885){
			var drawBoard = document.getElementById('drawBoard');
				drawBoard.innerHTML =str.substring(929,n);
				
					$('#drawBoard').animate({
						scrollTop: 1000
						}, 50);
			}

		/*简历板写完之后，需要在sourceBoard中写入魔术代码*/	
	     if(n>=1885){
	     
	     	  sourceBoard.innerHTML =  Prism.highlight(str.substring(0,929), Prism.languages.css)+Prism.highlight(str.substring(1883,n), Prism.languages.css);
	     	  
	     	  
	     }
	     
	     /*魔术代码*/
	     if(n>=1977){
	     	var drawBoard = 	document.getElementById('drawBoard');
	     	drawBoard.innerHTML =marked(str.substring(929,1885));
	     	
	     		if(n>str.length){window.clearInterval(controller)}
	     }
				
		
				
		
			console.log(n)
			
			
		
	
};
