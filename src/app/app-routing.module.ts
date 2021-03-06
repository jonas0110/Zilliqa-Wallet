// Copyright (c) 2018 Zilliqa 
// This source code is being disclosed to you solely for the purpose of your participation in 
// testing Zilliqa. You may view, compile and run the code for that purpose and pursuant to 
// the protocols and algorithms that are programmed into, and intended by, the code. You may 
// not do anything else with the code without express permission from Zilliqa Research Pte. Ltd., 
// including modifying or publishing the code (or any part of it), and developing or forming 
// another public or private blockchain network. This source code is provided ‘as is’ and no 
// warranties are given as to title or non-infringement, merchantability or fitness for purpose 
// and, to the extent permitted by law, all liability for your use of the code is disclaimed. 


import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { CreateComponent } from './create/create.component';
import { WalletComponent }      from './wallet/wallet.component';
import { WalletbaseComponent }      from './wallet/walletbase/walletbase.component';
import { WalletsendComponent }      from './wallet/walletsend/walletsend.component';
import { WallethistoryComponent }      from './wallet/wallethistory/wallethistory.component';
import { ContractComponent }      from './wallet/contract/contract.component';
import { ErrorComponent }      from './error/error.component';
import { MaintenanceComponent }      from './error/maintenance.component';
import { AuthGuardService }      from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'wallet', component: WalletComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: 'base', component: WalletbaseComponent },
      { path: 'send', component: WalletsendComponent },
      { path: 'contract', component: ContractComponent },
      // { path: 'history', component: WallethistoryComponent }
    ]
  },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
