import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() buttonText: string = 'Button';
  @Input() buttonType:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark' = 'primary';
  @Input() buttonSize: 'sm' | 'md' | 'lg' = 'md';
  @Input() buttonDisabled: boolean = false;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  onClick() {
    this.buttonClick.emit();
  }
}
