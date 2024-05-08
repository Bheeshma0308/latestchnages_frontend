import { Injectable, NgZone } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { KpiDialogComponent } from '../kpi-dialog/kpi-dialog.component';
const helper = new JwtHelperService();

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private ngZone: NgZone, private dialog: MatDialog) {

    }
    private isLoggedOff: boolean = false;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginURLFragment = 'Token/Login';
        const token = localStorage.getItem('token')
        if (request.url.search(loginURLFragment) === -1) {
            if (!helper.isTokenExpired(token)) {
                const headers = new HttpHeaders({
                    'Authorization': token
                });
                const clonedRequest = request.clone({
                    headers: headers
                });

                return next.handle(clonedRequest);
            }
            else {
                if (!this.isLoggedOff) {
                    this.isLoggedOff = true;
                    this.ngZone.run(() => this.router.navigate(['../login'])).then(s => {
                        this.isLoggedOff = false;
                        localStorage.clear();

                        const dialogRef = this.dialog.open(KpiDialogComponent, {
                            width: '350px',
                            data: { message: 'Session Expired. Please Login again', class: 'text-danger' }
                        });
                    });
                }
                return new Observable();
            }
        }
        else {
            return next.handle(request);
        }

    }



}