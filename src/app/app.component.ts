import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'test-desktop-electron-app';
  text: string = "_____";


  ngOnInit(): void {
  }

  changeTitle(text: string): void {
    this.title = text;
    window.electronAPI.setTitle(text);
  }

  showMotivation(){
    // this.mainWindow.setPosition(300, 300);
    this.text = "***********";
  }

  addDistraction(){

  }
  
}
