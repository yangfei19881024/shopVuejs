/*
*---------------------------------
* 工具处理类函数
*---------------------------------
*/
export let decodeURI = (param) => {
  return decodeURIComponent(param);
}

export let trimThumb = (str) => {
  return str.replace(/_thumb/,'');
}
