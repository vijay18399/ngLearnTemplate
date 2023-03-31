import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {
  isOpened = false;
  searchItem :string ='';
  isSearchActive=false;
  constructor(private fb: FormBuilder,) {}
  searchForm = this.fb.group({
    term: ['', [Validators.required, Validators.minLength(6)]]
  });
}
