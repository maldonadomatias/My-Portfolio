if ( document.querySelector( '.animation' ) ) {
    forceAnimation( splitText( document.querySelector( '.animation' ) ) );
  }
  
  function splitText( container = false ) {
    if ( container != false ) {
      var string = container.innerHTML;
      var textarr = string.split('');
      var stop = textarr.length;
      var buffer = '';
      for( var i = 0; i < stop; i++ ) {
        buffer += '<span class="anim-' + i + '">' + textarr[i] + '</span>';
      }
      container.innerHTML = buffer;
      return stop;
    }
  }
  
  function forceAnimation( stop = false ) {
    if ( stop != false ) {
      for( var i = 0; i < stop; i++ ) {
        var letter = document.querySelector( '.anim-' + i );
        letter.addEventListener( 'mouseover', function() {
          this.classList.add( 'animate' );
        });
        letter.addEventListener( 'animationend', function() {
          this.classList.remove( 'animate' );
        });
      }
    }
  }