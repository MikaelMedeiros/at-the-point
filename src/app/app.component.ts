import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    data: TreeNode[] = [];
    data2: TreeNode[] = [];
    title = 'no-ponto';



    selectedNode: TreeNode[] = [];

    ngOnInit() {

    }

}
