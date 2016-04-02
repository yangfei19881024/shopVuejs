import $ from 'zepto'

export default {
  params:['canscroll'],
  bind () {
    
    let el = $(this.el),
        clientHeight = '',
        scrollHeight = '',
        documentHeight = '';

    $(el).on('scroll',()=>{

      if( typeof this.params.canscroll !='undefined' && !this.params.canscroll ){
        return;
      }
      console.log(this.params.canscroll);
      clientHeight = el.height();
      scrollHeight = el.scrollTop();
      documentHeight = el[0].scrollHeight;

      if( clientHeight + scrollHeight > documentHeight-10 ){
        // console.log(`clientHeight:${clientHeight},scrollHeight:${scrollHeight},documentHeight:${documentHeight}`);

        this.vm[this.expression]();

      }
    })

  }
}
