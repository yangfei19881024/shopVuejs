import $ from 'zepto'

export default {
  params:['disablefixed','scrollheight'],
  bind () {

    let el = $(this.el);


    $(el).on('scroll',()=>{
      console.log("----");
      console.log(this.params.scrollheight);
        if( $(el).scrollTop() > this.params.scrollheight ){
          this.vm[this.expression]();
        }else{
          this.vm[this.params.disablefixed]();
        }
    })

  }
}
