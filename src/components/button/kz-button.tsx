import { Component, Prop, h } from '@stencil/core';
import classname from 'classnames'

@Component({
  tag: 'kz-button',
  styleUrl: 'kz-button.scss',
  shadow: true
})
export class KzButton {
  @Prop() variant: "primary" | "default";

  @Prop() isFullWidth: boolean;

  @Prop() label: string;

  render() {
    const variant = this.variant || "default"
    
    return (
        <button class={classname(
          "wrapper",
          {
            'fullwidth': this.isFullWidth,
            'default': variant === "default",
            'primary': variant === "primary"
          }
        )}>
          <span>{this.label}</span>
        </button>
    )
  }
}
