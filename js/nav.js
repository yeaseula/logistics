        $(document).ready(function () {
            $("#ham").click(function () {
                $("#nav").animate({ width: "toggle" }, 400);
            });
        });

        $(window).resize(function () {
            if (window.innerWidth >= 600) {

                $("#nav").show();
            }
        });

        $(window).resize(function () {
            if (window.innerWidth <= 1300) {
                $("#nav").hide();
            }
        });