import $ from 'zepto'

export default {

  bind () {

    let el = $(this.el);

    el.on('tap','li',(e)=>{
        // alert( $(this).attr('data-index') )
        // alert('111')
        console.log($(this));
        // console.log('-------');
        // console.log($(el));
    })

  }
}
