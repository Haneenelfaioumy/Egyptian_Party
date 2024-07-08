
// left menu
$('.menu').click(()=>{
    $('#leftMenu').animate({ 'width':'250px' , 'padding':'2rem'},300);
    $('.menu').animate({'margin-left':'250px'},300);
})
// closeBtn 
$('#closeBtn').click(()=>{
    $('#leftMenu').animate({ 'width':'0','padding':0 },300);
    $('.menu').animate({'margin-left':'0'},300);
})

// ========================================
// scrolling menu
$('#leftMenu a').click(function() {
    let sectionId = $(this).attr('href');
    let sectionPosition = $(sectionId).offset().top;
    $('html,body').animate({'scrollTop':sectionPosition},2000);
});

// ========================================
// siger
let singersH = $(".singers-info h3");

// for(let i=0;i<singersH.length;i++){
//     singersH[i].addEventListener('click',()=>{
//         // We use jQuery's siblings() method to select both .inner and .inner1 elements that are siblings of the clicked <h3> element.
//         $(singersH[i]).siblings('.inner1, .inner').slideToggle(1000);
//         // console.log($(singersH[i]).find('.inner'));
//     });
// }
$(singersH).click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

// ===========================================
// textarea
let msg = $("textarea");
let charsRminingNum = $("#charsNum");
let maxChars = charsRminingNum.text();
msg.on("input",()=>{
    // console.log(`msg = ${msg.val()} \n length = ${msg.val().length}`);
    let currCharsNum = msg.val().length;
    let remaining = maxChars - currCharsNum;
    if(remaining <= 0){
        charsRminingNum.html(`your available character finished`);
    }
    else{
        charsRminingNum.text(remaining);
    }
});

// ======================================
// countDownToTime
$(window).on('load',()=>{
    countDownToTime('10 october 2025 9:56:00');
});
function countDownToTime(seletedDate){
    let future = new Date(seletedDate).getTime(); // get msecs
    future = future/1000;
    let now = new Date().getTime();
    now = now/1000;

    let diff = future-now; // secs

    let days = Math.floor(diff / (60*60*24));
    // console.log(days+'D'); // -925

    let hours = Math.floor( (diff - (days*(24*60*60))) / (60*60) );
    // console.log(`${hours} h`); //9

    let mins = Math.floor( (diff - (days*(24*60*60)) - (hours*60*60) ) / 60);
    // console.log(`${mins} m`);

    let secs = Math.floor( (diff - (days*(24*60*60)) - (hours*60*60) - (mins*60) ));
    // console.log(`${secs} s`);

    $('.days').html(`${days} D`);
    $('.hours').html(`${hours} h`);
    $('.mins').html(`${mins} m`);
    $('.secs').html(`${secs} s`);

    setInterval(()=>{
        countDownToTime(seletedDate)
    }, 1000);
}
