$(function(){"use strict";function t(){var t={active:!0,minute:!0,hour:!0,extra:!0},e=[].map.call($("#world-clock td"),function(t){return $(t).attr("class").split(" ")}).reduce(function(t,e){return t.concat(e)}).filter(function(e){return t.hasOwnProperty(e)?!1:t[e]=!0});return e}window.getAddressibleClasses=t;var e=$("td").length,n=e-$("td.extra").length,r=$("tr").length,l=$("tr").first().children("td").length,s=$("td.active").length;$("#numCells").text(e),$("#numActiveCells").text(s),$("#numUsableCells").text(n),$("#numRows").text(r),$("#numCols").text(l);var i=t();$("#numAddressibleGroups").text(i.length),i.forEach(function(t){$("#addressibleGroupsList").append($("<li>"+t+"</li>"))})});