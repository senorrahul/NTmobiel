<style type="text/css">
	{if $dorEnableBgImage == 1 && $dorthemebg != ""}
	body{
		background:url({$base_dir}modules/dor_themeoptions/img/pattern/{$dorthemebg}.png);
	}
	{/if}
	/****Top Nav***/
	{if $dorTopbarColorText !=''}
        #header > .nav div, #header > .nav span, #header > .nav strong, #header > .nav i,#currencies-block-top div.current::after, #languages-block-top div.current::after, #currencies-block-top div.current strong{
            color:{$dorTopbarColorText} !important;
        }
    {/if}
    {if $dorTopbarBgOutside !=''}
    .header-container #header > div.nav{
    	background:{$dorTopbarBgOutside};
    }
    {/if}
    {if $dorTopbarBgColor !=''}
    .header-container #header > div.nav .container{
    	background:{$dorTopbarBgColor};
    }
    {/if}
    {if $dorTopbarColorLink !=''}
    .header-container #header > div.nav .container a{
    	color:{$dorTopbarColorLink};
    }
    {/if}
    {if $dorTopbarColorLinkHover !=''}
    .header-container #header > div.nav .container a:hover{
    	color:{$dorTopbarColorLinkHover};
    }
    {/if}
    /***Header****/
	{if $dorHeaderBgOutside !=''}
        body #header .header-main-wrapper,
        body #header.fixed .header-main-wrapper{
            background-color:{$dorHeaderBgOutside} !important;
        }
    {/if}
	{if $dorHeaderBgColor !=''}
        body #header .header-main-wrapper .container,
        body #header.fixed .header-main-wrapper .container{
            background-color:{$dorHeaderBgColor} !important;
        }
    {/if}

	{if $dorHeaderColorLink !=''}
        body #header nav a, body #header nav a span, 
        body #header nav.dor-megamenu #dor-top-menu a span,
        body #header nav.dor-megamenu #dor-top-menu .widget-heading.title_block,
        #header .dor-megamenu .navbar-nav > li > a .caret::before{
            color:{$dorHeaderColorLink} !important;
        }
    {/if}
	{if $dorHeaderColorLinkHover !=''}
        body #header nav a:hover, body #header nav a:hover span,
        body #header nav.dor-megamenu #dor-top-menu a:hover > span,
        .dor-megamenu .navbar-nav > li > a:hover .caret::before{
            color:{$dorHeaderColorLinkHover} !important;
        }
    {/if}
	
	/****Footer****/
	{if $dorFooterBgOutside !=''}
	#page .footer-container{
		background:{$dorFooterBgOutside} !important;
	}
	{/if}
	{if $dorFooterBgColor !=''}
	#page .footer-container #footer{
		background:{$dorFooterBgColor} !important;
	}
	{/if}
	{if $dorFooterColorText !=''}
	#page .footer-container #footer,
	#page .footer-container #footer div,
	#page .footer-container #footer span,
	#page .footer-container #footer .footer-block h4,
	#page .footer-container #footer .footer-block h4 > a,
	#page .footer-container #footer li > i{
		color:{$dorFooterColorText} !important;
	}
	{/if}
	{if $dorFooterColorLink !=''}
	#page .footer-container #footer a,
	#page .footer-container #footer div a{
		color:{$dorFooterColorLink} !important;
	}
	{/if}
	{if $dorFooterColorLinkHover !=''}
	#page .footer-container #footer a:hover,
	#page .footer-container #footer div a:hover{
		color:{$dorFooterColorLinkHover} !important;
	}
	{/if}
</style>