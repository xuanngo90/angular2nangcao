import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiUrl = "http://5938f61354f615001105aec5.mockapi.io/api/employees";
    // private apiUrl = "http://127.0.0.1:27017/db_app";

    constructor(private _http: Http) {

    }
    // Get From API server
    GetList(): Observable<any[]> {
        // let employees: any[] = [
        //     {Id: 1, Name: 'Nguyen Van Tuan'},
        //     {Id: 2, Name: 'Ho Lam Chung'},
        //     {Id: 3, Name: 'Chan Tu Don'},
        //     {Id: 4, Name: 'Nomal Kakashi'},
        //     {Id: 5, Name: 'Opaz Anpako'},
        // ];
        // return employees;
        return this._http.get(this.apiUrl).map((response: Response) => response.json());

        /*  
            <_http.get> Get: Lấy
            <_http.post> Post: Thêm
            <_http.put> Put: Sửa
            <_http.delete> Delete: xóa
        */
    };
    
}
        