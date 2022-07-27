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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bodies/animation.js":
/*!*********************************!*\
  !*** ./src/bodies/animation.js ***!
  \*********************************/
/*! exports provided: BodyAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyAnimation", function() { return BodyAnimation; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BodyAnimation = /*#__PURE__*/function () {
  function BodyAnimation(view, moveController) {
    var attackController = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, BodyAnimation);

    this.view = view;
    this.moveController = moveController;
    this.attackController = attackController;
  }

  _createClass(BodyAnimation, [{
    key: "update",
    value: function update(time) {
      if (this.attackController && this.attackController.attack.isAttacked && !this.view.animation.isRunning) this.attackController.attack.isAttacked = false;
      if (this.attackController && !this.attackController.attack.isAttacked) this.view.setAnimation((this.moveController.isMove ? "walk-" : "idle-") + this.moveController.direction);
      if (this.attackController && this.attackController.attack.isAttacked) this.view.setAnimation("attack-" + this.attackController.attack.direction);else this.view.setAnimation((this.moveController.isMove ? "walk-" : "idle-") + this.moveController.direction);
      this.view.animation.update(time);
    }
  }]);

  return BodyAnimation;
}();

/***/ }),

/***/ "./src/bodies/body.js":
/*!****************************!*\
  !*** ./src/bodies/body.js ***!
  \****************************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _boxCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxCollider */ "./src/bodies/boxCollider.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Body = /*#__PURE__*/function () {
  function Body(prop) {
    _classCallCheck(this, Body);

    this.x = prop.x;
    this.y = prop.y;
    this.width = prop.width;
    this.height = prop.height;
    this.moveSpeed = prop.moveSpeed;
    this.visible = prop.visible;
    this.boxCollider = new _boxCollider__WEBPACK_IMPORTED_MODULE_0__["BoxCollider"](prop.boxCollider);
  }

  _createClass(Body, [{
    key: "init",
    value: function init() {
      this.boxCollider.x = this.x + this.boxCollider._x;
      this.boxCollider.y = this.y + this.boxCollider._y;
    }
  }, {
    key: "update",
    value: function update() {
      this.boxCollider.x = this.x + this.boxCollider._x;
      this.boxCollider.y = this.y + this.boxCollider._y;
    }
  }, {
    key: "render",
    value: function render(screen) {
      this.visible && screen.strokeRect(this.x, this.y, this.width, this.height);
      this.boxCollider.render(screen);
    }
  }]);

  return Body;
}();

/***/ }),

/***/ "./src/bodies/boxCollider.js":
/*!***********************************!*\
  !*** ./src/bodies/boxCollider.js ***!
  \***********************************/
/*! exports provided: BoxCollider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxCollider", function() { return BoxCollider; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BoxCollider = /*#__PURE__*/function () {
  function BoxCollider(prop) {
    _classCallCheck(this, BoxCollider);

    this.width = prop.width;
    this.height = prop.height;
    this.x = prop.x;
    this._x = prop.x;
    this.y = prop.y;
    this._y = prop.y;
    this.visible = prop.visible;
  }

  _createClass(BoxCollider, [{
    key: "render",
    value: function render(screen) {
      this.visible && screen.strokeRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return BoxCollider;
}();

/***/ }),

/***/ "./src/bodies/character.js":
/*!*********************************!*\
  !*** ./src/bodies/character.js ***!
  \*********************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/bodies/body.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/bodies/view.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Character = /*#__PURE__*/function () {
  function Character(prop) {
    _classCallCheck(this, Character);

    this.name = prop.name;
    this.body = new _body__WEBPACK_IMPORTED_MODULE_0__["Body"](prop.body);
    this.view = new _view__WEBPACK_IMPORTED_MODULE_1__["View"](prop.view);
  }

  _createClass(Character, [{
    key: "init",
    value: function init() {
      this.view.init();
      this.body.init();
    }
  }, {
    key: "update",
    value: function update() {
      this.body.update();
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
      screen.drawSprite(this.view.getSprite(), this.body.x, this.body.y);
      this.body.render(screen);
    }
  }]);

  return Character;
}();

/***/ }),

/***/ "./src/bodies/view.js":
/*!****************************!*\
  !*** ./src/bodies/view.js ***!
  \****************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/picture/spriteSheet */ "./src/view/picture/spriteSheet.js");
/* harmony import */ var _view_animation_spriteAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/animation/spriteAnimation */ "./src/view/animation/spriteAnimation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var View = /*#__PURE__*/function () {
  function View(prop) {
    _classCallCheck(this, View);

    this.spriteSheet = new _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"](prop.spriteSheet);
    this.animationList = {};
    this.tempAnimationProp = prop.animationList;
  }

  _createClass(View, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (this.animationList == {}) return;
      this.spriteSheet.init();
      this.tempAnimationProp.forEach(function (animation) {
        _this.animationList[animation.name] = new _view_animation_spriteAnimation__WEBPACK_IMPORTED_MODULE_1__["SpriteAnimation"]({
          name: animation.name,
          spriteSheet: _this.spriteSheet,
          frameDelay: animation.frameDelay,
          indices: animation.indices,
          repeat: animation.repeat,
          autorun: animation.autorun
        });

        _this.animationList[animation.name].init();
      });
      delete this.tempAnimationProp;
      this.animation = this.animationList["idle-down"];
      this.animation.run();
    }
  }, {
    key: "setAnimation",
    value: function setAnimation(animationName) {
      if (this.animation.name == animationName) return;
      this.animation.stop();
      this.animation = this.animationList[animationName];
      this.animation.run();
    }
  }, {
    key: "getSprite",
    value: function getSprite() {
      return this.spriteSheet.getSprite(this.animation.indices[this.animation.currentFrameIndex]);
    }
  }]);

  return View;
}();

/***/ }),

/***/ "./src/controllers/fpsController.js":
/*!******************************************!*\
  !*** ./src/controllers/fpsController.js ***!
  \******************************************/
/*! exports provided: FPSController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPSController", function() { return FPSController; });
/* harmony import */ var _ielements_label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ielements/label */ "./src/ielements/label.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var FPSController = /*#__PURE__*/function () {
  function FPSController(prop) {
    _classCallCheck(this, FPSController);

    this.name = "fpsController";
    this.fps = 0; // every second

    this._fps = 0; // every frame

    this.frameTime = 0;
    this.__label__ = new _ielements_label__WEBPACK_IMPORTED_MODULE_0__["Label"](prop.label);
  }

  _createClass(FPSController, [{
    key: "init",
    value: function init() {
      this.__label__.init();
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.frameTime == Math.trunc(time / 1000)) {
        ++this._fps;
      } else {
        this.fps = ++this._fps;
        this.frameTime = Math.trunc(time / 1000);
        this._fps = 0;
      }

      this.__label__.text = "FPS: ".concat(this.fps);
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
      screen.drawLabel(this.__label__);
    }
  }]);

  return FPSController;
}();

/***/ }),

/***/ "./src/controllers/gameCtrl.js":
/*!*************************************!*\
  !*** ./src/controllers/gameCtrl.js ***!
  \*************************************/
/*! exports provided: GameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameController", function() { return GameController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);

    this.length = 0;
  }

  _createClass(GameController, [{
    key: "update",
    value: function update(time) {
      this.sceneController && this.sceneController.update(time);
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
      this.sceneController && this.sceneController.currentScene.render(time, screen);
      this.fpsController && this.fpsController.render(time, screen);
    }
  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, controllers = new Array(_len), _key = 0; _key < _len; _key++) {
        controllers[_key] = arguments[_key];
      }

      for (var _i = 0, _controllers = controllers; _i < _controllers.length; _i++) {
        var ctrl = _controllers[_i];

        if (!this[ctrl.name]) {
          if (!ctrl.name) throw new Error("Invalid name of controller, name is must be like 'sceneController'");
          this[ctrl.name] = ctrl;
          this[ctrl.name].init();
          ++this.length;
        }
      }

      return this.length;
    }
  }, {
    key: "remove",
    value: function remove(controllerName) {
      if (this[controllerName]) {
        delete this[controllerName];
        --this.length;
      }
    }
  }]);

  return GameController;
}();

/***/ }),

/***/ "./src/controllers/sceneCtrl.js":
/*!**************************************!*\
  !*** ./src/controllers/sceneCtrl.js ***!
  \**************************************/
/*! exports provided: SceneController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneController", function() { return SceneController; });
/* harmony import */ var _view_scene_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/scene/loading */ "./src/view/scene/loading.js");
/* harmony import */ var _view_scene_menu_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/scene/menu/start */ "./src/view/scene/menu/start.js");
/* harmony import */ var _view_scene_level_level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/scene/level/level */ "./src/view/scene/level/level.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SceneController = /*#__PURE__*/function () {
  function SceneController(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "sceneController" : _ref$name,
        scenes = _ref.scenes;

    _classCallCheck(this, SceneController);

    this.name = name;
    this.scenes = scenes;
  }

  _createClass(SceneController, [{
    key: "init",
    value: function init() {
      this.setScene("loading");
    }
  }, {
    key: "setScene",
    value: function setScene(sceneName) {
      if (!this.scenes[sceneName]) return;

      switch (sceneName) {
        case "startMenu":
          this.currentScene = new _view_scene_menu_start__WEBPACK_IMPORTED_MODULE_1__["StartMenu"](this.scenes.startMenu);
          break;

        case "level_1":
          this.currentScene = new _view_scene_level_level__WEBPACK_IMPORTED_MODULE_2__["Level"](this.scenes.level_1);
          break;

        case "level_2":
          this.currentScene = new _view_scene_level_level__WEBPACK_IMPORTED_MODULE_2__["Level"](this.scenes.level_2);
          break;

        default:
          this.currentScene = new _view_scene_loading__WEBPACK_IMPORTED_MODULE_0__["LoadingScene"](this.scenes.loading);
          break;
      }

      this.currentScene.init();
      this.currentScene.start();
      this.currentScene.status = "running";
    }
  }, {
    key: "update",
    value: function update() {
      if (this.currentScene.status == "finish") {
        if (this.currentScene.next == "none") this.currentScene.status = "running";else {
          this.currentScene.stop();
          this.setScene(this.currentScene.next);
        }
      }
    }
  }]);

  return SceneController;
}();

/***/ }),

/***/ "./src/enemy/controllers/attackController.js":
/*!***************************************************!*\
  !*** ./src/enemy/controllers/attackController.js ***!
  \***************************************************/
/*! exports provided: EnemyAttackController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyAttackController", function() { return EnemyAttackController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnemyAttackController = /*#__PURE__*/function () {
  function EnemyAttackController(range, body) {
    _classCallCheck(this, EnemyAttackController);

    this.range = range;
    this.body = body;
    this.target = null;
  }

  _createClass(EnemyAttackController, [{
    key: "init",
    value: function init(player, collision) {
      this.player = player;
      this.collision = collision;
      this.selfBox = {
        x1: this.body.boxCollider.x,
        x2: this.body.boxCollider.x + this.body.boxCollider.width,
        y1: this.body.boxCollider.y,
        y2: this.body.boxCollider.y + this.body.boxCollider.height
      };
      this.playerBox = {
        x1: this.player.body.boxCollider.x,
        x2: this.player.body.boxCollider.x + this.player.body.boxCollider.width,
        y1: this.player.body.boxCollider.y,
        y2: this.player.body.boxCollider.y + this.player.body.boxCollider.height
      };
    }
  }, {
    key: "update",
    value: function update() {
      this.selfBox = {
        x1: this.body.boxCollider.x,
        x2: this.body.boxCollider.x + this.body.boxCollider.width,
        y1: this.body.boxCollider.y,
        y2: this.body.boxCollider.y + this.body.boxCollider.height
      };
      this.playerBox = {
        x1: this.player.body.boxCollider.x + 20,
        x2: this.player.body.boxCollider.x + this.player.body.boxCollider.width - 20,
        y1: this.player.body.boxCollider.y + 20,
        y2: this.player.body.boxCollider.y + this.player.body.boxCollider.height - 20
      };
      if (this.collision.intersect(this.playerBox, this.range)) this.target = this.player;else this.target = null;
    }
  }, {
    key: "hit",
    value: function hit(direction) {
      switch (direction) {
        case "up":
          this.player.body.y -= 20;
          break;

        case "right":
          this.player.body.x += 20;
          break;

        case "down":
          this.player.body.y += 20;
          break;

        case "left":
          this.player.body.x -= 20;
          break;
      }
    }
  }, {
    key: "attack",
    value: function attack(direction) {
      --this.player.healthPoint;
      this.hit(direction);
    }
  }]);

  return EnemyAttackController;
}();

/***/ }),

/***/ "./src/enemy/controllers/enemyController.js":
/*!**************************************************!*\
  !*** ./src/enemy/controllers/enemyController.js ***!
  \**************************************************/
/*! exports provided: EnemyController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyController", function() { return EnemyController; });
/* harmony import */ var _bodies_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bodies/animation */ "./src/bodies/animation.js");
/* harmony import */ var _moveController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveController */ "./src/enemy/controllers/moveController.js");
/* harmony import */ var _attackController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attackController */ "./src/enemy/controllers/attackController.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var EnemyController = /*#__PURE__*/function () {
  function EnemyController(enemy, prop) {
    _classCallCheck(this, EnemyController);

    this.enemy = enemy;
    this.attackController = new _attackController__WEBPACK_IMPORTED_MODULE_2__["EnemyAttackController"](this.enemy.rangeZone, this.enemy.body);
    this.moveController = new _moveController__WEBPACK_IMPORTED_MODULE_1__["EnemyMoveController"](this.enemy.body, this.attackController, prop.moveController);
    this.animationController = new _bodies_animation__WEBPACK_IMPORTED_MODULE_0__["BodyAnimation"](this.enemy.view, this.moveController);
  }

  _createClass(EnemyController, [{
    key: "init",
    value: function init(player, collision) {
      this.attackController.init(player, collision);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.moveController.update();
      this.animationController.update(time);
      this.attackController.update();
    }
  }]);

  return EnemyController;
}();

/***/ }),

/***/ "./src/enemy/controllers/moveController.js":
/*!*************************************************!*\
  !*** ./src/enemy/controllers/moveController.js ***!
  \*************************************************/
/*! exports provided: EnemyMoveController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyMoveController", function() { return EnemyMoveController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnemyMoveController = /*#__PURE__*/function () {
  function EnemyMoveController(body, attackController, prop) {
    _classCallCheck(this, EnemyMoveController);

    this.body = body;
    this.attackController = attackController;
    this.currentMovePointIndex = 0;
    (this.movePoints = prop.movePoints) && (this.currentMovePoint = this.movePoints[this.currentMovePointIndex]);
    this.isMove = true;
    this.direction = "down";
  }

  _createClass(EnemyMoveController, [{
    key: "update",
    value: function update() {
      if (this.isStrictStopped) return;

      if (this.attackController.target) {
        this.start();

        if (this.attackController.collision.intersect(this.attackController.playerBox, this.attackController.selfBox)) {
          this.attackController.attack(this.direction);
          this.strictStop(1000);
        }
      }

      if (!this.isMove || !this.movePoints) return;
      if (this.body.x != this.currentMovePoint.x || this.body.y != this.currentMovePoint.y) this.move();else if (this.currentMovePointIndex < this.movePoints.length - 1) {
        this.currentMovePoint = this.movePoints[++this.currentMovePointIndex];
        this.currentMovePoint.isStop && this.stop(this.currentMovePoint.stopTime);
      } else this.moveRotate();
    }
  }, {
    key: "start",
    value: function start() {
      !this.isStrictStopped && (this.isMove = true);
    }
  }, {
    key: "stop",
    value: function stop(time) {
      var _this = this;

      this.isMove = false;
      setTimeout(function () {
        _this.isStrictStopped = false;

        _this.start();
      }, time);
    }
  }, {
    key: "strictStop",
    value: function strictStop(time) {
      this.isStrictStopped = true;
      this.stop(time);
    }
  }, {
    key: "moveRotate",
    value: function moveRotate() {
      this.movePoints = this.movePoints.reverse();
      this.currentMovePointIndex = 0;
      this.currentMovePoint = this.movePoints[this.currentMovePointIndex];
      if (this.currentMovePoint.isStop) this.stop();
    }
  }, {
    key: "move",
    value: function move() {
      var a = this.body,
          b = this.attackController.target ? {
        x: this.attackController.target.body.x,
        y: this.attackController.target.body.y
      } : this.currentMovePoint;
      if (a.y > b.y) this.moveUp();
      if (a.x < b.x) this.moveRight();
      if (a.y < b.y) this.moveDown();
      if (a.x > b.x) this.moveLeft();
    }
  }, {
    key: "movePointsReset",
    value: function movePointsReset() {
      this.movePoints.forEach(function (point) {
        return point.isPassed = false;
      });
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      this.body.y -= this.body.moveSpeed;
      this.direction = "up";
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.body.x += this.body.moveSpeed;
      this.direction = "right";
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.body.y += this.body.moveSpeed;
      this.direction = "down";
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.body.x -= this.body.moveSpeed;
      this.direction = "left";
    }
  }]);

  return EnemyMoveController;
}();

/***/ }),

/***/ "./src/enemy/enemy.js":
/*!****************************!*\
  !*** ./src/enemy/enemy.js ***!
  \****************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var _bodies_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bodies/character */ "./src/bodies/character.js");
/* harmony import */ var _rangeZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rangeZone */ "./src/enemy/rangeZone.js");
/* harmony import */ var _controllers_enemyController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/enemyController */ "./src/enemy/controllers/enemyController.js");
/* harmony import */ var _enemyBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemyBody */ "./src/enemy/enemyBody.js");
/* harmony import */ var _ielements_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ielements/label */ "./src/ielements/label.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Enemy = /*#__PURE__*/function (_Character) {
  _inherits(Enemy, _Character);

  var _super = _createSuper(Enemy);

  function Enemy(prop) {
    var _this;

    _classCallCheck(this, Enemy);

    _this = _super.call(this, prop);
    _this.healthPoint = prop.healthPoint;
    _this.healthPointLabel = new _ielements_label__WEBPACK_IMPORTED_MODULE_4__["Label"](prop.healthPointLabel);
    _this.body = new _enemyBody__WEBPACK_IMPORTED_MODULE_3__["EnemyBody"](prop.body);
    _this.name = prop.name;
    _this.rangeZone = new _rangeZone__WEBPACK_IMPORTED_MODULE_1__["EnemyRangeZone"](_this.body, prop.rangeZone);
    _this.controller = new _controllers_enemyController__WEBPACK_IMPORTED_MODULE_2__["EnemyController"](_assertThisInitialized(_this), prop.controller);
    return _this;
  }

  _createClass(Enemy, [{
    key: "init",
    value: function init(player, collision) {
      _get(_getPrototypeOf(Enemy.prototype), "init", this).call(this);

      this.rangeZone.init();
      this.controller.init(player, collision);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.controller.update(time);

      _get(_getPrototypeOf(Enemy.prototype), "update", this).call(this);

      this.healthPointLabel.x = this.body.x + this.body.width;
      this.healthPointLabel.y = this.body.y;
      this.healthPointLabel.text = this.healthPoint;
      this.body.moveSpeed = this.controller.attackController.target ? this.body.aggressiveSpeed : this.body.defaultSpeed;
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      _get(_getPrototypeOf(Enemy.prototype), "render", this).call(this, time, screen);

      this.rangeZone.render(time, screen);
      this.healthPointLabel.render(time, screen, true);
    }
  }]);

  return Enemy;
}(_bodies_character__WEBPACK_IMPORTED_MODULE_0__["Character"]);

/***/ }),

/***/ "./src/enemy/enemyBody.js":
/*!********************************!*\
  !*** ./src/enemy/enemyBody.js ***!
  \********************************/
/*! exports provided: EnemyBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyBody", function() { return EnemyBody; });
/* harmony import */ var _bodies_body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bodies/body */ "./src/bodies/body.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var EnemyBody = /*#__PURE__*/function (_Body) {
  _inherits(EnemyBody, _Body);

  var _super = _createSuper(EnemyBody);

  function EnemyBody(prop) {
    var _this;

    _classCallCheck(this, EnemyBody);

    _this = _super.call(this, prop);
    _this.moveSpeed = prop.defaultSpeed;
    _this.defaultSpeed = prop.defaultSpeed;
    _this.aggressiveSpeed = prop.aggressiveSpeed;
    return _this;
  }

  return EnemyBody;
}(_bodies_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/enemy/rangeZone.js":
/*!********************************!*\
  !*** ./src/enemy/rangeZone.js ***!
  \********************************/
/*! exports provided: EnemyRangeZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyRangeZone", function() { return EnemyRangeZone; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnemyRangeZone = /*#__PURE__*/function () {
  function EnemyRangeZone(body, prop) {
    _classCallCheck(this, EnemyRangeZone);

    this.body = body;
    this.up = prop.up;
    this.right = prop.right;
    this.down = prop.down;
    this.left = prop.left;
    this.visible = prop.visible;
  }

  _createClass(EnemyRangeZone, [{
    key: "setPosition",
    value: function setPosition() {
      this.x1 = this.body.x - this.left;
      this.x2 = this.body.x + this.body.width + this.right;
      this.y1 = this.body.y - this.up;
      this.y2 = this.body.y + this.body.height + this.down;
    }
  }, {
    key: "init",
    value: function init() {
      this.setPosition();
    }
  }, {
    key: "update",
    value: function update() {
      this.setPosition();
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
      this.visible && screen.strokeRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
    }
  }]);

  return EnemyRangeZone;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _view_screen_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/screen/screen */ "./src/view/screen/screen.js");
/* harmony import */ var _controllers_gameCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/gameCtrl */ "./src/controllers/gameCtrl.js");
/* harmony import */ var _controllers_sceneCtrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/sceneCtrl */ "./src/controllers/sceneCtrl.js");
/* harmony import */ var _controllers_fpsController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/fpsController */ "./src/controllers/fpsController.js");
/* harmony import */ var _physic_collision__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./physic/collision */ "./src/physic/collision.js");
/* harmony import */ var _game_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.json */ "./src/game.json");
var _game_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./game.json */ "./src/game.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.name = _game_json__WEBPACK_IMPORTED_MODULE_5__.name;
    this.isRunning = false;
    this.screen = new _view_screen_screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](_game_json__WEBPACK_IMPORTED_MODULE_5__.screen);
    this.controller = new _controllers_gameCtrl__WEBPACK_IMPORTED_MODULE_1__["GameController"]();
    this.collision = new _physic_collision__WEBPACK_IMPORTED_MODULE_4__["Collision"]();
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      this.screen.init();
      this.controller.add(new _controllers_sceneCtrl__WEBPACK_IMPORTED_MODULE_2__["SceneController"]({
        scenes: {
          loading: {
            screen: this.screen,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_5__.scenes.loading
          },
          startMenu: {
            screen: this.screen,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_5__.scenes.startMenu
          },
          level_1: {
            screen: this.screen,
            collision: this.collision,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_5__.scenes.level_1
          },
          level_2: {
            screen: this.screen,
            collision: this.collision,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_5__.scenes.level_2
          }
        }
      }), new _controllers_fpsController__WEBPACK_IMPORTED_MODULE_3__["FPSController"](_game_json__WEBPACK_IMPORTED_MODULE_5__.fpsController));
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      this.controller.render(time, this.screen);
      this.isRunning && requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      this.init();
      (this.isRunning = true) && requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/game.json":
