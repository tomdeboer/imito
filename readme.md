#Imito: *A no-nonsens presentation framework built for developers.*
 
---

### Goals
- Imito should load and respond very fast.
- Imito should be as lightweight as possible.
- Imito should be as extensible as possible.
- Imito should not make decisions for the developer.
- Imito should provide some basic styles and typography.
- Imito should not get in your way!
- Imito should leave the rest up to you =)

### Usage
Here is how to use Imito. The rest is up to you.

**Basic slide layout:**

    <div class="slide yellow">
    	<h1>Slide header</h1>
    	<p>I'm going to change the world !</p>
    	<ul>
    		<li>First i'm going to do this</li>
    		<li>Then I'm going to do this</li>
		</ul>
	</div>


**Provided colours and styles:**

There are a number of background classes available: `blue`, `red`, `yellow`, `brown`, `orange`, `pink` and `black`. The example above uses `yellow`.

### Magic
Magic is a dirty word in developer land. You simply want to know what's going on. That's why Imito does only this:

- Imito will go from slide to slide with the arrow keys, spacebar and backspace. It does this using CSS3's transform property.
- Ehm.. Yeah, that's pretty much it.

### Todo

Some things still need to be done.

- API providing functions such as `next`, `previous` and `focus`, for navigating your presentation.
- Events like `focus` and `step` so you know what's happening.
- Suggestions?

### Contact
If you're interesting in using or extending Imito, or you just want to get in touch, drop me an email at <tom@tomdeboer.nl>...

