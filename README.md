# jQuery Suggest

Suggest is a jQuery plugin designed to provide auto completion for forms.

## Installation

To install copy the *images*, *javascripts*, and *stylesheets* directories into your project and add the following snippet to the header:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js" type="text/javascript"></script>
    <script src="javascripts/jquery.suggest.js" type="text/javascript"></script>
    <link href="stylesheets/style.css" rel="stylesheet" type="text/css" />
  
## Examples

    <input type="text" class="category" />
    
    $('.category').suggest(['Video','Music','Image'], { maximum: 2, delay: 200 });

# Copyright

Copyright (c) 2010 - 2011 Kevin Sylvestre. See LICENSE for details.
