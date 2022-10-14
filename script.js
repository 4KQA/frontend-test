// Populate dropdown menu 
let i = 3;
for (item in menus) {
	$(".navigationBarMenu ul").append(`<li tabindex="${i}">${item}</li>`)
	i++;
}

// Dropdown menu hover logic
$(".navigationBarMenu ul li").bind("mouseover focus", function() {
	$(".navigationBarSubMenu ul, .navigationBarSubSubMenu ul").empty();
	$(".navigationBarSubSubMenu").css("display", "none");

	for (subitem in menus[$(this).text()]) {
		$(".navigationBarSubMenu").css("display", "block");
		$(".navigationBarSubMenu ul").append(`<li attr-parent="${$(this).text()}" tabindex="${i}">${subitem}</li>`)
		i++;
	}

	$(".navigationBarSubMenu ul li").bind("mouseover focus", function() {
		$(".navigationBarSubSubMenu ul").empty();

		for (subsubitem in menus[$(this).attr("attr-parent")][$(this).text()]) {
			$(".navigationBarSubSubMenu").css("display", "block");
			$(".navigationBarSubSubMenu ul").append(`<li><a href="${menus[$(this).attr("attr-parent")][$(this).text()][subsubitem]}" attr-parent="${$(this).text()}" tabindex="${i}">${subsubitem}</li>`);
			i++;
		}
	});
});

// Close dropdown on hover out
$(".navigationBarMenusContainer").bind("mouseout focus", function() {
	if (!$('.navigationBarSubMenu').is(":focus, :hover") && !$('.navigationBarSubSubMenu').is(":focus, :hover")) {
		$(".navigationBarSubMenu, .navigationBarSubSubMenu").css("display", "none");
	}
});

// Tab functionality
$(".navigationBarMenusContainer").on("keypress",".navigationBarMenus ul li", function(event) {
	if (event.keyCode == 13) {
	  	$(`li[attr-parent='${$(this).text()}'], a[attr-parent='${$(this).text()}']`).first().focus()
	}
});

// Video modal
$(".featuredVideoFlexbox img, .featuredVideoButton, .videoPreview").click(function() {
	$(".videoModal").css("display", "flex");
	$(".videoModal video source").attr("src", videos[$(this).attr("attr-videoid")]);
	$(".videoModal video")[0].load();
});

$(".videoModalExitBackground, .videoModalExitButton").click(function() {
	$(".videoModal").css("display", "none");
	$(".videoModal video")[0].pause();
	$(".videoModal video")[0].currentTime = 0;
});