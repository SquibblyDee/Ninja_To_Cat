// SWAP TO A PICTURE's ALT WHEN IT IS CLICKED UPON
$("div.thepicture0 img").click( 
function (){
    // console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    var temp = $(this).attr('data-alt-src');
    $("#picture0").attr('src',temp);
}

$("div.thepicture1 img").click( 
function (){
    // console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    var temp = $(this).attr('data-alt-src');
    $("#picture1").attr('src',temp);
}

$("div.thepicture2 img").click( 
function (){
    // console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    var temp = $(this).attr('data-alt-src');
    $("#picture2").attr('src',temp);
}

$("div.thepicture3 img").click( 
function (){
    // console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    var temp = $(this).attr('data-alt-src');
    $("#picture3").attr('src',temp);
});

$("div.thepicture4 img").click( 
function (){
    // console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    var temp = $(this).attr('data-alt-src');
    $("#picture4").attr('src',temp);
});