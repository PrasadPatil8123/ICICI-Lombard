import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, CanMatchFn } from '@angular/router';
import { GuardsServiceService } from './guards-service.service';
import { Observable } from 'rxjs';

export const canmatch:CanMatchFn = (route, state) => {
   const GuardsService= inject(GuardsServiceService)
  return  GuardsService.curentRole("client-health-ins")
};




export const mydeactive:CanDeactivateFn<myinterface> = (component) => {
  
  return component.canDeactivate ? component.canDeactivate() : true

};

export interface myinterface{
canDeactivate :()=> boolean | Observable <boolean>
}


