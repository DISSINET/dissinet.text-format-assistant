var config = {
  defaultInputHTML: `
  <div>
Empty line
<div className="line"></div>

Solid line
<div className="line solid"></div>

Dotted line
<div className="line dotted"></div>

<span className="text-italic">italic text</span>

<div className="line"></div>

<span className="text-bold">bold text</span>

<div className="line"></div>

<span className="text-strikethrough">Strikethroughed text</span>

<div className="line"></div>

<span className="text-underline">Underlined text</span>

<div className="line"></div>

<span className="text-primary">Primary text</span>
<span className="text-secondary">Secondary text</span>
<span className="text-success">Success text</span>
<span className="text-danger">Danger text</span>

<div className="line"></div>

<p>
PARAGRAPH Praesent tempor posuere euismod. Aenean vehicula sem vitae malesuada aliquet. Aliquam eros lectus, pretium a metus sit amet, fringilla scelerisque risus. Integer suscipit arcu eu velit tempor pulvinar. Aliquam viverra libero sit amet dolor blandit convallis. Aliquam sit amet dui elit. Mauris sit amet luctus sem. </p>

<p className=" indent">
PARAGRAPH WITH INDENT Ut sed venenatis lacus. Vivamus convallis, velit ut tincidunt malesuada, metus massa pretium erat, vitae pulvinar dui nunc ac nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed in pulvinar risus, vitae iaculis purus. Cras ac nulla vel enim finibus ultrices a quis tellus. Quisque dapibus turpis odio, vel ornare mauris rhoncus eu. Vestibulum pharetra ex in libero ultrices dapibus. Praesent posuere, ex et eleifend porta, mi ex interdum odio, in dictum nunc augue quis tellus. </p>


List without styling
<ul>
    <li>point 1</li>
    <li>point 1</li>
    <li>point 1</li>
</ul>

<div className="line"></div>

List with bullets
<ul className="bullets">
    <li>point 1</li>
    <li>point 1</li>
    <li>point 1</li>
</ul>

<div className="line"></div>

Icon
<i class="icon icon-beer"></i>

<div className="line"></div>

<button className="button primary">Primary Button</button> 
<button className="button secondary">Primary Button</button> 
<button className="button danger">Primary Button</button> 
<button className="button success">Primary Button</button> 

<div className="line"></div>

<button className="button icon-after">Button with icon<i class="icon icon-beer"></i></button> 
<button className="button icon-before"><i class="icon icon-beer"></i>Button with icon</button> 

<div className="line"></div>

<h1 className="heading">Heading</h1>

<h1 className="subheading">Subheading</h1>

<div className="line"></div>

<a href="dissinet" className="link" target="_blank">Link text</a>


</div>`
};

export default config;
