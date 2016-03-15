export default class API {
  constructor() {

  }
  http(obj,params){
    return obj.$http(params)
  }
  get(params){
    var getParams = {
      ...params,
      method: 'GET'
    }
    return this.http(getParams);
  }
  post(){
    var getParams = {
      ...params,
      method: 'POST'
    }
    return this.http(getParams);
  }
}
