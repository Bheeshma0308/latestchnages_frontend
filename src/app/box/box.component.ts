import { Component } from '@angular/core';

interface Box {
  name: string;
  image: string;
  level: string;
  badges: string;
  nextLevel: string;
  color: string;
}

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  boxes: Box[] = [
    { name: 'Interviews', image: 'assets/ranking3.svg', level: 'Novice', badges: '2', nextLevel: 'Master', color: '#BEACE6' },
    { name: 'Tech Talks', image: 'assets/ranking1.svg', level: 'Master', badges: '1', nextLevel: 'Expert', color: '#87C1CB' },
    { name: 'RFPs', image: 'assets/ranking2.svg', level: 'Expert', badges: '3', nextLevel: 'Pro', color: '#9093EB' },
    { name: 'White Papers', image: 'assets/ranking2.svg', level: 'Expert', badges: '5', nextLevel: 'Pro', color: '#FEA340' },
    { name: 'Interviews', image: 'assets/ranking3.svg', level: 'Novice', badges: '2', nextLevel: 'Master', color: '#BEACE6' },
    { name: 'Tech Talks', image: 'assets/ranking1.svg', level: 'Master', badges: '1', nextLevel: 'Expert', color: '#87C1CB' },
    { name: 'White Papers', image: 'assets/ranking2.svg', level: 'Expert', badges: '5', nextLevel: 'Pro', color: '#FEA340' },
    { name: 'Interviews', image: 'assets/ranking3.svg', level: 'Novice', badges: '2', nextLevel: 'Master', color: '#BEACE6' },
    { name: 'Tech Talks', image: 'assets/ranking1.svg', level: 'Master', badges: '1', nextLevel: 'Expert', color: '#87C1CB' },
    { name: 'Interviews', image: 'assets/ranking3.svg', level: 'Novice', badges: '2', nextLevel: 'Master', color: '#BEACE6' },
    { name: 'Tech Talks', image: 'assets/ranking1.svg', level: 'Master', badges: '1', nextLevel: 'Expert', color: '#87C1CB' },
    { name: 'RFPs', image: 'assets/ranking2.svg', level: 'Expert', badges: '3', nextLevel: 'Pro', color: '#9093EB' },
    { name: 'Case Studies', image: 'assets/ranking3.svg', level: 'Novice', badges: '7', nextLevel: 'Master', color: '#73A1EF' }
  ];
  visibleBoxes: Box[] = [];

  currentIndex = 0;
  boxesPerPage = 6;

  ngOnInit() {
    this.updateVisibleBoxes();
  }

  slide() {
    this.currentIndex = (this.currentIndex + 1) % (this.boxes.length - this.boxesPerPage + 1);
    this.updateVisibleBoxes();
  }

  updateVisibleBoxes() {
    this.visibleBoxes = this.boxes.slice(this.currentIndex, this.currentIndex + this.boxesPerPage);
  }
}