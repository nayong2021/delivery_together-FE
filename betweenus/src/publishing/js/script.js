$(function(){
	/*해당 모달창 닫기*/
	$(".js-modal-master-close").click(function() {
        $(this).parents(".dim-layer").hide();
    });
	
	
	/*모달창*/
	$(".js-modal-open").click(function() {
        $(".js-modal").show();
    });
});