$(".scroll-To").on("click", function (e) {
	if (this.hash !== "") {
		e.preventDefault();

		const hash = this.hash;
		console.log(hash)
		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top
			},
			1000
		);
	}
});
