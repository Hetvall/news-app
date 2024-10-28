import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthorsService } from '../../../services';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authors.component.html',
  styles: ``,
})
export default class AuthorsComponent {
  public authorsService = inject(AuthorsService);
}
