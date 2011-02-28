# Introduction

This is a JQuery plugin for annotating links in a web app that is incomplete or undergoing development.

It adds lightbox style popups for links with the class annotation.

 
# Usage

##HTML
    <ul>
        <li>
            <a class="annotation" href="http://bbc.co.uk" title="This shows a title and a link">
                bbc.co.uk - just a link
            </a>
        </li>
        <li>
            <a class="annotation" href="http://wordpress.com" title="This shows a title, a link and an extra annotation">
                <span class="annotate-description">This is a  description of this link</span>
                wordpress.com - plus description
            </a>
        </li>
        <li>
            <a class="annotation" href="#" title="This shows a title and description with no link">
                <span class="annotate-description">Use this when you a pointing at a placeholder</span>
                notbeenbuiltyet.org - no link
            </a>
        </li>
    </ul>
    
    
##Javascript

    jQuery(document).ready(function() {
        $('a.annotation').each(function(index) {
            $(this).linkAnnotator();
        });
    });