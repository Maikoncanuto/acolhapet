import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    passwordLogin: FormControl;
    emailLogin: FormControl;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.configureFormControl();
    }

    configureFormControl(): void {
        this.passwordLogin = new FormControl('', [
            Validators.maxLength(16),
            Validators.minLength(8)
        ]);

        this.emailLogin = new FormControl('', [
            Validators.maxLength(150),
            Validators.email
        ]);
    }

    loginGoogle(): void {
        this.router.navigate(['/tabs/tab1/']);
    }

    loginFacebook(): void {
        this.router.navigate(['/tabs/tab1/']);
    }

    loginTwitter(): void {
        this.router.navigate(['/tabs/tab1/']);
    }

    loginNormal(): void {
        this.router.navigate(['/tabs/tab1/']);
    }

}