/*!***********************!*\
  !*** ./src/game.json ***!
  \***********************/
/*! exports provided: name, screen, fpsController, scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Kxra\",\"screen\":{\"width\":640,\"height\":640},\"fpsController\":{\"label\":{\"name\":\"fpsLabel\",\"text\":\"FPS: \",\"color\":\"#FFFFFF55\",\"fontSize\":14,\"fontWeight\":\"bold\",\"animated\":false,\"x\":550,\"y\":30}},\"scenes\":{\"loading\":{\"background\":{\"name\":\"loadingBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"loadingBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/loadingScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"disk\":{\"name\":\"loadingDisk\",\"width\":64,\"height\":64,\"x\":288,\"y\":288,\"spriteSheet\":{\"name\":\"loadingDiskSpriteSheet\",\"src\":\"./img/tile-sets/loadingDisk.png\",\"width\":512,\"height\":64,\"spriteWidth\":64,\"spriteHeight\":64},\"animated\":true,\"animationProp\":{\"name\":\"loadingDiskSpriteAnimation\",\"indices\":[1,2,3,4,5,6,7,8],\"frameDelay\":80,\"repeat\":true,\"autorun\":true}},\"label\":{\"name\":\"loadingLabel\",\"text\":\"Loading...\",\"color\":\"#FFFFFF\",\"fontSize\":36,\"fontWeight\":\"bold\",\"x\":240,\"y\":380,\"animated\":true,\"animationProp\":{\"name\":\"loadingLabelAnimation\",\"frameDelay\":300,\"textCollection\":[\"Loading\",\"Loading.\",\"Loading..\",\"Loading...\"],\"repeat\":true,\"autorun\":true}}},\"startMenu\":{\"background\":{\"name\":\"startMenuBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"startMenuBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/startMenuScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"playButton\":{\"name\":\"playeButton\",\"width\":200,\"height\":80,\"bgcolor\":\"#800000\",\"colors\":{\"default\":\"#800000\",\"hover\":\"#80000066\",\"click\":\"#00800099\"},\"x\":400,\"y\":500,\"labelProp\":{\"name\":\"playButtonLabel\",\"x\":40,\"y\":55,\"text\":\"Play\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54}}},\"level_1\":{\"next\":\"level_2\",\"time\":46,\"player\":{\"name\":\"Kxra\",\"body\":{\"x\":100,\"y\":100,\"width\":64,\"height\":64,\"visible\":false,\"moveSpeed\":3,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[157,158,159,160,161,162],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"keys\":{\"up\":\"KeyW\",\"right\":\"KeyD\",\"down\":\"KeyS\",\"left\":\"KeyA\"}},\"attackController\":{\"keys\":{\"up\":\"ArrowUp\",\"right\":\"ArrowRight\",\"down\":\"ArrowDown\",\"left\":\"ArrowLeft\"},\"warrior\":{\"damage\":5,\"cooldown\":1}},\"animationController\":{\"name\":\"playerAnimation\"}}},\"interface\":{\"healthPoints\":{\"sprite\":{\"src\":\"./img/tile-sets/heart.png\",\"width\":64,\"height\":64},\"x\":20,\"y\":556,\"count\":3},\"time\":{\"name\":\"timeLabel\",\"x\":300,\"y\":610,\"text\":\"Time: \",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54,\"fontFamily\":\"Do Hyeon\"}},\"mapSpriteSheet\":{\"name\":\"level_1MapSpriteSheet\",\"src\":\"./img/tile-sets/map.png\",\"width\":640,\"height\":640,\"spriteWidth\":64,\"spriteHeight\":64},\"mapData\":{\"name\":\"map_1\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"test.json\"}},\"height\":10,\"infinite\":false,\"layers\":[{\"data\":[7,13,14,13,14,13,14,13,14,7,7,17,18,19,20,17,18,19,20,7,7,27,28,29,30,27,28,29,30,7,7,37,38,39,40,37,38,39,40,7,7,17,18,7,7,7,7,19,20,7,7,27,28,7,7,7,7,29,30,7,7,37,38,7,7,7,7,39,40,7,7,29,38,39,40,37,38,39,40,7,7,39,18,19,20,17,18,19,20,7,7,7,7,7,7,7,7,7,7,7],\"height\":10,\"id\":1,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[1,3,3,2,3,4,5,71,4,26,11,0,0,0,0,0,0,16,0,36,21,0,0,2,3,4,5,81,0,46,31,0,0,0,0,0,0,0,0,26,41,0,0,61,65,65,66,0,0,36,1,0,0,26,0,0,21,0,0,46,11,0,0,36,0,0,31,0,0,26,21,0,0,2,73,72,5,0,0,36,31,0,0,0,41,0,0,0,0,46,51,52,53,54,55,52,53,54,55,56],\"height\":10,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[0,68,0,0,0,0,0,0,0,0,0,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0],\"height\":10,\"id\":4,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2},{\"name\":\"entryPoint-index\",\"type\":\"int\",\"value\":77},{\"name\":\"outPoint-index\",\"type\":\"int\",\"value\":66}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":3,\"name\":\"colliders\",\"objects\":[{\"height\":214.332666666667,\"id\":3,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":258.667,\"x\":190.667,\"y\":296.333333333333},{\"height\":21.5,\"id\":5,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":276,\"x\":192,\"y\":167.5},{\"height\":129.333,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":17.3333,\"x\":450.667,\"y\":41.3333},{\"height\":588,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":41.3333,\"y\":40},{\"height\":15.2727272727273,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":557.333,\"x\":41.3333,\"y\":611.393272727273},{\"height\":583.667,\"id\":10,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":574.667,\"y\":40.3333},{\"height\":22.9999333333333,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":538,\"x\":43.333,\"y\":39.6666666666667},{\"height\":114,\"id\":12,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":296,\"y\":508}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextlayerid\":5,\"nextobjectid\":13,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":10},\"enemies\":[{\"healthPoint\":15,\"healthPointLabel\":{\"name\":\"timeLabel\",\"text\":\"15\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":14,\"fontFamily\":\"Do Hyeon\"},\"rangeZone\":{\"up\":128,\"right\":128,\"down\":128,\"left\":128},\"name\":\"Enemy_1\",\"body\":{\"x\":500,\"y\":400,\"width\":64,\"height\":64,\"visible\":false,\"defaultSpeed\":1,\"aggressiveSpeed\":2,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/orc.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[157,158,159,160,161,162],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":500,\"y\":450,\"isStop\":true,\"stopTime\":3000},{\"x\":450,\"y\":450,\"isStop\":false},{\"x\":450,\"y\":200,\"isStop\":false},{\"x\":500,\"y\":200,\"isStop\":true,\"stopTime\":3000}]}}},{\"healthPoint\":15,\"healthPointLabel\":{\"name\":\"timeLabel\",\"text\":\"15\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":14,\"fontFamily\":\"Do Hyeon\"},\"rangeZone\":{\"up\":128,\"right\":128,\"down\":128,\"left\":128},\"name\":\"Enemy_2\",\"body\":{\"x\":100,\"y\":300,\"width\":64,\"height\":64,\"visible\":false,\"defaultSpeed\":1,\"aggressiveSpeed\":2,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/skeleton.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[157,158,159,160,161,162],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[261,262,263,264,265,266],\"frameDelay\":100,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":200,\"y\":520,\"isStop\":false},{\"x\":100,\"y\":520,\"isStop\":true,\"stopTime\":3000}]}}}]},\"level_2\":{\"time\":181,\"interface\":{\"healthPoints\":{\"sprite\":{\"src\":\"./img/tile-sets/heart.png\",\"width\":64,\"height\":64},\"x\":20,\"y\":556,\"count\":3},\"time\":{\"name\":\"timeLabel\",\"x\":300,\"y\":610,\"text\":\"Time: \",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54,\"fontFamily\":\"Do Hyeon\"}},\"player\":{\"name\":\"Kxra\",\"body\":{\"x\":100,\"y\":100,\"width\":64,\"height\":64,\"visible\":false,\"moveSpeed\":3,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[157,158,159,160,161,162],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":20,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"keys\":{\"up\":\"KeyW\",\"right\":\"KeyD\",\"down\":\"KeyS\",\"left\":\"KeyA\"}},\"attackController\":{\"keys\":{\"up\":\"ArrowUp\",\"right\":\"ArrowRight\",\"down\":\"ArrowDown\",\"left\":\"ArrowLeft\"},\"warrior\":{\"damage\":5,\"cooldown\":1}},\"animationController\":{\"name\":\"playerAnimation\"}}},\"mapData\":{\"name\":\"map_2\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"map_2.json\"}},\"height\":20,\"infinite\":false,\"layers\":[{\"data\":[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],\"height\":20,\"id\":1,\"name\":\"background\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,15,0,0,29,17,18,28,20,17,18,19,20,17,18,19,20,17,18,19,20,25,0,0,29,27,33,93,14,14,13,14,14,13,14,14,13,14,14,29,30,35,0,0,23,37,38,39,40,25,38,39,40,40,38,39,40,37,38,39,40,25,0,0,13,13,14,14,15,35,13,14,40,40,13,14,0,0,0,0,20,35,0,0,28,27,28,29,25,0,28,29,30,27,28,29,0,0,0,0,30,25,0,0,25,0,0,0,0,0,38,39,40,37,38,39,0,0,0,0,40,35,0,0,35,0,0,0,0,0,0,0,20,25,0,0,0,0,0,0,20,25,0,0,35,0,0,0,0,0,0,0,30,25,0,0,0,0,0,0,30,35,0,0,25,0,0,0,0,0,38,39,28,25,38,39,0,0,0,0,40,25,0,0,35,17,18,19,20,0,13,14,20,17,13,14,0,0,0,0,20,35,0,0,18,13,14,13,14,0,29,29,30,27,28,29,0,0,0,0,30,25,0,0,28,37,38,39,35,0,39,39,40,37,38,39,0,0,0,0,40,35,0,0,38,17,25,19,20,17,19,19,20,17,18,19,20,17,18,0,20,25,0,0,18,27,35,13,13,15,28,29,17,17,28,29,13,14,13,14,39,35,0,0,28,37,25,39,40,37,13,14,17,17,13,14,40,37,38,39,30,25,0,0,38,27,35,29,30,17,18,19,20,37,38,39,40,27,28,29,30,35,0,0,29,27,27,13,14,13,14,13,14,13,14,13,14,14,14,23,24,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":3,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[1,2,3,4,5,2,2,2,3,4,5,3,4,5,2,3,2,3,4,6,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,21,0,0,0,83,3,2,3,4,5,2,3,4,5,5,73,0,0,0,26,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,36,41,2,3,4,72,73,0,71,72,0,0,72,73,0,0,11,0,0,0,6,1,0,0,0,0,11,0,16,0,0,0,0,11,54,62,63,64,16,0,16,11,0,0,0,0,21,53,26,0,0,0,0,1,0,0,0,0,26,0,26,21,0,61,62,63,64,0,36,0,0,0,0,11,0,0,0,0,36,0,36,31,0,36,0,0,0,0,62,66,0,0,61,62,0,0,0,0,46,0,46,41,0,46,0,0,0,0,0,41,0,0,46,0,0,0,0,0,6,0,6,1,0,46,0,0,0,0,71,4,0,0,4,73,0,0,0,0,16,0,16,11,0,72,72,72,73,0,6,0,0,0,0,11,0,0,0,0,26,0,26,21,0,0,0,0,21,0,16,0,0,0,0,21,0,0,0,0,36,0,36,31,0,0,0,0,31,0,26,0,0,0,0,31,0,0,0,0,46,0,46,41,0,0,0,71,4,5,36,0,0,0,0,11,3,4,73,0,46,0,6,11,0,0,0,26,0,0,2,3,0,0,3,2,0,0,31,4,81,0,16,21,0,0,0,36,0,0,0,0,0,0,0,0,0,0,41,0,0,0,26,31,0,0,0,3,4,5,2,3,4,5,2,3,2,3,4,0,0,0,36,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,51,52,53,54,55,52,53,54,55,52,53,54,55,52,53,54,55,54,55,56],\"height\":20,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":5,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":3}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":4,\"name\":\"colliderBoxes\",\"objects\":[{\"height\":23,\"id\":6,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1173.33,\"x\":42,\"y\":39},{\"height\":1230.36696969697,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":1215.33,\"y\":37.6969663636364},{\"height\":12.3333,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1148,\"x\":65.3333,\"y\":1253},{\"height\":1230.36696969697,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":40.6667,\"y\":37.0303033636364},{\"height\":29.3333666666667,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":300.667,\"x\":61.3333,\"y\":293.333},{\"height\":273,\"id\":17,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":232,\"x\":128.666,\"y\":489.667},{\"height\":645.999666666667,\"id\":19,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":360.667,\"y\":293.333333333333},{\"height\":191.667,\"id\":20,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":256.667,\"y\":936.333},{\"height\":22.6667,\"id\":21,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":170,\"x\":276.667,\"y\":935.333},{\"height\":20.6667,\"id\":22,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":767.333,\"x\":256.667,\"y\":1128.67},{\"height\":23.3333,\"id\":25,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":125.667,\"x\":705.667,\"y\":999.667},{\"height\":709.333333333333,\"id\":26,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":808.667,\"y\":294.666666666667},{\"height\":147.666333333333,\"id\":28,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":127.666633333333,\"x\":703.667,\"y\":555.333666666667},{\"height\":24.3332966666667,\"id\":33,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":126.666,\"x\":703.667,\"y\":294.833},{\"height\":24.3333,\"id\":35,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.167,\"x\":448,\"y\":294.833},{\"height\":280.667,\"id\":36,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":448,\"y\":295},{\"height\":149.667,\"id\":38,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.333366666667,\"x\":447.000333333333,\"y\":556.333},{\"height\":23.6667,\"id\":41,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128,\"x\":447.667,\"y\":999.333},{\"height\":332.667,\"id\":42,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":447.333,\"y\":669},{\"height\":29.3333,\"id\":43,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":63.5,\"x\":384,\"y\":418.667},{\"height\":594.5,\"id\":44,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":163,\"x\":832,\"y\":361},{\"height\":977.625,\"id\":45,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":25,\"x\":998.5,\"y\":166.375},{\"height\":24.1087,\"id\":46,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":700.978,\"x\":298.022,\"y\":165.391},{\"height\":659.636363636364,\"id\":48,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":83,\"x\":1027.5,\"y\":359.363636363636}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":false,\"x\":0,\"y\":0}],\"nextlayerid\":7,\"nextobjectid\":54,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":20},\"mapSpriteSheet\":{\"name\":\"level_2_MapSpriteSheet\",\"src\":\"./img/tile-sets/map.png\",\"width\":640,\"height\":640,\"spriteWidth\":64,\"spriteHeight\":64},\"enemies\":[{\"healthPoint\":15,\"healthPointLabel\":{\"name\":\"timeLabel\",\"text\":\"15\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":14,\"fontFamily\":\"Do Hyeon\"},\"rangeZone\":{\"up\":128,\"right\":128,\"down\":128,\"left\":128},\"name\":\"Enemy_1\",\"body\":{\"x\":500,\"y\":80,\"width\":64,\"height\":64,\"visible\":false,\"defaultSpeed\":1,\"aggressiveSpeed\":2,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/orc.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":1000,\"y\":80,\"isStop\":true,\"stopTime\":3000},{\"x\":400,\"y\":80,\"isStop\":true,\"stopTime\":3000}]}}},{\"healthPoint\":15,\"healthPointLabel\":{\"name\":\"timeLabel\",\"text\":\"15\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":14,\"fontFamily\":\"Do Hyeon\"},\"rangeZone\":{\"up\":128,\"right\":128,\"down\":128,\"left\":128},\"name\":\"Enemy_2\",\"body\":{\"x\":500,\"y\":300,\"width\":64,\"height\":64,\"visible\":false,\"defaultSpeed\":1,\"aggressiveSpeed\":2,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/skeleton.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":500,\"y\":470,\"isStop\":true,\"stopTime\":3000},{\"x\":750,\"y\":470,\"isStop\":true,\"stopTime\":3000},{\"x\":750,\"y\":300,\"isStop\":true,\"stopTime\":3000},{\"x\":500,\"y\":300,\"isStop\":true,\"stopTime\":3000}]}}}]}}}");

/***/ }),

/***/ "./src/ielements/button.js":
/*!*********************************!*\
  !*** ./src/ielements/button.js ***!
  \*********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _ielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ielement */ "./src/ielements/ielement.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label */ "./src/ielements/label.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Button = /*#__PURE__*/function (_IElement) {
  _inherits(Button, _IElement);

  var _super = _createSuper(Button);

  function Button(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "button" : _ref$name,
        width = _ref.width,
        height = _ref.height,
        bgcolor = _ref.bgcolor,
        colors = _ref.colors,
        labelProp = _ref.labelProp,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$animated = _ref.animated,
        animated = _ref$animated === void 0 ? false : _ref$animated,
        _ref$animationProp = _ref.animationProp,
        animationProp = _ref$animationProp === void 0 ? undefined : _ref$animationProp;

    _classCallCheck(this, Button);

    _this = _super.call(this, {
      name: name,
      x: x,
      y: y,
      animated: animated,
      animationProp: animationProp
    });
    _this.width = width;
    _this.height = height;
    _this.bgcolor = bgcolor;
    _this.colors = colors;
    _this.label = new _label__WEBPACK_IMPORTED_MODULE_1__["Label"](labelProp);
    _this.isMouseDown = false;
    return _this;
  }

  _createClass(Button, [{
    key: "__in__",
    value: function __in__(event) {
      return event.offsetX >= this.x && event.offsetX <= this.x + this.width && event.offsetY >= this.y && event.offsetY <= this.y + this.height;
    }
  }, {
    key: "addListeners",
    value: function addListeners(target, functions) {
      (this._listenerMouseMove = functions.mouseMoveHandler) && target.addEventListener("mousemove", this._listenerMouseMove);
      (this._listenerMouseDown = functions.mouseDownHandler) && target.addEventListener("mousedown", this._listenerMouseDown);
      (this._listenerMouseUp = functions.mouseUpHandler) && target.addEventListener("mouseup", this._listenerMouseUp);
      (this._listenerMouseClick = functions.mouseClickHandler) && target.addEventListener("click", this._listenerMouseClick);
    }
  }, {
    key: "removeListeners",
    value: function removeListeners(target) {
      this._listenerMouseMove && target.removeEventListener("mousemove", this._listenerMouseMove) && delete this._listenerMouseMove;
      this._listenerMouseDown && target.removeEventListener("mousedown", this._listenerMouseDown) && delete this._listenerMouseDown;
      this._listenerMouseUp && target.removeEventListener("mouseup", this._listenerMouseUp) && delete this._listenerMouseUp;
      this._listenerMouseClick && target.removeEventListener("click", this._listenerMouseClick) && delete this._listenerMouseClick;
    }
  }, {
    key: "init",
    value: function init() {
      this.label.init();
      this.label.x += this.x;
      this.label.y += this.y;

      _get(_getPrototypeOf(Button.prototype), "init", this).call(this);
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      screen.drawButton(this);
    }
  }]);

  return Button;
}(_ielement__WEBPACK_IMPORTED_MODULE_0__["IElement"]);

/***/ }),

/***/ "./src/ielements/ielement.js":
/*!***********************************!*\
  !*** ./src/ielements/ielement.js ***!
  \***********************************/
/*! exports provided: IElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IElement", function() { return IElement; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IElement = /*#__PURE__*/function () {
  function IElement() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? "ielement" : _ref$name,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$animated = _ref.animated,
        animated = _ref$animated === void 0 ? false : _ref$animated,
        animationProp = _ref.animationProp;

    _classCallCheck(this, IElement);

    this.name = name;
    this.x = x;
    this.y = y;
    this.animated = animated;
    this._animation = animationProp;
  }

  _createClass(IElement, [{
    key: "init",
    value: function init() {
      if (this.animated) {
        this.animation = this.createAnimation(this._animation);
        this.animation.init();
      }

      delete this._animation;
    }
  }, {
    key: "update",
    value: function update(time) {
      this.animated && this.animation.update(time);
    }
  }, {
    key: "createAnimation",
    value: function createAnimation() {}
  }, {
    key: "setXY",
    value: function setXY(newX, newY) {
      this.x = newX;
      this.y = newY;
    }
  }]);

  return IElement;
}();

/***/ }),

/***/ "./src/ielements/label.js":
/*!********************************!*\
  !*** ./src/ielements/label.js ***!
  \********************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _ielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ielement */ "./src/ielements/ielement.js");
/* harmony import */ var _view_animation_labelAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/animation/labelAnimation */ "./src/view/animation/labelAnimation.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Label = /*#__PURE__*/function (_IElement) {
  _inherits(Label, _IElement);

  var _super = _createSuper(Label);

  function Label(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "label" : _ref$name,
        _ref$text = _ref.text,
        text = _ref$text === void 0 ? "label" : _ref$text,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 10 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 10 : _ref$y,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? "#444444" : _ref$color,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === void 0 ? 36 : _ref$fontSize,
        _ref$fontWeight = _ref.fontWeight,
        fontWeight = _ref$fontWeight === void 0 ? "normal" : _ref$fontWeight,
        _ref$fontFamily = _ref.fontFamily,
        fontFamily = _ref$fontFamily === void 0 ? "Courier New" : _ref$fontFamily,
        _ref$animated = _ref.animated,
        animated = _ref$animated === void 0 ? false : _ref$animated,
        _ref$animationProp = _ref.animationProp,
        animationProp = _ref$animationProp === void 0 ? undefined : _ref$animationProp;

    _classCallCheck(this, Label);

    _this = _super.call(this, {
      name: name,
      x: x,
      y: y,
      animated: animated,
      animationProp: animationProp
    });
    _this.text = text;
    _this.color = color;
    _this.fontSize = fontSize;
    _this.fontWeight = fontWeight;
    _this.fontFamily = fontFamily;
    return _this;
  }

  _createClass(Label, [{
    key: "createAnimation",
    value: function createAnimation(prop) {
      return new _view_animation_labelAnimation__WEBPACK_IMPORTED_MODULE_1__["LabelAnimation"]({
        label: this,
        frameDelay: prop.frameDelay,
        repeat: prop.repeat,
        autorun: prop.autorun,
        textCollection: prop.textCollection
      });
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      var camera = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.update(time);
      screen.drawLabel(this, camera);
    }
  }]);

  return Label;
}(_ielement__WEBPACK_IMPORTED_MODULE_0__["IElement"]);

