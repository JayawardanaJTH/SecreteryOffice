$('#save_file').click(function(){

    var fileName = $('#fileName').val();
    var fileDes = $('#fileDescription').val();
    var file = document.getElementById("file");

    if(fileName == ""){
        error_popup('Please Fill File Name');
    }
    else if(fileDes == ""){
        error_popup('Please Fill File Description');
    }
    else if('files' in file){
        if(file.files.length == 0 ){
            error_popup('Please Select a file');
        }
        
    }
});