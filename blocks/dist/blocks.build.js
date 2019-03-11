/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/block/editor.scss":
/*!**************************************!*\
  !*** ./blocks/src/block/editor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/block/random-image.js":
/*!******************************************!*\
  !*** ./blocks/src/block/random-image.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/block/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/block/editor.scss");

// random-image.js

(function (blocks, element) {
    var el = element.createElement,
        source = blocks.source;

    function RandomImage(props) {
        var src = 'https://lorempixel.com/400/200/' + props.category;

        return el('img', {
            src: src,
            alt: props.category
        });
    }

    blocks.registerBlockType('myplugin/random-image', {
        title: __('Random Image', 'hello-gutenberg-roots'),
        description: __('Adds a random image (400px x 200px) from Lorem Pixel to the page.', 'hello-gutenberg-roots'),

        icon: 'format-image',

        category: 'common',

        attributes: {
            category: {
                type: 'string',
                source: 'attribute',
                attribute: 'alt',
                selector: 'img'
            }
        },

        edit: function edit(props) {
            var category = props.attributes.category,
                children;

            function setCategory(event) {
                var selected = event.target.querySelector('option:checked');
                props.setAttributes({ category: selected.value });
                event.preventDefault();
            }

            children = [];
            if (category) {
                children.push(RandomImage({ category: category }));
            }

            children.push(el('select', { value: category, onChange: setCategory }, el('option', null, __('Select a category', 'hello-gutenberg-roots')), el('option', { value: 'animals' }, __('Animals', 'hello-gutenberg-roots')), el('option', { value: 'nature' }, __('Nature', 'hello-gutenberg-roots')), el('option', { value: 'sports' }, __('Sports', 'hello-gutenberg-roots'))));

            return el('form', { onSubmit: setCategory }, children);
        },

        save: function save(props) {
            return RandomImage({ category: props.attributes.category });
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ }),

/***/ "./blocks/src/block/style.scss":
/*!*************************************!*\
  !*** ./blocks/src/block/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./block/random-image */ "./blocks/src/block/random-image.js");

window.alert(123);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL3JhbmRvbS1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiXSwibmFtZXMiOlsiYmxvY2tzIiwiZWxlbWVudCIsImVsIiwiY3JlYXRlRWxlbWVudCIsInNvdXJjZSIsIlJhbmRvbUltYWdlIiwicHJvcHMiLCJzcmMiLCJjYXRlZ29yeSIsImFsdCIsInJlZ2lzdGVyQmxvY2tUeXBlIiwidGl0bGUiLCJfXyIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImF0dHJpYnV0ZXMiLCJ0eXBlIiwiYXR0cmlidXRlIiwic2VsZWN0b3IiLCJlZGl0IiwiY2hpbGRyZW4iLCJzZXRDYXRlZ29yeSIsImV2ZW50Iiwic2VsZWN0ZWQiLCJ0YXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlcyIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwib25DaGFuZ2UiLCJvblN1Ym1pdCIsInNhdmUiLCJ3aW5kb3ciLCJ3cCIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBVWpDLE9BL0RkLEU7Ozs7Ozs7Ozs7O0FDTEEseUM7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUFnQyxPQUFPRSxLQUFQLENBQWEsR0FBYixFIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJhbmRvbS1pbWFnZS5qc1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4oZnVuY3Rpb24oYmxvY2tzLCBlbGVtZW50KSB7XG4gICAgdmFyIGVsID0gZWxlbWVudC5jcmVhdGVFbGVtZW50LFxuICAgICAgICBzb3VyY2UgPSBibG9ja3Muc291cmNlO1xuXG4gICAgZnVuY3Rpb24gUmFuZG9tSW1hZ2UocHJvcHMpIHtcbiAgICAgICAgdmFyIHNyYyA9ICdodHRwczovL2xvcmVtcGl4ZWwuY29tLzQwMC8yMDAvJyArIHByb3BzLmNhdGVnb3J5O1xuXG4gICAgICAgIHJldHVybiBlbCgnaW1nJywge1xuICAgICAgICAgICAgc3JjOiBzcmMsXG4gICAgICAgICAgICBhbHQ6IHByb3BzLmNhdGVnb3J5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSgnbXlwbHVnaW4vcmFuZG9tLWltYWdlJywge1xuICAgICAgICB0aXRsZTogX18oJ1JhbmRvbSBJbWFnZScsICdoZWxsby1ndXRlbmJlcmctcm9vdHMnKSxcbiAgICAgICAgZGVzY3JpcHRpb246IF9fKCdBZGRzIGEgcmFuZG9tIGltYWdlICg0MDBweCB4IDIwMHB4KSBmcm9tIExvcmVtIFBpeGVsIHRvIHRoZSBwYWdlLicsICdoZWxsby1ndXRlbmJlcmctcm9vdHMnKSxcblxuICAgICAgICBpY29uOiAnZm9ybWF0LWltYWdlJyxcblxuICAgICAgICBjYXRlZ29yeTogJ2NvbW1vbicsXG5cbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2FsdCcsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbWcnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVkaXQ6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICB2YXIgY2F0ZWdvcnkgPSBwcm9wcy5hdHRyaWJ1dGVzLmNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRDYXRlZ29yeShldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCdvcHRpb246Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjYXRlZ29yeTogc2VsZWN0ZWQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goUmFuZG9tSW1hZ2UoeyBjYXRlZ29yeTogY2F0ZWdvcnkgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKFxuICAgICAgICAgICAgICAgIGVsKCdzZWxlY3QnLCB7IHZhbHVlOiBjYXRlZ29yeSwgb25DaGFuZ2U6IHNldENhdGVnb3J5IH0sXG4gICAgICAgICAgICAgICAgICAgIGVsKCdvcHRpb24nLCBudWxsLCBfXygnU2VsZWN0IGEgY2F0ZWdvcnknLCAnaGVsbG8tZ3V0ZW5iZXJnLXJvb3RzJyksKSxcbiAgICAgICAgICAgICAgICAgICAgZWwoJ29wdGlvbicsIHsgdmFsdWU6ICdhbmltYWxzJyB9LCBfXygnQW5pbWFscycsICdoZWxsby1ndXRlbmJlcmctcm9vdHMnKSksXG4gICAgICAgICAgICAgICAgICAgIGVsKCdvcHRpb24nLCB7IHZhbHVlOiAnbmF0dXJlJyB9LCBfXygnTmF0dXJlJywgJ2hlbGxvLWd1dGVuYmVyZy1yb290cycpKSxcbiAgICAgICAgICAgICAgICAgICAgZWwoJ29wdGlvbicsIHsgdmFsdWU6ICdzcG9ydHMnIH0sIF9fKCdTcG9ydHMnLCAnaGVsbG8tZ3V0ZW5iZXJnLXJvb3RzJykpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIGVsKCdmb3JtJywgeyBvblN1Ym1pdDogc2V0Q2F0ZWdvcnkgfSwgY2hpbGRyZW4pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gUmFuZG9tSW1hZ2UoeyBjYXRlZ29yeTogcHJvcHMuYXR0cmlidXRlcy5jYXRlZ29yeSB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoXG4gICAgd2luZG93LndwLmJsb2NrcyxcbiAgICB3aW5kb3cud3AuZWxlbWVudFxuKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICcuL2Jsb2NrL3JhbmRvbS1pbWFnZSc7XG5cbndpbmRvdy5hbGVydCgxMjMpOyJdLCJzb3VyY2VSb290IjoiIn0=