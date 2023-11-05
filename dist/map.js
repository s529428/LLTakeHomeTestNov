/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ (() => {

eval("let map;\r\n\r\nasync function initMap() {\r\n    // The location of Lifted Logic\r\n    const position = { lat: 38.98956, lng: -94.66880 };\r\n    // Request needed libraries.\r\n    const { Map } = await google.maps.importLibrary(\"maps\");\r\n    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(\r\n        \"marker\",\r\n    );\r\n    // The map, centered at Lifted Logic\r\n    map = new Map(document.getElementById(\"theMap\"), {\r\n        zoom: 13,\r\n        center: position,\r\n        disableDefaultUI: true,\r\n        mapId: \"e8442ed360ea255c\"\r\n    });\r\n\r\n    const pinBackground = new PinElement({\r\n        background: \"#42A418\",\r\n        glyphColor: \"#ffffff\",\r\n        borderColor: \"#ffffff\"\r\n    })\r\n\r\n    const marker = new AdvancedMarkerElement({\r\n        map: map,\r\n        position: position,\r\n        title: \"Lifted Logic\",\r\n        content: pinBackground.element\r\n    });\r\n}\r\n\r\nif (typeof google === 'object' && typeof google.maps === 'object') {\r\n    initMap();\r\n}\n\n//# sourceURL=webpack://lltakehometestnov/./src/map.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/map.js"]();
/******/ 	
/******/ })()
;