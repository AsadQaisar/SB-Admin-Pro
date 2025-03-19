import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, NgbPagination, FormsModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  countries = [
    { id: 1, name: 'Russia', area: '17,075,200', population: '146,989,754', flag: '🇷🇺' },
    { id: 2, name: 'France', area: '640,679', population: '64,979,548', flag: '🇫🇷' },
    { id: 3, name: 'Germany', area: '357,114', population: '82,114,224', flag: '🇩🇪' },
    { id: 4, name: 'Portugal', area: '92,090', population: '10,329,506', flag: '🇵🇹' },
    { id: 5, name: 'Italy', area: '301,340', population: '60,461,826', flag: '🇮🇹' },
    { id: 6, name: 'Spain', area: '505,990', population: '47,450,795', flag: '🇪🇸' },
    { id: 7, name: 'UK', area: '243,610', population: '67,215,293', flag: '🇬🇧' }
  ];

  itemsPerPageOptions = [4, 5, 10]; // Dropdown options
  itemsPerPage = 4; // Default items per page
  currentPage = 1; // Default page

  // Method to get paginated data
  get paginatedCountries() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.countries.slice(start, start + this.itemsPerPage);
  }
}