/***/ }),

/***/ "./src/ielements/tile.js":
/*!*******************************!*\
  !*** ./src/ielements/tile.js ***!
  \*******************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony import */ var _ielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ielement */ "./src/ielements/ielement.js");
/* harmony import */ var _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/picture/spriteSheet */ "./src/view/picture/spriteSheet.js");
/* harmony import */ var _view_animation_spriteAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/animation/spriteAnimation */ "./src/view/animation/spriteAnimation.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Tile = /*#__PURE__*/function (_IElement) {
  _inherits(Tile, _IElement);

  var _super = _createSuper(Tile);

  function Tile(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "tile" : _ref$name,
        width = _ref.width,
        height = _ref.height,
        spriteSheet = _ref.spriteSheet,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 10 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 10 : _ref$y,
        _ref$animated = _ref.animated,
        animated = _ref$animated === void 0 ? false : _ref$animated,
        _ref$animationProp = _ref.animationProp,
        animationProp = _ref$animationProp === void 0 ? undefined : _ref$animationProp,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? undefined : _ref$options;

    _classCallCheck(this, Tile);

    _this = _super.call(this, {
      name: name,
      x: x,
      y: y,
      animated: animated,
      animationProp: animationProp
    });
    _this.width = width;
    _this.height = height;
    options && (_this.__options__ = options);
    _this.spriteSheet = new _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"](spriteSheet);
    return _this;
  }

  _createClass(Tile, [{
    key: "init",
    value: function init() {
      this.spriteSheet.init();

      _get(_getPrototypeOf(Tile.prototype), "init", this).call(this);
    }
  }, {
    key: "createAnimation",
    value: function createAnimation(prop) {
      return new _view_animation_spriteAnimation__WEBPACK_IMPORTED_MODULE_2__["SpriteAnimation"]({
        spriteSheet: this.spriteSheet,
        indices: prop.indices,
        autorun: prop.autorun,
        frameDelay: prop.frameDelay,
        name: prop.name,
        repeat: prop.repeat
      });
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
      screen.drawSprite(this.spriteSheet.getSprite(this.animated && this.animation.indices[this.animation.currentFrameIndex] || 1), this.x, this.y);
      this.__options__ && this.__options__.fog && screen.fill("#00000066");
    }
  }]);

  return Tile;
}(_ielement__WEBPACK_IMPORTED_MODULE_0__["IElement"]);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  game.run();
};

/***/ }),

/***/ "./src/physic/collision.js":
/*!*********************************!*\
  !*** ./src/physic/collision.js ***!
  \*********************************/
/*! exports provided: Collision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collision", function() { return Collision; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Collision = /*#__PURE__*/function () {
  function Collision(bodies) {
    _classCallCheck(this, Collision);

    this.colliders = [];
    this.bodies = bodies || [];
  }

  _createClass(Collision, [{
    key: "update",
    value: function update() {
      var _this = this;

      this.bodies.forEach(function (body) {
        _this.colliders.forEach(function (collider) {
          if (_this.intersect(body, collider)) _this.outCollider(body, collider);
        });
      });
    }
  }, {
    key: "outCollider",
    value: function outCollider(body, collider) {
      var box = {
        _x: body.boxCollider._x,
        _y: body.boxCollider._y,
        x1: body.boxCollider.x,
        x2: body.boxCollider.x + body.boxCollider.width,
        y1: body.boxCollider.y,
        y2: body.boxCollider.y + body.boxCollider.height,
        width: body.boxCollider.width,
        height: body.boxCollider.height
      };
      var min = Math.min(Math.abs(collider.x1 - box.x2), Math.abs(collider.x2 - box.x1), Math.abs(collider.y1 - box.y2), Math.abs(collider.y2 - box.y1));

      switch (min) {
        case Math.abs(collider.x1 - box.x2):
          body.x = Math.floor(collider.x1 - body.width + box._x);
          break;

        case Math.abs(collider.x2 - box.x1):
          body.x = Math.ceil(collider.x2 - box._x + 2);
          break;

        case Math.abs(collider.y1 - box.y2):
          body.y = Math.floor(collider.y1 - body.height - 2);
          break;

        case Math.abs(collider.y2 - box.y1):
          body.y = Math.ceil(collider.y2 - box._y + 2);
          break;
      }
    }
  }, {
    key: "intersect",
    value: function intersect(body, collider) {
      var box = {
        x1: body.x1 || body.boxCollider.x,
        x2: body.x2 || body.boxCollider.x + body.boxCollider.width,
        y1: body.y1 || body.boxCollider.y,
        y2: body.y2 || body.boxCollider.y + body.boxCollider.height
      };
      return box.x2 > collider.x1 && box.x1 < collider.x1 && box.y2 > collider.y1 && box.y1 < collider.y2 || box.x1 < collider.x2 && box.x2 > collider.x2 && box.y2 > collider.y1 && box.y1 < collider.y2 || box.y2 > collider.y1 && box.y1 < collider.y1 && box.x2 > collider.x1 && box.x1 < collider.x2 || box.y1 < collider.y2 && box.y2 > collider.y2 && box.x2 > collider.x1 && box.x1 < collider.x2 || box.x1 >= collider.x1 && box.x2 <= collider.x2 && box.y1 >= collider.y1 && box.y2 <= collider.y2;
    }
  }]);

  return Collision;
}();

/***/ }),

/***/ "./src/player/attack/shooterAttack.js":
/*!********************************************!*\
  !*** ./src/player/attack/shooterAttack.js ***!
  \********************************************/
/*! exports provided: ShooterAttack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShooterAttack", function() { return ShooterAttack; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShooterAttack = function ShooterAttack(prop) {
  _classCallCheck(this, ShooterAttack);
};

/***/ }),

/***/ "./src/player/attack/warriorAttack.js":
/*!********************************************!*\
  !*** ./src/player/attack/warriorAttack.js ***!
  \********************************************/
/*! exports provided: WarriorAttack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarriorAttack", function() { return WarriorAttack; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WarriorAttack = /*#__PURE__*/function () {
  function WarriorAttack(player, prop) {
    _classCallCheck(this, WarriorAttack);

    this.player = player;
    this.damage = prop.damage;
    this.cooldown = prop.cooldown;
    this.canAttack = true;
    this.isAttacked = false;
    this.direction = "down";
  }

  _createClass(WarriorAttack, [{
    key: "startCooldown",
    value: function startCooldown() {
      var _this = this;

      setTimeout(function () {
        _this.canAttack = true;
      }, this.cooldown * 1000);
    }
  }, {
    key: "setEnemies",
    value: function setEnemies(enemies) {
      this.enemies = enemies;
    }
  }, {
    key: "setCollision",
    value: function setCollision(collision) {
      this.collision = collision;
    }
  }, {
    key: "hit",
    value: function hit(direction) {
      var _this2 = this;

      if (!this.canAttack) return;
      this.direction = direction;
      this.player.attackCollider = {
        x1: this.direction == "left" ? this.player.body.x - 50 : this.player.body.x,
        x2: this.direction == "right" ? this.player.body.x + this.player.body.width + 50 : this.player.body.x + this.player.body.width,
        y1: this.direction == "up" ? this.player.body.y - 50 : this.player.body.y,
        y2: this.direction == "down" ? this.player.body.y + this.player.body.height + 50 : this.player.body.y + this.player.body.height
      };
      this.enemies.forEach(function (enemy) {
        if (_this2.collision.intersect(_this2.player.attackCollider, {
          x1: enemy.body.x,
          x2: enemy.body.x + enemy.body.width,
          y1: enemy.body.y,
          y2: enemy.body.y + enemy.body.height
        })) {
          enemy.healthPoint -= _this2.damage;

          switch (direction) {
            case "up":
              enemy.body.y -= 20;
              break;

            case "right":
              enemy.body.x += 20;
              break;

            case "down":
              enemy.body.y += 20;
              break;

            case "left":
              enemy.body.x -= 20;
              break;
          }

          enemy.controller.moveController.strictStop(1000);
        }
      });
      this.canAttack = false;
      this.isAttacked = true;
      this.player.attackCollider = null;
      this.startCooldown();
    }
  }]);

  return WarriorAttack;
}();

/***/ }),

/***/ "./src/player/attack/wizardAttack.js":
/*!*******************************************!*\
  !*** ./src/player/attack/wizardAttack.js ***!
  \*******************************************/
/*! exports provided: WizardAttack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardAttack", function() { return WizardAttack; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WizardAttack = function WizardAttack(prop) {
  _classCallCheck(this, WizardAttack);
};

/***/ }),

/***/ "./src/player/controllers/attackController.js":
/*!****************************************************!*\
  !*** ./src/player/controllers/attackController.js ***!
  \****************************************************/
/*! exports provided: PlayerAttackController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerAttackController", function() { return PlayerAttackController; });
/* harmony import */ var _attack_warriorAttack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attack/warriorAttack */ "./src/player/attack/warriorAttack.js");
/* harmony import */ var _attack_shooterAttack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attack/shooterAttack */ "./src/player/attack/shooterAttack.js");
/* harmony import */ var _attack_wizardAttack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../attack/wizardAttack */ "./src/player/attack/wizardAttack.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PlayerAttackController = /*#__PURE__*/function () {
  function PlayerAttackController(_ref) {
    var _ref$attackType = _ref.attackType,
        attackType = _ref$attackType === void 0 ? "warrior" : _ref$attackType,
        player = _ref.player,
        keyController = _ref.keyController,
        moveController = _ref.moveController,
        prop = _ref.prop;

    _classCallCheck(this, PlayerAttackController);

    switch (attackType) {
      case "warrior":
        this.attack = new _attack_warriorAttack__WEBPACK_IMPORTED_MODULE_0__["WarriorAttack"](player, prop.warrior);
        break;

      case "shooter":
        this.attack = new _attack_shooterAttack__WEBPACK_IMPORTED_MODULE_1__["ShooterAttack"](player, prop.shooter);
        break;

      default:
        this.attack = new _attack_wizardAttack__WEBPACK_IMPORTED_MODULE_2__["WizardAttack"](player, prop.wizard);
        break;
    }

    this.keyController = keyController;
    this.moveController = moveController;
    this.keys = prop.keys;
  }

  _createClass(PlayerAttackController, [{
    key: "update",
    value: function update() {
      if (!this.keyController.isKeyAttackDown) return;
      if (this.keyController.keys[this.keys.up].isDown) this.attack.hit("up");
      if (this.keyController.keys[this.keys.right].isDown) this.attack.hit("right");
      if (this.keyController.keys[this.keys.down].isDown) this.attack.hit("down");
      if (this.keyController.keys[this.keys.left].isDown) this.attack.hit("left");
    }
  }]);

  return PlayerAttackController;
}();

/***/ }),

/***/ "./src/player/controllers/keyController.js":
/*!*************************************************!*\
  !*** ./src/player/controllers/keyController.js ***!
  \*************************************************/
/*! exports provided: PlayerKeyController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerKeyController", function() { return PlayerKeyController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlayerKeyController = /*#__PURE__*/function () {
  function PlayerKeyController() {
    _classCallCheck(this, PlayerKeyController);

    this.keys = {
      KeyW: {
        code: 87,
        isDown: false
      },
      KeyD: {
        code: 68,
        isDown: false
      },
      KeyS: {
        code: 83,
        isDown: false
      },
      KeyA: {
        code: 65,
        isDown: false
      },
      Space: {
        code: 32,
        isDown: false
      },
      ArrowUp: {
        code: 38,
        isDown: false
      },
      ArrowRight: {
        code: 39,
        isDown: false
      },
      ArrowDown: {
        code: 40,
        isDown: false
      },
      ArrowLeft: {
        code: 37,
        isDown: false
      }
    };
    this.isKeyMoveDown = false;
    this.isKeyAttackDown = false;
  }

  _createClass(PlayerKeyController, [{
    key: "start",
    value: function start() {
      this.startEventListen();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stopEventListen();
    }
  }, {
    key: "startEventListen",
    value: function startEventListen() {
      this._listenerKeyDown = this.keyDownHandler.bind(this);
      this._listenerKeyUp = this.keyUpHandler.bind(this);
      window.addEventListener("keydown", this._listenerKeyDown);
      window.addEventListener("keyup", this._listenerKeyUp);
    }
  }, {
    key: "stopEventListen",
    value: function stopEventListen() {
      this._listenerKeyDown && window.removeEventListener("keydown", this._listenerKeyDown) && delete this._listenerKeyDown;
      this._listenerKeyUp && window.removeEventListener("keyup", this._listenerKeyUp) && delete this._listenerKeyUp;
    }
  }, {
    key: "update",
    value: function update() {
      this.isKeyMoveDown = this.keys.KeyW.isDown || this.keys.KeyD.isDown || this.keys.KeyS.isDown || this.keys.KeyA.isDown;
      this.isKeyAttackDown = this.keys.ArrowUp.isDown || this.keys.ArrowRight.isDown || this.keys.ArrowDown.isDown || this.keys.ArrowLeft.isDown;
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(event) {
      if (this.keys[event.code]) {
        event.preventDefault();
        this.keys[event.code].isDown = true;
      }
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(event) {
      if (this.keys[event.code]) {
        event.preventDefault();
        this.keys[event.code].isDown = false;
      }
    }
  }]);

  return PlayerKeyController;
}();

/***/ }),

/***/ "./src/player/controllers/moveController.js":
/*!**************************************************!*\
  !*** ./src/player/controllers/moveController.js ***!
  \**************************************************/
/*! exports provided: PlayerMoveController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerMoveController", function() { return PlayerMoveController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlayerMoveController = /*#__PURE__*/function () {
  function PlayerMoveController(player, keyController, prop) {
    _classCallCheck(this, PlayerMoveController);

    this.player = player;
    this.keyController = keyController;
    this.keys = prop.keys;
    this.isMove = false;
    this.direction = "down";
  }

  _createClass(PlayerMoveController, [{
    key: "update",
    value: function update() {
      if (this.keyController.keys[this.keys.up].isDown) this.moveUp();
      if (this.keyController.keys[this.keys.right].isDown) this.moveRight();
      if (this.keyController.keys[this.keys.down].isDown) this.moveDown();
      if (this.keyController.keys[this.keys.left].isDown) this.moveLeft();
      if (!this.keyController.isKeyMoveDown) this.isMove = false;
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      this.player.body.y -= this.player.body.moveSpeed;
      this.isMove = true;
      this.direction = "up";
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.player.body.x += this.player.body.moveSpeed;
      this.isMove = true;
      this.direction = "right";
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.player.body.y += this.player.body.moveSpeed;
      this.isMove = true;
      this.direction = "down";
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.player.body.x -= this.player.body.moveSpeed;
      this.isMove = true;
      this.direction = "left";
    }
  }]);

  return PlayerMoveController;
}();

/***/ }),

/***/ "./src/player/controllers/playerController.js":
/*!****************************************************!*\
  !*** ./src/player/controllers/playerController.js ***!
  \****************************************************/
/*! exports provided: PlayerController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerController", function() { return PlayerController; });
/* harmony import */ var _keyController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyController */ "./src/player/controllers/keyController.js");
/* harmony import */ var _moveController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveController */ "./src/player/controllers/moveController.js");
/* harmony import */ var _bodies_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bodies/animation */ "./src/bodies/animation.js");
/* harmony import */ var _attackController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attackController */ "./src/player/controllers/attackController.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var PlayerController = /*#__PURE__*/function () {
  function PlayerController(_ref) {
    var player = _ref.player,
        prop = _ref.prop;

    _classCallCheck(this, PlayerController);

    this.player = player;
    this.keyController = new _keyController__WEBPACK_IMPORTED_MODULE_0__["PlayerKeyController"]();
    this.moveController = new _moveController__WEBPACK_IMPORTED_MODULE_1__["PlayerMoveController"](this.player, this.keyController, prop.moveController);
    this.attackController = new _attackController__WEBPACK_IMPORTED_MODULE_3__["PlayerAttackController"]({
      attackType: "warrior",
      keyController: this.keyController,
      moveController: this.moveController,
      player: this.player,
      prop: prop.attackController
    });
    this.animationController = new _bodies_animation__WEBPACK_IMPORTED_MODULE_2__["BodyAnimation"](this.player.view, this.moveController, this.attackController);
  }

  _createClass(PlayerController, [{
    key: "start",
    value: function start() {
      this.keyController.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.keyController.stop();
    }
  }, {
    key: "update",
    value: function update(time) {
      this.keyController.update();
      this.moveController.update();
      this.attackController.update();
      this.animationController.update(time);
    }
  }]);

  return PlayerController;
}();

/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _controllers_playerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/playerController */ "./src/player/controllers/playerController.js");
/* harmony import */ var _bodies_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bodies/character */ "./src/bodies/character.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Player = /*#__PURE__*/function (_Character) {
  _inherits(Player, _Character);

  var _super = _createSuper(Player);

  function Player(prop) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, prop);
    _this.name = prop.name;
    _this.healthPoint = 3;
    _this.controller = new _controllers_playerController__WEBPACK_IMPORTED_MODULE_0__["PlayerController"]({
      player: _assertThisInitialized(_this),
      prop: prop.controller
    });
    return _this;
  }

  _createClass(Player, [{
    key: "update",
    value: function update(time) {
      this.controller.update(time);

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this);
    }
  }]);

  return Player;
}(_bodies_character__WEBPACK_IMPORTED_MODULE_1__["Character"]);

/***/ }),

/***/ "./src/view/animation/animation.js":
/*!*****************************************!*\
  !*** ./src/view/animation/animation.js ***!
  \*****************************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animation = /*#__PURE__*/function () {
  function Animation(_ref) {
    var name = _ref.name,
        _ref$frameDelay = _ref.frameDelay,
        frameDelay = _ref$frameDelay === void 0 ? 50 : _ref$frameDelay,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? false : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? false : _ref$autorun;

    _classCallCheck(this, Animation);

    this.name = name;
    this.repeat = repeat;
    this.autorun = autorun;
    this.frameDelay = frameDelay;
    this.lastFrameTime = 0;
    this.isRunning = false;
  }

  _createClass(Animation, [{
    key: "init",
    value: function init() {
      this.autorun && this.run();
    }
  }, {
    key: "run",
    value: function run() {
      this.isRunning = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isRunning = false;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (!this.isRunning) return;

      if (this.lastFrameTime == 0) {
        this.lastFrameTime = time;
        return;
      }

      if (time - this.lastFrameTime > this.frameDelay) {
        this.nextFrame();
        this.lastFrameTime = time;
      }
    }
  }]);

  return Animation;
}();

/***/ }),

/***/ "./src/view/animation/labelAnimation.js":
/*!**********************************************!*\
  !*** ./src/view/animation/labelAnimation.js ***!
  \**********************************************/
/*! exports provided: LabelAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelAnimation", function() { return LabelAnimation; });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/view/animation/animation.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var LabelAnimation = /*#__PURE__*/function (_Animation) {
  _inherits(LabelAnimation, _Animation);

  var _super = _createSuper(LabelAnimation);

  function LabelAnimation(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "labelAnimation" : _ref$name,
        label = _ref.label,
        _ref$frameDelay = _ref.frameDelay,
        frameDelay = _ref$frameDelay === void 0 ? 200 : _ref$frameDelay,
        _ref$textCollection = _ref.textCollection,
        textCollection = _ref$textCollection === void 0 ? [] : _ref$textCollection,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun;

    _classCallCheck(this, LabelAnimation);

    _this = _super.call(this, {
      name: name,
      frameDelay: frameDelay,
      repeat: repeat,
      autorun: autorun
    });
    _this.label = label;
    _this.textCollection = textCollection;
    _this.currentTextIndex = 0;
    return _this;
  }

  _createClass(LabelAnimation, [{
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentTextIndex + 1 == this.textCollection.length) {
        this.currentTextIndex = 0;
      } else ++this.currentTextIndex;

      this.label.text = this.textCollection[this.currentTextIndex];
    }
  }]);

  return LabelAnimation;
}(_animation__WEBPACK_IMPORTED_MODULE_0__["Animation"]);

/***/ }),

/***/ "./src/view/animation/spriteAnimation.js":
/*!***********************************************!*\
  !*** ./src/view/animation/spriteAnimation.js ***!
  \***********************************************/
/*! exports provided: SpriteAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteAnimation", function() { return SpriteAnimation; });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/view/animation/animation.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var SpriteAnimation = /*#__PURE__*/function (_Animation) {
  _inherits(SpriteAnimation, _Animation);

  var _super = _createSuper(SpriteAnimation);

  function SpriteAnimation(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "spriteAnimation" : _ref$name,
        spriteSheet = _ref.spriteSheet,
        indices = _ref.indices,
        _ref$frameDelay = _ref.frameDelay,
        frameDelay = _ref$frameDelay === void 0 ? 100 : _ref$frameDelay,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? false : _ref$autorun;

    _classCallCheck(this, SpriteAnimation);

    _this = _super.call(this, {
      name: name,
      frameDelay: frameDelay,
      repeat: repeat,
      autorun: autorun
    });
    _this.spriteSheet = spriteSheet;
    _this.indices = indices;
    _this.frames = _this.getFrames(_this.indices);
    _this.currentFrameIndex = 0;
    return _this;
  }

  _createClass(SpriteAnimation, [{
    key: "init",
    value: function init() {
      this.spriteSheet.init();

      _get(_getPrototypeOf(SpriteAnimation.prototype), "init", this).call(this);
    }
  }, {
    key: "getFrames",
    value: function getFrames(indices) {
      var _this2 = this;

      return indices.map(function (index) {
        return {
          sourceX: _this2.spriteSheet.getSourceX(index),
          sourceY: _this2.spriteSheet.getSourceY(index)
        };
      });
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentFrameIndex + 1 == this.frames.length && this.repeat) this.currentFrameIndex = 0;else if (this.currentFrameIndex + 1 == this.frames.length && !this.repeat) {
        this.currentFrameIndex = 0;
        this.stop();
      } else ++this.currentFrameIndex;
    }
  }]);

  return SpriteAnimation;
}(_animation__WEBPACK_IMPORTED_MODULE_0__["Animation"]);

