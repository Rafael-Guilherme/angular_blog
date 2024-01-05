import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { DateService } from '../../service/date.service';
import { FooterComponent } from '../footer/footer.component';
import { Post } from '../../interface/post.interface';
import { User } from '../../interface/users.interface';
import postsData from '../../data/posts/posts.json';
import usersData from '../../data/users/users.json';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [NgFor, NgIf, FooterComponent],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css',
})
export class PostPageComponent {
  postId: string | null = null;
  posts: Post[] = [];
  users: User[] = []

  constructor(private route: ActivatedRoute, private dateService: DateService) {}

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    if (this.postId) {
      this.fetchPost();
    } else {
      this.fetchAllPosts();
    }
  }

  getUserName(userId: number): User | undefined {
    const user = this.users.find(user => user.id === userId);
    return user ? user : undefined;
  }

  fetchPost() {
    if (this.postId !== null && this.postId !== '') {
      this.posts = postsData.posts.filter(post => post.id == parseFloat(this.postId!));
      this.users = usersData.users;
    }
  }

  fetchAllPosts() {
    this.posts = postsData.posts;
  }

  getDateService(): DateService {
    return this.dateService;
  }
}
