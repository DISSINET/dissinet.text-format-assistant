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

Paragraph with indent
<p className=" indent">Ut sed venenatis lacus. Vivamus convallis, velit ut tincidunt malesuada, metus massa pretium erat, vitae pulvinar dui nunc ac nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed in pulvinar risus, vitae iaculis purus. Cras ac nulla vel enim finibus ultrices a quis tellus. Quisque dapibus turpis odio, vel ornare mauris rhoncus eu. Vestibulum pharetra ex in libero ultrices dapibus. Praesent posuere, ex et eleifend porta, mi ex interdum odio, in dictum nunc augue quis tellus. </p>

Paragraph without indent
<p>Praesent tempor posuere euismod. Aenean vehicula sem vitae malesuada aliquet. Aliquam eros lectus, pretium a metus sit amet, fringilla scelerisque risus. Integer suscipit arcu eu velit tempor pulvinar. Aliquam viverra libero sit amet dolor blandit convallis. Aliquam sit amet dui elit. Mauris sit amet luctus sem. </p>

List without styling
<ul className="list">
    <li>point 1</li>
    <li>point 1</li>
    <li>point 1</li>
</ul>

<div className="line"></div>

List with bullets
<ul className="list bullets">
    <li>point 1</li>
    <li>point 1</li>
    <li>point 1</li>
</ul>

<div className="line"></div>

Icon
<i class="fa fa-car"></i>

<div className="line"></div>

Button
<button className="button">BUTTON LABEL</button> 

<div className="line"></div>

Button with icon
<button className="button"><i class="fa fa-car"></i>BUTTON LABEL</button> 

<div className="line"></div>

Heading
<h1 className="heading">HEADING LABEL</h1>

<div className="line"></div>

SubHeading
<h1 className="subheading">SUBHEADING LABEL</h1>

<div className="line"></div>

Link
<a href="LINK" className="link">LINK CONTENT</a>


</div>



`
};

export default config;
