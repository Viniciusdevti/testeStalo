$(function() {

    console.log('Init');

    $('.fone').mask('(99) 9?9999-9999');

    let uploader;

    const uploadFile = function() {
        uploader = new plupload.Uploader({
            runtimes : 'html5,flash,silverlight,html4',
            browse_button : 'pickfiles', // you can pass an id...
            container: document.getElementById('pluploadFile'),
            url : 'scripts/upload.php',
            flash_swf_url : 'assets/js/plupload/plupload-3.1.2/Moxie.swf',
            silverlight_xap_url : 'assets/js/plupload/plupload-3.1.2/Moxie.xap',

            unique_names: true,
            multi_selection: false,

            filters : {
                max_file_size : '2mb',
                mime_types: [
                    {title : "Arquivos PDF", extensions : "pdf"},
                    {title : "Arquivos de Imagem", extensions : "jpg,png,jpeg"},
                ]
            },
            init: {
                PostInit: function() {
                },
                FilesAdded: function(up, files) {
                    plupload.each(files, function(file) {
                        $('.uploaded_file-label').prop('data', file.id);
                        $('.uploaded_file-label').html(file.name);
                        $('.uploaded_file-container').css({display: 'flex'});

                        $('#file').val( file.name );
                    });

                    $('#pickfiles').addClass('d-none');
                    $('.uploaded_file-container').removeClass('d-none');
                }
            }
        });

        $(document).on('click', '#remove-cv', function(e) {
            e.preventDefault();

            uploader.splice(0,1);

            $('#pickfiles').removeClass('d-none');
            $('.uploaded_file-container').addClass('d-none');
            $('.uploaded_file-label').prop('data', '');
            $('.uploaded_file-label').html('');

        });

        uploader.init();
    };

    uploadFile();

    const navigate = function(event) {

        event.preventDefault();

        const el = $(this);

        let section = el.prop('href').replace(location.href, '');

        console.log( 'navigate', section );

        $('html, body').animate({
            scrollTop: $(section).offset().top - 89
        }, 1000, 'easeOutQuad');

    };

    const initSliders = function() {

        $('.services_carousel').slick({
            mobileFirst: true,
            dots: false,
            infinite: false,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: 0,
            variableWidth: true,
            adaptiveHeight: true,
            prevArrow: $('.services_carousel_arrow_prev'),
            nextArrow: $('.services_carousel_arrow_next'),
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        adaptiveHeight: false,
                        centerMode: false
                    }
                }
            ]
        });

        $('.services_process_carousel').slick({
            mobileFirst: true,
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: 'unslick'
                }
            ]
        });

        $('.carousel-blog, .carousel-ebooks').slick({
            mobileFirst: true,
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: 'unslick'
                }
            ]
        });

    };

    initSliders();

    $(document).on('click', '.btn-navigate', navigate);

    $(window).on('resize', initSliders);

    $('#navbarCollapse').on('shown.bs.collapse', function () {
        $('.navbar-toggler').addClass('active');

        $('.navbar-toggler').find('.fa-bars').addClass('d-none');
        $('.navbar-toggler').find('.fa-times').removeClass('d-none');
    }).on('hidden.bs.collapse', function () {
        $('.navbar-toggler').removeClass('active');

        $('.navbar-toggler').find('.fa-bars').removeClass('d-none');
        $('.navbar-toggler').find('.fa-times').addClass('d-none');
    });

    $('.stack-item_content').on('click', '.btn-stack-more', function(event) {
        event.preventDefault();

        const el = $(this);
        const _target = el.closest('.stack-item_content').find('.stack-item_content_stacks');

        if ( _target.hasClass('closed') ) {
            _target.removeClass('closed');

            el.find('.more').addClass('d-none');
            el.find('.less').removeClass('d-none');
        } else {
            _target.addClass('closed');
            el.find('.more').removeClass('d-none');
            el.find('.less').addClass('d-none');
        }

    });

    $('.form-validate').validate({
        rules: {
            nome: 'required',
            email: {
                required: true,
                email: true
            },
            telefone: 'required',
            mensagem: 'required'
        },
        errorElement: 'small',
        errorPlacement: function ( error, element ) {
            error.addClass( "help-block" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).closest('.form-group').addClass( "has-error" ).removeClass( "has-success" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).closest('.form-group').addClass( "has-success" ).removeClass( "has-error" );
        }
        ,
        submitHandler: function(form) {

            $(form).find('button[type="submit"]').addClass('active');
            $(form).find('button[type="submit"]').addClass('finished');

            grecaptcha.render( 'submitContato', {
                'sitekey': '6LfgKrUUAAAAAHM9dIUQI2sd_j5DvV-0vUhtDnTy',
                'callback': function () {

                    return new Promise(function (resolve, reject) {

                        $(form).ajaxSubmit({
                            clearForm: true,
                            resetForm: true,
                            beforeSubmit: function() {
                                $(form).find('button[type="submit"]').addClass('active');
                            },
                            error: function() {
                                $(form).find('button[type="submit"]').removeClass('active');
                            },
                            success: function() {
                                $(form).find('button[type="submit"]').addClass('finished');
                            }
                        });

                    });
                }
            });

            grecaptcha.execute();

            return false;
        }
    })

});
