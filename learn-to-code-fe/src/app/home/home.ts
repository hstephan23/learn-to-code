import { Component, ElementRef } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { LanguagesBar } from '../languages-bar/languages-bar';
import { MenuBar } from '../menu-bar/menu-bar';
import { Router } from '@angular/router';
import { CodingTerminal } from '../coding-terminal/coding-terminal';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, Button, Card, LanguagesBar, MenuBar, CodingTerminal],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(
    private el: ElementRef,
    private router: Router,
  ) {}

  navigateToPage = (page: string) => {
    this.router.navigate([`/${page}`]).then();
  };

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0 },
    );

    const fadeElements = this.el.nativeElement.querySelectorAll('.fade-in');
    fadeElements.forEach((el: Element) => observer.observe(el));
  }
}
