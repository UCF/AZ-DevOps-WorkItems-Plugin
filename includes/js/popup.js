/* first popup */
var pop = {
  // (A) ATTACH POPUP HTML
  pWrap : null,  // html popup wrapper
  pTitle : null, // html popup title
  pText : null,  // html popup text
  init : () => {
    // (A1) POPUP WRAPPER
    pop.pWrap = document.createElement("div");
    pop.pWrap.id = "popwrap";
    document.body.appendChild(pop.pWrap);

    // (A2) POPUP INNERHTML - only return if header is clicked
    pop.pWrap.innerHTML =
    `<div id="popbox" >
      <h1 id="poptitle" onclick="pop.close()" ></h1>
	  <p id="poptext"></p>
      </div>`;
    pop.pTitle = document.getElementById("poptitle");
	pop.pTitle.style.cursor = "default";
    pop.pText = document.getElementById("poptext");
	pop.pText.style.cursor = "pointer";
  },

  // (B) OPEN POPUP - change
  open : (title, text) => {
	var message_show = "Text_" + text;
	var title_show = "Goal_" + text;
	var mtext = window[message_show];
	var mtitle = window[title_show];

	pop.pTitle.innerHTML = '<table style="width:100%"><tr><td>' + mtitle + '</td><td style="text-align:right">&#10006;</td></tr></table>';
    pop.pText.innerHTML = mtext;
    pop.pWrap.classList.add("open");
  },

  // (C) CLOSE POPUP
  close : () => { pop.pWrap.classList.remove("open"); }
};
	
window.addEventListener("DOMContentLoaded", pop.init);

/* This is used for the second popup */
var detail = {
	/* initialize variables */
	detail_msg: null, 
	dtext: null,
	dtitle: null, 
	wrapper: null,
	window_height: null,
	
	init : () => {
		detail.wrapper = document.createElement("div");
		detail.wrapper.id = "detailwrap";
		document.body.appendChild(detail.wrapper);
		
		detail.wrapper.innerHTML =
			`<div id="detailbox" onclick="detail.close()">
				<H1 id="detailtitle"></H1>
				<p id="detailtext"></p>
			</div>`;	
		detail.dtext = document.getElementById("detailtext");
		detail.dtext.style.cursor = "default";
		detail.dtitle = document.getElementById("detailtitle");
		detail.dtitle.style.cursor = "default";
	},
	 
	open : (x, w_z) => {

		detail_msg = "Detail_" + x + "_" + w_z;
		detailtext = window[detail_msg];
		
		detail_msgtitle = "DetailTitle_" + x + "_" + w_z;
		detailtitle = window[detail_msgtitle];
		
		window_height = window.innerHeight;
		detail.dtext.style.height = window_height * .8 + "px"; /* "400px"; */
		detail.dtitle.innerHTML = '<table style="width:100%"><tr><td>' + detailtitle + '</td><td style="text-align:right">&#10006;</td></tr></table>'; 
		detail.dtext.innerHTML = detailtext;
		detail.wrapper.classList.add("open");
		
	},
	close: () => { detail.wrapper.classList.remove("open"); }
};
window.addEventListener("DOMContentLoaded", detail.init);
