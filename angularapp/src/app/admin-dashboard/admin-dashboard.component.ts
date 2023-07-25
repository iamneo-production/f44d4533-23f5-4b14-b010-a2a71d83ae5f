import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../services/admin-dashboard.service';
import { Chart } from 'chart.js/auto';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public chart: any;
  employeeCount: any = "";
  customerCount: any = "";
  repairCount: any = "";
  bookedRepairs!: any[];
  completedRepairs!: any[];

  constructor(private adminService: AdminDashboardService) {}

  ngOnInit() {
    // Use forkJoin to fetch all the required data from the service
    forkJoin([
      this.adminService.numberOfCustomers(),
      this.adminService.numberOfEmployees(),
      this.adminService.numberOfRepairs(),
      this.adminService.getBookedRepairs(),
      this.adminService.getCompletedRepairs()
    ]).subscribe(
      ([customersData, employeesData, repairsData, bookedRepairsData, completedRepairsData]) => {
        this.customerCount = customersData.response;
        this.employeeCount = employeesData.response;
        this.repairCount = repairsData.response;
        this.bookedRepairs = bookedRepairsData;
        this.completedRepairs = completedRepairsData;

        // Create the chart after all the data is available
        this.createChart();
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: ['Employee', 'Customer', 'Total Repair Requests', 'Booked Repairs', 'Completed Repairs'],
        datasets: [{
          data: [this.employeeCount, this.customerCount, this.repairCount, this.bookedRepairs.length, this.completedRepairs.length],
          backgroundColor: [
            'red',
            'pink',
            'green',
            'yellow',
            'blue',
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  downloadPdf() {
    window.print();
  }
}