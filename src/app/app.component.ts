import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { TreeNode } from 'primeng/api';
import { TokenFake } from './global/token-fake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TokenFake]
})
export class AppComponent implements OnInit {
    data: TreeNode[] = [];
    data2: TreeNode[] = [];
    title = 'no-ponto';
    token: TokenFake = new TokenFake();

    VAPID_PUBLIC_KEY = 'BFbmcvBEc_1cRUa43icXQ6fOXwLZrvUoBumwGqD_MZQXqZgtvKsmIfg3sVn2feRGU7lK0Nbb2YljPDxHnfKvdYo';

  constructor(private pushSw:SwPush,private update:SwUpdate){
      update.available.subscribe(update =>{
          console.log("Nova versão disponível");
      });

      this.SubscribeToPush();
      pushSw.messages.subscribe(msg =>{
        console.log(JSON.stringify(msg));
    })
  }

  SubscribeToPush(){
    this.pushSw.requestSubscription({
      serverPublicKey:this.VAPID_PUBLIC_KEY
    })
    .then(pushSubscription => {
      console.log(JSON.stringify(pushSubscription));
      this.token.id =  JSON.stringify(pushSubscription);
    })

    .catch(err =>{
      console.error("Ocorreu um erro:"+ err);
    })
  }


    selectedNode: TreeNode[] = [];

    ngOnInit() {

    }

}
