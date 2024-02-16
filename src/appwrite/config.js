import conf from '../conf/conf';
import {Client, Databases, Storage, Query, ID} from 'appwrite';

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
}

const service = new Service();
export default service;
