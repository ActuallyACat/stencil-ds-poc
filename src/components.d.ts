/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { GridFractions } from "./components/box/kz-box";
export namespace Components {
    interface KzBox {
        /**
          * padding
         */
        "p"?: GridFractions;
        /**
          * padding bottom
         */
        "pb"?: GridFractions;
        /**
          * padding left
         */
        "pl"?: GridFractions;
        /**
          * padding right
         */
        "pr"?: GridFractions;
        /**
          * padding top
         */
        "pt"?: GridFractions;
        /**
          * padding about the x-axis - padding left and right
         */
        "px"?: GridFractions;
        /**
          * padding about the y-axis - padding top and bottom
         */
        "py"?: GridFractions;
    }
    interface KzButton {
        /**
          * Sets width to be 100% of the parent container
          * @default false
         */
        "isFullWidth": false;
        /**
          * The content of the button
          * @default ""
         */
        "label": "";
        /**
          * The variant of the button
          * @default "default"
         */
        "variant": "primary" | "default";
    }
}
declare global {
    interface HTMLKzBoxElement extends Components.KzBox, HTMLStencilElement {
    }
    var HTMLKzBoxElement: {
        prototype: HTMLKzBoxElement;
        new (): HTMLKzBoxElement;
    };
    interface HTMLKzButtonElement extends Components.KzButton, HTMLStencilElement {
    }
    var HTMLKzButtonElement: {
        prototype: HTMLKzButtonElement;
        new (): HTMLKzButtonElement;
    };
    interface HTMLElementTagNameMap {
        "kz-box": HTMLKzBoxElement;
        "kz-button": HTMLKzButtonElement;
    }
}
declare namespace LocalJSX {
    interface KzBox {
        /**
          * padding
         */
        "p"?: GridFractions;
        /**
          * padding bottom
         */
        "pb"?: GridFractions;
        /**
          * padding left
         */
        "pl"?: GridFractions;
        /**
          * padding right
         */
        "pr"?: GridFractions;
        /**
          * padding top
         */
        "pt"?: GridFractions;
        /**
          * padding about the x-axis - padding left and right
         */
        "px"?: GridFractions;
        /**
          * padding about the y-axis - padding top and bottom
         */
        "py"?: GridFractions;
    }
    interface KzButton {
        /**
          * Sets width to be 100% of the parent container
          * @default false
         */
        "isFullWidth"?: false;
        /**
          * The content of the button
          * @default ""
         */
        "label"?: "";
        /**
          * The variant of the button
          * @default "default"
         */
        "variant"?: "primary" | "default";
    }
    interface IntrinsicElements {
        "kz-box": KzBox;
        "kz-button": KzButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kz-box": LocalJSX.KzBox & JSXBase.HTMLAttributes<HTMLKzBoxElement>;
            "kz-button": LocalJSX.KzButton & JSXBase.HTMLAttributes<HTMLKzButtonElement>;
        }
    }
}
