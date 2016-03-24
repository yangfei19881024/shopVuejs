import $ from 'zepto'

export default {
  params: ['distance'],
  bind () {
    // console.log('pull-to-refresh-content')
    let el = $(this.el)
    el.addClass('content pull-to-refresh-content').attr('data-ptr-distance', this.params.distance)
    $(el).on('refresh', (e) => {
      this.vm[this.expression]()
    })
  },
  unbind () {
    $.destroyPullToRefresh($(this.el))
  }
}
