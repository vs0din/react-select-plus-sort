'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SortableTags = exports.SortableItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Value = require('./Value');

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sortable = require('react-sortable-hoc');
var SortableContainer = Sortable.SortableContainer;
var SortableElement = Sortable.SortableElement;

var SortableItem = exports.SortableItem = SortableElement(function (props) {
	return _react2.default.createElement(_Value2.default, props);
});

var SortableTags = exports.SortableTags = SortableContainer(function (_ref) {
	var valueArray = _ref.valueArray,
	    disabled = _ref.disabled,
	    _instancePrefix = _ref._instancePrefix,
	    valueKey = _ref.valueKey,
	    removeValue = _ref.removeValue,
	    placeholder = _ref.placeholder,
	    renderLabel = _ref.renderLabel,
	    onClick = _ref.onClick,
	    input = _ref.input;

	return _react2.default.createElement(
		'span',
		{ className: 'Select-multi-value-wrapper', id: _instancePrefix + '-value' },
		valueArray.map(function (value, i) {
			return _react2.default.createElement(
				SortableItem,
				{
					disabled: disabled || value.clearableValue === false,
					id: _instancePrefix + '-value-' + i,
					instancePrefix: _instancePrefix,
					onRemove: removeValue,
					placeholder: placeholder,
					key: 'item-' + i,
					index: i,
					value: value
				},
				renderLabel(value, i),
				_react2.default.createElement(
					'span',
					{ className: 'Select-aria-only' },
					'\xA0'
				)
			);
		}),
		input
	);
});

exports.default = SortableTags;