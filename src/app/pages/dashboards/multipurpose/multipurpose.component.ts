import { Component, AfterViewInit } from '@angular/core';
import { DataTableComponent } from '../../../components/data-table/data-table.component';

@Component({
  selector: 'app-multipurpose',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './multipurpose.component.html',
  styleUrl: './multipurpose.component.scss'
})
export class MultipurposeComponent {
  ngAfterViewInit(): void {
    this.loadScript('assets/assets/demo/chart-area-demo.js');
    this.loadScript('assets/assets/demo/chart-pie-demo.js');
  }

  loadScript(scriptUrl: string) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.body.appendChild(script);
  }
}
