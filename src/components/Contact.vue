

<template>
  <!--==========================
        Contact Section
      ============================-->
  <section id="contact" class="wow fadeInUp">
    <div class="container">
      <div class="row">
        <div class="section-header">
          <h2>Contact Me</h2>
        </div>
      </div>

      <div class="row contact-info">

        <div class="col-md-4">
          <div class="contact-address">
            <i class="ion-ios-location-outline"></i>
            <h3>Address</h3>
            <address><p>
              6/24, Bauniabadh, Pallabi,
              <br>Mirpur-11, Dhaka-1216.
              <br>
            </p>
            </address>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-phone">
            <i class="ion-ios-telephone-outline"></i>
            <h3>Phone Number</h3>
            <p><a href="tel:+8801866292003">+8801866292003</a></p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-email">
            <i class="ion-ios-email-outline"></i>
            <h3>Email</h3>
            <p><a href="mailto:shamimhcp@gmail.com">shamimhcp@gmail.com</a></p>
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=s.a.p%20enterprise&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <form action="" method="post" role="form" class="contactForm">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group col-md-6">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validation"></div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </section><!-- #contact -->
</template>

<script>

</script>

<style>

  .mapouter{
    text-align:right;
    height:400px;
    width:100%;
  }
  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    border: 1px solid grey;
    height:400px;width:100%;
  }

</style>
