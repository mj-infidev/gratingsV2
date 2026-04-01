/*
 * Mega Navigation Menu - Shared across all pages
 * 6 Main Products with sub-product dropdowns
 */
$(document).ready(function () {

    // Calculate relative path to root
    var path = window.location.pathname;
    var getRel = function () {
        // Detect depth based on current folder structure
        if (path.indexOf('/products/steel-grating/') !== -1 ||
            path.indexOf('/products/stainless-steel/') !== -1 ||
            path.indexOf('/products/aluminium/') !== -1 ||
            path.indexOf('/products/frp/') !== -1 ||
            path.indexOf('/products/more/') !== -1) {
            return "../../";
        } else if (path.indexOf('/services/') !== -1) {
            return "../";
        }
        return "";
    };
    var rel = getRel();

    // Mega menu HTML for desktop
    var megaMenuHTML = '<li class="nav-item mega-dropdown dropdown" style="position:static;">' +
        '<a class="nav-link dropdown-toggle nav-link-ltr mega-products-link text-white" href="' + rel + 'products.html" role="button" data-toggle="dropdown" aria-expanded="false">Products</a>' +
        '<div class="dropdown-menu mega-menu-container red-hat fw-600">' +
        '<div class="row">' +

        // Col 1: Steel Grating Products
        '<div class="mega-col mega-col-1">' +
        '<div class="mega-heading"><a href="' + rel + 'steel_grating.html">STEEL GRATING PRODUCTS</a></div>' +
        '<a class="mega-link" href="' + rel + 'products/steel-grating/steel_grating_standard_panel.html"><i class="bi bi-chevron-right"></i>Steel Grating Standard Panel</a>' +
        '<a class="mega-link" href="' + rel + 'products/steel-grating/steel_grating_fabricated_rectangular.html"><i class="bi bi-chevron-right"></i>Fabricated Rectangular Grating Panels</a>' +
        '<a class="mega-link" href="' + rel + 'products/steel-grating/steel_grating_fabricated_cutout.html"><i class="bi bi-chevron-right"></i>Fabricated Grating Panels with Cut-Out</a>' +
        '<a class="mega-link" href="' + rel + 'products/steel-grating/steel_grating_combi_deck.html"><i class="bi bi-chevron-right"></i>Combi Deck Grating with Chequered Plate</a>' +
        '<a class="mega-link" href="' + rel + 'products/steel-grating/steel_grating_annular_circular.html"><i class="bi bi-chevron-right"></i>Annular / Circular Steel Grating Panels</a>' +
        '<a class="mega-link" href="' + rel + 'products/steel-grating/steel_grating_ball_proof.html"><i class="bi bi-chevron-right"></i>Ball-Proof Grating Panels</a>' +
        '<a class="mega-link" href="' + rel + 'products/steel-grating/steel_grating_heavy_duty_trench.html"><i class="bi bi-chevron-right"></i>Heavy Duty Trench Gratings</a>' +
        '<a class="mega-link" href="' + rel + 'products/steel-grating/steel_grating_stair_treads.html"><i class="bi bi-chevron-right"></i>Stair Treads &#8211; Press Welded Type</a>' +
        '<a class="mega-link" href="' + rel + 'products/steel-grating/steel_grating_welding_angle.html"><i class="bi bi-chevron-right"></i>Welding Angle with Grating</a>' +
        '<a class="mega-link" href="' + rel + 'products/steel-grating/steel_grating_hinge.html"><i class="bi bi-chevron-right"></i>Hinge Gratings</a>' +
        '</div>' +

        // Col 2: FRP Products
        '<div class="mega-col mega-col-4">' +
        '<div class="mega-heading"><a href="' + rel + 'frp_products.html">FRP PRODUCTS</a></div>' +
        '<a class="mega-link" href="' + rel + 'products/frp/frp_moulded.html"><i class="bi bi-chevron-right"></i>Moulded Gratings</a>' +
        '<a class="mega-link" href="' + rel + 'products/frp/frp_pultruded.html"><i class="bi bi-chevron-right"></i>Pultruded Gratings</a>' +
        '<a class="mega-link" href="' + rel + 'products/frp/frp_ladder.html"><i class="bi bi-chevron-right"></i>FRP/GRP Ladder</a>' +
        '<a class="mega-link" href="' + rel + 'products/frp/frp_handrails.html"><i class="bi bi-chevron-right"></i>FRP/GRP Handrails</a>' +
        '<a class="mega-link" href="' + rel + 'products/frp/frp_step_iron.html"><i class="bi bi-chevron-right"></i>Step Iron</a>' +
        '<a class="mega-link" href="' + rel + 'products/frp/frp_cable_tray.html"><i class="bi bi-chevron-right"></i>FRP Cable Tray</a>' +
        '<a class="mega-link" href="' + rel + 'products/frp/frp_access_solution.html"><i class="bi bi-chevron-right"></i>FRP Access Solution</a>' +
        '</div>' +

        // Col 3: Stainless Steel Products
        '<div class="mega-col mega-col-2">' +
        '<div class="mega-heading"><a href="' + rel + 'ss_grating.html">STAINLESS STEEL PRODUCTS</a></div>' +
        '<a class="mega-link" href="' + rel + 'products/stainless-steel/ss_grating_systems.html"><i class="bi bi-chevron-right"></i>Stainless Steel Grating Systems</a>' +
        '<a class="mega-link" href="' + rel + 'products/stainless-steel/ss_press_locked.html"><i class="bi bi-chevron-right"></i>Press-Locked Stainless Steel Gratings</a>' +
        '<a class="mega-link" href="' + rel + 'products/stainless-steel/ss_pass_thru.html"><i class="bi bi-chevron-right"></i>Pass-Thru Stainless Steel Gratings</a>' +
        '<a class="mega-link" href="' + rel + 'products/stainless-steel/ss_wedge_wire.html"><i class="bi bi-chevron-right"></i>Wedge Wire Gratings &amp; Screens</a>' +
        '<a class="mega-link" href="' + rel + 'products/stainless-steel/ss_manhole_cover.html"><i class="bi bi-chevron-right"></i>Stainless Steel Manhole Cover</a>' +
        '<a class="mega-link" href="' + rel + 'products/stainless-steel/ss_fabrication.html"><i class="bi bi-chevron-right"></i>SS Fabrication</a>' +
        '</div>' +

        // Col 4: Aluminium Product
        '<div class="mega-col mega-col-3">' +
        '<div class="mega-heading"><a href="' + rel + 'aluminium_grating.html">ALUMINIUM PRODUCTS</a></div>' +
        '<a class="mega-link" href="' + rel + 'products/aluminium/aluminium_flat_bar.html"><i class="bi bi-chevron-right"></i>Aluminium Flat Bar Gratings</a>' +
        '<a class="mega-link" href="' + rel + 'products/aluminium/aluminium_swaged.html"><i class="bi bi-chevron-right"></i>Aluminum Swaged Gratings</a>' +
        '<a class="mega-link" href="' + rel + 'products/aluminium/aluminium_ti_bar.html"><i class="bi bi-chevron-right"></i>T &amp; I Bar Gratings</a>' +
        '<a class="mega-link" href="' + rel + 'products/aluminium/aluminium_handrails.html"><i class="bi bi-chevron-right"></i>Aluminium Handrails</a>' +
        '<a class="mega-link" href="' + rel + 'products/aluminium/aluminium_ladder.html"><i class="bi bi-chevron-right"></i>Aluminum Ladder</a>' +
        '<a class="mega-link" href="' + rel + 'products/aluminium/aluminium_access_cover.html"><i class="bi bi-chevron-right"></i>Aluminium Access Cover</a>' +
        '</div>' +



        // Col 5: More Products
        '<div class="mega-col mega-col-5">' +
        '<div class="mega-heading">MORE PRODUCTS</div>' +
        '<a class="mega-link" href="' + rel + 'products/more/expanded_metal_sheet.html"><i class="bi bi-chevron-right"></i>Expanded Metal Sheet</a>' +
        '<a class="mega-link" href="' + rel + 'products/more/grating_clamp.html"><i class="bi bi-chevron-right"></i>Grating Clamp GI/SS</a>' +
        '<div class="text-center mt-3">' +
        '<a href="' + rel + 'products.html" class="mega-view-all">View All Products</a>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '</div>' +
        '</li>';

    // Mobile menu HTML
    var mobileMenuHTML = '<li class="nav-item dropdown">' +
        '<a class="nav-link dropdown-toggle text-dark" href="' + rel + 'products.html" role="button" data-toggle="dropdown" aria-expanded="false">Products</a>' +
        '<div class="dropdown-menu red-hat fw-600 text-center">' +
        // Steel Grating Products
        '<div class="dropdown-item disabled" style="font-weight:700;color:var(--primary-red) !important;border-bottom:1px solid #eee;"><a href="' + rel + 'steel_grating.html" style="color:var(--primary-red) ;text-decoration:none;">STEEL GRATING PRODUCTS</a></div>' +
        '<a class="dropdown-item" href="' + rel + 'products/steel-grating/steel_grating_standard_panel.html">Steel Grating Standard Panel</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/steel-grating/steel_grating_fabricated_rectangular.html">Fabricated Rectangular Grating Panels</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/steel-grating/steel_grating_fabricated_cutout.html">Fabricated Grating Panels with Cut-Out</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/steel-grating/steel_grating_combi_deck.html">Combi Deck Grating with Chequered Plate</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/steel-grating/steel_grating_annular_circular.html">Annular / Circular Steel Grating Panels</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/steel-grating/steel_grating_ball_proof.html">Ball-Proof Grating Panels</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/steel-grating/steel_grating_heavy_duty_trench.html">Heavy Duty Trench Gratings</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/steel-grating/steel_grating_stair_treads.html">Stair Treads &#8211; Press Welded Type</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/steel-grating/steel_grating_welding_angle.html">Welding Angle with Grating</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/steel-grating/steel_grating_hinge.html">Hinge Gratings</a>' +
        // FRP Products
        '<div class="dropdown-item disabled" style="font-weight:700;color:var(--primary-red) !important;border-bottom:1px solid #eee;margin-top:8px;"><a href="' + rel + 'frp_products.html" style="color:var(--primary-red) ;text-decoration:none;">FRP PRODUCTS</a></div>' +
        '<a class="dropdown-item" href="' + rel + 'products/frp/frp_moulded.html">Moulded Gratings</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/frp/frp_pultruded.html">Pultruded Gratings</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/frp/frp_ladder.html">FRP/GRP Ladder</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/frp/frp_handrails.html">FRP/GRP Handrails</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/frp/frp_step_iron.html">Step Iron</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/frp/frp_cable_tray.html">FRP Cable Tray</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/frp/frp_access_solution.html">FRP Access Solution</a>' +
        // Stainless Steel Products
        '<div class="dropdown-item disabled" style="font-weight:700;color:var(--primary-red) !important;border-bottom:1px solid #eee;margin-top:8px;"><a href="' + rel + 'ss_grating.html" style="color:var(--primary-red) ;text-decoration:none;">STAINLESS STEEL PRODUCTS</a></div>' +
        '<a class="dropdown-item" href="' + rel + 'products/stainless-steel/ss_grating_systems.html">Stainless Steel Grating Systems</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/stainless-steel/ss_press_locked.html">Press-Locked Stainless Steel Gratings</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/stainless-steel/ss_pass_thru.html">Pass-Thru Stainless Steel Gratings</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/stainless-steel/ss_wedge_wire.html">Wedge Wire Gratings &amp; Screens</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/stainless-steel/ss_manhole_cover.html">Stainless Steel Manhole Cover</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/stainless-steel/ss_fabrication.html">SS Fabrication</a>' +
        // Aluminium Products
        '<div class="dropdown-item disabled" style="font-weight:700;color:var(--primary-red) !important;border-bottom:1px solid #eee;margin-top:8px;"><a href="' + rel + 'aluminium_grating.html" style="color:var(--primary-red) ;text-decoration:none;">ALUMINIUM PRODUCTS</a></div>' +
        '<a class="dropdown-item" href="' + rel + 'products/aluminium/aluminium_flat_bar.html">Aluminium Flat Bar Gratings</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/aluminium/aluminium_swaged.html">Aluminum Swaged Gratings</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/aluminium/aluminium_ti_bar.html">T &amp; I Bar Gratings</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/aluminium/aluminium_handrails.html">Aluminium Handrails</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/aluminium/aluminium_ladder.html">Aluminum Ladder</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/aluminium/aluminium_access_cover.html">Aluminium Access Cover</a>' +
        // More Products
        '<div class="dropdown-item disabled" style="font-weight:700;color:var(--primary-red) !important;border-bottom:1px solid #eee;margin-top:8px;">MORE PRODUCTS</div>' +
        '<a class="dropdown-item" href="' + rel + 'products/more/expanded_metal_sheet.html">Expanded Metal Sheet</a>' +
        '<a class="dropdown-item" href="' + rel + 'products/more/grating_clamp.html">Grating Clamp GI/SS</a>' +
        '</div>' +
        '</li>';

    // Inject CSS for mega menu
    var megaCSS = '<style>' +
        '.mega-menu-container{width:100%!important;padding:20px 15px!important;border:none!important;border-top:3px solid var(--primary-red) !important;border-radius:0 0 12px 12px!important;box-shadow:0 15px 40px rgba(0,0,0,0.15)!important;background:#fff!important;left:0!important;}' +
        '.mega-menu-container .row{display:flex!important;flex-wrap:nowrap!important;margin:0!important;}' +
        '.mega-col{border-right:1px solid #eee;padding:0 12px!important;flex-shrink:0;box-sizing:border-box;}' +
        '.mega-col-1{width:25%;}' +
        '.mega-col-2{width:22%;}' +
        '.mega-col-3{width:20%;}' +
        '.mega-col-4{width:18%;}' +
        '.mega-col-5{width:15%;border-right:none;}' +
        '.mega-heading{color:var(--primary-red) ;font-weight:700;font-size:0.85rem;padding-bottom:8px;border-bottom:2px solid var(--primary-red) ;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.5px;}' +
        '.mega-heading a{color:var(--primary-red) !important;text-decoration:none!important;transition:color 0.3s;}' +
        '.mega-heading a:hover{color:#c00005!important;}' +
        '.mega-link{display:block!important;padding:4px 0!important;color:#333!important;font-size:0.8rem!important;font-weight:500!important;transition:all 0.3s!important;text-decoration:none!important;background:none!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;}' +
        '.mega-link:hover{color:var(--primary-red) !important;padding-left:8px!important;background:none!important;}' +
        '.mega-link i{font-size:0.65rem;color:var(--primary-red) ;margin-right:3px;}' +
        '.mega-view-all{display:inline-block;background:linear-gradient(135deg,var(--primary-red) ,#e00006);color:#fff!important;padding:8px 20px;border-radius:25px;font-size:0.85rem;transition:all 0.3s;text-decoration:none!important;}' +
        '.mega-view-all:hover{background:linear-gradient(135deg,#fedc15,#f5c400);color:#1a1a2e!important;transform:translateY(-2px);box-shadow:0 4px 15px rgba(250,0,7,0.3);}' +
        '@media(max-width:991px){.mega-menu-container{position:static!important;width:100%!important;border:none!important;box-shadow:none!important;padding:10px!important;}.mega-col{border:none!important;width:100%!important;}.mega-heading{display:none;}.mega-link{display:none!important;}.mega-view-all{display:none!important;}.navbar-collapse .dropdown-menu{max-height:60vh;overflow-y:auto;}}' +
        '</style>';
    $('head').append(megaCSS);

    // Replace desktop nav Products dropdown
    var $desktopNav = $('nav.d-none.d-lg-block ul.navbar-nav, nav.mynav ul.navbar-nav');
    $desktopNav.each(function () {
        var $this = $(this);
        $this.find('li.dropdown, li.nav-item.dropdown, li.mega-dropdown').each(function () {
            var $anchor = $(this).find('> a');
            var linkText = $anchor.text().trim();
            if (linkText === 'Products') {
                if (!$(this).hasClass('mega-replaced')) {
                    $(this).replaceWith(megaMenuHTML);
                }
            } else if (linkText === 'Services') {
                // Update services links as well
                $(this).find('.dropdown-item').each(function () {
                    var href = $(this).attr('href');
                    if (href && href.indexOf('services/') === -1 && href.indexOf('http') === -1) {
                        $(this).attr('href', rel + 'services/' + href);
                    }
                });
            } else if (linkText === 'Home' || linkText === 'About Us' || linkText === 'Technical Data' || linkText === 'Contact Us') {
                $anchor.attr('href', rel + $anchor.attr('href'));
            }
        });
        // Update regular nav items
        $this.find('li:not(.dropdown) a').each(function () {
            var href = $(this).attr('href');
            if (href && href.indexOf('http') === -1 && href.indexOf('../') === -1) {
                $(this).attr('href', rel + href);
            }
        });
    });

    // Replace mobile nav Products dropdown
    var $mobileNav = $('nav.d-md-block.d-lg-none ul.navbar-nav');
    $mobileNav.each(function () {
        var $this = $(this);
        $this.find('li.dropdown, li.nav-item.dropdown').each(function () {
            var $anchor = $(this).find('> a');
            var linkText = $anchor.text().trim();
            if (linkText === 'Products') {
                $(this).replaceWith(mobileMenuHTML);
            } else if (linkText === 'Services') {
                $(this).find('.dropdown-item').each(function () {
                    var href = $(this).attr('href');
                    if (href && href.indexOf('services/') === -1 && href.indexOf('http') === -1) {
                        $(this).attr('href', rel + 'services/' + href);
                    }
                });
            }
        });
        $this.find('li:not(.dropdown) a').each(function () {
            var href = $(this).attr('href');
            if (href && href.indexOf('http') === -1 && href.indexOf('../') === -1) {
                $(this).attr('href', rel + href);
            }
        });
    });

    // Mega dropdown hover for desktop
    $('ul.navbar-nav li.mega-dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(300);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).slideUp(200);
    });

    // Regular dropdowns hover
    $('ul.navbar-nav li.dropdown:not(.mega-dropdown)').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(200);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
    });

    // Clicking Products link navigates to products.html
    $(document).on('click', '.mega-products-link', function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = rel + 'products.html';
    });
});
