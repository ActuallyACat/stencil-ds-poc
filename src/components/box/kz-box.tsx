import { Component, Prop, h } from '@stencil/core';
import { paddingClasses } from './padding'

export type GridFractions =
  | 0
  | 0.25
  | 0.5
  | 0.75
  | 1
  | 1.25
  | 1.5
  | 1.75
  | 2
  | 2.5
  | 3
  | 3.5
  | 4

@Component({
  tag: 'kz-box',
  styleUrl: 'kz-box.scss',
  shadow: true
})
export class Kzbox {
  /**
   * padding
   */
  @Prop() p: GridFractions
  /**
   * padding top
   */
  @Prop() pt: GridFractions
  /**
   * padding right
   */
  @Prop() pr: GridFractions
  /**
   * padding bottom
   */
  @Prop() pb: GridFractions
  /**
   * padding left
   */
  @Prop() pl: GridFractions
  /**
   * padding about the x-axis - padding left and right
   */
  @Prop() px: GridFractions
  /**
   * padding about the y-axis - padding top and bottom
   */
  @Prop() py: GridFractions

  render() {
    const classes = paddingClasses({
      p: this.p,
      pt: this.pt,
      pr: this.pr,
      pb: this.pb,
      pl: this.pl,
      px: this.px,
      py: this.py 
    }).join(' ')
    
    return (
      <div class={classes}>
        <h1>fssddfs</h1>
        <slot></slot>
      </div>
    )
  }
}
