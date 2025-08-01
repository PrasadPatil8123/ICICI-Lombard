import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-claim-vdo',
  templateUrl: './claim-vdo.component.html',
  styleUrls: ['./claim-vdo.component.css']
})
export class ClaimVdoComponent {
selectedVideoUrl: SafeResourceUrl | null = null;

goback(){
 this.router.navigateByUrl("sme/group-health")
}
  videoList = [
    {
      title: 'Mobile Self Inspection.',
      url: 'https://v.ftcdn.net/12/02/38/23/700_F_1202382317_IdQFE5vmxZY4vrteaPkfxqv5vH9qXYaw_ST.mp4',
      thumbnail: '../../../../../assets/sme-card/KeyFactorsGHIInsu.jpg'
    },
    {
      title: 'Know-Your-Customer process.',
      url: 'https://v.ftcdn.net/15/76/92/25/700_F_1576922575_xfgaWNNFjiTevAXhAELBllz6BpZUlKd2_ST.mp4',
      thumbnail: '../../../../../assets/sme-card/blog_how_does_marine_in_work.png'
    },
    
  ];

  constructor(private sanitizer: DomSanitizer,private atv : ActivatedRoute,private router :Router) {}

  playVideo(url: string) {
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.playVideo(this.videoList[0].url); // Load first video by default
  


  
}}