/***/ }),

/***/ "./src/view/camera.js":
/*!****************************!*\
  !*** ./src/view/camera.js ***!
  \****************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera = /*#__PURE__*/function () {
  function Camera() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height,
        _ref$limitX = _ref.limitX,
        limitX = _ref$limitX === void 0 ? 640 : _ref$limitX,
        _ref$limitY = _ref.limitY,
        limitY = _ref$limitY === void 0 ? 640 : _ref$limitY,
        _ref$scrollEdge = _ref.scrollEdge,
        scrollEdge = _ref$scrollEdge === void 0 ? 300 : _ref$scrollEdge;

    _classCallCheck(this, Camera);

    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.limitX = limitX;
    this.limitY = limitY;
    this.watchObject = false;
    this.body = null;
    this.scrollEdge = scrollEdge;
  }

  _createClass(Camera, [{
    key: "watch",
    value: function watch(obj) {
      this.watchObject = true;
      this.body = obj.body;
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.watchObject) return;
      if (this.body.x > this.x + this.width - this.scrollEdge) this.x = Math.min(this.limitX, this.body.x - this.width + this.scrollEdge);
      if (this.body.x < this.x + this.scrollEdge) this.x = Math.max(0, this.body.x - this.scrollEdge);
      if (this.body.y > this.y + this.height - this.scrollEdge) this.y = Math.min(this.limitY, this.body.y - this.height + this.scrollEdge);
      if (this.body.y < this.y + this.scrollEdge) this.y = Math.max(0, this.body.y - this.scrollEdge);
    }
  }]);

  return Camera;
}();

/***/ }),

/***/ "./src/view/map.js":
/*!*************************!*\
  !*** ./src/view/map.js ***!
  \*************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/picture/spriteSheet */ "./src/view/picture/spriteSheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Map = /*#__PURE__*/function () {
  function Map(prop, collision) {
    _classCallCheck(this, Map);

    this.collision = collision;
    this.data = prop.mapData;
    this.name = this.data.name;
    this.width = this.data.width * this.data.tilewidth;
    this.height = this.data.height * this.data.tileheight;
    this.tileSet = new _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"](prop.mapSpriteSheet);
    this.row = this.data.height;
    this.column = this.data.width;
    this.layers = [];
    this.colliders = [];
    this.defaultLayer = [];
    this.upperLayer = [];
  }

  _createClass(Map, [{
    key: "init",
    value: function init() {
      this.tileSet.init();
      this.createLayers();
    }
  }, {
    key: "createLayers",
    value: function createLayers() {
      var _this = this;

      this.data.layers.forEach(function (layer) {
        if (layer.type == "tilelayer") {
          _this.layers.push({
            name: layer.name,
            indexes: layer.data,
            z_index: layer.properties[0].value
          });
        } else if (layer.type == "objectgroup") {
          _this.colliders = layer.objects.map(function (item) {
            return {
              x1: item.x,
              x2: item.x + item.width,
              y1: item.y,
              y2: item.y + item.height
            };
          });
        }
      });
      this.layers.sort(function (a, b) {
        return a.z_index - b.z_index;
      });
      this.collision.colliders = this.colliders;
      delete this.data;
    }
  }, {
    key: "secondRender",
    value: function secondRender(screen) {
      this.upperLayer.forEach(function (tile) {
        return screen.drawSprite(tile.sprite, tile.x, tile.y);
      });
      this.upperLayer = [];
    }
  }, {
    key: "render",
    value: function render(screen) {
      var _this2 = this;

      this.layers.forEach(function (layer) {
        var col = 0,
            row = 0;
        layer.indexes.forEach(function (index) {
          var _ref;

          if (index > 0) {
            if (layer.name == "wall") {
              _this2.collision.bodies.forEach(function (body) {
                var isIntersect = _this2.collision.intersect(body, {
                  x1: _this2.tileSet.spriteWidth * col,
                  x2: _this2.tileSet.spriteWidth * col + _this2.tileSet.spriteWidth,
                  y1: _this2.tileSet.spriteHeight * row,
                  y2: _this2.tileSet.spriteHeight * row + _this2.tileSet.spriteHeight / 2
                });

                if (isIntersect) _this2.upperLayer.push({
                  sprite: _this2.tileSet.getSprite(index),
                  x: _this2.tileSet.spriteWidth * col,
                  y: _this2.tileSet.spriteHeight * row
                });else screen.drawSprite(_this2.tileSet.getSprite(index), _this2.tileSet.spriteWidth * col, _this2.tileSet.spriteHeight * row);
              });
            } else screen.drawSprite(_this2.tileSet.getSprite(index), _this2.tileSet.spriteWidth * col, _this2.tileSet.spriteHeight * row);
          }

          ++col > _this2.column - 1 && (_ref = [0, row + 1], col = _ref[0], row = _ref[1], _ref);
        });
      });
    }
  }]);

  return Map;
}();

/***/ }),

/***/ "./src/view/picture/sprite.js":
/*!************************************!*\
  !*** ./src/view/picture/sprite.js ***!
  \************************************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite = /*#__PURE__*/function () {
  function Sprite(_ref) {
    var _ref$image = _ref.image,
        image = _ref$image === void 0 ? undefined : _ref$image,
        src = _ref.src,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height,
        _ref$sourceX = _ref.sourceX,
        sourceX = _ref$sourceX === void 0 ? 0 : _ref$sourceX,
        _ref$sourceY = _ref.sourceY,
        sourceY = _ref$sourceY === void 0 ? 0 : _ref$sourceY;

    _classCallCheck(this, Sprite);

    this.image = image;
    this.src = src;
    this.width = width;
    this.height = height;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
  }

  _createClass(Sprite, [{
    key: "init",
    value: function init() {
      this.image || (this.image = this.loadImage());
    }
  }, {
    key: "_load",
    value: function _load() {
      var _this = this;

      return new Promise(function (resolve) {
        var img = new Image(_this.width, _this.height);

        img.onload = function () {
          return resolve(img);
        };

        img.src = _this.src;
      });
    }
  }, {
    key: "loadImage",
    value: function loadImage() {
      var _this2 = this;

      this._load().then(function (img) {
        return _this2.image = img;
      })["catch"](function (error) {
        throw error;
      });
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ "./src/view/picture/spriteSheet.js":
/*!*****************************************!*\
  !*** ./src/view/picture/spriteSheet.js ***!
  \*****************************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/view/picture/sprite.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var SpriteSheet = /*#__PURE__*/function (_Sprite) {
  _inherits(SpriteSheet, _Sprite);

  var _super = _createSuper(SpriteSheet);

  function SpriteSheet(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "spriteSheet" : _ref$name,
        src = _ref.src,
        width = _ref.width,
        height = _ref.height,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    _this = _super.call(this, {
      src: src,
      width: width,
      height: height
    });
    _this.name = name;
    _this.spriteWidth = spriteWidth;
    _this.spriteHeight = spriteHeight;
    return _this;
  }

  _createClass(SpriteSheet, [{
    key: "getSprite",
    value: function getSprite(index) {
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        image: this.image,
        width: this.spriteWidth,
        height: this.spriteHeight,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index)
      });
    }
  }, {
    key: "getSourceX",
    value: function getSourceX(index) {
      return (index - 1) * this.spriteWidth % this.width;
    }
  }, {
    key: "getSourceY",
    value: function getSourceY(index) {
      return Math.trunc((index - 1) * this.spriteWidth / this.width) * this.spriteHeight;
    }
  }]);

  return SpriteSheet;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/view/scene/level/leveUI.js":
/*!****************************************!*\
  !*** ./src/view/scene/level/leveUI.js ***!
  \****************************************/
/*! exports provided: LevelUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelUI", function() { return LevelUI; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LevelUI = /*#__PURE__*/function () {
  function LevelUI(prop) {
    _classCallCheck(this, LevelUI);

    this.healthPoints = prop.healthPoints;
    this.timeLabel = prop.timeLabel;
  }

  _createClass(LevelUI, [{
    key: "init",
    value: function init() {
      this.healthPoints.sprite.init();
      this.timeLabel.init();
    }
  }, {
    key: "update",
    value: function update(hp, txt) {
      this.healthPoints.count = hp;
      this.timeLabel.text = txt;
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      for (var i = 0; i < this.healthPoints.count; ++i) {
        screen.drawImage(this.healthPoints.sprite.image, this.healthPoints.x + i * this.healthPoints.sprite.width, this.healthPoints.y);
      }

      this.timeLabel.render(time, screen);
    }
  }]);

  return LevelUI;
}();

/***/ }),

/***/ "./src/view/scene/level/level.js":
/*!***************************************!*\
  !*** ./src/view/scene/level/level.js ***!
  \***************************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/view/scene/scene.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../map */ "./src/view/map.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../camera */ "./src/view/camera.js");
/* harmony import */ var _enemy_enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enemy/enemy */ "./src/enemy/enemy.js");
/* harmony import */ var _picture_sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../picture/sprite */ "./src/view/picture/sprite.js");
/* harmony import */ var _ielements_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ielements/label */ "./src/ielements/label.js");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../player/player */ "./src/player/player.js");
/* harmony import */ var _levelController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./levelController */ "./src/view/scene/level/levelController.js");
/* harmony import */ var _leveUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leveUI */ "./src/view/scene/level/leveUI.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var Level = /*#__PURE__*/function (_Scene) {
  _inherits(Level, _Scene);

  var _super = _createSuper(Level);

  function Level(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "level" : _ref$name,
        screen = _ref.screen,
        collision = _ref.collision,
        prop = _ref.prop;

    _classCallCheck(this, Level);

    _this = _super.call(this, {
      name: name,
      screen: screen,
      next: prop.next
    });
    _this.map = new _map__WEBPACK_IMPORTED_MODULE_1__["Map"](prop, collision);
    _this.player = new _player_player__WEBPACK_IMPORTED_MODULE_6__["Player"](prop.player);
    _this.enemies = prop.enemies.map(function (enemy) {
      return new _enemy_enemy__WEBPACK_IMPORTED_MODULE_3__["Enemy"](enemy);
    });
    _this.controller = new _levelController__WEBPACK_IMPORTED_MODULE_7__["LevelController"]({
      playerHP: _this.player.healthPoint,
      enemiesCount: _this.enemies.length,
      levelTime: {
        all: prop.time,
        current: 0
      },
      level: _assertThisInitialized(_this)
    });
    _this.collision = collision;
    _this["interface"] = new _leveUI__WEBPACK_IMPORTED_MODULE_8__["LevelUI"]({
      healthPoints: {
        sprite: new _picture_sprite__WEBPACK_IMPORTED_MODULE_4__["Sprite"](prop["interface"].healthPoints.sprite),
        x: prop["interface"].healthPoints.x,
        y: prop["interface"].healthPoints.y,
        count: prop["interface"].healthPoints.count
      },
      timeLabel: new _ielements_label__WEBPACK_IMPORTED_MODULE_5__["Label"](prop["interface"].time)
    });
    return _this;
  }

  _createClass(Level, [{
    key: "init",
    value: function init() {
      var _this$collision$bodie,
          _this2 = this;

      this.player.controller.attackController.attack.setEnemies(this.enemies);
      this.player.controller.attackController.attack.setCollision(this.collision);
      this.map.init();
      this.player.init();
      this["interface"].init();

      _get(_getPrototypeOf(Level.prototype), "init", this).call(this);

      this.player.controller.start();

      (_this$collision$bodie = this.collision.bodies).push.apply(_this$collision$bodie, [this.player.body].concat(_toConsumableArray(this.enemies.map(function (enemy) {
        enemy.init(_this2.player, _this2.collision);
        return enemy.body;
      }))));

      (this.camera = new _camera__WEBPACK_IMPORTED_MODULE_2__["Camera"]({
        width: this.screen.width,
        height: this.screen.height,
        limitX: this.map.width - this.screen.width,
        limitY: this.map.height - this.screen.height
      })).watch(this.player);
      this.screen.setCamera(this.camera);
    }
  }, {
    key: "update",
    value: function update(time) {
      var _this3 = this;

      this.collision.update();
      this.camera.update();
      this.controller.update(time, this.player.healthPoint, this.enemies.length);
      this["interface"].update(this.player.healthPoint, this.controller.getTimeLabel(time, this["interface"].timeLabel.text));
      this.enemies.forEach(function (enemy, index) {
        if (enemy.healthPoint <= 0) {
          _this3.enemies.splice(index, 1);
        }
      });

      _get(_getPrototypeOf(Level.prototype), "update", this).call(this, time);
    }
  }, {
    key: "render",
    value: function render(time) {
      var _this4 = this;

      this.update(time);
      this.map.render(this.screen);
      this.enemies.forEach(function (enemy) {
        return enemy.render(time, _this4.screen);
      });
      this.player.render(time, this.screen);
      this.map.secondRender(this.screen);

      _get(_getPrototypeOf(Level.prototype), "render", this).call(this, time);

      this["interface"].render(time, this.screen);
    }
  }]);

  return Level;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/view/scene/level/levelController.js":
/*!*************************************************!*\
  !*** ./src/view/scene/level/levelController.js ***!
  \*************************************************/
/*! exports provided: LevelController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelController", function() { return LevelController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LevelController = /*#__PURE__*/function () {
  function LevelController(prop) {
    _classCallCheck(this, LevelController);

    this.playerHP = prop.playerHP;
    this.enemiesCount = prop.enemiesCount;
    this.levelTime = prop.levelTime;
    this.level = prop.level;
  }

  _createClass(LevelController, [{
    key: "update",
    value: function update(time, playerHealthPoint, enemiesCount) {
      this.playerHP = playerHealthPoint;
      this.enemiesCount = enemiesCount;
      if (this.levelTime.current <= 0) this.levelTime.current = Math.trunc(time / 1000);
      this.endLevelUpdate();
    }
  }, {
    key: "endLevelUpdate",
    value: function endLevelUpdate() {
      if (this.playerHP == 0 || this.levelTime.all == 0) {
        this.level.status = "finish";
        this.level.next = "startMenu";
      } else if (this.enemiesCount == 0) this.level.status = "finish";
    }
  }, {
    key: "getTimeLabel",
    value: function getTimeLabel(time, prevStr) {
      if (this.levelTime.current == Math.trunc(time / 1000)) return prevStr;
      ++this.levelTime.current;
      var min = Math.trunc((this.levelTime.all - 1) / 60);
      var sec = --this.levelTime.all % 60;
      return "Time | ".concat(min > 9 ? min : "0" + min, ":").concat(sec > 9 ? sec : "0" + sec);
    }
  }]);

  return LevelController;
}();

/***/ }),

/***/ "./src/view/scene/loading.js":
/*!***********************************!*\
  !*** ./src/view/scene/loading.js ***!
  \***********************************/
/*! exports provided: LoadingScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScene", function() { return LoadingScene; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ "./src/view/scene/scene.js");
/* harmony import */ var _ielements_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ielements/tile */ "./src/ielements/tile.js");
/* harmony import */ var _ielements_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ielements/label */ "./src/ielements/label.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var LoadingScene = /*#__PURE__*/function (_Scene) {
  _inherits(LoadingScene, _Scene);

  var _super = _createSuper(LoadingScene);

  function LoadingScene(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "loading" : _ref$name,
        screen = _ref.screen,
        prop = _ref.prop,
        _ref$parent = _ref.parent,
        parent = _ref$parent === void 0 ? "none" : _ref$parent,
        _ref$next = _ref.next,
        next = _ref$next === void 0 ? "none" : _ref$next;

    _classCallCheck(this, LoadingScene);

    _this = _super.call(this, {
      name: name,
      screen: screen,
      parent: parent,
      next: next
    });
    _this.ielements = {
      background: new _ielements_tile__WEBPACK_IMPORTED_MODULE_1__["Tile"](prop.background),
      disk: new _ielements_tile__WEBPACK_IMPORTED_MODULE_1__["Tile"](prop.disk),
      label: new _ielements_label__WEBPACK_IMPORTED_MODULE_2__["Label"](prop.label)
    };
    return _this;
  }

  _createClass(LoadingScene, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      setTimeout(function () {
        _this2.status = "finish";
        _this2.next = "startMenu";
      }, (1 + Math.random()) * 1e3); // 1-2 sec
    }
  }]);

  return LoadingScene;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/view/scene/menu/start.js":
/*!**************************************!*\
  !*** ./src/view/scene/menu/start.js ***!
  \**************************************/
/*! exports provided: StartMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartMenu", function() { return StartMenu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/view/scene/scene.js");
/* harmony import */ var _ielements_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ielements/tile */ "./src/ielements/tile.js");
/* harmony import */ var _ielements_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ielements/button */ "./src/ielements/button.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var StartMenu = /*#__PURE__*/function (_Scene) {
  _inherits(StartMenu, _Scene);

  var _super = _createSuper(StartMenu);

  function StartMenu(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "startMenu" : _ref$name,
        screen = _ref.screen,
        prop = _ref.prop,
        _ref$parent = _ref.parent,
        parent = _ref$parent === void 0 ? "none" : _ref$parent,
        _ref$next = _ref.next,
        next = _ref$next === void 0 ? "none" : _ref$next;

    _classCallCheck(this, StartMenu);

    _this = _super.call(this, {
      name: name,
      screen: screen,
      parent: parent,
      next: next
    });
    _this.ielements = {
      background: new _ielements_tile__WEBPACK_IMPORTED_MODULE_1__["Tile"](prop.background),
      playButton: new _ielements_button__WEBPACK_IMPORTED_MODULE_2__["Button"](prop.playButton)
    };
    return _this;
  }

  _createClass(StartMenu, [{
    key: "mouseClickHandler",
    value: function mouseClickHandler(event) {
      event = event || window.event;

      if (this.ielements.playButton.__in__(event)) {
        this.status = "finish";
        this.next = "level_1";
        document.body.style.cursor = "default";
      }
    }
  }, {
    key: "mouseDownHandler",
    value: function mouseDownHandler(event) {
      event = event || window.event;

      if (this.ielements.playButton.__in__(event)) {
        this.ielements.playButton.bgcolor = this.ielements.playButton.colors.click;
        this.ielements.playButton.isMouseDown = true;
      }
    }
  }, {
    key: "mouseUpHandler",
    value: function mouseUpHandler(event) {
      !event && (event = window.event);

      if (this.ielements.playButton.isMouseDown) {
        this.ielements.playButton.bgcolor = this.ielements.playButton.colors["default"];
        this.ielements.playButton.isMouseDown = false;
      }
    }
  }, {
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(event) {
      event = event || window.event;

      if (this.ielements.playButton.__in__(event)) {
        !this.ielements.playButton.isMouseDown && (this.ielements.playButton.bgcolor = this.ielements.playButton.colors.hover);
        document.body.style.cursor = "pointer";
      } else {
        !this.ielements.playButton.isMouseDown && (this.ielements.playButton.bgcolor = this.ielements.playButton.colors["default"]);
        document.body.style.cursor = "default";
      }
    }
  }, {
    key: "startEventListen",
    value: function startEventListen() {
      this.ielements.playButton.addListeners(this.screen.canvas.DOM, {
        mouseMoveHandler: this.mouseMoveHandler.bind(this),
        mouseDownHandler: this.mouseDownHandler.bind(this),
        mouseUpHandler: this.mouseUpHandler.bind(this),
        mouseClickHandler: this.mouseClickHandler.bind(this)
      });
    }
  }, {
    key: "stopEventListen",
    value: function stopEventListen() {
      this.ielements.playButton.removeListeners(this.screen.canvas.DOM);
    }
  }]);

  return StartMenu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/view/scene/scene.js":
/*!*********************************!*\
  !*** ./src/view/scene/scene.js ***!
  \*********************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene = /*#__PURE__*/function () {
  function Scene(_ref) {
    var name = _ref.name,
        screen = _ref.screen,
        next = _ref.next;

    _classCallCheck(this, Scene);

    this.name = name;
    this.screen = screen;
    this.status = "loading";
    this.next = next;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      !this.ielements && (this.ielements = {});

      for (var ie in this.ielements) {
        this.ielements[ie].init();
      }

      this.status = "loaded";
    }
  }, {
    key: "startEventListen",
    value: function startEventListen() {}
  }, {
    key: "stopEventListen",
    value: function stopEventListen() {}
  }, {
    key: "start",
    value: function start() {
      this.startEventListen();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stopEventListen();
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);

      for (var ie in this.ielements) {
        this.ielements[ie].render(time, this.screen);
      }
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/view/screen/canvas.js":
/*!***********************************!*\
  !*** ./src/view/screen/canvas.js ***!
  \***********************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Canvas);

    this.width = width;
    this.height = height;
  }

  _createClass(Canvas, [{
    key: "init",
    value: function init() {
      var div = document.getElementById("game") || document.body.appendChild(document.createElement("div"));
      div.id = "game";
      this.DOM = div.getElementsByTagName("canvas")[0] || div.appendChild(document.createElement("canvas"));
      this.DOM.width = this.width;
      this.DOM.height = this.height;
      this.context = this.DOM.getContext("2d");
    }
  }]);

  return Canvas;
}();

/***/ }),

