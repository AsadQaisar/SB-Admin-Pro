import { Component, AfterViewInit } from '@angular/core';
import { DataTableComponent } from '../../../components/data-table/data-table.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent implements AfterViewInit{
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

  /*
  ngAfterViewInit(): void {
    this.loadAreaChart();
    this.loadBarChart();
  }

  loadAreaChart() {
    function number_format(number: any, decimals = 0, dec_point = ".", thousands_sep = ",") {
      number = (number + "").replace(",", "").replace(" ", "");
      let n = !isFinite(+number) ? 0 : +number;
      let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
      let s = (prec ? (Math.round(n * Math.pow(10, prec)) / Math.pow(10, prec)).toFixed(prec) : "" + Math.round(n))
        .split(".");
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, thousands_sep);
      return s.join(dec_point);
    }

    const canvas = document.getElementById("myAreaChart") as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Earnings",
            tension: 0.3,
            backgroundColor: "rgba(0, 97, 242, 0.05)",
            borderColor: "rgba(0, 97, 242, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(0, 97, 242, 1)",
            pointBorderColor: "rgba(0, 97, 242, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(0, 97, 242, 1)",
            pointHoverBorderColor: "rgba(0, 97, 242, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { maxTicksLimit: 7 },
          },
          y: {
            ticks: {
              maxTicksLimit: 5,
              padding: 10,
              callback: (value) => "$" + number_format(value),
            },
            grid: {
              color: "rgb(234, 236, 244)", // Grid line color
              drawOnChartArea: true, // Controls if grid lines should be drawn
              drawTicks: false, // Removes ticks on Y-axis
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgb(255,255,255)",
            bodyColor: "#858796",
            titleColor: "#6e707e",
            borderColor: "#dddfeb",
            borderWidth: 1,
            displayColors: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: (tooltipItem) => `Earnings: $${number_format(tooltipItem.raw)}`,
            },
          },
        },
      },
    });
  }

  loadBarChart() {
    function number_format(number: any, decimals = 0, dec_point = ".", thousands_sep = ",") {
      number = (number + "").replace(",", "").replace(" ", "");
      let n = !isFinite(+number) ? 0 : +number;
      let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
      let s = (prec ? (Math.round(n * Math.pow(10, prec)) / Math.pow(10, prec)).toFixed(prec) : "" + Math.round(n))
        .split(".");
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, thousands_sep);
      return s.join(dec_point);
    }
    const canvas = document.getElementById("myBarChart") as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Revenue",
            backgroundColor: "rgba(0, 97, 242, 1)",
            hoverBackgroundColor: "rgba(0, 97, 242, 0.9)",
            borderColor: "#4e73df",
            data: [4215, 5312, 6251, 7841, 9821, 14984],
            maxBarThickness: 25,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: { left: 10, right: 25, top: 25, bottom: 0 },
        },
        scales: {
          x: {
            grid: {
              color: "rgb(234, 236, 244)", // Grid line color
              drawOnChartArea: true, // Controls if grid lines should be drawn
              drawTicks: false, // Removes ticks on Y-axis
            },
            ticks: { maxTicksLimit: 6 },
          },
          y: {
            min: 0,
            max: 15000,
            ticks: {
              maxTicksLimit: 5,
              padding: 10,
              callback: (value) => "$" + number_format(value), // ✅ FIXED REFERENCE
            },
            grid: {
              color: "rgb(234, 236, 244)", // Grid line color
              drawOnChartArea: true, // Controls if grid lines should be drawn
              drawTicks: false, // Removes ticks on Y-axis
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            titleMarginBottom: 10,
            titleFont: { size: 14, weight: "bold" },
            backgroundColor: "rgb(255,255,255)",
            bodyColor: "#858796",
            borderColor: "#dddfeb",
            borderWidth: 1,
            displayColors: false,
            callbacks: {
              label: (tooltipItem) => `Revenue: $${number_format(tooltipItem.raw)}`, // ✅ FIXED REFERENCE
            },
          },
        },
      },
    });
  }
  */
}
