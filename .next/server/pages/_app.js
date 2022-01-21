/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/NjZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _asyncToGenerator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return(/*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps)));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQVk7QUFDWkEsOENBQTZDLENBQUM7SUFDMUNHLEtBQUssRUFBRSxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0ZILG1EQUFrRCxDQUFDO0lBQy9DSSxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsR0FBRyxFQUFFLFFBQVEsR0FBRyxDQUFDO1FBQ2IsTUFBTSxDQUFDQyxNQUFNLENBQUNDLGVBQWU7SUFDakMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUNGUCx1REFBc0QsQ0FBQztJQUNuREksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxRQUFRLEdBQUcsQ0FBQztRQUNiLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRSxtQkFBbUI7SUFDckMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUNGTixrQkFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQ1EsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTztBQUNuRCxHQUFHLENBQUNOLE1BQU0sR0FBR00sbUJBQU8sQ0FBQyxnREFBcUI7U0FDakNDLGtCQUFrQixDQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN4RSxHQUFHLENBQUMsQ0FBQztRQUNELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHUCxHQUFHLENBQUNLLEdBQUcsRUFBRUMsR0FBRztRQUN2QixHQUFHLENBQUNqQixLQUFLLEdBQUdrQixJQUFJLENBQUNsQixLQUFLO0lBQzFCLENBQUMsQ0FBQyxLQUFLLEVBQUVtQixLQUFLLEVBQUUsQ0FBQztRQUNiTixNQUFNLENBQUNNLEtBQUs7UUFDWixNQUFNO0lBQ1YsQ0FBQztJQUNELEVBQUUsRUFBRUQsSUFBSSxDQUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNaUixPQUFPLENBQUNaLEtBQUs7SUFDakIsQ0FBQyxNQUFNLENBQUM7UUFDSnFCLE9BQU8sQ0FBQ1QsT0FBTyxDQUFDWixLQUFLLEVBQUVzQixJQUFJLENBQUNSLEtBQUssRUFBRUMsTUFBTTtJQUM3QyxDQUFDO0FBQ0wsQ0FBQztTQUNRUSxpQkFBaUIsQ0FBQ0MsRUFBRSxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQ2YsR0FBRyxDQUFDQyxJQUFJLEdBQUcsSUFBSSxFQUFFQyxJQUFJLEdBQUdDLFNBQVM7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQ04sT0FBTyxDQUFDLFFBQVEsQ0FBQ1QsT0FBTyxFQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUMxQyxHQUFHLENBQUNGLEdBQUcsR0FBR2EsRUFBRSxDQUFDSSxLQUFLLENBQUNILElBQUksRUFBRUMsSUFBSTtxQkFDcEJaLEtBQUssQ0FBQ2QsS0FBSyxFQUFFLENBQUM7Z0JBQ25CVSxrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsQ0FBTSxPQUFFZixLQUFLO1lBQ3pFLENBQUM7cUJBQ1FlLE1BQU0sQ0FBQ2MsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCbkIsa0JBQWtCLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLENBQU8sUUFBRWMsR0FBRztZQUN4RSxDQUFDO1lBQ0RmLEtBQUssQ0FBQ2dCLFNBQVM7UUFDbkIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO1NBQ1F0QixzQkFBc0IsQ0FBQ3VCLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxHQUFHLENBQUM7UUFDbEN6QixPQUFPLEVBQUV5QixHQUFHO0lBQ2hCLENBQUM7QUFDTCxDQUFDO1NBQ1FFLG1CQUFtQixHQUFHLENBQUM7SUFDNUJBLG1CQUFtQixHQUFHLEVBR3ZCOzs7Q0FBQSxHQUFDVixpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDVyxTQUFTLEdBQUdDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMvQyxLQUFLLENBQUNDLFNBQVMsVUFBVSxDQUFDLEVBQUVqQyxNQUFNLEVBQUVrQyxtQkFBbUIsQ0FBQ0gsU0FBUyxFQUFFQyxHQUFHO1FBQ3RFLE1BQU0sQ0FBQyxDQUFDO1lBQ0pDLFNBQVM7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQ0gsbUJBQW1CLENBQUNMLEtBQUssQ0FBQyxJQUFJLEVBQUVELFNBQVM7QUFDcEQsQ0FBQztTQUNRVyxrQkFBa0IsQ0FBQ0MsQ0FBQyxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDTixtQkFBbUIsQ0FBQ0wsS0FBSyxDQUFDLElBQUksRUFBRUQsU0FBUztBQUNwRCxDQUFDO01BQ0thLEdBQUcsU0FBU2pDLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDNEIsU0FBUztJQUN0Q08sTUFBTSxHQUFHLENBQUM7UUFDTixLQUFLLENBQUMsQ0FBQyxDQUFDUCxTQUFTLEdBQUdFLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDTSxLQUFLO1FBQzdDLE1BQU0sQ0FBQyxFQUFhLFlBQUNuQyxNQUFNLENBQUNELE9BQU8sQ0FBQ3FDLGFBQWEsQ0FBQ1QsU0FBUyxFQUFFckMsTUFBTSxDQUFDK0MsTUFBTSxDQUFDLENBQUMsQ0FDM0UsRUFBRVIsU0FBUztJQUNoQixDQUFDOztBQUVMSSxHQUFHLENBQUNLLG1CQUFtQixHQUFHUCxrQkFBa0I7QUFDNUNFLEdBQUcsQ0FBQ00sZUFBZSxHQUFHUixrQkFBa0I7QUFDeEN2QyxrQkFBZSxHQUFHeUMsR0FBRyxDQUVyQixDQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzPzk2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiooeyBDb21wb25lbnQgLCBjdHggIH0pIHtcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0geWllbGQgKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlUHJvcHNcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCBwYWdlUHJvcHMpKSk7XG4gICAgfVxufVxuQXBwLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiQXBwIiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.createTheme)();\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider, {\n            theme: theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                    fileName: \"/Users/vasilymarkov/Documents/Projects/portfolio-website/pages/_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    sx: {\n                        flexGrow: 1\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        position: \"static\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    variant: \"h6\",\n                                    component: \"div\",\n                                    sx: {\n                                        flexGrow: 1\n                                    },\n                                    children: \"Vasily Markov\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vasilymarkov/Documents/Projects/portfolio-website/pages/_app.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    color: \"inherit\",\n                                    children: \"Github\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vasilymarkov/Documents/Projects/portfolio-website/pages/_app.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    color: \"inherit\",\n                                    children: \"LinkedIn\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vasilymarkov/Documents/Projects/portfolio-website/pages/_app.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vasilymarkov/Documents/Projects/portfolio-website/pages/_app.js\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vasilymarkov/Documents/Projects/portfolio-website/pages/_app.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vasilymarkov/Documents/Projects/portfolio-website/pages/_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/vasilymarkov/Documents/Projects/portfolio-website/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vasilymarkov/Documents/Projects/portfolio-website/pages/_app.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vasilymarkov/Documents/Projects/portfolio-website/pages/_app.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this));\n}\n//   MyApp.getInitialProps = async (appContext) => {\n//     const appProps = await App.getInitialProps(appContext);\n//     return { ...appProps }\n//   }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2U7QUFDQTtBQUNVO0FBQ2hCO0FBQ1E7QUFDTTtBQUNnQjtBQUVqRSxLQUFLLENBQUNTLEtBQUssR0FBR0YsaUVBQVc7U0FFaEJHLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sNkVBQ0RDLENBQUc7OEZBQ0NMLCtEQUFhO1lBQUNDLEtBQUssRUFBRUEsS0FBSzs7NEZBQ3RCTixrRUFBVzs7Ozs7NEZBQ1hDLDBEQUFHO29CQUFDVSxFQUFFLEVBQUUsQ0FBQzt3QkFBQ0MsUUFBUSxFQUFFLENBQUM7b0JBQUMsQ0FBQzswR0FDbkJkLDZEQUFNO3dCQUFDZSxRQUFRLEVBQUMsQ0FBUTs4R0FDcEJYLDhEQUFPOzs0R0FDUEMsaUVBQVU7b0NBQUNXLE9BQU8sRUFBQyxDQUFJO29DQUFDQyxTQUFTLEVBQUMsQ0FBSztvQ0FBQ0osRUFBRSxFQUFFLENBQUM7d0NBQUNDLFFBQVEsRUFBRSxDQUFDO29DQUFDLENBQUM7OENBQUUsQ0FFOUQ7Ozs7Ozs0R0FDQ2IsNkRBQU07b0NBQUNpQixLQUFLLEVBQUMsQ0FBUzs4Q0FBQyxDQUFNOzs7Ozs7NEdBQzdCakIsNkRBQU07b0NBQUNpQixLQUFLLEVBQUMsQ0FBUzs4Q0FBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUl2Q1IsU0FBUzt1QkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEMsQ0FBQztBQUVILEVBQW9EO0FBQ3BELEVBQThEO0FBRTlELEVBQTZCO0FBQzdCLEVBQU07QUFFSixpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFzaWx5IE1hcmtvdlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5HaXRodWI8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TGlua2VkSW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiBcbi8vICAgTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcbi8vICAgICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG4gIFxuLy8gICAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cbi8vICAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIkFwcCIsIkFwcEJhciIsIkJ1dHRvbiIsIkNzc0Jhc2VsaW5lIiwiQm94IiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2Iiwic3giLCJmbGV4R3JvdyIsInBvc2l0aW9uIiwidmFyaWFudCIsImNvbXBvbmVudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();