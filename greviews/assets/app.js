$(document).ready(function(){
    console.log("jQuery is working");
    setTimeout(() => {
        getjosndata ();
    }, 3000);




/**FETCH DATA WITH JSON */
function getjosndata (){
    fetch("assets/restmaru.json")
    .then(res=>res.json())
    .then(res=>{
    let template = '';
    let response = res[2].data[1];
    
        template += `<a id="name" href="${response['location_link']}" target="_blank">${response['name']}</a>
        <p>Calle Ancash, a Espaldas de la Posta de San Genero, Chorrillos 15064</p>
        <button class="opinion-btn">
            <a href="https://www.google.com/search?q=restaurant%20maru&rlz=1C1ALOY_esVE983VE983&oq=rest&aqs=chrome.0.69i59j69i57j35i39j0i433i512l2j69i60j69i61l2.2314j0j9&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9&tbm=lcl&sxsrf=APq-WBtvtYtkBdZRvfIoxevsz8B_7WAZAg:1647295320564&rflfq=1&num=10&rldimm=3565762077800170470&lqi=Cg9yZXN0YXVyYW50IG1hcnVIv4T6u5GwgIAIWhkQABABGAAYASIPcmVzdGF1cmFudCBtYXJ1kgEKcmVzdGF1cmFudKoBFxABKhMiD3Jlc3RhdXJhbnQgbWFydSgO&phdesc=YB-7FKyGXhw&ved=2ahUKEwjClrCjzcb2AhXHF7kGHZfYCdoQvS56BAgDEEg&rlst=f#rlfi=hd:;si:3565762077800170470,l,Cg9yZXN0YXVyYW50IG1hcnVIv4T6u5GwgIAIWhkQABABGAAYASIPcmVzdGF1cmFudCBtYXJ1kgEKcmVzdGF1cmFudKoBFxABKhMiD3Jlc3RhdXJhbnQgbWFydSgO,y,YB-7FKyGXhw;mv:[[50.240709100000004,-53.7228463],[-38.165074499999996,-126.5240938]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9" target="_blank" class="opinion-txt"><i class="bi bi-pencil" style="margin-right: 5px;"></i>Escribir Una Opinión</a>
          </button>
        <div class="main-stars">
          <div class="average">${response['rating']}</div>
          <div class="stars">
              <div>
                  <img src="assets/img/greviews-bg.png" class="starbg">
              </div>
              <div class="container-star" style="width: calc(${response['rating']}/5*100%);">
              <img src="assets/img/greviews.png" class="star-top">
              </div>
              
        </div>
          <a href="https://www.google.com.pe/maps/place/Restaurante+Maru/@-12.1939249,-77.0218786,18z/data=!4m5!3m4!1s0x9105b78acb746fd5:0x317c21b7b0d683e6!8m2!3d-12.1935646!4d-77.0216972?hl=es-419"
          target="_blank" class="review-count">number of reviews</a>
      </div>`
      
    $('#main').html(template);


    $counter =0;
    let template2='';
    $todaystamp= Math.floor(Date.now()/1000);
    $todayhours =Math.floor($todaystamp/3600);
    $weeks=[];

    let response2= res[2].data
    for(x in response2){
        
    
    $counter+=1;

    
    $olddayhours =Math.floor(response2[x].review_timestamp/3600);
    $hourslapsed= Math.floor($todayhours - $olddayhours);
    

    if ($hourslapsed <=1) {
        $weeks= $('.review-date').text('Hace pocos minutos')
    }
    if ($hourslapsed ==1) {
        $weeks= $('.review-date').text('Hace '+$hourslapsed+' hora')
    }
    if ($hourslapsed >=2 && $hourslapsed <=23) {
        $weeks= $('.review-date').text('Hace '+$hourslapsed+' horas')
    }
    if ($hourslapsed >=24 && $hourslapsed <=47) {
        $newtime =Math.floor($hourslapsed/24);
        $weeks= $('.review-date').text('Hace '+$newtime+' dia')
    }
    if ($hourslapsed >=48 && $hourslapsed <=167  ) {
        $newtime =Math.floor($hourslapsed/24);
        $weeks= $('.review-date').text('Hace '+$newtime+' dias')
    }
    if ($hourslapsed >=168 && $hourslapsed <=335) {
        $newtime =Math.floor($hourslapsed/168);
        $weeks= $('.review-date').text('Hace '+$newtime+' semana')
    }
    if ($hourslapsed >=336 && $hourslapsed <=729) {
        $newtime =Math.floor($hourslapsed/168);
        $weeks= $('.review-date').text('Hace '+$newtime+' semanas')
    }
    if ($hourslapsed >=730 && $hourslapsed <=1459) {
        $newtime =Math.floor($hourslapsed/730);
        $weeks= $('.review-date').text('Hace '+$newtime+' mes')
    }
    if ($hourslapsed >=1460 && $hourslapsed <=8759) {
        $newtime =Math.floor($hourslapsed/730);
        $weeks= $('.review-date').text('Hace '+$newtime+' meses')
    }
    if ($hourslapsed >=8760 && $hourslapsed <=17519) {
        $newtime =Math.floor($hourslapsed/8760);
        $weeks= $('.review-date').text('Hace '+$newtime+' año')
    }
    if ($hourslapsed >=17520) {
        $newtime =Math.floor($hourslapsed/8760);
        $weeks= $('.review-date').text('Hace '+$newtime+' años')
    }
    template2+=`<div class="comment">
        <img class="profile-photo" src="${response2[x]['author_image']}">
                <div class="comment-content">
                    <a href="${response2[x]['author_link']}" target="_blank" class="profile-name">${response2[x]['author_title']}</a>
                    <p class="review-date">${$weeks[0].textContent}</p>
                    <div class="stars-comment">
                        <div>
                            <img src="assets/img/greviews-bg.png" class="star-comment-starbg">
                        </div>
                        <div class="container-star-comment" style="width: calc(${response2[x]['review_rating']}/5*100%);">
                        <img src="assets/img/greviews.png" class="star-top-comments">
                        </div>
                    </div>
                    <div class="message"><p>${response2[x]['review_text']}</p></div>
                </div>
        </div>`}
$('.reviews2').html(template2);
$('.review-count').text('305 opiniones');
$('#preloader').remove();    
    })
    
}


});