$(function(){
    // 등록카드 정보조회
    // $('.regularDeliveryPayInfo .cardSearch').bind('click', function() {
    //     $('.regularDeliveryPayInfo').find('.ec-base-tooltip').show();
    // });
    $(document).on('click', '.ec-base-tooltip .close', function() {
        $(this).parent().hide();
        $(this).parent().parent().find('span.arrow').hide();
        return false;
    });
});