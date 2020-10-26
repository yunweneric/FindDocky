import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Finddocky';
  constructor(private db: AngularFireDatabase) {
    const things = db.list('things').valueChanges();
    things.subscribe(console.log);
  }
}
