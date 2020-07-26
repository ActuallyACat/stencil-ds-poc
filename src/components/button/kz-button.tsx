import { Component, Prop, h } from '@stencil/core';
import classname from 'classnames'

@Component({
  tag: 'kz-button',
  styleUrl: 'kz-button.scss',
  shadow: true
})
export class KzButton {
  /**
   * The variant of the button
   * @default "default"
   */
  @Prop() variant: "primary" | "default" = "default"

  /**
   * Sets width to be 100% of the parent container
   * @default false
   */
  @Prop() isFullWidth: boolean = false

  /**
   * The content of the button
   * @default ""
   */
  @Prop() label: string = ""

  render() {
    return (
      <button class={classname(
        "wrapper",
        {
          'fullwidth': this.isFullWidth,
          'default': this.variant === "default",
          'primary': this.variant === "primary"
        }
      )}>
        <span>{this.label}</span>
      </button>
    )
  }
}
