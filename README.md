项目概览。  http://frechei.github.io/dynamicQuiz/index.html 

这是根据[[译] 如何恰当地学习 JavaScript](https://github.com/colin4124/colin4124.github.io/blob/master/_source/content/2013-09-28-how-to-learn-javascript-properly.md)一文用来练手的项目。  

1. 第一步 

	- 这是一个简单的提问，有单选按钮的各种选项（radio button choices），在用户完成之后显示他/她的分数。（it will show the user her score upon completion.）
	- 能够显示多种（any number of）问题和多种选择。
	- 记录用户的得分，并且在最后的页面显示最后的得分。最后的页面只显示得分，所以把移除最后的问题。（Tally the user’s score and display the final score on the last page. The last page will only show the score, so remove the last question.）

	- 用一个数组存储所有的问题。每个问题，连同它的选项和正确的答案，应该存储在一个对象里。存储问题的数组应该跟下面的类似：
		// Only one question is in this array, 
		//but you will add all the questions.
		var allQuestions = 
			[{question: "Who is Prime Minister of the United Kingdom?",
			choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
			correctAnswer:0}];

	- 用一个数组存储所有的问题。每个问题，连同它的选项和正确的答案，应该存储在一个对象里。存储问题的数组应该跟下面的类似：                 

			// Only one question is in this array, 
			//but you will add all the questions.
			var allQuestions = 
				[{question: "Who is Prime Minister of the United Kingdom?",
				choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
				correctAnswer:0}];
				

	- 当用户点击“下一个”按钮时，动态地（使用 document.getElementById 或者 jQuery）添加下个问题和从屏幕移除目前的问题。“下一个”按钮是导航此版本的提问（quiz）的唯一导航。
	- 添加客户端的数据验证（client-side data validation）：确保在进行到下个问题之前，用户回答了每个问题。
    - 添加“返回”按钮，允许用户返回并修改答案，用户能够回到第一个问题。用户已经回答的问题，确保显示单选按钮的选项，这样用户不会被迫再次回答她已经完成的问题。
