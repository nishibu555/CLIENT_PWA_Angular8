import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiLink='http://localhost/ci_mini/APi/Api/';

  constructor(private http: HttpClient) { }

  sendMail(name, email, message){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };

    return this.http
    .post(`${this.apiLink}`,
      {action: 'send-mail', name: name, email: email, message: message},
      httpOptions
    );
  }

  getAllPortfolioImage(){
    return this.http.get(`${this.apiLink}?action=all-portfolio-image`);
  }


  getHomeCoverImage(){
    return this.http.get(`${this.apiLink}?action=all-home-cover-image`);
  }



  getAbouUs(){
    return this.http.get<any>(`${this.apiLink}?action=about-us`);
  }

  getHeading(){
    return this.http.get<any>(`${this.apiLink}?action=heading`);
  }

  getAllTestimonial(){
    return this.http.get<any>(`${this.apiLink}?action=all-testimonial`);
  }

  getAllPortfolioCategory(){
    return this.http.get<any>(`${this.apiLink}?action=all-portfolio-category`);
  }

  getAllClient(){
    return this.http.get<any>(`${this.apiLink}?action=all-client`);
  }

  
  getPortfolioById(id:any){
    return this.http.get<any>(`${this.apiLink}?action=portfolio-by-Id&&portfolioId=${id}`);
  }

  gePortfolioImageById(id){
    return this.http.get<any>(`${this.apiLink}?action=portfolio-image-byId&&portfolioId=${id}`);
  }

  getContactUs(){
    return this.http.get<any>(`${this.apiLink}?action=contact-us`);
  }
}
