/*!
 * MediaWiki Widgets - SelectWithInputWidget class.
 *
 * @copyright 2011-2017 MediaWiki Widgets Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */
( function () {

	/**
	 * @classdesc Select with input widget. Displays an OO.ui.TextInputWidget along with
	 * an OO.ui.DropdownInputWidget.
	 * TODO Explain the OTHER option
	 *
	 * @example
	 * mw.loader.using( 'mediawiki.widgets.SelectWithInputWidget', function () {
	 *   var swi = new mw.widgets.SelectWithInputWidget( {
	 *     or: true,
	 *     dropdowninput: {
	 *       options: [
	 *         { data: 'other', label: 'Other' },
	 *         { data: 'a', label: 'First' },
	 *         { data: 'b', label: 'Second' },
	 *         { data: 'c', label: 'Third' }
	 *       ]
	 *     },
	 *     textinput: {
	 *     }
	 *   } );
	 *
	 *   $( document.body ).append( swi.$element );
	 * } );
	 *
	 * @class mw.widgets.SelectWithInputWidget
	 * @extends OO.ui.Widget
	 *
	 * @constructor
	 * @description Create an instance of `mw.widgets.SelectWithInputWidget`.
	 * @param {Object} [config] Configuration options
	 * @param {Object} [config.dropdowninput] Config for the dropdown
	 * @param {Object} [config.textinput] Config for the text input
	 * @param {boolean} [config.or=false] Config for whether the widget is dropdown AND input
	 *                           or dropdown OR input
	 * @param {boolean} [config.required=false] Config for whether input is required
	 */
	mw.widgets.SelectWithInputWidget = function MwWidgetsSelectWithInputWidget( config ) {
		// Config initialization
		config = $.extend( { or: false, required: false }, config );

		// Properties
		this.textinput = new OO.ui.TextInputWidget( config.textinput );
		this.dropdowninput = new OO.ui.DropdownInputWidget( config.dropdowninput );
		this.or = config.or;
		this.required = config.required;

		// Events
		this.dropdowninput.on( 'change', this.onChange.bind( this ) );
		this.textinput.on( 'change', function () {
			this.emit( 'change', this.getValue() );
		}.bind( this ) );

		// Parent constructor
		mw.widgets.SelectWithInputWidget.super.call( this, config );

		// Initialization
		this.$element
			.addClass( 'mw-widget-selectWithInputWidget' )
			.append(
				this.dropdowninput.$element,
				this.textinput.$element
			);
		this.onChange();
	};

	/* Setup */
	OO.inheritClass( mw.widgets.SelectWithInputWidget, OO.ui.Widget );

	/* Static Methods */

	/**
	 * @inheritdoc
	 */
	mw.widgets.SelectWithInputWidget.static.reusePreInfuseDOM = function ( node, config ) {
		config = mw.widgets.SelectWithInputWidget.super.static.reusePreInfuseDOM( node, config );
		config.dropdowninput = OO.ui.DropdownInputWidget.static.reusePreInfuseDOM(
			$( node ).find( '.oo-ui-dropdownInputWidget' ),
			config.dropdowninput
		);
		config.textinput = OO.ui.TextInputWidget.static.reusePreInfuseDOM(
			$( node ).find( '.oo-ui-textInputWidget' ),
			config.textinput
		);
		return config;
	};

	/**
	 * @inheritdoc
	 */
	mw.widgets.SelectWithInputWidget.static.gatherPreInfuseState = function ( node, config ) {
		var state = mw.widgets.SelectWithInputWidget.super.static.gatherPreInfuseState( node, config );
		state.dropdowninput = OO.ui.DropdownInputWidget.static.gatherPreInfuseState(
			$( node ).find( '.oo-ui-dropdownInputWidget' ),
			config.dropdowninput
		);
		state.textinput = OO.ui.TextInputWidget.static.gatherPreInfuseState(
			$( node ).find( '.oo-ui-textInputWidget' ),
			config.textinput
		);
		return state;
	};

	/* Methods */

	/**
	 * @inheritdoc
	 */
	mw.widgets.SelectWithInputWidget.prototype.restorePreInfuseState = function ( state ) {
		mw.widgets.SelectWithInputWidget.super.prototype.restorePreInfuseState.call( this, state );
		this.dropdowninput.restorePreInfuseState( state.dropdowninput );
		this.textinput.restorePreInfuseState( state.textinput );
	};

	/**
	 * @inheritdoc
	 */
	mw.widgets.SelectWithInputWidget.prototype.setDisabled = function ( disabled ) {
		var textinputIsHidden = this.or && this.dropdowninput.getValue() !== 'other';
		mw.widgets.SelectWithInputWidget.super.prototype.setDisabled.call( this, disabled );
		this.dropdowninput.setDisabled( disabled );
		// It is impossible to submit a form with hidden fields failing validation, e.g. one that
		// is required. However, validity is not checked for disabled fields, as these are not
		// submitted with the form. So we should also disable fields when hiding them.
		this.textinput.setDisabled( textinputIsHidden || disabled );
		// If the widget is required, set the text field as required, but only if the widget is visible.
		if ( this.required ) {
			this.textinput.setRequired( !this.textinput.isDisabled() );
		}
	};

	/**
	 * Set the value from outside.
	 *
	 * @param {string|undefined} value
	 */
	mw.widgets.SelectWithInputWidget.prototype.setValue = function ( value ) {
		var selectable = false;

		if ( this.or ) {
			if ( value !== 'other' ) {
				selectable = !!this.dropdowninput.dropdownWidget.getMenu().findItemFromData( value );
			}

			if ( selectable ) {
				this.dropdowninput.setValue( value );
				this.textinput.setValue( undefined );
			} else {
				this.dropdowninput.setValue( 'other' );
				this.textinput.setValue( value );
			}

			this.emit( 'change', value );
		}
	};

	/**
	 * Get the value from outside.
	 *
	 * @return {string}
	 */
	mw.widgets.SelectWithInputWidget.prototype.getValue = function () {
		if ( this.or ) {
			if ( this.dropdowninput.getValue() !== 'other' ) {
				return this.dropdowninput.getValue();
			}

			return this.textinput.getValue();
		} else {
			return '';
		}
	};

	/**
	 * Handle change events on the DropdownInput
	 *
	 * @param {string|undefined} value
	 * @private
	 */
	mw.widgets.SelectWithInputWidget.prototype.onChange = function ( value ) {
		if ( this.or ) {
			value = value || this.dropdowninput.getValue();
			this.textinput.$element.toggle( value === 'other' );
			// It is impossible to submit a form with hidden fields failing validation, e.g. one that
			// is required. However, validity is not checked for disabled fields, as these are not
			// submitted with the form. So we should also disable fields when hiding them.
			this.textinput.setDisabled( value !== 'other' || this.isDisabled() );
		}

		this.emit( 'change', this.getValue() );
	};

}() );
