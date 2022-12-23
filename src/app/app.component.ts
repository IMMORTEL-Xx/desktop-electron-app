import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'test-desktop-electron-app';
  text: string = "_____";
  window: any;

  setButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn');
  titleInput: HTMLInputElement= <HTMLInputElement>document.getElementById('title');
  
  
  ngOnInit(): void {
    this.setButton.addEventListener('click', () => {
      const title = this.titleInput.value
      window.electronAPI.setTitle(title)
    });
  }

  

  showMotivation(){
    // this.mainWindow.setPosition(300, 300);
    this.text = "***********";
  }

  addDistraction(){

  }
  
}
