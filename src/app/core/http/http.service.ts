import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoaderService } from '../services/loader/loader.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  /**
   * @param url URL for api calls
   * @param local To fetch local assets folder
   * @param showLoader Show spinner
   * @param headers optional headers
   */
  getApi(
    url: string,
    local: boolean = false,
    showLoader: boolean = true,
    headers?: HttpHeaders
  ) {
    if (showLoader) {
      this.loaderService.show(true);
    }
    if (local) {
      url = 'assets/json/' + url + '.json';
    }
    return this.http.get(environment.APIURL + url, {
      headers,
    });
  }
  /**
   * @param url URL for api calls
   * @param data data for request
   * @param local To fetch local assets folder
   * @param showLoader Show spinner
   * @param headers optional headers
   */
  postApi(
    url: string,
    data: any,
    local: boolean = false,
    showLoader: boolean = true,
    headers?: HttpHeaders
  ) {
    if (showLoader) {
      this.loaderService.show(true);
    }
    if (local) {
      url = 'assets/json/' + url + '.json';
    }
    return this.http.post(environment.APIURL + url, data, {
      headers,
    });
  }
  /**
   * @param url URL for api calls
   * @param data data for request
   * @param local To fetch local assets folder
   * @param showLoader Show spinner
   * @param headers optional headers
   */
   putApi(
    url: string,
    data: any,
    local: boolean = false,
    showLoader: boolean = true,
    headers?: HttpHeaders
  ) {
    if (showLoader) {
      this.loaderService.show(true);
    }
    if (local) {
      url = 'assets/json/' + url + '.json';
    }
    return this.http.post(environment.APIURL + url, data, {
      headers,
    });
  }
  /**
   * @param url URL for api calls
   * @param local To fetch local assets folder
   * @param showLoader Show spinner
   * @param headers optional headers
   */
  deleteApi(
    url: string,
    local: boolean = false,
    showLoader: boolean = true,
    headers?: HttpHeaders
  ) {
    if (showLoader) {
      this.loaderService.show(true);
    }
    if (local) {
      url = 'assets/json/' + url + '.json';
    }
    return this.http.delete(environment.APIURL + url, {
      headers,
    });
  }
}
