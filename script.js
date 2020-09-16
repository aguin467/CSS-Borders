const root = document.documentElement;
const square = window['square'];

const borderStyleInput = window['border-style-input'];
const borderWidthValueInput = window['border-width-value-input'];
const borderWidthUnitInput = window['border-width-unit-input'];
const borderColorInput = window['border-color-input'];
const borderRadiusValueInput = window['border-radius-value-input'];
const borderRadiusUnitInput = window['border-radius-unit-input'];


borderStyleInput.addEventListener('change', function(e) {
    root.style.setProperty('--border-style', e.target.value);
});

borderWidthValueInput.addEventListener('input', function(e) {
    const unit = borderWidthUnitInput.value;
    root.style.setProperty('--border-width', e.target.value + unit);
});

borderWidthUnitInput.addEventListener('input', function(e) {
    const value = borderWidthValueInput.value;
    root.style.setProperty('--border-width', value + e.target.value);
});


borderRadiusValueInput.addEventListener('input', function(e) {
    const unit = borderRadiusUnitInput.value;
    root.style.setProperty('--border-radius', e.target.value + unit);
});

borderRadiusUnitInput.addEventListener('input', function(e) {
    const value = borderRadiusValueInput.value;
    root.style.setProperty('--border-radius', value + e.target.value);
});

 borderColorInput.addEventListener('change', function(e) {
     root.style.setProperty('--border-color', e.target.value);
});


// Border Side
const borderSideInput = window['border-side-input'];
const sideBorderStyleInput = window['side-border-style-input'];
const sideBorderWidthValueInput = window['side-border-width-value-input'];
const sideBorderWidthUnitInput = window['side-border-width-unit-input'];
const sideBorderColorInput = window['side-border-color-input'];
const sideBorderRadiusValueInput = window['side-border-radius-value-input'];
const sideBorderRadiusUnitInput = window['side-border-radius-unit-input'];

borderSideInput.addEventListener('change', function(e) {
    square.style[`border${e.target.value}Style`] = sideBorderStyleInput.value;
    square.style[`border${e.target.value}Width`] = sideBorderWidthValueInput.value + sideBorderWidthUnitInput.value;
    square.style[`border${e.target.value}Color`] = sideBorderColorInput.value;
    square.style[`border${e.target.value}Radius`] = sideBorderRadiusValueInput.value + sideBorderRadiusUnitInput.value;
});

sideBorderStyleInput.addEventListener('change', function(e) {
    const side = borderSideInput.value;
    square.style[`border${side}Style`] = sideBorderStyleInput.value;
});


