import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HomeService } from 'src/app/core/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//Resposive home page part
public productLists: any = [
    { Name: 'Car', bgImgUrl: '../../../assets/home-images/car-icon-img-ourproduct.svg', isActive: true, labelBgColor: '', tabBorderBottom: '' },
    { Name: 'Bike', bgImgUrl: '../../../assets/home-images/bike-icon-img-product.svg', isActive: false, labelBgColor: '', tabBorderBottom: '' },
    { Name: 'Health', bgImgUrl: '../../../assets/home-images/health-icon-img-product.svg', isActive: false, labelBgColor: '', tabBorderBottom: '' },
    { Name: 'Travel', bgImgUrl: '../../../assets/home-images/travel-icon-img-product.svg', isActive: false, labelBgColor: '', tabBorderBottom: '' },
    { Name: 'SME', bgImgUrl: '../../../assets/home-images/sme-insurance-icon-navigation.svg', isActive: false, labelBgColor: '', tabBorderBottom: '' },
    { Name: 'Corporate', bgImgUrl: '../../../assets/home-images/corporate-insurance-icon.svg', isActive: false, labelBgColor: '', tabBorderBottom: '' },
    { Name: 'Renewals', bgImgUrl: '../../../assets/home-images/homapage-sectionone-renewal.svg', isActive: false, labelBgColor: '', tabBorderBottom: '' }
  ];

  productClick(item: any) {
    // Deactivate all products first and reset styles
    this.productLists.forEach((product: { isActive: boolean; labelBgColor: string; tabBorderBottom: string; }) => {
      product.isActive = false;
      product.labelBgColor = '';  
      product.tabBorderBottom = '';
    });

    // Activate the clicked product and set styles dynamically
    item.isActive = true;
    item.labelBgColor = '#FFE8CF';  // Change background color of label div
    item.tabBorderBottom = '2px solid #EC6625';  // Set border color for the tab-section-img div

    // You can add logic here to change content dynamically based on the active item
    console.log('Selected Product:', item.Name);
  }

  isProductActive(productName: string): boolean {
    return this.productLists.some((item: { isActive: any; Name: string; }) => item.isActive && item.Name === productName);
  }



 

  //For Modal
  // To toggle modal visibility
  showModal: boolean = false;

  
  
  // Function to submit form data
  userForm:any;
  public allUserInfo:any = [];
constructor(private fb: FormBuilder,private data:HomeService){
this.userForm = this.fb.group({
      mobile:[''],
      email:[''],
      pincode:[''],
      name:[''],
    })
this.data.StoreFormData(data);
}
onSubmitUserForm(Form:any){
    this.data.StoreFormData(this.userForm.value).subscribe((res:any)=>{
      // console.log(res);
    })
    Form.reset();
  }

  get f(){
    console.log(this.userForm);
    return this.userForm.controls;
  }


  
  public options:any = [
    { name: 'Elevate', description: 'A basic health policy for individuals.' },
    { name: 'MaxProtect', description: 'Maximum coverage and protection.' },
    { name: 'ActivateBooster', description: 'Boost your policy with extra coverage.' },
    { name: 'HealthAdvantEdge', description: 'Comprehensive health benefits.' }
  ];

  //For Dots
  dots = new Array(30); 
//Carasole Images
  images = [
    { src: '../../../assets/home-images/banner-website-1.png', alt: 'Banner 1' },
    { src: '../../../assets/home-images/banner-website-telangana-flood-1.png', alt: 'Telangana Flood' },
    { src: '../../../assets/home-images/base-product-list---homepage.jpg', alt: 'Product List Homepage' },
    { src: '../../../assets/home-images/cashless-everywhere-desktop-banner.jpg', alt: 'Cashless Everywhere Banner' },
    {src: '../../../assets/home-images/dont-fall-web-banner.jpg'},
    {src: '../../../assets/home-images/elevate_313-x-280-banner.png'},
    {src: '../../../assets/home-images/irdai-survey-desktop-banner.png'},
    {src: '../../../assets/home-images/productlist-home-page.jpg'},
  ];
}


