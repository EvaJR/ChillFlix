import { Component, OnInit, Output } from '@angular/core';
import { NgbModule, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../services/authentication.service';
import { AlertService,  } from '../../services/alert.service';
import { AppModalComponent } from '../modal/modal.component';
import { EventEmitter } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})


export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.returnUrl = 'admin';

      }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  console.log(' succes');
                    this.router.navigate([this.returnUrl]);
                    this.loading = false;

                },
                error => {
                  console.log(' error');
                    this.alertService.error(error);
                    this.loading = false;
                });
                console.log(this.f.username.value, this.f.password.value);
    }
}



// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   closeResult: string;

//   constructor(private authService: AuthenticationService, private modalService: NgbModal) {
//   }

//   ngOnInit() {
//   }

//   public getLoggedIn(): boolean {
//     return this.authService.isLoggedIn();
//   }

//   public login() {
//     this.authService.loginUser('admin');
//   }

//   public logout() {
//     this.authService.logoutUser();
//   }

//   open(content) {
//     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return  `with: ${reason}`;
//     }
//   }

// }
