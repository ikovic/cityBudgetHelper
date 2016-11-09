var types = {BOOLEAN : 'BOOLEAN', STRING : 'STRING' , NUMBER : 'NUMBER'};

function getQueryObjectFromUrl(allowedFilters, urlFilters) {
  var queryObject = {};
  allowedFilters.forEach(function(filter) {
    if ( urlFilters.hasOwnProperty(filter.urlName) ) {
      var acceptedFilter = urlFilters[filter.urlName];      
      if (filter.type === types.BOOLEAN) {
        if (acceptedFilter.toLowerCase() === 'true') {
          queryObject[filter.queryName] = true;
        } else {
          queryObject[filter.queryName] = false;
        }
      } else {
        queryObject[filter.queryName] = acceptedFilter;
      }
    }
  });
  return queryObject;
}

module.exports = {
  getQueryObjectFromUrl,
  types
}
