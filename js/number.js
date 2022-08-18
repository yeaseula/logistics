




        //숫자 카운팅

        var isVisible = false;

        $(window).on('scroll',function() {
        if (checkVisible($('.number'))&&!isVisible) {
                var helpedNumbering = 890;
                var storesNumbering = 137;
                var adoptedNumbering = 740;
                var satiNumbering = 600;

                //배경숫자 변수

                var DeliveryBack = 890;
                var ContinueBack = 137;
                var TonsBack = 740;
                var SatisBack = 600;

                $({
                    val: 0
                }).animate({
                    val: helpedNumbering
                }, {
                    duration: 1500,
                    step: function () {
                        var num = helpedNumberingCommas(Math.floor(this.val));
                        $(".count:eq(0)").text(num);
                    },
                    complete: function () {
                        var num = helpedNumberingCommas(Math.floor(this.val));
                        $(".count:eq(0)").text(num);
                    }
                });

                function helpedNumberingCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }

                $({
                    val: 0
                }).animate({
                    val: storesNumbering
                }, {
                    duration: 3000,
                    step: function () {
                        var num2 = storesNumberingCommas(Math.floor(this.val));
                        $(".count:eq(1)").text(num2);
                    },
                    complete: function () {
                        var num2 = storesNumberingCommas(Math.floor(this.val));
                        $(".count:eq(1)").text(num2);
                    }
                });

                function storesNumberingCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }

                $({
                    val: 0
                }).animate({
                    val: adoptedNumbering
                }, {
                    duration: 1700,
                    step: function () {
                        var num = adoptedNumberingCommas(Math.floor(this.val));
                        $(".count:eq(2)").text(num);
                    },
                    complete: function () {
                        var num = adoptedNumberingCommas(Math.floor(this.val));
                        $(".count:eq(2)").text(num);
                    }
                });

                function adoptedNumberingCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }

                $({
                    val: 0
                }).animate({
                    val: satiNumbering
                }, {
                    duration: 2500,
                    step: function () {
                        var num = satiNumberingCommas(Math.floor(this.val));
                        $(".count:eq(3)").text(num);
                    },
                    complete: function () {
                        var num = satiNumberingCommas(Math.floor(this.val));
                        $(".count:eq(3)").text(num);
                    }
                });

                function satiNumberingCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }

                //배경숫자 카운팅

                $({
                    val: 0
                }).animate({
                    val: DeliveryBack
                }, {
                    duration: 1500,
                    step: function () {
                        var num = DeliveryBackCommas(Math.floor(this.val));
                        $(".count2:eq(0)").text(num);
                    },
                    complete: function () {
                        var num =DeliveryBackCommas(Math.floor(this.val));
                        $(".count2:eq(0)").text(num);
                    }
                });

                function DeliveryBackCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }

                $({
                    val: 0
                }).animate({
                    val: ContinueBack
                }, {
                    duration: 3000,
                    step: function () {
                        var num2 = ContinueBackCommas(Math.floor(this.val));
                        $(".backUl>ul>li:eq(1)").text(num2);
                    },
                    complete: function () {
                        var num2 = ContinueBackCommas(Math.floor(this.val));
                        $(".backUl>ul>li:eq(1)").text(num2);
                    }
                });

                function ContinueBackCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }

                $({
                    val: 0
                }).animate({
                    val: TonsBack
                }, {
                    duration: 1700,
                    step: function () {
                        var num = TonsBackCommas(Math.floor(this.val));
                        $(".backUl>ul>li:eq(2)").text(num);
                    },
                    complete: function () {
                        var num = TonsBackCommas(Math.floor(this.val));
                        $(".backUl>ul>li:eq(2)").text(num);
                    }
                });

                function TonsBackCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }

                $({
                    val: 0
                }).animate({
                    val: SatisBack
                }, {
                    duration: 2500,
                    step: function () {
                        var num = SatisBackCommas(Math.floor(this.val));
                        $(".backUl>ul>li:eq(3)").text(num);
                    },
                    complete: function () {
                        var num = SatisBackCommas(Math.floor(this.val));
                        $(".backUl>ul>li:eq(3)").text(num);
                    }
                });

                function SatisBackCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            
            isVisible=true;
        };

      });

        function checkVisible( elm, eval ) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();   

        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
        
    }