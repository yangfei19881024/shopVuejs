import $ from 'zepto'

export default {
  params: ['distance'],
  bind () {

    let el = $(this.el)

    // el.addClass('content')
    // el.addClass('pull-to-refresh-content')
    // el.attr('data-ptr-distance', this.params.distance)
    // $(el).on('infinite', function (e) {
    //   // this.vm[this.params.action]()
    //   alert('aaaaa')
    // }.bind(this));

    // $(el).on('scroll',function(){
    //   if( $('.goodslist-container').scrollTop() + $(window).height() > $('.goodslist-container li').height()*$('.goodslist-container li').length + $('.conditon_selection').height() + $('header').height() ){
    //     alert('ok')
    //   }
    // })


  }
}
