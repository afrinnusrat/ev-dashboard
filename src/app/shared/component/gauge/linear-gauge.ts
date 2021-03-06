import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import * as CanvasGauges from 'canvas-gauges';

import { BaseGaugeDirective } from './base-gauge.directive';

/**
 * Implements Linear Gauge from the original library
 */
@Component({
  selector: 'app-linear-gauge',
  template: '<canvas #gauge></canvas>',
})
export class LinearGaugeComponent extends BaseGaugeDirective<CanvasGauges.LinearGauge, CanvasGauges.LinearGaugeOptions> implements OnInit {
  constructor(el: ElementRef, zone: NgZone) {
    super(el, zone);
  }

  public ngOnInit() {
    this.gauge = new CanvasGauges.LinearGauge(this.getOptions()).draw();
  }
}
