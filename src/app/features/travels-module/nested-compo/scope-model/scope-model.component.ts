import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scope-model',
  templateUrl: './scope-model.component.html',
  styleUrls: ['./scope-model.component.css']
})
export class ScopeModelComponent {
@Output() close = new EventEmitter<void>();


  geoData = [
    {
      img: 'assets/travel-insurance/img/4 (2).png',
      title: 'USA & Canada',
      description: 'Includes USA, Canada & Schengen countries'
    },
    {
      img: 'assets/travel-insurance/img/4.png',
      title: 'Schengen countries',
      description: 'Austria, Belgium, Croatia, Malta and more countries'
    },
    {
      img: 'assets/travel-insurance/img/5.png',
      title: 'Asian countries',
      description: 'Bahrain, South Korea, Israel, China and more countries'
    },
    {
      img: 'assets/travel-insurance/img/6.png',
      title: 'Rest of the World',
      description: 'Excluding USA, Canada, Schengen and Asian countries'
    }
  ];

  countrySections = [
    {
      title: 'List of Asian Countries',
      countries: [  'Afghanistan', 'Armenia', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei',
  'Cambodia', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Kuwait',
  'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia',
  'Nepal', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar',
  'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka',
  'Taiwan', 'Tajikistan', 'Thailand', 'Turkmenistan',
  'UAE', 'Uzbekistan', 'Vietnam', 'Yemen'
],
      expanded: false
    },
    {
      title: 'List of Schengen Countries',
      countries: ['Afghanistan', 'Armenia', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei',
  'Cambodia', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Kuwait',
  'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia',
  'Nepal', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar',
  'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka',
  'Taiwan', 'Tajikistan', 'Thailand', 'Turkmenistan',
  'UAE', 'Uzbekistan', 'Vietnam', 'Yemen'],
      expanded: false
    },
    {
      title: 'List of Rest of the World Countries',
      countries: ['Brazil', 'South Africa', 'Australia', 'New Zealand','Afghanistan', 'Armenia', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei',
  'Cambodia', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Kuwait',
  'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia',
  'Nepal', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar',
  'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka',
  'Taiwan', 'Tajikistan', 'Thailand', 'Turkmenistan',
  'UAE', 'Uzbekistan', 'Vietnam', 'Yemen'],
      expanded: false
    },
    {
      title: 'List of US / Canada Countries',
      countries: ['USA', 'Canada','Afghanistan', 'Armenia', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei',
  'Cambodia', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Kuwait',
  'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia',
  'Nepal', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar',
  'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka',
  'Taiwan', 'Tajikistan', 'Thailand', 'Turkmenistan',
  'UAE', 'Uzbekistan', 'Vietnam', 'Yemen'],
      expanded: false
    }
  ];

  toggleSection(index: number): void {
    this.countrySections[index].expanded = !this.countrySections[index].expanded;
  }
}
