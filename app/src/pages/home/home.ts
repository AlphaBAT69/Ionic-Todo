import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list = [];
  data = '';
  date:any = '';
  priority = 'Medium';
  count = 0;
  tasks: string = 'Medium';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  add(){
    if(this.data != null && this.data != ''){
      this.date = new Date();
      this.date = this.date.toLocaleDateString() + ' - ' + this.date.toLocaleTimeString();
      this.list.push({task: this.data, status: 'pending', priority: this.priority, date: this.date});
      this.data = '';
      this.count++;
    }
  }

  remove(l, i){
    if(this.list[i].status=='pending') this.count--;
    this.list.splice(i, 1);
  }


  edit(l){
    const prompt = this.alertCtrl.create({
    title: 'Edit Task',
    inputs: [
        {
          name: 'task',
          placeholder: 'Task'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            l.task = data.task;
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  status(l){
    let temp;
    if(l.status == 'pending') {
      temp = 'completed';  this.count--; 
    }
    else { 
      temp = 'pending';  this.count++; 
    }
    l.status = temp;
  }

}
