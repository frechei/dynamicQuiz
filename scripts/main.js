/**
 * Created by felix on 15-9-7.
 */
$(document).ready(function(){
    //用数组将问题、选项和答案存起来
    var allQuestions = [
        {
            question: "Who is Prime Minister of the United Kingdom?",
            choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
            correctAnswer:0
        },
        {
            question: "1973年的动作电影《囚禁》的主演是谁？",
            choices: ["Amitabh Bachchan", "Danny Boyle", "Dev Patel", "Jamal Malik"],
            correctAnswer:0
        },
        {
            question: "印度国徽中有三只狮子，狮子下面写的是什么字？",
            choices: ["The truth alone triumphs真理能战胜一切", "Lies alone triumph谎言能战胜一切",
                "Fashion alone triumphs流行能战胜一切", "Money alone triumphs金钱能战胜一切"],
            correctAnswer:0
        },
        {
            question: "教义中描述的罗摩神右手里握着的是什么？",
            choices: ["A flower一朵花", "A sword一把剑", "A child一个小孩", "A bow and a arrow一副弓箭"],
            correctAnswer:3
        }];

    //allQuestions第item项
    var item = $('p').data("item") || 0;
    //得分
    var grade = 0;
    //正确答案
    var correct = -1;
    //记录所有选项
    var chooseArr = [];

    var $button = $('button');

    var loadHtml = function(item) {
        var html = "";
        html += '<p data-item="'+ item + '">问题' + (item+1) + '：' + allQuestions[item].question + '</p>';
        for (var i = 0; i < allQuestions[item].choices.length; i++) {
            html += '<input type="radio" name="answer" value="' + i + '" ';
            if (chooseArr[item] !== undefined && chooseArr[item] == i){
                    html += 'checked="true"';
                }
            html += ' />'  + allQuestions[item].choices[i] + '<br>';
        } 
        return html;
    };

    var recordChoose = function(item) {
        chooseArr[item] = $("input:checked").val();
        console.log(chooseArr);
        return chooseArr;
    };

    //开始button点击事件
    $('button#begin').click(function(event) {
        item = $('p').data("item") || 0;
        event.preventDefault();
        var $button_begin = $(this);

        $button.hide();
        $button_begin.siblings('#next').show();

        $('#quiz').html(loadHtml(item));
    });

    //下一题button点击事件
    $('button#next').click(function(event) {
        event.preventDefault();
        var $button_next = $(this);
        item = $('p').data("item") || 0;
        
        recordChoose(item);

        item += 1;


        if (item == allQuestions.length-1) {
            $button.hide();
            $('button#total').show();
            $('button#before').show();
        }else {
            $button.hide();
            $('.nb').show(); 
        }      

        $('#quiz').html(loadHtml(item));
        
    });

    $('button#before').click(function(event) {
        event.preventDefault();
        var $button_before = $(this);
        item = $('p').data("item") || 0;

        recordChoose(item);

        item -= 1;
        
        if (item == 0) {
            $button.hide();
            $('button#next').show();
        }
        else {
            $button.hide();
            $('button.nb').show();
        }
        
        $('#quiz').html(loadHtml(item));
    });

    $('button#total').click(function(event) {
        event.preventDefault();
        item = $('p').data("item") || 0;
        $button.hide();

        var answer = recordChoose(item);

        for (var i = 0; i < answer.length; i++) {
            if (answer[i] == allQuestions[i].correctAnswer) {
                grade += 25;
            }
        }

        var html = '总分：' + grade + '分！'
        $('#quiz').html(html);
    });
});