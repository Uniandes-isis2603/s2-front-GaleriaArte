import { PaintworkDetail } from './paintwork-detail';
import { Paintwork } from './paintwork';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

//const API_URL = "../../assets/";
//const paintworks = 'paintwork.json';
const API_URL = environment.apiURL;
const paintworks = '/paintworks';

/**
* The service provider for everything related to the paintwork
*/
@Injectable({
    providedIn: 'root'
  })
  export class PaintworkService {
  
    /**
      * The headers sent in every request to the API
      */
     headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  
  });
  
    /**
      * Constructor of the service
      * @param http The HttpClient - This is necessary in order to perform requests
      */
     constructor(private http: HttpClient) { }
      
     /**
      * Retrieves the list of Paintworks in the PaintworkStore
      * @returns The list of Paintworks
      */
     getPaintworks(): Observable<Paintwork[]> {
      return this.http.get<Paintwork[]>(API_URL + paintworks);
    }
    
    /**
     * 
     * @param paintworkId 
     */
    getPaintwork(paintworkId):Observable<Paintwork>{
      return this.http.get<Paintwork>(API_URL + paintworks + '/' + paintworkId, { headers: this.headers });
    }
  
     /**
     * Creates an author
     * @param author The new author
     * @returns The new author with the new id
     */
     createPaintwork(Paintwork): Observable<Paintwork> {
         return this.http.post<Paintwork>(API_URL + paintworks, Paintwork);
     }
  
     
     /**
      * Updates a new Paintwork
      * @param Paintwork The updated Paintwork
      * @returns The updated Paintwork
      */
     updatePaintwork(paintwork): Observable<boolean> {
      return this.http.put<boolean>(API_URL + paintworks + '/' + paintwork.idPaintwork, paintwork, { headers: this.headers });
    }
    /**
      * Deletes a Paintwork
      * @param PaintworkId The Paintwork's id
      * @returns True if the Paintwork was deleted, false otherwise
      */
     deletePaintwork(paintworkId): Observable<boolean> {
      return this.http.delete<boolean>(API_URL + paintworks + '/' + paintworkId);
    }
  
    getPaintworkDetail(paintworkId): Observable<PaintworkDetail> 
     {
          return this.http.get<PaintworkDetail>(API_URL + paintworks + '/' + paintworkId);
     }
  
     
  
    /**
      * The function which handles the errors generated by the requests
      * @param error The error which the API REST returned
      */
     private handleError(error: any) {
      return throwError(error.error.errorMessage);
  }
  }
