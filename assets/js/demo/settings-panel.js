$(function () {
    $(".settings-btn").on("click", function () {
        $(".settings-panel").toggleClass("open");
    });

    $("input[type=radio][name=menu-switch]").on('change', function (){
        switch(this.value) {
            case 'default':
                $(".main-wrapper").removeClass("mini overlay-menu horizontal collapsed");
                break;
            case 'horizontal': 
                $(".main-wrapper").removeClass("mini overlay-menu without-icon collapsed").addClass("horizontal");
                break;
            case 'horizontal-no-icon': 
                $(".main-wrapper").removeClass("mini overlay-menu without-icon collapsed").addClass("horizontal without-icon");
                break;
            case 'mini':
                $(".main-wrapper").removeClass("horizontal overlay-menu without-icon collapsed").addClass("mini");
                break;
            case 'overlay':
                $(".main-wrapper").removeClass("mini horizontal").addClass("overlay-menu collapsed");
                break;
        }
    });
    $("input[type=radio][name=layout-switch]").on('change', function () {
        switch(this.value) {
            case 'box':
                $(".right-area .main-content").removeClass("container-fluid").addClass("container");
                break;
            case 'full-width':
                $(".right-area .main-content").removeClass("container").addClass("container-fluid");
                break;
        }
    });
});