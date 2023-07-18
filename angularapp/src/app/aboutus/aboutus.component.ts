import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  faqItems: { id: number, question: string, answer: string, isOpen: boolean }[] = [
    {
      id: 1,
      question: 'How often should I service my AC unit?',
      answer: 'It is generally recommended to service your AC unit at least once a year. Regular maintenance helps ensure optimal performance, improves energy efficiency, and extends the lifespan of the unit. However, if you live in a dusty environment or use your AC heavily, more frequent servicing may be necessary.',
      isOpen: false
    },
    {
      id: 2,
      question: 'What is the recommended temperature setting for AC?',
      answer: 'The recommended temperature setting for AC varies based on personal comfort and the climate. However, a general guideline is to set the thermostat between 22-24 degrees Celsius (72-75 degrees Fahrenheit) for a comfortable indoor environment. Adjust the temperature according to your preference while considering energy efficiency.',
      isOpen: false
    },
    {
      id: 3,
      question: 'What maintenance tasks can I perform on my own?',
      answer: 'Clean or replace the air filters: Regularly cleaning or replacing the air filters is crucial for proper airflow and efficient cooling. Check the manufacturers instructions for the recommended frequency and procedure.',
      isOpen: false
    }
  ];

  toggleCollapse(faqItem: any) {
    faqItem.isOpen = !faqItem.isOpen;
  }
}
