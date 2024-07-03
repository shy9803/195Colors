// 스크롤 위치 값 지정 + 버튼 클릭 시 맨 위, 페이지 하단으로 이동
const $topBtn = document.querySelector(".topbtn");
const $bottomBtn = document.querySelector(".bottombtn");

$topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
$bottomBtn.onclick = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};

// 이동 섹션 메뉴창 열기
$(function () {
    $(".move_detail").hide();
    $(".movebtn").click(function () {
        $(".move_detail").fadeToggle(300);
    });
    // 드롭 다운
    $(".move_detail ul.huetone_sec").hide();
    $(".move_detail ul.huetone").click(function () {
        $("ul", this).slideToggle(300);
    });
});

// 레이어 팝업 기능
$(function(){
	$("#layer").hide()
	
	$(".infobtn").click(function(){
		$("#layer").show();
        
		$(".upbtn").click(function(){
			$("#layer").hide();
		});
		return false;
	});
});
