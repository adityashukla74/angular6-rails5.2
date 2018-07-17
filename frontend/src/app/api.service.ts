import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

	API_URL: string = "http://localhost:3000/";
	constructor(public http: HttpClient) { }

	/**
	 * read method
	 * @param {any} path 
	 * @returns 
	 * @memberOf ApiService
	 */
	public get(path) {
		var endpoint = this.API_URL + path;
		return this.http.get(endpoint);
	}


	/**
	 * post method
	 * @param {string} path 
	 * @param {*} body 
	 * @returns 
	 * @memberOf ApiService
	 */
	public post(path: string, body: any) {
		var endpoint = this.API_URL + path;
		return this.http.post(endpoint, body);
	}


	/**
	 * delete method
	 * @param {string} path 
	 * @returns 
	 * @memberOf ApiService
	 */
	public delete(path: string) {
		var endpoint = this.API_URL + path;
		return this.http.delete(endpoint);
	}

	/**
	 * update method
	 * @param {string} path 
	 * @param {*} body 
	 * @returns 
	 * @memberOf ApiService
	 */
	public update(path: string, body: any) {
		var endpoint = this.API_URL + path;
		return this.http.put(endpoint, body);
	}
}