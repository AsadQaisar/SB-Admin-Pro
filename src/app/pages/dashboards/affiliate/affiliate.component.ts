import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-affiliate',
  standalone: true,
  imports: [],
  templateUrl: './affiliate.component.html',
  styleUrl: './affiliate.component.scss'
})
export class AffiliateComponent {
  ngAfterViewInit(): void {
    this.loadScript('assets/assets/demo/chart-area-demo.js');
    this.loadScript('assets/assets/demo/chart-bar-demo.js');
    this.loadScript('assets/assets/demo/chart-pie-demo.js');
  }

  loadScript(scriptUrl: string) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.body.appendChild(script);
  }
}
