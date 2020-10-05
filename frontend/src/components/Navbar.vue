<template>
    <section id="home" class="video-hero" style="height: 100px; background-image: url(images/cover_img_1.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;" data-section="home">
		<div class="overlay"></div>
			<div class="display-t display-t2 text-center">
				<div class="display-tc display-tc2">
					<div class="container">
						<div class="col-md-12 col-md-offset-0">
							
									<h2>{{title}}</h2>
								<p class="breadcrumbs"><span><a href="index.html">Home</a></span> <span>Services</span></p>
							
						</div>
					</div>
				</div>
			</div>
		</section>
</template>
<script>
export default {
    props: {
        title : String
    }
}
</script>
