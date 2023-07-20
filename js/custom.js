angular.module('icDirectives')

.directive('icTaxonomyOverlay',[

	'ic',

	function(ic){
		return {
			restrict:		'E',
			templateUrl: 	'partials/ic-taxonomy-overlay.html',
			scope:			true,

			link: function(scope, element, attrs){
				scope.ic = ic

				scope.$parent.$watch(attrs.icExpand, function(x){ scope.icExpand = x})
			}
		}
	}
])


angular.module('icFilters')

.filter('icCategory', [

	'icTaxonomy',

	function(icTaxonomy){
		var dummy = {name: 'unknown'}
		
		return function(item){
			var tags = item && item.tags || item

			if(!Array.isArray(tags)) return dummy

			return icTaxonomy.getCategory(item && item.primaryTopic || tags) || dummy
		}
	}
])

.filter('icFullTitle', [

	'icSite',
	'clearTranslatorFilter',

	(icSite, clearTranslatorFilter) => {

		return function(item){

			if(!item) return ''


			const title 		= 	item.title
			const addOn			= 	item.titleAddOn && clearTranslatorFilter(item.titleAddOn[icSite.currentLanguage])
			const notGerman 	= 	icSite.currentLanguage != 'de'

			if(addOn && notGerman) return addOn

			return title

		}

	}
])