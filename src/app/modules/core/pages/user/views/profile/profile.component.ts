import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { lastValueFrom } from 'rxjs';
import { EncryptionService } from '../../../../../shared/services/encryption/encryption.service';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../../../../auth/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
