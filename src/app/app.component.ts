import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('coin') 
  gifElement!: ElementRef;
  coinHeight: string = "100";
  title: string = 'test-desktop-electron-app';
  text: string = "_____";
  playing: boolean = false;
  timeAnimation: number = 1370
  timeCoin: number = 3000;

  ngOnInit(): void {
  }

  changeTitle(text: string): void {
    window.electronAPI.setTitle(text);
    window.electronAPI.setXPosition(300);
  }
  
  runGif(){
    this.gifElement.nativeElement.src = './assets/coin.gif';
    this.gifElement.nativeElement.style.display = 'block';
    
    setTimeout(()=>{
      this.gifElement.nativeElement.src = "";
      this.gifElement.nativeElement.style.display = "none";
    }, (this.timeAnimation));
  }

  start(){
    setInterval(()=>{
      this.runGif();
    }, (this.timeCoin))
  }



  showMotivation(){
    // this.mainWindow.setPosition(300, 300);
    this.text = "***********";
  }

  addDistraction(){
    console.log("dac");
  }
  
}
