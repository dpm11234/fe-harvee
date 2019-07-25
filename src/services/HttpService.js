import axios from "axios";
import { handlerSuccess, handlerError } from "../utils";
import { getToken } from "../lib/auth";
class HttpService {
	constructor() {
		this.client = axios.create({
			baseURL: process.env.SERVER_URL,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		});
		this.req = null;
	}
	get(url) {
		this.setHeaderAuthentication();
		return this.client
			.get(url)
			.then(handlerSuccess)
			.catch(handlerError);
	}
	post(url, data) {
		this.setHeaderAuthentication();
		return this.client
			.post(url, data)
			.then(handlerSuccess)
			.catch(handlerError);
	}
	put(url, data) {
		this.setHeaderAuthentication();
		return this.client
			.put(url, data)
			.then(handlerSuccess)
			.catch(handlerError);
	}
	delete(url) {
		this.setHeaderAuthentication();
		return this.client
			.delete(url)
			.then(handlerSuccess)
			.catch(handlerError);
	}
	/**
	 * @param {Boolean} isToken
	 */
	setHeaderAuthentication() {
		const tokenCookie = getToken();
		if (tokenCookie) {
			this.client.defaults.headers["Authorization"] = `Bearer ${tokenCookie}`;
		}
	}
}
export default new HttpService();
