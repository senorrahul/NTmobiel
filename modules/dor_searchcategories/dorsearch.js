var DORSEARCH = {
	init:function(){
		DORSEARCH.CategoryDropdown();
		DORSEARCH.DorAjaxSearch();
		DORSEARCH.ReloadCategoryName();
		DORSEARCH.ReloadCategoryHome();
	},
	DorAjaxSearch:function(){
		jQuery("#searchbox .dropdown-menu li a").click(function(){
			var cateID = jQuery(this).attr('data-value');
			jQuery("#searchcateid").val(cateID);
		});
		jQuery("#dor_query_top").keyup(function(){
			var keySearch = jQuery(this).val();
			var cateId = jQuery('#searchcateid').val();
			if(keySearch.length > 1){
				var urlAjax = jQuery("#dor_search_top #searchbox").attr("action");
				if(typeof urlAjax == "undefined") urlAjax = jQuery("#dor_search_top #dorsearchbox").attr("action");
				var params = {}
				params.search_query = keySearch;
				params.cateID = parseInt(cateId);
				params.ajaxSearch = 1;
				params.id_lang = prestashop.language.id;
				jQuery.ajax({
		            url: urlAjax,
		            data:params,
		            type:"GET",
		            success:function(data){
		            	jQuery("#dor_search_top .filterDataSearch").remove();
		            	if(data){
		            		jQuery("#dor_search_top .dor_search").append(JSON.parse(data));
		            		jQuery(document).click(function (event) {
					            if (!jQuery(event.target).is("#dor_search_top .filterDataSearch, #dor_search_top .filterDataSearch *")) {
					                jQuery("#dor_search_top .filterDataSearch").remove();
					            }
					        });
		            	}
		                return false;
		            }
		        });
			}
		});
		jQuery("#dor_query_home").keyup(function(){
			var keySearch = jQuery(this).val();
			var cateId = jQuery('#dor_search_home input[name="valSelected"]').val();
			if(keySearch.length > 1){
				var urlAjax = jQuery("#dor_search_home #searchbox").attr("action");
				if(typeof urlAjax == "undefined") urlAjax = jQuery("#dor_search_top #dorsearchbox").attr("action");
				var params = {}
				params.search_query = keySearch;
				params.cateID = parseInt(cateId);
				params.ajaxSearch = 1;
				params.id_lang = prestashop.language.id;
				jQuery.ajax({
		            url: urlAjax,
		            data:params,
		            type:"GET",
		            success:function(data){
		            	jQuery("#dor_search_home .filterDataSearch").remove();
		            	if(data){
		            		jQuery("#dor_search_home .dor_search").append(JSON.parse(data));
		            		jQuery(document).click(function (event) {
					            if (!jQuery(event.target).is("#dor_search_home .filterDataSearch, #dor_search_home .filterDataSearch *")) {
					                jQuery("#dor_search_home .filterDataSearch").remove();
					            }
					        });
		            	}
		                return false;
		            }
		        });
			}
		});
	},
	CategoryDropdown:function(){
	    $( document.body ).on( 'click', '.pos_search .dropdown-menu li a', function( event ) {
	      var $target = $( event.currentTarget );
	      var stringText = $target.text().replace(/\–/g,'');
	      var val = jQuery(this).attr("data-value");
	      jQuery('input[name="valSelected"]').val(val);
	      $target.closest( '.pos_search' )
	         .find( '[data-bind="label"]' ).text( stringText )
	            .end()
	         .children( '.dropdown-toggle' ).dropdown( 'toggle' );
	      return false;
	   });
	},
	ReloadCategoryName:function(){
		var valSelected = jQuery('#dor_query_top input[name="valSelected"]').val();
		var cateName = jQuery("#dor_query_top .pos_search .dropdown-menu li a[data-value='"+valSelected+"']").text();
		cateName = cateName.replace(/\–/g,'');
		jQuery("#dor_query_top .pos_search .dropdown-toggle span[data-bind='label']").text(cateName);
	},
	ReloadCategoryHome:function(){
		var valSelected = jQuery('#dor_query_home input[name="valSelected"]').val();
		var cateName = jQuery("#dor_query_home .pos_search .dropdown-menu li a[data-value='"+valSelected+"']").text();
		cateName = cateName.replace(/\–/g,'');
		jQuery("#dor_query_home .pos_search .dropdown-toggle span[data-bind='label']").text(cateName);
	}
};
jQuery(document).ready(function(){
	DORSEARCH.init();
});