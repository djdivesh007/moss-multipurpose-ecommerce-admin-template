$(function () {
    $(".settings-btn").on("click", function () {
        $(".settings-panel").toggleClass("open");
    });

    $("input[type=radio][name=menu-switch]").on('change', function (){
        switch(this.value) {
            case 'default':
                $(".main-wrapper").removeClass("mini hidden-sidebar open-sidemenu horizontal");
                break;
            case 'horizontal': 
                $(".main-wrapper").removeClass("mini hidden-sidebar open-sidemenu without-icon").addClass("horizontal");
                break;
            case 'horizontal-no-icon': 
                $(".main-wrapper").removeClass("mini hidden-sidebar open-sidemenu").addClass("horizontal without-icon");
                break;
            case 'mini':
                $(".main-wrapper").removeClass("horizontal hidden-sidebar open-sidemenu").addClass("mini");
                break;
            case 'hidden':
                $(".main-wrapper").removeClass("mini horizontal open-sidemenu").addClass("hidden-sidebar");
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