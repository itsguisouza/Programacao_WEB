import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-detail-component',
  imports: [NgSwitch, NgSwitchCase, RouterLink],
  templateUrl: './post-detail-component.component.html',
  styleUrl: './post-detail-component.component.css'
})
export class PostDetailComponentComponent implements OnInit {
  postId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');  
    });
  }
}


