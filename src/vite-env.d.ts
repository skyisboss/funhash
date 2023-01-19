/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}



declare module './components/keen-ui/*.js' {
  import KeenUI from './components/keen-ui/index.js';
  export default KeenUI
}
declare module '@keen-ui' {
  export {
    UiAlert,
    UiAutocomplete,
    UiButton,
    UiCalendar,
    UiCheckbox,
    UiCheckboxGroup,
    UiCloseButton,
    UiCollapsible,
    UiConfirm,
    UiDatepicker,
    UiDatepickerCalendar,
    UiFab,
    UiFileupload,
    UiIcon,
    UiIconButton,
    UiMenu,
    UiModal,
    UiPopover,
    UiPreloader,
    UiProgressCircular,
    UiProgressLinear,
    UiRadio,
    UiRadioGroup,
    UiRippleInk,
    UiSelect,
    UiSlider,
    UiSnackbar,
    UiSnackbarContainer,
    UiSwitch,
    UiTab,
    UiTabs,
    UiTextbox,
    UiToolbar,
    UiTooltip
  };
}