/***/ "./src/view/screen/screen.js":
/*!***********************************!*\
  !*** ./src/view/screen/screen.js ***!
  \***********************************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/view/screen/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Screen = /*#__PURE__*/function () {
  function Screen() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__["Canvas"]({
      width: width,
      height: height
    });
    this.camera = null;
    this.isCameraSet = false;
  }

  _createClass(Screen, [{
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
      this.isCameraSet = true;
    }
  }, {
    key: "init",
    value: function init() {
      this.canvas.init();
    }
  }, {
    key: "drawButton",
    value: function drawButton(button) {
      this.canvas.context.fillStyle = "#000000";
      this.canvas.context.fillRect(button.x - 5, button.y - 5, button.width + 10, button.height + 10);
      this.canvas.context.fillStyle = button.bgcolor;
      this.canvas.context.fillRect(button.x, button.y, button.width, button.height);
      this.drawLabel(button.label);
    }
  }, {
    key: "drawLabel",
    value: function drawLabel(label) {
      var camera = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.canvas.context.fillStyle = label.color;
      this.canvas.context.font = "".concat(label.fontWeight, " ").concat(label.fontSize, "px ").concat(label.fontFamily || "Lucida Consolas");
      if (!camera) this.canvas.context.fillText(label.text, label.x, label.y);else this.canvas.context.fillText(label.text, label.x - this.camera.x, label.y - this.camera.y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(image, x, y) {
      image && this.canvas.context.drawImage(image, x, y);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(sprite, x, y) {
      var spriteX = x;
      var spriteY = y;

      if (this.isCameraSet) {
        spriteX -= this.camera.x;
        spriteY -= this.camera.y;
      }

      if (spriteX >= this.width || spriteY >= this.height || spriteX + sprite.width <= 0 || spriteY + sprite.height <= 0) return;
      var sourceX = sprite.sourceX + Math.abs(Math.min(0, spriteX));
      var sourceY = sprite.sourceY + Math.abs(Math.min(0, spriteY));
      var width = Math.min(this.width, spriteX + sprite.width) - Math.max(0, spriteX);
      var height = Math.min(this.height, spriteY + sprite.height) - Math.max(0, spriteY);
      sprite.image && this.canvas.context.drawImage(sprite.image, sourceX, sourceY, width, height, Math.max(0, spriteX), Math.max(0, spriteY), width, height);
    }
  }, {
    key: "strokeRect",
    value: function strokeRect(x, y, width, height) {
      this.canvas.context.strokeRect(x - this.camera.x, y - this.camera.y, width, height);
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.canvas.context.fillStyle = color;
      this.canvas.context.fillRect(0, 0, this.width, this.height);
    }
  }]);

  return Screen;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9ib2RpZXMvYm94Q29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9mcHNDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9nYW1lQ3RybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvc2NlbmVDdHJsLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9jb250cm9sbGVycy9hdHRhY2tDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9jb250cm9sbGVycy9lbmVteUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZW15L2NvbnRyb2xsZXJzL21vdmVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkvZW5lbXlCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9yYW5nZVpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9pZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWVsZW1lbnRzL2xhYmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pZWxlbWVudHMvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BoeXNpYy9jb2xsaXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9hdHRhY2svc2hvb3RlckF0dGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyL2F0dGFjay93YXJyaW9yQXR0YWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvYXR0YWNrL3dpemFyZEF0dGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyL2NvbnRyb2xsZXJzL2F0dGFja0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb250cm9sbGVycy9rZXlDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvY29udHJvbGxlcnMvbW92ZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb250cm9sbGVycy9wbGF5ZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2FuaW1hdGlvbi9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYW5pbWF0aW9uL2xhYmVsQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2FuaW1hdGlvbi9zcHJpdGVBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9waWN0dXJlL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL2xldmVsL2xldmVVSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9sZXZlbC9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9sZXZlbC9sZXZlbENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9tZW51L3N0YXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjcmVlbi9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NyZWVuL3NjcmVlbi5qcyJdLCJuYW1lcyI6WyJCb2R5QW5pbWF0aW9uIiwidmlldyIsIm1vdmVDb250cm9sbGVyIiwiYXR0YWNrQ29udHJvbGxlciIsInVuZGVmaW5lZCIsInRpbWUiLCJhdHRhY2siLCJpc0F0dGFja2VkIiwiYW5pbWF0aW9uIiwiaXNSdW5uaW5nIiwic2V0QW5pbWF0aW9uIiwiaXNNb3ZlIiwiZGlyZWN0aW9uIiwidXBkYXRlIiwiQm9keSIsInByb3AiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwibW92ZVNwZWVkIiwidmlzaWJsZSIsImJveENvbGxpZGVyIiwiQm94Q29sbGlkZXIiLCJfeCIsIl95Iiwic2NyZWVuIiwic3Ryb2tlUmVjdCIsInJlbmRlciIsIkNoYXJhY3RlciIsIm5hbWUiLCJib2R5IiwiVmlldyIsImluaXQiLCJkcmF3U3ByaXRlIiwiZ2V0U3ByaXRlIiwic3ByaXRlU2hlZXQiLCJTcHJpdGVTaGVldCIsImFuaW1hdGlvbkxpc3QiLCJ0ZW1wQW5pbWF0aW9uUHJvcCIsImZvckVhY2giLCJTcHJpdGVBbmltYXRpb24iLCJmcmFtZURlbGF5IiwiaW5kaWNlcyIsInJlcGVhdCIsImF1dG9ydW4iLCJydW4iLCJhbmltYXRpb25OYW1lIiwic3RvcCIsImN1cnJlbnRGcmFtZUluZGV4IiwiRlBTQ29udHJvbGxlciIsImZwcyIsIl9mcHMiLCJmcmFtZVRpbWUiLCJfX2xhYmVsX18iLCJMYWJlbCIsImxhYmVsIiwiTWF0aCIsInRydW5jIiwidGV4dCIsImRyYXdMYWJlbCIsIkdhbWVDb250cm9sbGVyIiwibGVuZ3RoIiwic2NlbmVDb250cm9sbGVyIiwiY3VycmVudFNjZW5lIiwiZnBzQ29udHJvbGxlciIsImNvbnRyb2xsZXJzIiwiY3RybCIsIkVycm9yIiwiY29udHJvbGxlck5hbWUiLCJTY2VuZUNvbnRyb2xsZXIiLCJzY2VuZXMiLCJzZXRTY2VuZSIsInNjZW5lTmFtZSIsIlN0YXJ0TWVudSIsInN0YXJ0TWVudSIsIkxldmVsIiwibGV2ZWxfMSIsImxldmVsXzIiLCJMb2FkaW5nU2NlbmUiLCJsb2FkaW5nIiwic3RhcnQiLCJzdGF0dXMiLCJuZXh0IiwiRW5lbXlBdHRhY2tDb250cm9sbGVyIiwicmFuZ2UiLCJ0YXJnZXQiLCJwbGF5ZXIiLCJjb2xsaXNpb24iLCJzZWxmQm94IiwieDEiLCJ4MiIsInkxIiwieTIiLCJwbGF5ZXJCb3giLCJpbnRlcnNlY3QiLCJoZWFsdGhQb2ludCIsImhpdCIsIkVuZW15Q29udHJvbGxlciIsImVuZW15IiwicmFuZ2Vab25lIiwiRW5lbXlNb3ZlQ29udHJvbGxlciIsImFuaW1hdGlvbkNvbnRyb2xsZXIiLCJjdXJyZW50TW92ZVBvaW50SW5kZXgiLCJtb3ZlUG9pbnRzIiwiY3VycmVudE1vdmVQb2ludCIsImlzU3RyaWN0U3RvcHBlZCIsInN0cmljdFN0b3AiLCJtb3ZlIiwiaXNTdG9wIiwic3RvcFRpbWUiLCJtb3ZlUm90YXRlIiwic2V0VGltZW91dCIsInJldmVyc2UiLCJhIiwiYiIsIm1vdmVVcCIsIm1vdmVSaWdodCIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJwb2ludCIsImlzUGFzc2VkIiwiRW5lbXkiLCJoZWFsdGhQb2ludExhYmVsIiwiRW5lbXlCb2R5IiwiRW5lbXlSYW5nZVpvbmUiLCJjb250cm9sbGVyIiwiYWdncmVzc2l2ZVNwZWVkIiwiZGVmYXVsdFNwZWVkIiwidXAiLCJyaWdodCIsImRvd24iLCJsZWZ0Iiwic2V0UG9zaXRpb24iLCJHYW1lIiwiZ2FtZUpTT04iLCJTY3JlZW4iLCJDb2xsaXNpb24iLCJhZGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIkJ1dHRvbiIsImJnY29sb3IiLCJjb2xvcnMiLCJsYWJlbFByb3AiLCJhbmltYXRlZCIsImFuaW1hdGlvblByb3AiLCJpc01vdXNlRG93biIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJmdW5jdGlvbnMiLCJfbGlzdGVuZXJNb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9saXN0ZW5lck1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJfbGlzdGVuZXJNb3VzZVVwIiwibW91c2VVcEhhbmRsZXIiLCJfbGlzdGVuZXJNb3VzZUNsaWNrIiwibW91c2VDbGlja0hhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJhd0J1dHRvbiIsIklFbGVtZW50IiwiX2FuaW1hdGlvbiIsImNyZWF0ZUFuaW1hdGlvbiIsIm5ld1giLCJuZXdZIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiTGFiZWxBbmltYXRpb24iLCJ0ZXh0Q29sbGVjdGlvbiIsImNhbWVyYSIsIlRpbGUiLCJvcHRpb25zIiwiX19vcHRpb25zX18iLCJmb2ciLCJmaWxsIiwid2luZG93Iiwib25sb2FkIiwiZ2FtZSIsImJvZGllcyIsImNvbGxpZGVycyIsImNvbGxpZGVyIiwib3V0Q29sbGlkZXIiLCJib3giLCJtaW4iLCJhYnMiLCJmbG9vciIsImNlaWwiLCJTaG9vdGVyQXR0YWNrIiwiV2FycmlvckF0dGFjayIsImRhbWFnZSIsImNvb2xkb3duIiwiY2FuQXR0YWNrIiwiZW5lbWllcyIsImF0dGFja0NvbGxpZGVyIiwic3RhcnRDb29sZG93biIsIldpemFyZEF0dGFjayIsIlBsYXllckF0dGFja0NvbnRyb2xsZXIiLCJhdHRhY2tUeXBlIiwia2V5Q29udHJvbGxlciIsIndhcnJpb3IiLCJzaG9vdGVyIiwid2l6YXJkIiwia2V5cyIsImlzS2V5QXR0YWNrRG93biIsImlzRG93biIsIlBsYXllcktleUNvbnRyb2xsZXIiLCJLZXlXIiwiY29kZSIsIktleUQiLCJLZXlTIiwiS2V5QSIsIlNwYWNlIiwiQXJyb3dVcCIsIkFycm93UmlnaHQiLCJBcnJvd0Rvd24iLCJBcnJvd0xlZnQiLCJpc0tleU1vdmVEb3duIiwic3RhcnRFdmVudExpc3RlbiIsInN0b3BFdmVudExpc3RlbiIsIl9saXN0ZW5lcktleURvd24iLCJrZXlEb3duSGFuZGxlciIsImJpbmQiLCJfbGlzdGVuZXJLZXlVcCIsImtleVVwSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiUGxheWVyTW92ZUNvbnRyb2xsZXIiLCJQbGF5ZXJDb250cm9sbGVyIiwiUGxheWVyIiwiQW5pbWF0aW9uIiwibGFzdEZyYW1lVGltZSIsIm5leHRGcmFtZSIsImN1cnJlbnRUZXh0SW5kZXgiLCJmcmFtZXMiLCJnZXRGcmFtZXMiLCJtYXAiLCJpbmRleCIsInNvdXJjZVgiLCJnZXRTb3VyY2VYIiwic291cmNlWSIsImdldFNvdXJjZVkiLCJDYW1lcmEiLCJsaW1pdFgiLCJsaW1pdFkiLCJzY3JvbGxFZGdlIiwid2F0Y2hPYmplY3QiLCJvYmoiLCJtYXgiLCJNYXAiLCJkYXRhIiwibWFwRGF0YSIsInRpbGV3aWR0aCIsInRpbGVoZWlnaHQiLCJ0aWxlU2V0IiwibWFwU3ByaXRlU2hlZXQiLCJyb3ciLCJjb2x1bW4iLCJsYXllcnMiLCJkZWZhdWx0TGF5ZXIiLCJ1cHBlckxheWVyIiwiY3JlYXRlTGF5ZXJzIiwibGF5ZXIiLCJ0eXBlIiwicHVzaCIsImluZGV4ZXMiLCJ6X2luZGV4IiwicHJvcGVydGllcyIsInZhbHVlIiwib2JqZWN0cyIsIml0ZW0iLCJzb3J0IiwidGlsZSIsInNwcml0ZSIsImNvbCIsImlzSW50ZXJzZWN0Iiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJTcHJpdGUiLCJpbWFnZSIsInNyYyIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1nIiwiSW1hZ2UiLCJfbG9hZCIsInRoZW4iLCJlcnJvciIsIkxldmVsVUkiLCJoZWFsdGhQb2ludHMiLCJ0aW1lTGFiZWwiLCJocCIsInR4dCIsImNvdW50IiwiaSIsImRyYXdJbWFnZSIsIkxldmVsQ29udHJvbGxlciIsInBsYXllckhQIiwiZW5lbWllc0NvdW50IiwibGV2ZWxUaW1lIiwiYWxsIiwiY3VycmVudCIsImxldmVsIiwic2V0RW5lbWllcyIsInNldENvbGxpc2lvbiIsIndhdGNoIiwic2V0Q2FtZXJhIiwiZ2V0VGltZUxhYmVsIiwic3BsaWNlIiwic2Vjb25kUmVuZGVyIiwiU2NlbmUiLCJwbGF5ZXJIZWFsdGhQb2ludCIsImVuZExldmVsVXBkYXRlIiwicHJldlN0ciIsInNlYyIsInBhcmVudCIsImllbGVtZW50cyIsImJhY2tncm91bmQiLCJkaXNrIiwicmFuZG9tIiwicGxheUJ1dHRvbiIsIl9faW5fXyIsImRvY3VtZW50Iiwic3R5bGUiLCJjdXJzb3IiLCJjbGljayIsImhvdmVyIiwiYWRkTGlzdGVuZXJzIiwiY2FudmFzIiwiRE9NIiwicmVtb3ZlTGlzdGVuZXJzIiwiaWUiLCJDYW52YXMiLCJkaXYiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImlzQ2FtZXJhU2V0IiwiYnV0dG9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJzcHJpdGVYIiwic3ByaXRlWSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNsYXNzIEJvZHlBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IodmlldywgbW92ZUNvbnRyb2xsZXIsIGF0dGFja0NvbnRyb2xsZXIgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIgPSBtb3ZlQ29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmF0dGFja0NvbnRyb2xsZXIgPSBhdHRhY2tDb250cm9sbGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmF0dGFja0NvbnRyb2xsZXIgJiYgdGhpcy5hdHRhY2tDb250cm9sbGVyLmF0dGFjay5pc0F0dGFja2VkICYmICF0aGlzLnZpZXcuYW5pbWF0aW9uLmlzUnVubmluZylcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2tDb250cm9sbGVyLmF0dGFjay5pc0F0dGFja2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmF0dGFja0NvbnRyb2xsZXIgJiYgIXRoaXMuYXR0YWNrQ29udHJvbGxlci5hdHRhY2suaXNBdHRhY2tlZClcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEFuaW1hdGlvbiggKHRoaXMubW92ZUNvbnRyb2xsZXIuaXNNb3ZlID8gXCJ3YWxrLVwiIDogXCJpZGxlLVwiKSArIHRoaXMubW92ZUNvbnRyb2xsZXIuZGlyZWN0aW9uICk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrQ29udHJvbGxlciAmJiB0aGlzLmF0dGFja0NvbnRyb2xsZXIuYXR0YWNrLmlzQXR0YWNrZWQpXHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zZXRBbmltYXRpb24oXCJhdHRhY2stXCIgKyB0aGlzLmF0dGFja0NvbnRyb2xsZXIuYXR0YWNrLmRpcmVjdGlvbik7XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEFuaW1hdGlvbiggKHRoaXMubW92ZUNvbnRyb2xsZXIuaXNNb3ZlID8gXCJ3YWxrLVwiIDogXCJpZGxlLVwiKSArIHRoaXMubW92ZUNvbnRyb2xsZXIuZGlyZWN0aW9uICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMudmlldy5hbmltYXRpb24udXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwiLi9ib3hDb2xsaWRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMueCA9IHByb3AueDtcclxuICAgICAgICB0aGlzLnkgPSBwcm9wLnk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gcHJvcC53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHByb3AuaGVpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gcHJvcC5tb3ZlU3BlZWQ7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHByb3AudmlzaWJsZTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlciA9IG5ldyBCb3hDb2xsaWRlcihwcm9wLmJveENvbGxpZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIueCA9IHRoaXMueCArIHRoaXMuYm94Q29sbGlkZXIuX3g7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci55ID0gdGhpcy55ICsgdGhpcy5ib3hDb2xsaWRlci5feTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci54ID0gdGhpcy54ICsgdGhpcy5ib3hDb2xsaWRlci5feDtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnkgPSB0aGlzLnkgKyB0aGlzLmJveENvbGxpZGVyLl95O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgJiYgc2NyZWVuLnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnJlbmRlcihzY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEJveENvbGxpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gcHJvcC53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHByb3AuaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLnggPSBwcm9wLng7IHRoaXMuX3ggPSBwcm9wLng7XHJcbiAgICAgICAgdGhpcy55ID0gcHJvcC55OyB0aGlzLl95ID0gcHJvcC55O1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGUgPSBwcm9wLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSAmJiBzY3JlZW4uc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2JvZHlcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3AubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IEJvZHkocHJvcC5ib2R5KTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgVmlldyhwcm9wLnZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKTtcclxuICAgICAgICB0aGlzLmJvZHkuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHsgdGhpcy5ib2R5LnVwZGF0ZSgpOyB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnZpZXcuZ2V0U3ByaXRlKCksIHRoaXMuYm9keS54LCB0aGlzLmJvZHkueSk7XHJcbiAgICAgICAgdGhpcy5ib2R5LnJlbmRlcihzY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi4vdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0XCI7XHJcbmltcG9ydCB7IFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gXCIuLi92aWV3L2FuaW1hdGlvbi9zcHJpdGVBbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gbmV3IFNwcml0ZVNoZWV0KHByb3Auc3ByaXRlU2hlZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkxpc3QgPSB7fTtcclxuICAgICAgICB0aGlzLnRlbXBBbmltYXRpb25Qcm9wID0gcHJvcC5hbmltYXRpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uTGlzdCA9PSB7fSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wQW5pbWF0aW9uUHJvcC5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdFthbmltYXRpb24ubmFtZV0gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgICAgICBhbmltYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVNoZWV0OiB0aGlzLnNwcml0ZVNoZWV0LFxyXG4gICAgICAgICAgICAgICAgZnJhbWVEZWxheTogIGFuaW1hdGlvbi5mcmFtZURlbGF5LFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlczogICAgIGFuaW1hdGlvbi5pbmRpY2VzLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAgICAgIGFuaW1hdGlvbi5yZXBlYXQsXHJcbiAgICAgICAgICAgICAgICBhdXRvcnVuOiAgICAgYW5pbWF0aW9uLmF1dG9ydW4gXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkxpc3RbYW5pbWF0aW9uLm5hbWVdLmluaXQoKTtcclxuICAgICAgICB9KTsgZGVsZXRlIHRoaXMudGVtcEFuaW1hdGlvblByb3A7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbkxpc3RbXCJpZGxlLWRvd25cIl07XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24ubmFtZSA9PSBhbmltYXRpb25OYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uTGlzdFthbmltYXRpb25OYW1lXTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbi5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcHJpdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlU2hlZXQuZ2V0U3ByaXRlKHRoaXMuYW5pbWF0aW9uLmluZGljZXNbdGhpcy5hbmltYXRpb24uY3VycmVudEZyYW1lSW5kZXhdKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4uL2llbGVtZW50cy9sYWJlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZQU0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiZnBzQ29udHJvbGxlclwiO1xyXG5cclxuICAgICAgICB0aGlzLmZwcyAgPSAwOyAgLy8gZXZlcnkgc2Vjb25kXHJcbiAgICAgICAgdGhpcy5fZnBzID0gMDsgLy8gZXZlcnkgZnJhbWVcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9fbGFiZWxfXyA9IG5ldyBMYWJlbChwcm9wLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLl9fbGFiZWxfXy5pbml0KCk7IH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lVGltZSA9PSBNYXRoLnRydW5jKHRpbWUgLyAxMDAwKSkge1xyXG4gICAgICAgICAgICArK3RoaXMuX2ZwcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZwcyA9ICsrdGhpcy5fZnBzO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lVGltZSA9IE1hdGgudHJ1bmModGltZSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9mcHMgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fX2xhYmVsX18udGV4dCA9IGBGUFM6ICR7dGhpcy5mcHN9YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzY3JlZW4uZHJhd0xhYmVsKHRoaXMuX19sYWJlbF9fKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgdGhpcy5sZW5ndGggPSAwOyB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lQ29udHJvbGxlciAmJiB0aGlzLnNjZW5lQ29udHJvbGxlci51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lQ29udHJvbGxlciAmJiB0aGlzLnNjZW5lQ29udHJvbGxlci5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUsIHNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5mcHNDb250cm9sbGVyICAgJiYgdGhpcy5mcHNDb250cm9sbGVyLnJlbmRlcih0aW1lLCBzY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5jb250cm9sbGVycykge1xyXG4gICAgICAgIGZvciAobGV0IGN0cmwgb2YgY29udHJvbGxlcnMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzW2N0cmwubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5uYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5hbWUgb2YgY29udHJvbGxlciwgbmFtZSBpcyBtdXN0IGJlIGxpa2UgJ3NjZW5lQ29udHJvbGxlcidcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXNbY3RybC5uYW1lXSA9IGN0cmw7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2N0cmwubmFtZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICsrdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoY29udHJvbGxlck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpc1tjb250cm9sbGVyTmFtZV0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNbY29udHJvbGxlck5hbWVdO1xyXG4gICAgICAgICAgICAtLXRoaXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IExvYWRpbmdTY2VuZSB9IGZyb20gXCIuLi92aWV3L3NjZW5lL2xvYWRpbmdcIjtcclxuaW1wb3J0IHsgU3RhcnRNZW51ICAgIH0gZnJvbSBcIi4uL3ZpZXcvc2NlbmUvbWVudS9zdGFydFwiO1xyXG5pbXBvcnQgeyBMZXZlbCAgICAgICAgfSBmcm9tIFwiLi4vdmlldy9zY2VuZS9sZXZlbC9sZXZlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNjZW5lQ29udHJvbGxlclwiLCBzY2VuZXMgfSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gc2NlbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IHRoaXMuc2V0U2NlbmUoXCJsb2FkaW5nXCIpOyB9XHJcblxyXG4gICAgc2V0U2NlbmUoc2NlbmVOYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNjZW5lc1tzY2VuZU5hbWVdKSByZXR1cm47XHJcblxyXG4gICAgICAgIHN3aXRjaChzY2VuZU5hbWUpIHtcclxuICAgICAgICBjYXNlIFwic3RhcnRNZW51XCI6IHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFN0YXJ0TWVudSh0aGlzLnNjZW5lcy5zdGFydE1lbnUpOyAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsZXZlbF8xXCI6ICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgTGV2ZWwodGhpcy5zY2VuZXMubGV2ZWxfMSk7ICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImxldmVsXzJcIjogICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBMZXZlbCh0aGlzLnNjZW5lcy5sZXZlbF8yKTsgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBMb2FkaW5nU2NlbmUodGhpcy5zY2VuZXMubG9hZGluZyk7ICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyA9IFwicnVubmluZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzID09IFwiZmluaXNoXCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLm5leHQgPT0gXCJub25lXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgPSBcInJ1bm5pbmdcIjtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjZW5lKHRoaXMuY3VycmVudFNjZW5lLm5leHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEVuZW15QXR0YWNrQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihyYW5nZSwgYm9keSkge1xyXG4gICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG5cclxuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChwbGF5ZXIsIGNvbGxpc2lvbikge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gY29sbGlzaW9uO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGZCb3ggPSB7XHJcbiAgICAgICAgICAgIHgxOiB0aGlzLmJvZHkuYm94Q29sbGlkZXIueCwgeDI6IHRoaXMuYm9keS5ib3hDb2xsaWRlci54ICsgdGhpcy5ib2R5LmJveENvbGxpZGVyLndpZHRoLFxyXG4gICAgICAgICAgICB5MTogdGhpcy5ib2R5LmJveENvbGxpZGVyLnksIHkyOiB0aGlzLmJvZHkuYm94Q29sbGlkZXIueSArIHRoaXMuYm9keS5ib3hDb2xsaWRlci5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucGxheWVyQm94ID0ge1xyXG4gICAgICAgICAgICB4MTogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci54LCB4MjogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci54ICsgdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci53aWR0aCxcclxuICAgICAgICAgICAgeTE6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueSwgeTI6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueSArIHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxmQm94ID0ge1xyXG4gICAgICAgICAgICB4MTogdGhpcy5ib2R5LmJveENvbGxpZGVyLngsIHgyOiB0aGlzLmJvZHkuYm94Q29sbGlkZXIueCArIHRoaXMuYm9keS5ib3hDb2xsaWRlci53aWR0aCxcclxuICAgICAgICAgICAgeTE6IHRoaXMuYm9keS5ib3hDb2xsaWRlci55LCB5MjogdGhpcy5ib2R5LmJveENvbGxpZGVyLnkgKyB0aGlzLmJvZHkuYm94Q29sbGlkZXIuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBsYXllckJveCA9IHtcclxuICAgICAgICAgICAgeDE6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueCsyMCwgeDI6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueCArIHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIud2lkdGgtMjAsXHJcbiAgICAgICAgICAgIHkxOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnkrMjAsIHkyOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnkgKyB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLmhlaWdodC0yMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbi5pbnRlcnNlY3QodGhpcy5wbGF5ZXJCb3gsIHRoaXMucmFuZ2UpKVxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMucGxheWVyO1xyXG4gICAgICAgIGVsc2UgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdChkaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOiAgICB0aGlzLnBsYXllci5ib2R5LnkgLT0gMjA7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjogdGhpcy5wbGF5ZXIuYm9keS54ICs9IDIwOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvd25cIjogIHRoaXMucGxheWVyLmJvZHkueSArPSAyMDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6ICB0aGlzLnBsYXllci5ib2R5LnggLT0gMjA7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2soZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgLS10aGlzLnBsYXllci5oZWFsdGhQb2ludDtcclxuXHJcbiAgICAgICAgdGhpcy5oaXQoZGlyZWN0aW9uKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJvZHlBbmltYXRpb24gfSBmcm9tIFwiLi4vLi4vYm9kaWVzL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBFbmVteU1vdmVDb250cm9sbGVyIH0gZnJvbSBcIi4vbW92ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgRW5lbXlBdHRhY2tDb250cm9sbGVyIH0gZnJvbSBcIi4vYXR0YWNrQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbmVteSwgcHJvcCkge1xyXG4gICAgICAgIHRoaXMuZW5lbXkgPSBlbmVteTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmF0dGFja0NvbnRyb2xsZXIgPSBuZXcgRW5lbXlBdHRhY2tDb250cm9sbGVyKHRoaXMuZW5lbXkucmFuZ2Vab25lLCB0aGlzLmVuZW15LmJvZHkpO1xyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIgPSBuZXcgRW5lbXlNb3ZlQ29udHJvbGxlcih0aGlzLmVuZW15LmJvZHksIHRoaXMuYXR0YWNrQ29udHJvbGxlciwgcHJvcC5tb3ZlQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEJvZHlBbmltYXRpb24odGhpcy5lbmVteS52aWV3LCB0aGlzLm1vdmVDb250cm9sbGVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdChwbGF5ZXIsIGNvbGxpc2lvbikgIHsgdGhpcy5hdHRhY2tDb250cm9sbGVyLmluaXQocGxheWVyLCBjb2xsaXNpb24pOyB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEVuZW15TW92ZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoYm9keSwgYXR0YWNrQ29udHJvbGxlciwgcHJvcCkge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tDb250cm9sbGVyID0gYXR0YWNrQ29udHJvbGxlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9pbnRJbmRleCA9IDA7XHJcbiAgICAgICAgKHRoaXMubW92ZVBvaW50cyA9IHByb3AubW92ZVBvaW50cykgJiYgKHRoaXMuY3VycmVudE1vdmVQb2ludCA9IHRoaXMubW92ZVBvaW50c1t0aGlzLmN1cnJlbnRNb3ZlUG9pbnRJbmRleF0pO1xyXG5cclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdHJpY3RTdG9wcGVkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrQ29udHJvbGxlci50YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXR0YWNrQ29udHJvbGxlci5jb2xsaXNpb24uaW50ZXJzZWN0KHRoaXMuYXR0YWNrQ29udHJvbGxlci5wbGF5ZXJCb3gsIHRoaXMuYXR0YWNrQ29udHJvbGxlci5zZWxmQm94KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tDb250cm9sbGVyLmF0dGFjayh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmljdFN0b3AoMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc01vdmUgfHwgIXRoaXMubW92ZVBvaW50cykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib2R5LnggIT0gdGhpcy5jdXJyZW50TW92ZVBvaW50LnggfHwgdGhpcy5ib2R5LnkgIT0gdGhpcy5jdXJyZW50TW92ZVBvaW50LnkpXHJcbiAgICAgICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudE1vdmVQb2ludEluZGV4IDwgdGhpcy5tb3ZlUG9pbnRzLmxlbmd0aC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb2ludCA9IHRoaXMubW92ZVBvaW50c1srK3RoaXMuY3VycmVudE1vdmVQb2ludEluZGV4XTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb2ludC5pc1N0b3AgJiYgdGhpcy5zdG9wKHRoaXMuY3VycmVudE1vdmVQb2ludC5zdG9wVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5tb3ZlUm90YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7ICF0aGlzLmlzU3RyaWN0U3RvcHBlZCAmJiAodGhpcy5pc01vdmUgPSB0cnVlKTsgfVxyXG5cclxuICAgIHN0b3AodGltZSkge1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdHJpY3RTdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHJpY3RTdG9wKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmlzU3RyaWN0U3RvcHBlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdG9wKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSb3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlUG9pbnRzID0gdGhpcy5tb3ZlUG9pbnRzLnJldmVyc2UoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9pbnRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvaW50ID0gdGhpcy5tb3ZlUG9pbnRzW3RoaXMuY3VycmVudE1vdmVQb2ludEluZGV4XTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVQb2ludC5pc1N0b3ApXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLmJvZHksIGIgPSB0aGlzLmF0dGFja0NvbnRyb2xsZXIudGFyZ2V0ID8ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmF0dGFja0NvbnRyb2xsZXIudGFyZ2V0LmJvZHkueCwgeTogdGhpcy5hdHRhY2tDb250cm9sbGVyLnRhcmdldC5ib2R5LnlcclxuICAgICAgICB9IDogdGhpcy5jdXJyZW50TW92ZVBvaW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhLnkgPiBiLnkpIHRoaXMubW92ZVVwKCk7XHJcbiAgICAgICAgaWYgKGEueCA8IGIueCkgdGhpcy5tb3ZlUmlnaHQoKTtcclxuICAgICAgICBpZiAoYS55IDwgYi55KSB0aGlzLm1vdmVEb3duKCk7XHJcbiAgICAgICAgaWYgKGEueCA+IGIueCkgdGhpcy5tb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVQb2ludHNSZXNldCgpIHsgdGhpcy5tb3ZlUG9pbnRzLmZvckVhY2gocG9pbnQgPT4gcG9pbnQuaXNQYXNzZWQgPSBmYWxzZSk7IH1cclxuXHJcbiAgICBtb3ZlVXAoKSAgICB7IHRoaXMuYm9keS55IC09IHRoaXMuYm9keS5tb3ZlU3BlZWQ7IHRoaXMuZGlyZWN0aW9uID0gXCJ1cFwiOyAgICB9XHJcbiAgICBtb3ZlUmlnaHQoKSB7IHRoaXMuYm9keS54ICs9IHRoaXMuYm9keS5tb3ZlU3BlZWQ7IHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiOyB9XHJcbiAgICBtb3ZlRG93bigpICB7IHRoaXMuYm9keS55ICs9IHRoaXMuYm9keS5tb3ZlU3BlZWQ7IHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7ICB9XHJcbiAgICBtb3ZlTGVmdCgpICB7IHRoaXMuYm9keS54IC09IHRoaXMuYm9keS5tb3ZlU3BlZWQ7IHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCI7ICB9XHJcbn0iLCJpbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tIFwiLi4vYm9kaWVzL2NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBFbmVteVJhbmdlWm9uZSB9IGZyb20gXCIuL3JhbmdlWm9uZVwiO1xyXG5pbXBvcnQgeyBFbmVteUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9lbmVteUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgRW5lbXlCb2R5IH0gZnJvbSBcIi4vZW5lbXlCb2R5XCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4uL2llbGVtZW50cy9sYWJlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICBzdXBlcihwcm9wKTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludCA9IHByb3AuaGVhbHRoUG9pbnQ7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludExhYmVsID0gbmV3IExhYmVsKHByb3AuaGVhbHRoUG9pbnRMYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keSA9IG5ldyBFbmVteUJvZHkocHJvcC5ib2R5KTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMucmFuZ2Vab25lID0gbmV3IEVuZW15UmFuZ2Vab25lKHRoaXMuYm9keSwgcHJvcC5yYW5nZVpvbmUpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgRW5lbXlDb250cm9sbGVyKHRoaXMsIHByb3AuY29udHJvbGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChwbGF5ZXIsIGNvbGxpc2lvbikge1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgICAgICB0aGlzLnJhbmdlWm9uZS5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmluaXQocGxheWVyLCBjb2xsaXNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludExhYmVsLnggPSB0aGlzLmJvZHkueCArIHRoaXMuYm9keS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50TGFiZWwueSA9IHRoaXMuYm9keS55O1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnRMYWJlbC50ZXh0ID0gdGhpcy5oZWFsdGhQb2ludDtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5Lm1vdmVTcGVlZCA9IHRoaXMuY29udHJvbGxlci5hdHRhY2tDb250cm9sbGVyLnRhcmdldCA/IHRoaXMuYm9keS5hZ2dyZXNzaXZlU3BlZWQgOiB0aGlzLmJvZHkuZGVmYXVsdFNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICBzdXBlci5yZW5kZXIodGltZSwgc2NyZWVuKTtcclxuXHJcbiAgICAgICAgdGhpcy5yYW5nZVpvbmUucmVuZGVyKHRpbWUsIHNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludExhYmVsLnJlbmRlcih0aW1lLCBzY3JlZW4sIHRydWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuLi9ib2RpZXMvYm9keVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15Qm9keSBleHRlbmRzIEJvZHkge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHN1cGVyKHByb3ApO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IHByb3AuZGVmYXVsdFNwZWVkO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNwZWVkID0gcHJvcC5kZWZhdWx0U3BlZWQ7XHJcbiAgICAgICAgdGhpcy5hZ2dyZXNzaXZlU3BlZWQgPSBwcm9wLmFnZ3Jlc3NpdmVTcGVlZDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBFbmVteVJhbmdlWm9uZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib2R5LCBwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcclxuXHJcbiAgICAgICAgdGhpcy51cCA9IHByb3AudXA7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHByb3AucmlnaHQ7XHJcbiAgICAgICAgdGhpcy5kb3duID0gcHJvcC5kb3duO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IHByb3AubGVmdDtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBwcm9wLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy54MSA9IHRoaXMuYm9keS54IC0gdGhpcy5sZWZ0O1xyXG4gICAgICAgIHRoaXMueDIgPSB0aGlzLmJvZHkueCArIHRoaXMuYm9keS53aWR0aCArIHRoaXMucmlnaHQ7XHJcbiAgICAgICAgdGhpcy55MSA9IHRoaXMuYm9keS55IC0gdGhpcy51cDtcclxuICAgICAgICB0aGlzLnkyID0gdGhpcy5ib2R5LnkgKyB0aGlzLmJvZHkuaGVpZ2h0ICsgdGhpcy5kb3duO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSAgIHsgdGhpcy5zZXRQb3NpdGlvbigpOyB9XHJcbiAgICB1cGRhdGUoKSB7IHRoaXMuc2V0UG9zaXRpb24oKTsgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZpc2libGUgJiYgc2NyZWVuLnN0cm9rZVJlY3QodGhpcy54MSwgdGhpcy55MSwgdGhpcy54Mi10aGlzLngxLCB0aGlzLnkyLXRoaXMueTEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NyZWVuICAgICAgIH0gZnJvbSBcIi4vdmlldy9zY3JlZW4vc2NyZWVuXCI7XHJcblxyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciAgfSAgZnJvbSBcIi4vY29udHJvbGxlcnMvZ2FtZUN0cmxcIjtcclxuaW1wb3J0IHsgU2NlbmVDb250cm9sbGVyIH0gIGZyb20gXCIuL2NvbnRyb2xsZXJzL3NjZW5lQ3RybFwiO1xyXG5pbXBvcnQgeyBGUFNDb250cm9sbGVyICAgfSAgZnJvbSBcIi4vY29udHJvbGxlcnMvZnBzQ29udHJvbGxlclwiO1xyXG5cclxuaW1wb3J0IHsgQ29sbGlzaW9uIH0gZnJvbSBcIi4vcGh5c2ljL2NvbGxpc2lvblwiO1xyXG5cclxuaW1wb3J0IGdhbWVKU09OIGZyb20gXCIuL2dhbWUuanNvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZ2FtZUpTT04ubmFtZTtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4oZ2FtZUpTT04uc2NyZWVuKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gbmV3IENvbGxpc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4uaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5hZGQoXHJcbiAgICAgICAgICAgIG5ldyBTY2VuZUNvbnRyb2xsZXIoeyBzY2VuZXM6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6ICAgeyBzY3JlZW46IHRoaXMuc2NyZWVuLCBwcm9wOiBnYW1lSlNPTi5zY2VuZXMubG9hZGluZyB9LFxyXG4gICAgICAgICAgICAgICAgc3RhcnRNZW51OiB7IHNjcmVlbjogdGhpcy5zY3JlZW4sIHByb3A6IGdhbWVKU09OLnNjZW5lcy5zdGFydE1lbnUgfSxcclxuICAgICAgICAgICAgICAgIGxldmVsXzE6ICAgeyBzY3JlZW46IHRoaXMuc2NyZWVuLCBjb2xsaXNpb246IHRoaXMuY29sbGlzaW9uLCBwcm9wOiBnYW1lSlNPTi5zY2VuZXMubGV2ZWxfMSB9LFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxfMjogICB7IHNjcmVlbjogdGhpcy5zY3JlZW4sIGNvbGxpc2lvbjogdGhpcy5jb2xsaXNpb24sIHByb3A6IGdhbWVKU09OLnNjZW5lcy5sZXZlbF8yIH1cclxuICAgICAgICAgICAgfSB9KSxcclxuICAgICAgICAgICAgbmV3IEZQU0NvbnRyb2xsZXIoZ2FtZUpTT04uZnBzQ29udHJvbGxlcilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZyYW1lKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIucmVuZGVyKHRpbWUsIHRoaXMuc2NyZWVuKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJ1bigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgKHRoaXMuaXNSdW5uaW5nID0gdHJ1ZSkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJRWxlbWVudCB9IGZyb20gXCIuL2llbGVtZW50XCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4vbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBJRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImJ1dHRvblwiLCB3aWR0aCwgaGVpZ2h0LCBiZ2NvbG9yLCBjb2xvcnMsIGxhYmVsUHJvcCwgeCA9IDAsIHkgPSAwLCBhbmltYXRlZCA9IGZhbHNlLCBhbmltYXRpb25Qcm9wID0gdW5kZWZpbmVkIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHg6IHgsIHk6IHksIGFuaW1hdGVkOiBhbmltYXRlZCwgYW5pbWF0aW9uUHJvcDogYW5pbWF0aW9uUHJvcCB9KTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5iZ2NvbG9yID0gYmdjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbG9ycyAgPSBjb2xvcnM7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWwgPSBuZXcgTGFiZWwobGFiZWxQcm9wKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9faW5fXyhldmVudCkge1xyXG4gICAgICAgIHJldHVybiAoIChldmVudC5vZmZzZXRYID49IHRoaXMueCkgJiYgKGV2ZW50Lm9mZnNldFggPD0gdGhpcy54ICsgdGhpcy53aWR0aCkgIClcclxuICAgICAgICAgICAgJiYgKCAoZXZlbnQub2Zmc2V0WSA+PSB0aGlzLnkpICYmIChldmVudC5vZmZzZXRZIDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0KSApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyh0YXJnZXQsIGZ1bmN0aW9ucykge1xyXG4gICAgICAgICh0aGlzLl9saXN0ZW5lck1vdXNlTW92ZSAgPSBmdW5jdGlvbnMubW91c2VNb3ZlSGFuZGxlciApICYmIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlKTtcclxuICAgICAgICAodGhpcy5fbGlzdGVuZXJNb3VzZURvd24gID0gZnVuY3Rpb25zLm1vdXNlRG93bkhhbmRsZXIgKSAmJiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9saXN0ZW5lck1vdXNlRG93bik7XHJcbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyTW91c2VVcCAgICA9IGZ1bmN0aW9ucy5tb3VzZVVwSGFuZGxlciAgICkgJiYgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICAgdGhpcy5fbGlzdGVuZXJNb3VzZVVwKTtcclxuICAgICAgICAodGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrID0gZnVuY3Rpb25zLm1vdXNlQ2xpY2tIYW5kbGVyKSAmJiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICAgICB0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVycyh0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lck1vdXNlTW92ZSAgJiYgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5fbGlzdGVuZXJNb3VzZU1vdmUpICAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJNb3VzZU1vdmU7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZURvd24gICYmIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX2xpc3RlbmVyTW91c2VEb3duKSAgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyTW91c2VEb3duO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VVcCAgICAmJiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgICB0aGlzLl9saXN0ZW5lck1vdXNlVXApICAgICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lck1vdXNlVXA7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrICYmIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VDbGljaykgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyTW91c2VDbGljaztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubGFiZWwuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFiZWwueCArPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy5sYWJlbC55ICs9IHRoaXMueTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHsgc2NyZWVuLmRyYXdCdXR0b24odGhpcyk7IH1cclxufSIsImV4cG9ydCBjbGFzcyBJRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImllbGVtZW50XCIsIHggPSAwLCB5ID0gMCwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBhbmltYXRlZDtcclxuICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb25Qcm9wO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmNyZWF0ZUFuaW1hdGlvbih0aGlzLl9hbmltYXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9hbmltYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHsgdGhpcy5hbmltYXRlZCAmJiB0aGlzLmFuaW1hdGlvbi51cGRhdGUodGltZSk7IH1cclxuXHJcbiAgICBjcmVhdGVBbmltYXRpb24oKSB7fVxyXG5cclxuICAgIHNldFhZKG5ld1gsIG5ld1kpIHtcclxuICAgICAgICB0aGlzLnggPSBuZXdYO1xyXG4gICAgICAgIHRoaXMueSA9IG5ld1k7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJRWxlbWVudCB9IGZyb20gXCIuL2llbGVtZW50XCI7XHJcbmltcG9ydCB7IExhYmVsQW5pbWF0aW9uIH0gZnJvbSBcIi4uL3ZpZXcvYW5pbWF0aW9uL2xhYmVsQW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBJRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxhYmVsXCIsIHRleHQgPSBcImxhYmVsXCIsIHggPSAxMCwgeSA9IDEwLCBjb2xvciA9IFwiIzQ0NDQ0NFwiLFxyXG4gICAgICAgIGZvbnRTaXplID0gMzYsIGZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiLCBmb250RmFtaWx5ID0gXCJDb3VyaWVyIE5ld1wiLCBhbmltYXRlZCA9IGZhbHNlLCBhbmltYXRpb25Qcm9wID0gdW5kZWZpbmVkIH0pIHtcclxuICAgICAgICBcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHg6IHgsIHk6IHksIGFuaW1hdGVkOiBhbmltYXRlZCwgYW5pbWF0aW9uUHJvcDogYW5pbWF0aW9uUHJvcCB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcblxyXG4gICAgICAgIHRoaXMuZm9udFNpemUgICA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMuZm9udFdlaWdodCA9IGZvbnRXZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbmltYXRpb24ocHJvcCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGFiZWxBbmltYXRpb24oe1xyXG4gICAgICAgICAgICBsYWJlbDogdGhpcyxcclxuICAgICAgICAgICAgZnJhbWVEZWxheTogICAgIHByb3AuZnJhbWVEZWxheSxcclxuICAgICAgICAgICAgcmVwZWF0OiAgICAgICAgIHByb3AucmVwZWF0LFxyXG4gICAgICAgICAgICBhdXRvcnVuOiAgICAgICAgcHJvcC5hdXRvcnVuLFxyXG4gICAgICAgICAgICB0ZXh0Q29sbGVjdGlvbjogcHJvcC50ZXh0Q29sbGVjdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4sIGNhbWVyYSA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgc2NyZWVuLmRyYXdMYWJlbCh0aGlzLCBjYW1lcmEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUVsZW1lbnQgfSBmcm9tIFwiLi9pZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuLi92aWV3L3BpY3R1cmUvc3ByaXRlU2hlZXRcIjtcclxuaW1wb3J0IHsgU3ByaXRlQW5pbWF0aW9uIH0gZnJvbSBcIi4uL3ZpZXcvYW5pbWF0aW9uL3Nwcml0ZUFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGUgZXh0ZW5kcyBJRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInRpbGVcIiwgd2lkdGgsIGhlaWdodCwgc3ByaXRlU2hlZXQsIHggPSAxMCwgeSA9IDEwLCBhbmltYXRlZCA9IGZhbHNlLCBhbmltYXRpb25Qcm9wID0gdW5kZWZpbmVkLCBvcHRpb25zID0gdW5kZWZpbmVkIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHg6IHgsIHk6IHksIGFuaW1hdGVkOiBhbmltYXRlZCwgYW5pbWF0aW9uUHJvcDogYW5pbWF0aW9uUHJvcCB9KTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgb3B0aW9ucyAmJiAodGhpcy5fX29wdGlvbnNfXyA9IG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gbmV3IFNwcml0ZVNoZWV0KHNwcml0ZVNoZWV0KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQuaW5pdCgpO1xyXG5cclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9uKHByb3ApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNwcml0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgIHNwcml0ZVNoZWV0OiB0aGlzLnNwcml0ZVNoZWV0LFxyXG4gICAgICAgICAgICBpbmRpY2VzOiAgICAgcHJvcC5pbmRpY2VzLFxyXG4gICAgICAgICAgICBhdXRvcnVuOiAgICAgcHJvcC5hdXRvcnVuLFxyXG4gICAgICAgICAgICBmcmFtZURlbGF5OiAgcHJvcC5mcmFtZURlbGF5LFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgICAgcHJvcC5uYW1lLFxyXG4gICAgICAgICAgICByZXBlYXQ6ICAgICAgcHJvcC5yZXBlYXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHNjcmVlbi5kcmF3U3ByaXRlKFxyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmdldFNwcml0ZSgodGhpcy5hbmltYXRlZCAmJiB0aGlzLmFuaW1hdGlvbi5pbmRpY2VzW3RoaXMuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZUluZGV4XSkgfHwgMSksXHJcbiAgICAgICAgICAgIHRoaXMueCwgdGhpcy55XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl9fb3B0aW9uc19fICYmIHRoaXMuX19vcHRpb25zX18uZm9nICYmIHNjcmVlbi5maWxsKFwiIzAwMDAwMDY2XCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuXHJcbiAgICBnYW1lLnJ1bigpO1xyXG59OyIsImV4cG9ydCBjbGFzcyBDb2xsaXNpb24ge1xyXG4gICAgY29uc3RydWN0b3IoYm9kaWVzKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmJvZGllcyA9IGJvZGllcyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaWRlcnMuZm9yRWFjaChjb2xsaWRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcnNlY3QoYm9keSwgY29sbGlkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0Q29sbGlkZXIoYm9keSwgY29sbGlkZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRDb2xsaWRlcihib2R5LCBjb2xsaWRlcikge1xyXG4gICAgICAgIGxldCBib3ggPSB7XHJcbiAgICAgICAgICAgIF94OiBib2R5LmJveENvbGxpZGVyLl94LCBfeTogYm9keS5ib3hDb2xsaWRlci5feSxcclxuICAgICAgICAgICAgeDE6IGJvZHkuYm94Q29sbGlkZXIueCwgIHgyOiBib2R5LmJveENvbGxpZGVyLnggKyBib2R5LmJveENvbGxpZGVyLndpZHRoLFxyXG4gICAgICAgICAgICB5MTogYm9keS5ib3hDb2xsaWRlci55LCAgeTI6IGJvZHkuYm94Q29sbGlkZXIueSArIGJvZHkuYm94Q29sbGlkZXIuaGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aDogYm9keS5ib3hDb2xsaWRlci53aWR0aCwgaGVpZ2h0OiBib2R5LmJveENvbGxpZGVyLmhlaWdodCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGNvbGxpZGVyLngxIC0gYm94LngyKSwgTWF0aC5hYnMoY29sbGlkZXIueDIgLSBib3gueDEpLFxyXG4gICAgICAgICAgICBNYXRoLmFicyhjb2xsaWRlci55MSAtIGJveC55MiksIE1hdGguYWJzKGNvbGxpZGVyLnkyIC0gYm94LnkxKSApO1xyXG5cclxuICAgICAgICBzd2l0Y2gobWluKSB7XHJcbiAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci54MSAtIGJveC54Mik6IGJvZHkueCA9IE1hdGguZmxvb3IoY29sbGlkZXIueDEgLSBib2R5LndpZHRoICsgYm94Ll94KTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci54MiAtIGJveC54MSk6IGJvZHkueCA9IE1hdGguY2VpbChjb2xsaWRlci54MiAtIGJveC5feCsyKTsgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci55MSAtIGJveC55Mik6IGJvZHkueSA9IE1hdGguZmxvb3IoY29sbGlkZXIueTEgLSBib2R5LmhlaWdodC0yKTsgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci55MiAtIGJveC55MSk6IGJvZHkueSA9IE1hdGguY2VpbChjb2xsaWRlci55MiAtIGJveC5feSsyKTsgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludGVyc2VjdChib2R5LCBjb2xsaWRlcikge1xyXG4gICAgICAgIGxldCBib3ggPSB7XHJcbiAgICAgICAgICAgIHgxOiBib2R5LngxIHx8IGJvZHkuYm94Q29sbGlkZXIueCwgeDI6IGJvZHkueDIgfHwgYm9keS5ib3hDb2xsaWRlci54ICsgYm9keS5ib3hDb2xsaWRlci53aWR0aCxcclxuICAgICAgICAgICAgeTE6IGJvZHkueTEgfHwgYm9keS5ib3hDb2xsaWRlci55LCB5MjogYm9keS55MiB8fCBib2R5LmJveENvbGxpZGVyLnkgKyBib2R5LmJveENvbGxpZGVyLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChib3gueDIgPiAgY29sbGlkZXIueDEgJiYgYm94LngxIDwgIGNvbGxpZGVyLngxICYmIGJveC55MiA+ICBjb2xsaWRlci55MSAmJiBib3gueTEgPCAgY29sbGlkZXIueTIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueDEgPCAgY29sbGlkZXIueDIgJiYgYm94LngyID4gIGNvbGxpZGVyLngyICYmIGJveC55MiA+ICBjb2xsaWRlci55MSAmJiBib3gueTEgPCAgY29sbGlkZXIueTIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueTIgPiAgY29sbGlkZXIueTEgJiYgYm94LnkxIDwgIGNvbGxpZGVyLnkxICYmIGJveC54MiA+ICBjb2xsaWRlci54MSAmJiBib3gueDEgPCAgY29sbGlkZXIueDIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueTEgPCAgY29sbGlkZXIueTIgJiYgYm94LnkyID4gIGNvbGxpZGVyLnkyICYmIGJveC54MiA+ICBjb2xsaWRlci54MSAmJiBib3gueDEgPCAgY29sbGlkZXIueDIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueDEgPj0gY29sbGlkZXIueDEgJiYgYm94LngyIDw9IGNvbGxpZGVyLngyICYmIGJveC55MSA+PSBjb2xsaWRlci55MSAmJiBib3gueTIgPD0gY29sbGlkZXIueTIpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNob290ZXJBdHRhY2sge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFdhcnJpb3JBdHRhY2sge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gcHJvcC5kYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5jb29sZG93biA9IHByb3AuY29vbGRvd247XHJcbiAgICAgICAgdGhpcy5jYW5BdHRhY2sgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNBdHRhY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRDb29sZG93bigpIHsgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FuQXR0YWNrID0gdHJ1ZTsgfSwgdGhpcy5jb29sZG93biAqIDEwMDApOyB9XHJcblxyXG4gICAgc2V0RW5lbWllcyhlbmVtaWVzKSAgICAgeyB0aGlzLmVuZW1pZXMgPSBlbmVtaWVzOyAgICAgfVxyXG4gICAgc2V0Q29sbGlzaW9uKGNvbGxpc2lvbikgeyB0aGlzLmNvbGxpc2lvbiA9IGNvbGxpc2lvbjsgfVxyXG5cclxuICAgIGhpdChkaXJlY3Rpb24pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQXR0YWNrKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllci5hdHRhY2tDb2xsaWRlciA9IHtcclxuICAgICAgICAgICAgeDE6IHRoaXMuZGlyZWN0aW9uID09IFwibGVmdFwiICA/IHRoaXMucGxheWVyLmJvZHkueCAtIDUwICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnBsYXllci5ib2R5LngsXHJcbiAgICAgICAgICAgIHgyOiB0aGlzLmRpcmVjdGlvbiA9PSBcInJpZ2h0XCIgPyB0aGlzLnBsYXllci5ib2R5LnggKyB0aGlzLnBsYXllci5ib2R5LndpZHRoICsgNTAgIDogdGhpcy5wbGF5ZXIuYm9keS54ICsgdGhpcy5wbGF5ZXIuYm9keS53aWR0aCxcclxuICAgICAgICAgICAgeTE6IHRoaXMuZGlyZWN0aW9uID09IFwidXBcIiAgICA/IHRoaXMucGxheWVyLmJvZHkueSAtIDUwICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnBsYXllci5ib2R5LnksXHJcbiAgICAgICAgICAgIHkyOiB0aGlzLmRpcmVjdGlvbiA9PSBcImRvd25cIiAgPyB0aGlzLnBsYXllci5ib2R5LnkgKyB0aGlzLnBsYXllci5ib2R5LmhlaWdodCArIDUwIDogdGhpcy5wbGF5ZXIuYm9keS55ICsgdGhpcy5wbGF5ZXIuYm9keS5oZWlnaHRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbi5pbnRlcnNlY3QodGhpcy5wbGF5ZXIuYXR0YWNrQ29sbGlkZXIsIHtcclxuICAgICAgICAgICAgICAgIHgxOiBlbmVteS5ib2R5LngsIHgyOiBlbmVteS5ib2R5LnggKyBlbmVteS5ib2R5LndpZHRoLFxyXG4gICAgICAgICAgICAgICAgeTE6IGVuZW15LmJvZHkueSwgeTI6IGVuZW15LmJvZHkueSArIGVuZW15LmJvZHkuaGVpZ2h0XHJcbiAgICAgICAgICAgIH0pKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteS5oZWFsdGhQb2ludCAtPSB0aGlzLmRhbWFnZTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVwXCI6ICAgIGVuZW15LmJvZHkueSAtPSAyMDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6IGVuZW15LmJvZHkueCArPSAyMDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRvd25cIjogIGVuZW15LmJvZHkueSArPSAyMDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjogIGVuZW15LmJvZHkueCAtPSAyMDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZW5lbXkuY29udHJvbGxlci5tb3ZlQ29udHJvbGxlci5zdHJpY3RTdG9wKDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FuQXR0YWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0F0dGFja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsYXllci5hdHRhY2tDb2xsaWRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdGFydENvb2xkb3duKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgV2l6YXJkQXR0YWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7IFdhcnJpb3JBdHRhY2sgfSBmcm9tIFwiLi4vYXR0YWNrL3dhcnJpb3JBdHRhY2tcIjtcclxuaW1wb3J0IHsgU2hvb3RlckF0dGFjayB9IGZyb20gXCIuLi9hdHRhY2svc2hvb3RlckF0dGFja1wiO1xyXG5pbXBvcnQgeyBXaXphcmRBdHRhY2sgIH0gZnJvbSBcIi4uL2F0dGFjay93aXphcmRBdHRhY2tcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJBdHRhY2tDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgYXR0YWNrVHlwZSA9IFwid2FycmlvclwiLCBwbGF5ZXIsIGtleUNvbnRyb2xsZXIsIG1vdmVDb250cm9sbGVyLCBwcm9wIH0pIHtcclxuICAgICAgICBzd2l0Y2goYXR0YWNrVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwid2FycmlvclwiOiB0aGlzLmF0dGFjayA9IG5ldyBXYXJyaW9yQXR0YWNrKHBsYXllciwgcHJvcC53YXJyaW9yKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG9vdGVyXCI6IHRoaXMuYXR0YWNrID0gbmV3IFNob290ZXJBdHRhY2socGxheWVyLCBwcm9wLnNob290ZXIpOyBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogICAgICAgIHRoaXMuYXR0YWNrID0gbmV3IFdpemFyZEF0dGFjayhwbGF5ZXIsIHByb3Aud2l6YXJkKTsgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMua2V5Q29udHJvbGxlciA9IGtleUNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG1vdmVDb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMua2V5cyA9IHByb3Aua2V5cztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleUNvbnRyb2xsZXIuaXNLZXlBdHRhY2tEb3duKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmtleUNvbnRyb2xsZXIua2V5c1t0aGlzLmtleXMudXBdLmlzRG93bikgICAgdGhpcy5hdHRhY2suaGl0KFwidXBcIik7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy5yaWdodF0uaXNEb3duKSB0aGlzLmF0dGFjay5oaXQoXCJyaWdodFwiKTtcclxuICAgICAgICBpZiAodGhpcy5rZXlDb250cm9sbGVyLmtleXNbdGhpcy5rZXlzLmRvd25dLmlzRG93bikgIHRoaXMuYXR0YWNrLmhpdChcImRvd25cIik7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy5sZWZ0XS5pc0Rvd24pICB0aGlzLmF0dGFjay5oaXQoXCJsZWZ0XCIpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFBsYXllcktleUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlzID0ge1xyXG4gICAgICAgICAgICBLZXlXOiB7IGNvZGU6IDg3LCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEtleUQ6IHsgY29kZTogNjgsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgS2V5UzogeyBjb2RlOiA4MywgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBLZXlBOiB7IGNvZGU6IDY1LCBpc0Rvd246IGZhbHNlIH0sXHJcblxyXG4gICAgICAgICAgICBTcGFjZTogeyBjb2RlOiAzMiwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQXJyb3dVcDogICAgeyBjb2RlOiAzOCwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBBcnJvd1JpZ2h0OiB7IGNvZGU6IDM5LCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEFycm93RG93bjogIHsgY29kZTogNDAsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgQXJyb3dMZWZ0OiAgeyBjb2RlOiAzNywgaXNEb3duOiBmYWxzZSB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0tleU1vdmVEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0tleUF0dGFja0Rvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5zdGFydEV2ZW50TGlzdGVuKCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLnN0b3BFdmVudExpc3RlbigpOyAgfVxyXG5cclxuICAgIHN0YXJ0RXZlbnRMaXN0ZW4oKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJLZXlEb3duID0gdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyS2V5VXAgICA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2xpc3RlbmVyS2V5RG93bik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAgIHRoaXMuX2xpc3RlbmVyS2V5VXApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcktleURvd24gJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2xpc3RlbmVyS2V5RG93bikgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyS2V5RG93bjtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcktleVVwICAgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAgIHRoaXMuX2xpc3RlbmVyS2V5VXApICAgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyS2V5VXA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuaXNLZXlNb3ZlRG93biA9XHJcbiAgICAgICAgICAgIHRoaXMua2V5cy5LZXlXLmlzRG93biB8fCB0aGlzLmtleXMuS2V5RC5pc0Rvd24gfHwgdGhpcy5rZXlzLktleVMuaXNEb3duIHx8IHRoaXMua2V5cy5LZXlBLmlzRG93bjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc0tleUF0dGFja0Rvd24gPVxyXG4gICAgICAgICAgICB0aGlzLmtleXMuQXJyb3dVcC5pc0Rvd24gfHwgdGhpcy5rZXlzLkFycm93UmlnaHQuaXNEb3duIHx8IHRoaXMua2V5cy5BcnJvd0Rvd24uaXNEb3duIHx8IHRoaXMua2V5cy5BcnJvd0xlZnQuaXNEb3duO1xyXG4gICAgfVxyXG5cclxuICAgIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5c1tldmVudC5jb2RlXSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0uaXNEb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5VXBIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5c1tldmVudC5jb2RlXSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0uaXNEb3duID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFBsYXllck1vdmVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwga2V5Q29udHJvbGxlciwgcHJvcCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMua2V5Q29udHJvbGxlciA9IGtleUNvbnRyb2xsZXI7XHJcblxyXG4gICAgICAgIHRoaXMua2V5cyA9IHByb3Aua2V5cztcclxuXHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiZG93blwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5rZXlDb250cm9sbGVyLmtleXNbdGhpcy5rZXlzLnVwXS5pc0Rvd24pICAgIHRoaXMubW92ZVVwKCk7ICAgXHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy5yaWdodF0uaXNEb3duKSB0aGlzLm1vdmVSaWdodCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmtleUNvbnRyb2xsZXIua2V5c1t0aGlzLmtleXMuZG93bl0uaXNEb3duKSAgdGhpcy5tb3ZlRG93bigpOyBcclxuICAgICAgICBpZiAodGhpcy5rZXlDb250cm9sbGVyLmtleXNbdGhpcy5rZXlzLmxlZnRdLmlzRG93bikgIHRoaXMubW92ZUxlZnQoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMua2V5Q29udHJvbGxlci5pc0tleU1vdmVEb3duKSB0aGlzLmlzTW92ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVVcCgpICAgIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnkgLT0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJ1cFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSaWdodCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnggKz0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVEb3duKCkgIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnkgKz0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUxlZnQoKSAge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmJvZHkueCAtPSB0aGlzLnBsYXllci5ib2R5Lm1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllcktleUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9rZXlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFBsYXllck1vdmVDb250cm9sbGVyIH0gZnJvbSBcIi4vbW92ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQm9keUFuaW1hdGlvbiB9IGZyb20gXCIuLi8uLi9ib2RpZXMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFBsYXllckF0dGFja0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9hdHRhY2tDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHBsYXllciwgcHJvcCB9KSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgICAgIHRoaXMua2V5Q29udHJvbGxlciA9IG5ldyBQbGF5ZXJLZXlDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG5ldyBQbGF5ZXJNb3ZlQ29udHJvbGxlcih0aGlzLnBsYXllciwgdGhpcy5rZXlDb250cm9sbGVyLCBwcm9wLm1vdmVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmF0dGFja0NvbnRyb2xsZXIgPSBuZXcgUGxheWVyQXR0YWNrQ29udHJvbGxlcih7XHJcbiAgICAgICAgICAgIGF0dGFja1R5cGU6ICAgICBcIndhcnJpb3JcIixcclxuICAgICAgICAgICAga2V5Q29udHJvbGxlcjogIHRoaXMua2V5Q29udHJvbGxlcixcclxuICAgICAgICAgICAgbW92ZUNvbnRyb2xsZXI6IHRoaXMubW92ZUNvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgIHBsYXllcjogICAgICAgICB0aGlzLnBsYXllcixcclxuICAgICAgICAgICAgcHJvcDogICAgICAgICAgIHByb3AuYXR0YWNrQ29udHJvbGxlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBCb2R5QW5pbWF0aW9uKHRoaXMucGxheWVyLnZpZXcsIHRoaXMubW92ZUNvbnRyb2xsZXIsIHRoaXMuYXR0YWNrQ29udHJvbGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7IHRoaXMua2V5Q29udHJvbGxlci5zdGFydCgpOyB9XHJcbiAgICBzdG9wKCkgIHsgdGhpcy5rZXlDb250cm9sbGVyLnN0b3AoKTsgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIHRoaXMua2V5Q29udHJvbGxlci51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrQ29udHJvbGxlci51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVyQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL3BsYXllckNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyICAgICAgICB9IGZyb20gXCIuLi9ib2RpZXMvY2hhcmFjdGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICBzdXBlcihwcm9wKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wLm5hbWU7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludCA9IDM7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBQbGF5ZXJDb250cm9sbGVyKHsgcGxheWVyOiB0aGlzLCBwcm9wOiBwcm9wLmNvbnRyb2xsZXIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBmcmFtZURlbGF5PSA1MCwgcmVwZWF0ID0gZmFsc2UsIGF1dG9ydW4gPSBmYWxzZSB9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XHJcbiAgICAgICAgdGhpcy5hdXRvcnVuID0gYXV0b3J1bjtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gZnJhbWVEZWxheTtcclxuICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IHRoaXMuYXV0b3J1biAmJiB0aGlzLnJ1bigpOyB9XHJcblxyXG4gICAgcnVuKCkgIHsgdGhpcy5pc1J1bm5pbmcgPSB0cnVlOyAgfVxyXG4gICAgc3RvcCgpIHsgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTsgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0RnJhbWVUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0RnJhbWVUaW1lKSA+IHRoaXMuZnJhbWVEZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwibGFiZWxBbmltYXRpb25cIiwgbGFiZWwsIGZyYW1lRGVsYXkgPSAyMDAsIHRleHRDb2xsZWN0aW9uID0gW10sIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIGZyYW1lRGVsYXk6IGZyYW1lRGVsYXksIHJlcGVhdDogcmVwZWF0LCBhdXRvcnVuOiBhdXRvcnVuIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sbGVjdGlvbiA9IHRleHRDb2xsZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRleHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUZXh0SW5kZXggKyAxID09IHRoaXMudGV4dENvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRleHRJbmRleCA9IDA7XHJcbiAgICAgICAgfSBlbHNlICsrdGhpcy5jdXJyZW50VGV4dEluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMudGV4dENvbGxlY3Rpb25bdGhpcy5jdXJyZW50VGV4dEluZGV4XTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNwcml0ZUFuaW1hdGlvblwiLCBzcHJpdGVTaGVldCwgaW5kaWNlcywgZnJhbWVEZWxheSA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IGZhbHNlIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIGZyYW1lRGVsYXk6IGZyYW1lRGVsYXksIHJlcGVhdDogcmVwZWF0LCBhdXRvcnVuOiBhdXRvcnVuIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gc3ByaXRlU2hlZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlcztcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKHRoaXMuaW5kaWNlcyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZyYW1lcyhpbmRpY2VzKSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGljZXMubWFwKCBpbmRleCA9PiAoe1xyXG4gICAgICAgICAgICBzb3VyY2VYOiB0aGlzLnNwcml0ZVNoZWV0LmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiB0aGlzLnNwcml0ZVNoZWV0LmdldFNvdXJjZVkoaW5kZXgpXHJcbiAgICAgICAgfSkgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRGcmFtZUluZGV4ICsgMSA9PSB0aGlzLmZyYW1lcy5sZW5ndGggKSAmJiB0aGlzLnJlcGVhdClcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuY3VycmVudEZyYW1lSW5kZXggKyAxID09IHRoaXMuZnJhbWVzLmxlbmd0aCApICYmICF0aGlzLnJlcGVhdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgKyt0aGlzLmN1cnJlbnRGcmFtZUluZGV4O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbWVyYSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAsIGxpbWl0WCA9IDY0MCwgbGltaXRZID0gNjQwLCBzY3JvbGxFZGdlID0gMzAwIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmxpbWl0WCA9IGxpbWl0WDtcclxuICAgICAgICB0aGlzLmxpbWl0WSA9IGxpbWl0WTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaE9iamVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsRWRnZSA9IHNjcm9sbEVkZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2gob2JqKSB7XHJcbiAgICAgICAgdGhpcy53YXRjaE9iamVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gb2JqLmJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy53YXRjaE9iamVjdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib2R5LnggPiAodGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc2Nyb2xsRWRnZSkpXHJcbiAgICAgICAgICAgIHRoaXMueCA9IE1hdGgubWluKHRoaXMubGltaXRYLCB0aGlzLmJvZHkueCAtIHRoaXMud2lkdGggKyB0aGlzLnNjcm9sbEVkZ2UpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib2R5LnggPCAodGhpcy54ICsgdGhpcy5zY3JvbGxFZGdlKSlcclxuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgoMCwgdGhpcy5ib2R5LnggLSB0aGlzLnNjcm9sbEVkZ2UpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib2R5LnkgPiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLSB0aGlzLnNjcm9sbEVkZ2UpKVxyXG4gICAgICAgICAgICB0aGlzLnkgPSBNYXRoLm1pbih0aGlzLmxpbWl0WSwgdGhpcy5ib2R5LnkgLSB0aGlzLmhlaWdodCArIHRoaXMuc2Nyb2xsRWRnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueSA8ICh0aGlzLnkgKyB0aGlzLnNjcm9sbEVkZ2UpKVxyXG4gICAgICAgICAgICB0aGlzLnkgPSBNYXRoLm1heCgwLCB0aGlzLmJvZHkueSAtIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuLi92aWV3L3BpY3R1cmUvc3ByaXRlU2hlZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCwgY29sbGlzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBjb2xsaXNpb247XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHByb3AubWFwRGF0YTtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmRhdGEubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB0aGlzLmRhdGEud2lkdGggKiB0aGlzLmRhdGEudGlsZXdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXRhLmhlaWdodCAqIHRoaXMuZGF0YS50aWxlaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVTZXQgPSBuZXcgU3ByaXRlU2hlZXQocHJvcC5tYXBTcHJpdGVTaGVldCk7XHJcblxyXG4gICAgICAgIHRoaXMucm93ICAgID0gdGhpcy5kYXRhLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbHVtbiA9IHRoaXMuZGF0YS53aWR0aDtcclxuXHJcbiAgICAgICAgdGhpcy5sYXllcnMgICAgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVycyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmRlZmF1bHRMYXllciA9IFtdO1xyXG4gICAgICAgIHRoaXMudXBwZXJMYXllciAgID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRpbGVTZXQuaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUxheWVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUxheWVycygpIHtcclxuICAgICAgICB0aGlzLmRhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIudHlwZSA9PSBcInRpbGVsYXllclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVycy5wdXNoKHsgbmFtZTogbGF5ZXIubmFtZSwgaW5kZXhlczogbGF5ZXIuZGF0YSwgel9pbmRleDogbGF5ZXIucHJvcGVydGllc1swXS52YWx1ZSB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXllci50eXBlID09IFwib2JqZWN0Z3JvdXBcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlcnMgPSBsYXllci5vYmplY3RzLm1hcChpdGVtID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDE6IGl0ZW0ueCwgeDI6IGl0ZW0ueCArIGl0ZW0ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTE6IGl0ZW0ueSwgeTI6IGl0ZW0ueSArIGl0ZW0uaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9KSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGF5ZXJzLnNvcnQoIChhLCBiKSA9PiBhLnpfaW5kZXggLSBiLnpfaW5kZXggKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbi5jb2xsaWRlcnMgPSB0aGlzLmNvbGxpZGVycztcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZWNvbmRSZW5kZXIoc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cHBlckxheWVyLmZvckVhY2godGlsZSA9PiBzY3JlZW4uZHJhd1Nwcml0ZSh0aWxlLnNwcml0ZSwgdGlsZS54LCB0aWxlLnkpICk7XHJcbiAgICAgICAgdGhpcy51cHBlckxheWVyID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29sID0gMCwgcm93ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGxheWVyLmluZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyLm5hbWUgPT0gXCJ3YWxsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb24uYm9kaWVzLmZvckVhY2goIGJvZHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzSW50ZXJzZWN0ID0gdGhpcy5jb2xsaXNpb24uaW50ZXJzZWN0KGJvZHksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MTogdGhpcy50aWxlU2V0LnNwcml0ZVdpZHRoICogY29sLCAgeDI6IHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCAqIGNvbCAgKyB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTE6IHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgKiByb3csIHkyOiB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93ICsgdGhpcy50aWxlU2V0LnNwcml0ZUhlaWdodCAvMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbnRlcnNlY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlckxheWVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGU6IHRoaXMudGlsZVNldC5nZXRTcHJpdGUoaW5kZXgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGggKiBjb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgKiByb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Ugc2NyZWVuLmRyYXdTcHJpdGUodGhpcy50aWxlU2V0LmdldFNwcml0ZShpbmRleCksIHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCAqIGNvbCwgdGhpcy50aWxlU2V0LnNwcml0ZUhlaWdodCAqIHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudGlsZVNldC5nZXRTcHJpdGUoaW5kZXgpLCB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGggKiBjb2wsIHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgKiByb3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKCsrY29sID4gdGhpcy5jb2x1bW4gLSAxKSAmJiAoW2NvbCwgcm93XSA9IFswLCByb3crMV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgaW1hZ2UgPSB1bmRlZmluZWQsIHNyYywgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQsIHNvdXJjZVggPSAwLCBzb3VyY2VZID0gMCB9KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnNvdXJjZVggPSBzb3VyY2VYO1xyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IHNvdXJjZVk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgdGhpcy5pbWFnZSB8fCAodGhpcy5pbWFnZSA9IHRoaXMubG9hZEltYWdlKCkpOyB9XHJcblxyXG4gICAgX2xvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkSW1hZ2UoKSB7IHRoaXMuX2xvYWQoKS50aGVuKGltZyA9PiB0aGlzLmltYWdlID0gaW1nKS5jYXRjaChlcnJvciA9PiB7IHRocm93IGVycm9yOyB9KTsgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXQgZXh0ZW5kcyBTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJzcHJpdGVTaGVldFwiLCBzcmMsIHdpZHRoLCBoZWlnaHQsIHNwcml0ZVdpZHRoID0gNjQsIHNwcml0ZUhlaWdodCA9IDY0IH0pIHtcclxuICAgICAgICBzdXBlcih7IHNyYzogc3JjLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlV2lkdGggID0gc3ByaXRlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgZ2V0U3ByaXRlKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xyXG4gICAgICAgICAgICBpbWFnZTogICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICB3aWR0aDogICB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICB0aGlzLnNwcml0ZUhlaWdodCxcclxuICAgICAgICAgICAgc291cmNlWDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSxcclxuICAgICAgICAgICAgc291cmNlWTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvdXJjZVgoaW5kZXgpIHsgcmV0dXJuIChpbmRleC0xKSAqIHRoaXMuc3ByaXRlV2lkdGggJSB0aGlzLndpZHRoOyB9XHJcblxyXG4gICAgZ2V0U291cmNlWShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnRydW5jKCAoKGluZGV4LTEpICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLndpZHRoICkgKiB0aGlzLnNwcml0ZUhlaWdodDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBMZXZlbFVJIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50cyA9IHByb3AuaGVhbHRoUG9pbnRzO1xyXG4gICAgICAgIHRoaXMudGltZUxhYmVsID0gcHJvcC50aW1lTGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50cy5zcHJpdGUuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMudGltZUxhYmVsLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoaHAsIHR4dCkge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnRzLmNvdW50ID0gaHA7XHJcbiAgICAgICAgdGhpcy50aW1lTGFiZWwudGV4dCA9IHR4dDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhlYWx0aFBvaW50cy5jb3VudDsgKytpKVxyXG4gICAgICAgICAgICBzY3JlZW4uZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhQb2ludHMuc3ByaXRlLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhQb2ludHMueCArIGkgKiB0aGlzLmhlYWx0aFBvaW50cy5zcHJpdGUud2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aFBvaW50cy55XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZUxhYmVsLnJlbmRlcih0aW1lLCBzY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgICAgICAgICAgIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IE1hcCAgICAgICAgICAgICB9IGZyb20gXCIuLi8uLi9tYXBcIjtcclxuaW1wb3J0IHsgQ2FtZXJhICAgICAgICAgIH0gZnJvbSBcIi4uLy4uL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBFbmVteSAgICAgICAgICAgfSBmcm9tIFwiLi4vLi4vLi4vZW5lbXkvZW5lbXlcIjtcclxuaW1wb3J0IHsgU3ByaXRlICAgICAgICAgIH0gZnJvbSBcIi4uLy4uL3BpY3R1cmUvc3ByaXRlXCI7XHJcbmltcG9ydCB7IExhYmVsICAgICAgICAgICB9IGZyb20gXCIuLi8uLi8uLi9pZWxlbWVudHMvbGFiZWxcIjtcclxuaW1wb3J0IHsgUGxheWVyICAgICAgICAgIH0gZnJvbSBcIi4uLy4uLy4uL3BsYXllci9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgTGV2ZWxDb250cm9sbGVyIH0gZnJvbSBcIi4vbGV2ZWxDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IExldmVsVUkgICAgICAgICB9IGZyb20gXCIuL2xldmVVSVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsIGV4dGVuZHMgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsZXZlbFwiLCBzY3JlZW4sIGNvbGxpc2lvbiwgcHJvcCB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBzY3JlZW46IHNjcmVlbiwgbmV4dDogcHJvcC5uZXh0IH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAocHJvcCwgY29sbGlzaW9uKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIocHJvcC5wbGF5ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBwcm9wLmVuZW1pZXMubWFwKGVuZW15ID0+IG5ldyBFbmVteShlbmVteSkpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgTGV2ZWxDb250cm9sbGVyKHtcclxuICAgICAgICAgICAgcGxheWVySFA6IHRoaXMucGxheWVyLmhlYWx0aFBvaW50LFxyXG4gICAgICAgICAgICBlbmVtaWVzQ291bnQ6IHRoaXMuZW5lbWllcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGxldmVsVGltZTogeyBhbGw6IHByb3AudGltZSwgY3VycmVudDogMCB9LFxyXG4gICAgICAgICAgICBsZXZlbDogdGhpc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IGNvbGxpc2lvbjtcclxuXHJcbiAgICAgICAgdGhpcy5pbnRlcmZhY2UgPSBuZXcgTGV2ZWxVSSh7XHJcbiAgICAgICAgICAgIGhlYWx0aFBvaW50czoge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlOiBuZXcgU3ByaXRlKHByb3AuaW50ZXJmYWNlLmhlYWx0aFBvaW50cy5zcHJpdGUpLFxyXG4gICAgICAgICAgICAgICAgeDogcHJvcC5pbnRlcmZhY2UuaGVhbHRoUG9pbnRzLngsIHk6IHByb3AuaW50ZXJmYWNlLmhlYWx0aFBvaW50cy55LFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IHByb3AuaW50ZXJmYWNlLmhlYWx0aFBvaW50cy5jb3VudFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aW1lTGFiZWw6IG5ldyBMYWJlbChwcm9wLmludGVyZmFjZS50aW1lKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbGxlci5hdHRhY2tDb250cm9sbGVyLmF0dGFjay5zZXRFbmVtaWVzKHRoaXMuZW5lbWllcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbGxlci5hdHRhY2tDb250cm9sbGVyLmF0dGFjay5zZXRDb2xsaXNpb24odGhpcy5jb2xsaXNpb24pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcC5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlLmluaXQoKTtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xsZXIuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24uYm9kaWVzLnB1c2godGhpcy5wbGF5ZXIuYm9keSwgLi4udGhpcy5lbmVtaWVzLm1hcChlbmVteSA9PiB7XHJcbiAgICAgICAgICAgIGVuZW15LmluaXQodGhpcy5wbGF5ZXIsIHRoaXMuY29sbGlzaW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVuZW15LmJvZHk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICh0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEoe1xyXG4gICAgICAgICAgICB3aWR0aDogIHRoaXMuc2NyZWVuLndpZHRoLCAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zY3JlZW4uaGVpZ2h0LFxyXG4gICAgICAgICAgICBsaW1pdFg6IHRoaXMubWFwLndpZHRoIC0gdGhpcy5zY3JlZW4ud2lkdGgsIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5zY3JlZW4uaGVpZ2h0XHJcbiAgICAgICAgfSkpLndhdGNoKHRoaXMucGxheWVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JlZW4uc2V0Q2FtZXJhKHRoaXMuY2FtZXJhKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUodGltZSwgdGhpcy5wbGF5ZXIuaGVhbHRoUG9pbnQsIHRoaXMuZW5lbWllcy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlLnVwZGF0ZSh0aGlzLnBsYXllci5oZWFsdGhQb2ludCwgdGhpcy5jb250cm9sbGVyLmdldFRpbWVMYWJlbCh0aW1lLCB0aGlzLmludGVyZmFjZS50aW1lTGFiZWwudGV4dCkpO1xyXG5cclxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbmVteS5oZWFsdGhQb2ludCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFwLnJlbmRlcih0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbikpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMubWFwLnNlY29uZFJlbmRlcih0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgICAgICB0aGlzLmludGVyZmFjZS5yZW5kZXIodGltZSwgdGhpcy5zY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIExldmVsQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIUCA9IHByb3AucGxheWVySFA7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzQ291bnQgPSBwcm9wLmVuZW1pZXNDb3VudDtcclxuXHJcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSBwcm9wLmxldmVsVGltZTtcclxuICAgICAgICB0aGlzLmxldmVsID0gcHJvcC5sZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSwgcGxheWVySGVhbHRoUG9pbnQsIGVuZW1pZXNDb3VudCkge1xyXG4gICAgICAgIHRoaXMucGxheWVySFAgPSBwbGF5ZXJIZWFsdGhQb2ludDtcclxuICAgICAgICB0aGlzLmVuZW1pZXNDb3VudCA9IGVuZW1pZXNDb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxUaW1lLmN1cnJlbnQgPD0gMCkgdGhpcy5sZXZlbFRpbWUuY3VycmVudCA9IE1hdGgudHJ1bmModGltZSAvIDEwMDApO1xyXG4gICAgICAgIHRoaXMuZW5kTGV2ZWxVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRMZXZlbFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJIUCA9PSAwIHx8IHRoaXMubGV2ZWxUaW1lLmFsbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwuc3RhdHVzID0gXCJmaW5pc2hcIjtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbC5uZXh0ID0gXCJzdGFydE1lbnVcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW5lbWllc0NvdW50ID09IDApIHRoaXMubGV2ZWwuc3RhdHVzID0gXCJmaW5pc2hcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lTGFiZWwodGltZSwgcHJldlN0cikge1xyXG4gICAgICAgIGlmICh0aGlzLmxldmVsVGltZS5jdXJyZW50ID09IE1hdGgudHJ1bmModGltZSAvIDEwMDApKSByZXR1cm4gcHJldlN0cjtcclxuXHJcbiAgICAgICAgKyt0aGlzLmxldmVsVGltZS5jdXJyZW50O1xyXG5cclxuICAgICAgICBsZXQgbWluID0gTWF0aC50cnVuYygodGhpcy5sZXZlbFRpbWUuYWxsIC0gMSkgLyA2MCk7XHJcbiAgICAgICAgbGV0IHNlYyA9IC0tdGhpcy5sZXZlbFRpbWUuYWxsICUgNjA7XHJcblxyXG4gICAgICAgIHJldHVybiBgVGltZSB8ICR7KG1pbiA+IDkpID8gbWluIDogXCIwXCIgKyBtaW59OiR7KHNlYyA+IDkpID8gc2VjIDogXCIwXCIgKyBzZWN9YDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxvYWRpbmdcIiwgc2NyZWVuLCBwcm9wLCBwYXJlbnQgPSBcIm5vbmVcIiwgbmV4dCA9IFwibm9uZVwiIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHNjcmVlbjogc2NyZWVuLCBwYXJlbnQ6IHBhcmVudCwgbmV4dDogbmV4dCB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmllbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IFRpbGUocHJvcC5iYWNrZ3JvdW5kKSxcclxuICAgICAgICAgICAgZGlzazogICAgICAgbmV3IFRpbGUocHJvcC5kaXNrKSxcclxuICAgICAgICAgICAgbGFiZWw6ICAgICAgbmV3IExhYmVsKHByb3AubGFiZWwpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gXCJmaW5pc2hcIjtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gXCJzdGFydE1lbnVcIjtcclxuICAgICAgICB9LCAoMSArIE1hdGgucmFuZG9tKCkpICogMWUzKTsgLy8gMS0yIHNlY1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vaWVsZW1lbnRzL2J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0TWVudSBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic3RhcnRNZW51XCIsIHNjcmVlbiwgcHJvcCwgcGFyZW50ID0gXCJub25lXCIsIG5leHQgPSBcIm5vbmVcIiB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBzY3JlZW46IHNjcmVlbiwgcGFyZW50OiBwYXJlbnQsIG5leHQ6IG5leHQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgVGlsZShwcm9wLmJhY2tncm91bmQpLFxyXG4gICAgICAgICAgICBwbGF5QnV0dG9uOiBuZXcgQnV0dG9uKHByb3AucGxheUJ1dHRvbilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uX19pbl9fKGV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiZmluaXNoXCI7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IFwibGV2ZWxfMVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5fX2luX18oZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmNsaWNrO1xyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmlzTW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VVcEhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAhZXZlbnQgJiYgKGV2ZW50ID0gd2luZG93LmV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5iZ2NvbG9yID0gdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5jb2xvcnMuZGVmYXVsdDtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5pc01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLl9faW5fXyhldmVudCkpIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmhvdmVyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmRlZmF1bHQpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmFkZExpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NLCB7XHJcbiAgICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXI6ICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXI6ICAgdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlVXBIYW5kbGVyOiAgICAgdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBtb3VzZUNsaWNrSGFuZGxlcjogIHRoaXMubW91c2VDbGlja0hhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLnJlbW92ZUxpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIHNjcmVlbiwgbmV4dCB9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IFwibG9hZGluZ1wiO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IG5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAhdGhpcy5pZWxlbWVudHMgJiYgKHRoaXMuaWVsZW1lbnRzID0ge30pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpZSBpbiB0aGlzLmllbGVtZW50cylcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHNbaWVdLmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcImxvYWRlZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0RXZlbnRMaXN0ZW4oKSB7fVxyXG4gICAgc3RvcEV2ZW50TGlzdGVuKCkgIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7IHRoaXMuc3RhcnRFdmVudExpc3RlbigpOyB9XHJcbiAgICBzdG9wKCkgIHsgdGhpcy5zdG9wRXZlbnRMaXN0ZW4oKTsgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7fVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGllIGluIHRoaXMuaWVsZW1lbnRzKVxyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50c1tpZV0ucmVuZGVyKHRpbWUsIHRoaXMuc2NyZWVuKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDYW52YXMge1xyXG4gICAgY29uc3RydWN0b3IoeyB3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNjQwIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVwiKSB8fCBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpICk7XHJcbiAgICAgICAgZGl2LmlkID0gXCJnYW1lXCI7XHJcblxyXG4gICAgICAgIHRoaXMuRE9NID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdIHx8IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpKTtcclxuICAgICAgICB0aGlzLkRPTS53aWR0aCAgPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuRE9NLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuRE9NLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNDYW1lcmFTZXQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW1lcmEoY2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgdGhpcy5jYW52YXMuaW5pdCgpOyB9XHJcblxyXG4gICAgZHJhd0J1dHRvbihidXR0b24pIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFJlY3QoYnV0dG9uLnggLSA1LCBidXR0b24ueSAtIDUsIGJ1dHRvbi53aWR0aCArIDEwLCBidXR0b24uaGVpZ2h0ICsgMTApO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gYnV0dG9uLmJnY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdChidXR0b24ueCwgYnV0dG9uLnksIGJ1dHRvbi53aWR0aCwgYnV0dG9uLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0xhYmVsKGJ1dHRvbi5sYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0xhYmVsKGxhYmVsLCBjYW1lcmEgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gbGFiZWwuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5mb250ID0gYCR7bGFiZWwuZm9udFdlaWdodH0gJHtsYWJlbC5mb250U2l6ZX1weCAke2xhYmVsLmZvbnRGYW1pbHkgfHwgXCJMdWNpZGEgQ29uc29sYXNcIn1gO1xyXG5cclxuICAgICAgICBpZiAoIWNhbWVyYSlcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsVGV4dChsYWJlbC50ZXh0LCBsYWJlbC54LCBsYWJlbC55KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFRleHQobGFiZWwudGV4dCwgbGFiZWwueCAtIHRoaXMuY2FtZXJhLngsIGxhYmVsLnkgLSB0aGlzLmNhbWVyYS55KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpIHsgaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpOyB9XHJcbiAgICBcclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlLCB4LCB5KSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZVggPSB4O1xyXG4gICAgICAgIGxldCBzcHJpdGVZID0geTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0NhbWVyYVNldCkge1xyXG4gICAgICAgICAgICBzcHJpdGVYIC09IHRoaXMuY2FtZXJhLng7XHJcbiAgICAgICAgICAgIHNwcml0ZVkgLT0gdGhpcy5jYW1lcmEueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoc3ByaXRlWCA+PSB0aGlzLndpZHRoKSAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlWSA+PSB0aGlzLmhlaWdodCkgICAgICAgICB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVggKyBzcHJpdGUud2lkdGgpICA8PSAwKSB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSA8PSAwKVxyXG4gICAgICAgICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgc291cmNlWCA9IHNwcml0ZS5zb3VyY2VYICsgTWF0aC5hYnMoTWF0aC5taW4oMCwgc3ByaXRlWCkpO1xyXG4gICAgICAgIGxldCBzb3VyY2VZID0gc3ByaXRlLnNvdXJjZVkgKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVZKSk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBNYXRoLm1heCgwLCBzcHJpdGVYKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5oZWlnaHQsIHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSAtIE1hdGgubWF4KDAsIHNwcml0ZVkpO1xyXG5cclxuICAgICAgICBzcHJpdGUuaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHNwcml0ZS5pbWFnZSxcclxuICAgICAgICAgICAgc291cmNlWCwgc291cmNlWSxcclxuICAgICAgICAgICAgd2lkdGgsIGhlaWdodCxcclxuICAgICAgICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWCksIE1hdGgubWF4KDAsIHNwcml0ZVkpLFxyXG4gICAgICAgICAgICB3aWR0aCwgaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHsgdGhpcy5jYW52YXMuY29udGV4dC5zdHJva2VSZWN0KHggLSB0aGlzLmNhbWVyYS54LCB5IC0gdGhpcy5jYW1lcmEueSwgd2lkdGgsIGhlaWdodCk7IH1cclxuXHJcbiAgICBmaWxsKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=