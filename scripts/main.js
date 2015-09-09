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
    var item = 0;
    //得分
    var grade = 0;
    //正确答案
    var correct = -1;
    //记录所有选项
    var chooseArr = [];

    //下一题button点击事件
    $('body').on('click','button#next',function(event){
        event.preventDefault();
        var html = '';
        //加分项放错位置，导致最后一个不能加分
        var choose = $('input:radio[name="answer"]:checked').val();

        //添加客户端的数据验证（client-side data validation）：
        // 确保在进行到下个问题之前，用户回答了每个问题。
        if (item >= 1){
            if (choose == null){
                $('form').next().empty();
                $('<p>choose one answer</p>').insertAfter('form');
                return false;
            }
            $('button#before').show();
        }

        //每点击一下，就动态地添加下个问题和从屏幕移除目前的问题
        if(item < allQuestions.length){
            //显示问题和选项
            html += '<p>问题：' + allQuestions[item].question + '</p>';
            for (var i = 0; i < allQuestions[item].choices.length; i++){
                html += '<input type="radio" name="answer" value="' + i + '" ';
                //捣腾这个记录历史，自己也是晕了
                if (chooseArr[item+1] !== undefined && chooseArr[item+1] == i){
                    html += 'checked="true"';
                }
                html += ' />'  + allQuestions[item].choices[i] + '<br>';
            }

            $(this).text('下一题');

            //检测正确答案，留待下次click时使用
            correct = allQuestions[item].correctAnswer;
        }

        //这里chooseArr从一开始才有数据
        chooseArr[item] = choose;

        //alert(choose);
        alert(chooseArr);
        item++;

        if(item == allQuestions.length + 1){
            for (var i=0; i < allQuestions.length; i++){
                if(chooseArr[i+1] == allQuestions[i].correctAnswer){
                    grade += 25;
                }
            }
            html += '<p>最后得分：' + grade + '</p>';

            $(this).hide();
            $('button#before').hide();
        }
        $('#quiz').html(html);
    });

    $('body').on('click','button#before',function(event){
        event.preventDefault();

        item--;
        var choose = chooseArr[item];
        if (item > 0){
            var html = '<p>问题：' + allQuestions[item-1].question + '</p>';
            for (var i = 0; i < allQuestions[item-1].choices.length; i++){
                html += '<input type="radio" name="answer" value="' + i + '" ';
                if (choose == i){
                    html += 'checked="true"';
                }
                html += ' />'  + allQuestions[item-1].choices[i] + '<br>';
            }
            $('button#before').show();
            $('button#next').text('下一题');
        }
        $('#quiz').html(html);

    });

});