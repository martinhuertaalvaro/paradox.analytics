import { Component, ViewChild, inject } from '@angular/core';
import { PrimeNgModule } from '../../../../../ng-prime/prime-ng.module';
import { EverybodyService } from '../../services/everybody.service';
import { User } from '../../../user/interfaces/user';
import { lastValueFrom } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-everybody',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './everybody.component.html',
  styleUrl: './everybody.component.scss',
})
export class EverybodyComponent {
  public everybodySvc = inject(EverybodyService);
  public users: User[] = [];
  public selectedUsers!: User;
  public searchValue: string | undefined;
  public first = 0;
  public rows = 10;
  @ViewChild('dt1') dt1: any;

  async ngOnInit(): Promise<any> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.users = await lastValueFrom(this.everybodySvc.getAllMembers());

    console.log(this.users);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.users ? this.first === this.users.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
  }

  public filterGLobal(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(inputValue, 'contains');
  }
}
