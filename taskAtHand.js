"use strict";

function TaskAtHandApp(){
    var version = "1.0";

    function setStatus(message){
        $("#app>footer").text(message);
    }

    this.start = function(){
        $("#new-task-name").keypress(function(e){
            if(e.which == 13){
                addTask();
                return false;
            }
        })
        .focus();
        
        $("#app>header").append(version);
        setStatus("ready");
    };
}

$(function(){
    window.app = new TaskAtHandApp();
    window.app.start();
})

function addTask(){
    var taskName = $("#new-task-name").val();
    if(taskName){
        addTaskElement(taskName);
        $("#new-task-name").val("").focus;
    }
}

function addTaskElement(taskName){
    var $task = $("<li></li>");
    $task.text(taskName);
    $("#task-list").append($task);
}
