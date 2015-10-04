class SidebarDirective extends Nodulator.Directive 'sidebar'

  _Init: ->
    $('.sidelist > li a.section').each ->
      $(this).parent().find('ul').toggle();
      this.innerHTML = ' + ' + this.innerHTML ;

    $('.sidelist > li a.section').click ->
      $(this).parent().find('ul').toggle()
      state = this.innerHTML[1]
      if state is '+'
        this.innerHTML = ' -' + this.innerHTML[2..];
      else
        this.innerHTML = ' +' + this.innerHTML[2..];

SidebarDirective.Init()
