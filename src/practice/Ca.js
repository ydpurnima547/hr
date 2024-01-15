import React from 'react'
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui"
import { useEffect } from 'react';
function Ca(){
  useEffect(()=>{
    $.fn.hoverBackgroundColor = function (color) {

      // Iterate over each element in the set
      this.each(function () {
        var $this = $(this);
      
        // Set the original background color
        var originalColor = $this.css('background-color');
      
        // Change the background color of
        // the element on hover
        $this.hover(function () {
          $(this).css('background-color', color);
        }, function () {
          $(this).css('background-color', originalColor);
        });
      });
      
      // Return the jQuery object
      // to allow for chaining
      return this;
      };
      
      // Use the plugin on a set of elements
      $(function () {
      $('.my-elements .element')
        .hoverBackgroundColor('red');
      })
  },[])
  return (
    <>
   
   <div class="my-elements">
        <div class="element">Element 1</div>
        <div class="element">Element 2</div>
        <div class="element">Element 3</div>
    </div>
    </>
  )
}
export default Ca
/* <div class="irotate mb-4 mt-4">
    <div style={{fontSize:"50px"}} class="thisis font-weight-bold pl-5 pr-2">
    see</div>
   <div class ="thisis slidem">
        <div class="text-primary">hhjj1</div>
        <div class="text-success">hhjj2</div>
        <div class="text-info">hhjj3</div>
        <div class="text-warning">hhjj4</div>
        </div>
    </div>*/